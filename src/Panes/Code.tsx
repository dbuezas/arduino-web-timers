import { map } from 'lodash'
import { selector, useRecoilCallback, useRecoilValue } from 'recoil'
import { getAllCompareRegTraits } from '../helpers/compareRegisterUtil'
import {
  isTruthy,
  outputFrequencyState,
  outputPeriodState
} from '../helpers/helpers'
import { timerState } from '../state/state'
import {
  suggestedAssignmentState,
  suggestedVariableAssignmentState
} from './state'
import { Button } from 'rsuite'
import copy from 'copy-to-clipboard'
import React, { useEffect, useState } from 'react'
import { arduinoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import c from 'react-syntax-highlighter/dist/esm/languages/hljs/c'
import debounceRender from 'react-debounce-render'

SyntaxHighlighter.registerLanguage('c', c)

const omitRegisterZeros = true

const codeCommentsState = selector({
  key: 'codeCommentsState',
  get: ({ get }) => {
    const outputFrequency = get(outputFrequencyState)
    const outputPeriod = get(outputPeriodState)
    const values = get(suggestedAssignmentState)
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
  }
})

const allCodeState = selector({
  key: 'allCodeState',
  get: ({ get }) => `\
${get(codeCommentsState)}
void setup(){
  noInterrupts();
${get(timerConfigCodeState)}
${get(compareRegsState)}
  interrupts();
}
${get(interruptsCodeState)}`
})

const DebouncedCode = debounceRender(
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
  {
    trailing: true,
    leading: true,
    maxWait: 100
  }
)
export default function Code() {
  const code = useRecoilValue(allCodeState)
  return <DebouncedCode code={code} />
}
const timerConfigCodeState = selector({
  key: 'timerConfigCodeState',
  get: ({ get }) => {
    const omitZeroValues = true
    const { registers } = get(timerState)
    const code = map(registers, (variables, regName) => {
      const assignments = variables
        .map((variable) => {
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
    if (str.length) str += '\n'
    return str
  }
})

const compareRegsState = selector({
  key: 'compareRegsState',
  get: ({ get }) => {
    const suggestedConfig = get(suggestedAssignmentState)

    const code = getAllCompareRegTraits(suggestedConfig)
      .filter(({ isUsed }) => isUsed)
      // DTR0L/H are special because they are just 4 bytes of a single register
      .filter(({ name }) => !['DTR0L', 'DTR0H'].includes(name))
      .map(({ code }) => code)
    let str = code.join('\n  ')
    if (str.length) str = '  ' + str
    return str
  }
})
const interruptsCodeState = selector({
  key: 'interruptsCodeState',
  get: ({ get }) => {
    const interruptVariables = [
      'interruptVectorCodeA',
      'interruptVectorCodeB',
      'interruptVectorCodeC',
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
  }
})

const CopyToClipboard = React.memo(() => {
  // using refs to avoid rerenders
  const [clicked, setClicked] = useState(false)
  // const allCode = useAllCode()
  const copyCode = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const allCode = await snapshot.getPromise(allCodeState)
        copy(allCode)
        setClicked(true)
        console.log(allCode)
      },
    []
  )
  useEffect(() => {
    setTimeout(() => setClicked(false), 600)
  }, [clicked])
  return (
    <Button
      style={{ right: 15, position: 'absolute' }}
      color={clicked ? 'green' : undefined}
      onClick={copyCode}
    >
      {clicked ? 'Copied' : 'Copy'}
    </Button>
  )
})
