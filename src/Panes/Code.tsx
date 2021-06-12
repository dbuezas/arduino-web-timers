import { forEach, map, sortBy, uniq } from 'lodash'
import { getCompareRegTraints } from '../helpers/compareRegisterUtil'
import { isTruthy } from '../helpers/helpers'
import { TRow, TTimerRegisters } from '../helpers/types'

type Props = {
  fullTimerConfiguration: TRow
  registers: TTimerRegisters
}
export default function Code({ fullTimerConfiguration, registers }: Props) {
  const code = map(registers, (bitNames, regName) => {
    const assignments: {
      regName: string
      bitValue: string
      bitName: string
    }[] = []
    forEach(fullTimerConfiguration, (value, bitSetName) =>
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
  forEach(fullTimerConfiguration, (value, bitSetName) => {
    if (
      value &&
      value !== '//nocode' &&
      bitSetName.startsWith('interruptVectorCode')
    ) {
      interrupts.push(value.replace(/\\n/g, '\n').replace(/\\t/g, '\t'))
    }
  })
  if (interrupts.length && fullTimerConfiguration.InterruptCommonSignature) {
    interrupts = [
      fullTimerConfiguration.InterruptCommonSignature + ' {',
      ...interrupts.map((code) => '    ' + code.split('\n').join('\n    ')),
      '}'
    ]
  }

  const compareRegsCode = getCompareRegTraints(fullTimerConfiguration)
    .filter(({ isUsed }) => isUsed)
    .map(({ code }) => code)

  return (
    <pre style={{ margin: 0 }}>
      {`\
void setup(){
  noInterrupts();
${code.join('\t\n')}
  ${compareRegsCode.join('\n  ')}
  interrupts();
}
${interrupts.join('\n')}`}
    </pre>
  )
}
