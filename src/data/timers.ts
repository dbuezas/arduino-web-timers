import mapValues from 'lodash/mapValues'
import every from 'lodash/every'
import map from 'lodash/map'
import { sortBy, uniq, forEach } from 'lodash'
import {
  Table,
  TimerConfig,
  DefaultState,
  TimerRegisters,
  Descriptions
} from './types'

export const tsv = (str: string) => {
  const table = str
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
  const [header, ...rows] = table
  return rows
    .map((row) =>
      Object.fromEntries(
        header.map((colName, i) => [colName, (row[i] || '').trim()])
        //row.map((cell, col) => [header[col], cell.trim()])
      )
    )
    .filter((row) => !Object.values(row).includes('reserved'))
}

export const tsvRegisters = (str: string) => {
  const table = str
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
  const [header, ...rows] = table
  return Object.fromEntries(
    header.map((register, column) => [register, rows.map((row) => row[column])])
  )
}

export const joinTables = ([left_, right, ...tables]: Table[]): Table => {
  const left = left_.filter((row) => !Object.values(row).includes('reserved'))
  if (!right) return left
  const joined = left.flatMap((leftRow) =>
    right.flatMap((rightRow) => {
      const row = { ...leftRow }
      const keep = every(rightRow, (rightVal, key) => {
        const leftVal = leftRow[key]
        if (!leftVal) row[key] = rightVal
        else if (!rightVal) row[key] = leftVal
        else if (leftVal !== rightVal) return false
        return true
      })
      if (!keep) return []
      return [row]
    })
  )
  return joinTables([joined, ...tables])
}

export const generateCode = (
  selected: DefaultState,
  timerRegisters: TimerRegisters
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
      let regAssignments = assignments.filter(({ regName: r }) => r == regName)
      regAssignments = sortBy(regAssignments, 'bitName')
      const bitAssignments = regAssignments.map(
        //@ts-ignore
        ({ bitValue, bitName }) => `${bitValue} << ${bitName}`
      )
      return `  ${regName} = \n    ${bitAssignments.join(' |\n    ')};`
    })
  }).flat()
  const interrupts: string[] = []
  forEach(selected, (value, bitSetName) => {
    if (value && bitSetName.startsWith('interruptVectorCode')) {
      interrupts.push(value)
    }
  })

  return `
void setup(){
  noInterrupts();
${code.join('\t\n\n')}
  interrupts();
}
${interrupts.join('\n')}`
}

export const descriptions: Record<string, string> = {
  timerMode: 'Timer Mode',
  topValue: 'Top value of timer',
  updateOcrMoment: 'When are the OCR registers updated (e.g OCR1A)',
  setTovMoment: 'When overflow interrupt is triggered',
  CompareOutputModeA: 'What does output compare A produce in the output A',
  CompareOutputModeB: 'What does output compare B produce in the output A',
  clockPrescalerOrSource: 'Clock prescaler or external source',
  OCIE0A_text: 'Interrupt on Compare Output A',
  OCIE0B_text: 'Interrupt on Compare Output B',
  OCIE0C_text: 'Interrupt on Compare Output C',
  TOIE0_text: 'Interrupt on Timer Overflow',
  OCIE1A_text: 'Interrupt on Compare Output A',
  OCIE1B_text: 'Interrupt on Compare Output B',
  OCIE1C_text: 'Interrupt on Compare Output C',
  TOIE1_text: 'Interrupt on Timer Overflow',
  ICIE1_text: 'Interrupt on Input Capture',
  clockDoubler: 'Double timer clock speed'
}
