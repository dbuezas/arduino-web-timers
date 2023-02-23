import { map } from 'lodash'
import { useRecoilValue } from 'recoil'
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
import React, { useEffect, useRef, useState } from 'react'
const omitRegisterZeros = true

function LinkToThisPage() {
  const [url, setUrl] = useState(window.location.href)
  useEffect(() => {
    const handleUrlChange = () => {
      setUrl(window.location.href)
    }
    window.addEventListener('hashchange', handleUrlChange)
    return () => window.removeEventListener('hashchange', handleUrlChange)
  }, [])
  return <>{'URL: ' + url + '\n'}</>
}
function Frequency() {
  const outputFrequency = useRecoilValue(outputFrequencyState)
  const outputPeriod = useRecoilValue(outputPeriodState)
  const values = useRecoilValue(suggestedAssignmentState)
  const { timerMode } = values
  const IOCR_states = getAllCompareRegTraits(values)
  const outputs = IOCR_states.filter(
    ({ isActiveOutput }) => isActiveOutput
  ).map(({ outputPin, outputMode }) => `${outputPin} ${outputMode}`)
  return (
    <>
      {`Mode     : ${timerMode}\n`}
      {`Period   : ${outputPeriod}\n`}
      {`Frequency: ${outputFrequency}\n`}
      {`Outputs  : \n   ${outputs.join('\n   ')}`}
    </>
  )
}
export default function Code() {
  const codeContainerRef = useRef<HTMLPreElement>(null)
  return (
    <>
      <CopyToClipboard codeContainerRef={codeContainerRef} />
      <pre style={{ margin: 0 }} ref={codeContainerRef}>
        {'/*\n'}
        <LinkToThisPage />
        <Frequency />
        {'\n*/\n'}
        {`\nvoid setup(){\n`}
        {`  noInterrupts();\n`}
        <TimerConfgCode />
        <CompareRegsCode />
        {`  interrupts();
}
`}
        <Interrupts />
      </pre>
    </>
  )
}
const TimerConfgCode = () => {
  const omitZeroValues = true
  const { registers } = useRecoilValue(timerState)
  const code = map(registers, (variables, regName) => {
    const assignments = variables
      .map((variable) => {
        const value =
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useRecoilValue(suggestedVariableAssignmentState(variable)) || '0'
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
  return <>{str}</>
}
function CompareRegsCode() {
  const suggestedConfig = useRecoilValue(suggestedAssignmentState)

  const code = getAllCompareRegTraits(suggestedConfig)
    .filter(({ isUsed }) => isUsed)
    // DTR0L/H are special because they are just 4 bytes of a single register
    .filter(({ name }) => !['DTR0L', 'DTR0H'].includes(name))
    .map(({ code }) => code)
  let str = code.join('\n  ')
  if (str.length) str = '  ' + str + '\n'
  return <>{str}</>
}
function Interrupts() {
  const interruptVariables = [
    'interruptVectorCodeA',
    'interruptVectorCodeB',
    'interruptVectorCodeC',
    'interruptVectorCodeOVF',
    'interruptVectorCaptureCode'
  ]
  const interruptCommonSignature = useRecoilValue(
    suggestedVariableAssignmentState('InterruptCommonSignature')
  )
  let code = interruptVariables
    .map(
      (variable) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useRecoilValue(suggestedVariableAssignmentState(variable)) || '//nocode'
    )
    .filter((value) => value !== '//nocode')

  if (code.length && interruptCommonSignature) {
    code = [
      interruptCommonSignature + ' {',
      ...code.map((code) => '    ' + code.split('\n').join('\n    ')),
      '}'
    ]
  }
  let str = code.join('\n')
  if (str.length) str += '\n'
  return <>{str}</>
}

const CopyToClipboard = React.memo(
  ({
    codeContainerRef
  }: {
    codeContainerRef: React.RefObject<HTMLPreElement>
  }) => {
    // using refs to avoid rerenders
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
      setTimeout(() => setClicked(false), 600)
    }, [clicked])
    return (
      <div>
        <Button
          color={clicked ? 'green' : undefined}
          onClick={() => {
            copy(codeContainerRef.current?.textContent || '')
            setClicked(true)
            console.log(codeContainerRef.current?.textContent || '')
          }}
        >
          {clicked ? 'Copied' : 'Copy'}
        </Button>
      </div>
    )
  }
)
