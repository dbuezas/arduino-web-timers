import { forEach, map, sortBy, uniq } from 'lodash'
import { useRecoilValue } from 'recoil'
import { TRow, TTimerRegisters } from '../helpers/types'
import { ICRState, OCRnAState, OCRnBState, OCRnCState } from '../state/ocr'

type Props = {
  fullTimerConfiguration: TRow
  registers: TTimerRegisters
}
export default function Code({ fullTimerConfiguration, registers }: Props) {
  const OCRnA = useRecoilValue(OCRnAState)
  const OCRnB = useRecoilValue(OCRnBState)
  const OCRnC = useRecoilValue(OCRnCState)
  const ICR = useRecoilValue(ICRState)
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

  return (
    <pre style={{ margin: 0 }}>
      {`\
void setup(){
  noInterrupts();
${code.join('\t\n\n')}

  OCR${timerNr}A = ${OCRnA};
  OCR${timerNr}B = ${OCRnB};
  OCR${timerNr}C = ${OCRnC};
  ICR${timerNr} = ${ICR};
  interrupts();
}
${interrupts.join('\n')}
}`}
    </pre>
  )
}
