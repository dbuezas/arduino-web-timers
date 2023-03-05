import map from 'lodash/map'
import { getAllCompareRegTraits } from '../helpers/compareRegisterUtil'
import {
  isTruthy,
  outputFrequencyState,
  outputPeriodState
} from '../helpers/helpers'
import { timerState } from '../state/state'
import {
  fromVarToSuggestedValueInefficient,
  fromVarToSuggestedValue
} from './state'
import { Button } from 'rsuite'
import copy from 'copy-to-clipboard'
import React, { useEffect, useState } from 'preact/compat'
import { arduinoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp'
import { computed, signal } from '@preact/signals'
import debounce from 'lodash/debounce'

SyntaxHighlighter.registerLanguage('cpp', cpp)

const omitRegisterZeros = true

const codeCommentsState = computed(() => {
  const outputFrequency = outputFrequencyState
  const outputPeriod = outputPeriodState
  const values = fromVarToSuggestedValueInefficient.value
  const { timerMode } = values
  const IOCR_states = getAllCompareRegTraits(values)
  const outputs = IOCR_states.filter(
    ({ isActiveOutput }) => isActiveOutput
  ).map(({ outputPin, outputMode }) => `${outputPin}: ${outputMode}`)
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

const allCodeState = computed(
  () => `\
${codeCommentsState}
void setup(){
  noInterrupts();
${timerConfigCodeState}
${compareRegsState}
  interrupts();
}
${interruptsCodeState}`
)

const DebouncedCode = debounce(
  ({ code }: { code: string }) => {
    return (
      <>
        <CopyToClipboard />
        <SyntaxHighlighter
          language="cpp"
          style={arduinoLight}
          customStyle={{ paddingLeft: '0' }}
        >
          {code}
        </SyntaxHighlighter>
      </>
    )
  },
  100,
  { leading: true, trailing: true, maxWait: 100 }
)
export default function Code() {
  const code = allCodeState.value
  return <DebouncedCode code={code} />
}
const timerConfigCodeState = computed(() => {
  const omitZeroValues = true
  const { registers } = timerState.value
  const code = map(registers, (variables, regName) => {
    const assignments = variables
      .map((variable) => {
        fromVarToSuggestedValue.value[variable] ??= signal(undefined) // TODO signal_init
        const value = fromVarToSuggestedValue.value[variable].value || '0'
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

const compareRegsState = computed(() => {
  const suggestedConfig = fromVarToSuggestedValueInefficient.value

  const code = getAllCompareRegTraits(suggestedConfig)
    .filter(({ isUsed }) => isUsed)
    // DTR0L/H are special because they are just 4 bytes of a single register
    .filter(({ name }) => !['DTR0L', 'DTR0H'].includes(name))
    .map(({ code }) => code)
  let str = code.join('\n  ')
  if (str.length) str = '  ' + str
  return str
})
const interruptsCodeState = computed(() => {
  const interruptVariables = [
    'interruptVectorCodeA',
    'interruptVectorCodeB',
    'interruptVectorCodeC',
    'interruptVectorCodeOVF',
    'interruptVectorCaptureCode'
  ]
  fromVarToSuggestedValue.value['InterruptCommonSignature'] ??=
    signal(undefined) // TODO signal_init

  const interruptCommonSignature =
    fromVarToSuggestedValue.value['InterruptCommonSignature'].value

  let code = interruptVariables
    .map((variable) => {
      fromVarToSuggestedValue.value[variable] ??= signal(undefined) // TODO signal_init
      return fromVarToSuggestedValue.value[variable].value || '//nocode'
    })
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

const CopyToClipboard = React.memo(() => {
  // using refs to avoid rerenders
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    setTimeout(() => setClicked(false), 600)
  }, [clicked])
  return (
    <Button
      style={{ right: 15, position: 'absolute' }}
      color={clicked ? 'green' : undefined}
      onClick={() => copy(allCodeState.peek())}
    >
      {clicked ? 'Copied' : 'Copy'}
    </Button>
  )
})
