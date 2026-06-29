import { map } from 'lodash-es'
import { atom, getDefaultStore, useAtomValue } from 'jotai'
import { getAllCompareRegTraits } from '../helpers/compareRegisterUtil'
import { isTruthy, simulationState } from '../helpers/helpers'
import { timerState } from '../state/state'
import {
  suggestedAssignmentState,
  suggestedVariableAssignmentState
} from './state'
import { IconButton } from 'rsuite'
import copy from 'copy-to-clipboard'
import React, { useEffect, useState } from 'preact/compat'
import { arduinoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp'
import Fraction from 'fraction.js'
import { IconCheck, IconCopy } from '../Icons'

SyntaxHighlighter.registerLanguage('cpp', cpp)

const omitRegisterZeros = true

function formatTime(s: Fraction) {
  if (s.valueOf() >= 1) return `${s.round(5)} s`
  const ms = s.mul(1000)
  if (ms.valueOf() >= 1) return `${ms.round(5)} ms`
  const us = ms.mul(1000)
  if (us.valueOf() >= 1) return `${us.round(5)} us`
  const ns = us.mul(1000)
  return `${ns.round(5)} ns`
}
function formatFrequency(hz: Fraction) {
  if (hz.valueOf() < 1000) return `${hz.round(5)} Hz`
  const khz = hz.div(1000)
  if (khz.valueOf() < 1000) return `${khz.round(5)} kHz`
  const mhz = khz.div(1000)
  return `${mhz.round(5)} MHz`
}
function formatPeriod(freq: Fraction) {
  return `${freq.equals(0) ? 0 : formatTime(freq.inverse())}`
}

const codeCommentsState = atom((get) => {
  const { freq, OCnXsDuty } = get(simulationState).simulation
  const outputFrequency = formatFrequency(freq)
  const outputPeriod = formatPeriod(freq)
  const values = get(suggestedAssignmentState)
  const { timerMode } = values
  const IOCR_states = getAllCompareRegTraits(values)
  const outputs = IOCR_states.flatMap(
    ({ outputPin, outputMode, isActiveOutput }, i) =>
      (isActiveOutput && [
        `${outputPin}: ${(OCnXsDuty[i] * 100).toFixed(2)}%, ${outputMode}`
      ]) ||
      []
  )
  outputs.unshift(outputs.length ? '' : 'none')
  return `\
/**
  * URL: ${window.location.href}
  * Mode     : ${timerMode}
  * Period   : ${outputPeriod}
  * Frequency: ${outputFrequency}
  * Outputs  : ${outputs.join('\n  *  - ')}
  */`
})

const allCodeState = atom((get) => {
  // ch32fun (WCH RISC-V) uses a bare-metal main() scaffold instead of Arduino.
  if (get(suggestedAssignmentState).family === 'ch32') return get(ch32CodeState)
  return `\
${get(codeCommentsState)}
void setup(){
  noInterrupts();
${get(timerConfigCodeState)}
${get(compareRegsState)}
  interrupts();
}
${get(interruptsCodeState)}`
})

// Surrounding setup for CH32: peripheral clocks, GPIO alternate-function pins
// for each active channel, optional AFIO pin remap, the SWEVGR update event to
// latch PSC/ATRLR, optional MOE (advanced timer) and NVIC, and CEN last.
const ch32CodeState = atom((get) => {
  const values = get(suggestedAssignmentState)
  const timerNr = values.timerNr
  const apb = timerNr === '1' ? 'APB2' : 'APB1' // TIM1 (advanced) is on APB2
  const isAdvanced = timerNr === '1'

  // Every pin needing alternate-function setup: the main pin of each active
  // channel, plus the complementary (CHxN) pin when that channel's complementary
  // output is enabled (advanced timer only).
  const pinSet = new Set<string>()
  const defs = [
    {
      mode: values.CompareOutputModeA,
      pin: values.OCnA_OutputPort,
      comp: values.ComplementaryA,
      npin: values.OCnA_NOutputPort
    },
    {
      mode: values.CompareOutputModeB,
      pin: values.OCnB_OutputPort,
      comp: values.ComplementaryB,
      npin: values.OCnB_NOutputPort
    },
    {
      mode: values.CompareOutputModeC,
      pin: values.OCnC_OutputPort,
      comp: values.ComplementaryC,
      npin: values.OCnC_NOutputPort
    },
    { mode: values.CompareOutputModeD, pin: values.OCnD_OutputPort }
  ]
  for (const d of defs) {
    if (!d.pin || !d.mode || d.mode === 'disconnect') continue
    pinSet.add(d.pin)
    if (d.comp === 'on' && d.npin) pinSet.add(d.npin)
  }
  const pins = [...pinSet]

  const remap = values.PCFR1 && values.PCFR1 !== 'none' ? values.PCFR1 : ''
  const anyIrq = ['interruptA', 'interruptB', 'interruptC', 'interruptD'].some(
    (k) => values[k] === 'on'
  )

  // peripheral clock enables (deduped), then optional remap, then GPIO pins
  const clocks = new Set<string>()
  clocks.add(`  RCC->${apb}PCENR |= RCC_${apb}Periph_TIM${timerNr};`)
  for (const pin of pins)
    clocks.add(`  RCC->APB2PCENR |= RCC_APB2Periph_GPIO${pin[0]};`)
  if (remap) clocks.add(`  RCC->APB2PCENR |= RCC_APB2Periph_AFIO;`)

  const gpio = pins.map((pin) => {
    const port = pin[0]
    const n = parseInt(pin.slice(1))
    // pins 0-7 live in CFGLR, pins 8-15 in CFGHR (4 config bits each)
    const reg = n < 8 ? 'CFGLR' : 'CFGHR'
    const sh = `(4 * ${n % 8})`
    return (
      `  GPIO${port}->${reg} &= ~(0xf << ${sh});\n` +
      `  GPIO${port}->${reg} |= GPIO_CFGLR_OUT_50Mhz_AF_PP << ${sh};`
    )
  })

  const setup = [
    ...clocks,
    remap ? `  AFIO->PCFR1 |= ${remap};` : '',
    ...gpio
  ]
    .filter(isTruthy)
    .join('\n')

  const finalize = [
    `  TIM${timerNr}->SWEVGR |= TIM_UG;`,
    isAdvanced ? `  TIM${timerNr}->BDTR |= TIM_MOE;` : '',
    anyIrq
      ? `  NVIC_EnableIRQ(${values.nvicIRQ || `TIM${timerNr}_IRQn`});`
      : '',
    `  TIM${timerNr}->CTLR1 |= TIM_CEN;`
  ]
    .filter(isTruthy)
    .join('\n')

  return `\
${get(codeCommentsState)}
#include "ch32fun.h"

int main() {
  SystemInit();
${setup}
${get(timerConfigCodeState)}
${finalize}
  while (1);
}
${get(interruptsCodeState)}`
})

const customStyle = { padding: 0, margin: 0 }
export default function Code() {
  const code = useAtomValue(allCodeState)
  return (
    <>
      <SyntaxHighlighter
        language="cpp"
        style={arduinoLight}
        customStyle={customStyle}
      >
        {code}
      </SyntaxHighlighter>
    </>
  )
}
const timerConfigCodeState = atom((get) => {
  const omitZeroValues = true
  const { registers } = get(timerState)
  const code = map(registers, (variables, regName) => {
    const assignments = variables
      .map((cell) => {
        // Two cell encodings:
        //  - AVR: a bare bit-macro name the compiler shifts ("COM0A1") -> "1 << COM0A1"
        //  - CH32: "VAR=MACRO" using ch32fun's named bit macros, where
        //      "VAR=TIM_ARPE"  -> flag, emits TIM_ARPE when set
        //      "VAR=TIM_OC1M_" -> multi-bit field, emits TIM_OC1M_<i> for each set bit
        //      "VAR="          -> plain value register (PSC/ATRLR/CHnCVR/DTG), emits the number
        const eq = cell.indexOf('=')
        if (eq !== -1) {
          const variable = cell.slice(0, eq)
          const macro = cell.slice(eq + 1)
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const value = get(suggestedVariableAssignmentState(variable)) || '0'
          if (omitZeroValues && value === '0') return ''
          if (macro === '') return `${value}` // plain value register
          if (!macro.endsWith('_')) return macro // single-bit flag
          const v = parseInt(value) // multi-bit field -> OR the set bits' macros
          const parts: string[] = []
          for (let i = 0; v >> i; i++) if ((v >> i) & 1) parts.push(`${macro}${i}`)
          return parts.join(' | ')
        }
        const variable = cell
        const value =
          // eslint-disable-next-line react-hooks/rules-of-hooks
          get(suggestedVariableAssignmentState(variable)) || '0'
        if (omitZeroValues && value === '0') return ''
        // DTR0L/H are special because they are just 4 bytes of a single register
        if (variable === 'DTR0L') return `${value}`
        if (variable === 'DTR0H') return `${value} << 4`
        return `${value} << ${variable}`
      })
      .filter(isTruthy)
    const assignmentsStr = assignments.length
      ? `\n    ${assignments.join(' |\n    ')}`
      : '0'
    if (omitRegisterZeros && assignmentsStr === '0') return ''
    // register names like PMX0_0 and PMX0_1 are actually all the same register,
    // but they have to be set in two steps
    return `  ${regName.split('_')[0]} = ${assignmentsStr};`
  })
    .flat()
    .filter(isTruthy)
  let str = code.join('\n')
  return str
})

const compareRegsState = atom((get) => {
  const suggestedConfig = get(suggestedAssignmentState)
  // CH32 value registers (CHnCVR/ATRLR/PSC) are emitted by the register grid,
  // not the AVR-style compare-register path.
  if (suggestedConfig.family === 'ch32') return ''

  const code = getAllCompareRegTraits(suggestedConfig)
    .filter(({ isUsed }) => isUsed)
    // DTR0L/H are special because they are just 4 bytes of a single register
    .filter(({ name }) => !['DTR0L', 'DTR0H'].includes(name))
    .map(({ code }) => code)
  let str = code.join('\n  ')
  if (str.length) str = '  ' + str
  return str
})
const interruptsCodeState = atom((get) => {
  const interruptVariables = [
    'interruptVectorCodeA',
    'interruptVectorCodeB',
    'interruptVectorCodeC',
    'interruptVectorCodeD',
    'interruptVectorCodeOVF',
    'interruptVectorCaptureCode'
  ]
  const interruptCommonSignature = get(
    suggestedVariableAssignmentState('InterruptCommonSignature')
  )
  let code = interruptVariables
    .map(
      (variable) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        get(suggestedVariableAssignmentState(variable)) || '//nocode'
    )
    .filter((value) => value !== '//nocode')

  if (code.length && interruptCommonSignature) {
    code = [
      interruptCommonSignature + ' {',
      ...code.map((code) => '  ' + code.split('\n').join('\n  ')),
      '}'
    ]
  }
  let str = code.join('\n')
  if (str.length) str += '\n'
  return str
})

export const CopyCodeToClipboard = React.memo(() => {
  const [clicked, setClicked] = useState(false)
  const copyCode = () => {
    const allCode = getDefaultStore().get(allCodeState)
    copy(allCode)
    setClicked(true)
    console.log(allCode)
  }
  useEffect(() => {
    setTimeout(() => setClicked(false), 600)
  }, [clicked])
  return (
    <IconButton
      style={{ position: 'absolute', top: 2, right: 2 }}
      icon={clicked ? <IconCheck /> : <IconCopy />}
      circle
      size="sm"
      color={clicked ? 'green' : undefined}
      onClick={copyCode}
    />
  )
})
