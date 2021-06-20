import { useThrottle } from '@react-hook/throttle'
import { useClipboard } from 'use-clipboard-copy'
import { forEach, map, sortBy, uniq } from 'lodash'
import { useRecoilValue } from 'recoil'
import { getCompareRegTraints } from '../helpers/compareRegisterUtil'
import { isTruthy } from '../helpers/helpers'
import { timerState } from '../state/state'
import { suggestedAssignmentState } from './state'
import { Button } from 'rsuite'
import { TRow, TTimerRegisters } from '../helpers/types'

export default function Code() {
  const suggestedConfig = useRecoilValue(suggestedAssignmentState)
  const { registers } = useRecoilValue(timerState)
  // const suggestedConfig_ = useRecoilValue(suggestedAssignmentState)
  // const { registers: registers_ } = useRecoilValue(timerState)
  // const [suggestedConfig, setSC] = useThrottle<TRow>({})
  // const [registers, setR] = useThrottle<TTimerRegisters>({})
  // setSC(suggestedConfig_)
  // setR(registers_)
  return <Code2 {...{ suggestedConfig, registers }} />
}
function Code2({
  suggestedConfig,
  registers
}: {
  suggestedConfig: TRow
  registers: TTimerRegisters
}) {
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

  const compareRegsCode = getCompareRegTraints(suggestedConfig)
    .filter(({ isUsed }) => isUsed)
    .map(({ code }) => code)

  const fullCode = `\
void setup(){
  /* ${window.location.href} */
  noInterrupts();
${code.join('\t\n')}
  ${compareRegsCode.join('\n  ')}
  interrupts();
}
${interrupts.join('\n')}`

  return (
    <>
      <CopyToClipboard text={fullCode} />
      <pre style={{ margin: 0 }}>{fullCode}</pre>
    </>
  )
}

function CopyToClipboard({ text }: { text: string }) {
  const clipboard = useClipboard({
    copiedTimeout: 600 // timeout duration in milliseconds
  })
  return (
    <div>
      <textarea
        ref={clipboard.target}
        value={text}
        readOnly
        style={{ display: 'none' }}
      />
      <Button
        color={clipboard.copied ? 'green' : undefined}
        onClick={clipboard.copy}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </div>
  )
}
