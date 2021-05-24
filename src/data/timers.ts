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
      Object.fromEntries(row.map((cell, col) => [header[col], cell.trim()]))
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
        else if (leftVal !== rightVal) return false
        return true
      })
      if (!keep) return []
      return [row]
    })
  )
  return joinTables([joined, ...tables])
}

export const getConsistentTimerConfigs = (
  timerConfig: TimerConfig,
  selected: DefaultState
) => {
  const joined = joinTables([[selected], ...Object.values(timerConfig)])

  return timerConfig.map((table) =>
    table.filter((row) =>
      every(row, (val, key) =>
        joined.some((joinedRow) => !joinedRow[key] || joinedRow[key] === val)
      )
    )
  )
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
      return `\t${regName} = \n\t\t${bitAssignments.join(' |\n\t\t')};`
    })
  }).flat()

  return `${code.join('\t\n\n')}`
}

export const descriptions: Record<string, string> = {
  timerMode: 'timerMode',
  topValue: 'topValue',
  updateOcrMoment: 'updateOcrMoment',
  setTovMoment: 'setTovMoment',
  CompareOutputModeA: 'CompareOutputModeA',
  CompareOutputModeB: 'CompareOutputModeB',
  clockPrescalerOrSource: 'clockPrescalerOrSource',
  OCIE0A: 'Call interrupt routine on Compare Output A',
  OCIE0B: 'OCIE0B',
  OCIE0C: 'OCIE0C',
  TOIE0: 'TOIE0',
  clockDoubler: 'clockDoubler'
}
