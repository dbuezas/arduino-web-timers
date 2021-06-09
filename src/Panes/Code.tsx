import { forEach, map, sortBy, uniq } from 'lodash'
import { TDefaultState, TRow, TTimerRegisters } from '../helpers/types'

export const generateCode = (
  selected: TDefaultState,
  timerRegisters: TTimerRegisters
) => {
  const code = map(timerRegisters, (bitNames, regName) => {
    const assignments: {
      regName: string
      bitValue: string
      bitName: string
    }[] = []
    forEach(selected, (value, bitSetName) =>
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
      return `  ${regName} = ${bitAssignmentsStr};`
    })
  }).flat()
  const interrupts: string[] = []
  forEach(selected, (value, bitSetName) => {
    if (value && bitSetName.startsWith('interruptVectorCode')) {
      interrupts.push(value.replace(/\\n/g, '\n').replace(/\\t/g, '\t'))
    }
  })

  return `\
void setup(){
  noInterrupts();
${code.join('\t\n\n')}
  interrupts();
}
${interrupts.join('\n')}
OCRA=${selected.OCRA}`
}

type Props = {
  fullTimerConfiguration: TRow
  registers: TTimerRegisters
}
export default function Code({ fullTimerConfiguration, registers }: Props) {
  return (
    <pre style={{ margin: 0 }}>
      {generateCode(fullTimerConfiguration, registers)}
    </pre>
  )
}
