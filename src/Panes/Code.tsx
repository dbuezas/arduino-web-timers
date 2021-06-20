import { forEach, map, sortBy, uniq } from 'lodash'
import { useRecoilValue } from 'recoil'
import { getCompareRegTraints } from '../helpers/compareRegisterUtil'
import { isTruthy } from '../helpers/helpers'
import { timerState } from '../state/state'
import { suggestedAssignmentState } from './state'
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
  const suggestedConfig = useRecoilValue(suggestedAssignmentState)
  const { registers } = useRecoilValue(timerState)
  const code = map(registers, (bitNames, regName) => {
    const assignments: {
      regName: string
      bitValue: string
      bitName: string
    }[] = []
    forEach(suggestedConfig, (value, bitSetName) =>
      forEach(bitNames, (bitName) => {
        if (bitSetName === bitName)
          assignments.push({ regName, bitValue: value || '0', bitName })
      })
    )
    const regNames = uniq(map(assignments, 'regName'))
    return regNames.map((regName) => {
      let regAssignments = assignments.filter(({ regName: r }) => r === regName)
      regAssignments = sortBy(regAssignments, 'bitName')
      const omitZeros = true
      if (omitZeros) {
        regAssignments = regAssignments.filter(
          ({ bitValue }) => bitValue !== '0'
        )
      }
      const bitAssignments = regAssignments.map(
        //@ts-ignore
        ({ bitValue, bitName }) => `${bitValue} << ${bitName}`
      )
      const bitAssignmentsStr = bitAssignments.length
        ? `\n    ${bitAssignments.join(' |\n    ')}`
        : '0'
      if (bitAssignmentsStr === '0') return ''
      return `  ${regName} = ${bitAssignmentsStr};`
    })
  })
    .flat()
    .filter(isTruthy)

  return <>{code.join('\n')}</>
}
function CompareRegsCode() {
  const suggestedConfig = useRecoilValue(suggestedAssignmentState)

  const compareRegsCode = getCompareRegTraints(suggestedConfig)
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
  const suggestedConfig = useRecoilValue(suggestedAssignmentState)

  let interrupts: string[] = []
  forEach(suggestedConfig, (value, bitSetName) => {
    if (
      value &&
      value !== '//nocode' &&
      bitSetName.startsWith('interruptVectorCode')
    ) {
      interrupts.push(value.replace(/\\n/g, '\n').replace(/\\t/g, '\t'))
    }
  })
  if (interrupts.length && suggestedConfig.InterruptCommonSignature) {
    interrupts = [
      suggestedConfig.InterruptCommonSignature + ' {',
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
