import { map } from 'lodash'
import { useRecoilValue } from 'recoil'
import { getAllCompareRegTraits } from '../helpers/compareRegisterUtil'
import { isTruthy } from '../helpers/helpers'
import { timerState } from '../state/state'
import { suggestedAssignmentState, suggestedBitAssignmentState } from './state'
import { Button } from 'rsuite'
import copy from 'copy-to-clipboard'
import React, { useEffect, useRef, useState } from 'react'

export default function Code() {
  const codeContainerRef = useRef<HTMLPreElement>(null)
  return (
    <>
      <CopyToClipboard codeContainerRef={codeContainerRef} />
      <pre style={{ margin: 0 }} ref={codeContainerRef}>
        {`\
void setup(){
  /* ${window.location.href} */
  noInterrupts();
`}
        <TimerConfgCode />
        {'\n'}
        <CompareRegsCode />
        {'\n'}
        {`\
  interrupts();
}
`}
        <Interrupts />
      </pre>
    </>
  )
}
const TimerConfgCode = () => {
  const omitRegisterZeros = true
  const omitBitZeros = true
  const { registers } = useRecoilValue(timerState)
  const code = map(registers, (bitNames, regName) => {
    const bitAssignments = bitNames
      .map((bitName) => {
        const bitValue =
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useRecoilValue(suggestedBitAssignmentState(bitName)) || '0'
        if (omitBitZeros && bitValue === '0') return ''
        return `${bitValue} << ${bitName}`
      })
      .filter(isTruthy)
    const bitAssignmentsStr = bitAssignments.length
      ? `\n    ${bitAssignments.join(' |\n    ')}`
      : '0'
    if (omitRegisterZeros && bitAssignmentsStr === '0') return ''
    return `  ${regName} = ${bitAssignmentsStr};`
  })
    .flat()
    .filter(isTruthy)

  return <>{code.join('\n')}</>
}
function CompareRegsCode() {
  const suggestedConfig = useRecoilValue(suggestedAssignmentState)

  const compareRegsCode = getAllCompareRegTraits(suggestedConfig)
    .filter(({ isUsed }) => isUsed)
    .map(({ code }) => code)
  return (
    <>
      {'  '}
      {compareRegsCode.join('\n  ')}
    </>
  )
}
function Interrupts() {
  const interruptBitNames = [
    'interruptVectorCodeA',
    'interruptVectorCodeB',
    'interruptVectorCodeC',
    'interruptVectorCodeOVF',
    'interruptVectorCaptureCode'
  ]
  const interruptCommonSignature = useRecoilValue(
    suggestedBitAssignmentState('InterruptCommonSignature')
  )
  let interrupts = interruptBitNames
    .map(
      (bitName) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useRecoilValue(suggestedBitAssignmentState(bitName)) || '//nocode'
    )
    .filter((bitValue) => bitValue !== '//nocode')

  if (interrupts.length && interruptCommonSignature) {
    interrupts = [
      interruptCommonSignature + ' {',
      ...interrupts.map((code) => '    ' + code.split('\n').join('\n    ')),
      '}'
    ]
  }
  return (
    <>
      {interrupts.join('\n')}
      {'\n'}
    </>
  )
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
