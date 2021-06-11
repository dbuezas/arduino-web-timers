import { forEach, map, sortBy, uniq } from 'lodash'
import { isTruthy } from '../helpers/helpers'
import { TRow, TTimerRegisters } from '../helpers/types'

type Props = {
  fullTimerConfiguration: TRow
  registers: TTimerRegisters
}
export default function Code({ fullTimerConfiguration, registers }: Props) {
  const timerNr = fullTimerConfiguration.timerNr
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
      return `  ${regName} = ${bitAssignmentsStr};`
    })
  }).flat()
  const interrupts: string[] = []
  forEach(fullTimerConfiguration, (value, bitSetName) => {
    if (value && bitSetName.startsWith('interruptVectorCode')) {
      interrupts.push(value.replace(/\\n/g, '\n').replace(/\\t/g, '\t'))
    }
  })

  const OCRs = ['A', 'B', 'C']
    .map((ABC) => {
      const regName = `OCR${timerNr}${ABC}`
      const value = fullTimerConfiguration[regName]
      const code = `${regName} = ${value};`
      return value !== undefined && code
    })
    .filter(isTruthy)

  const ICRs = [0]
    .map(() => {
      const regName = `ICR${timerNr}`
      const value = fullTimerConfiguration[regName]
      const code = `${regName} = ${value};`
      return value !== undefined && code
    })
    .filter(isTruthy)

  return (
    <pre style={{ margin: 0 }}>
      {`\
void setup(){
  noInterrupts();
${code.join('\t\n\n')}

  ${OCRs.join('\n  ')}
  ${ICRs.join('\n  ')}
  
  interrupts();
}
${interrupts.join('\n')}
}`}
    </pre>
  )
}
