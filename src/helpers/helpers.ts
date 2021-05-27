import every from 'lodash/every'
import map from 'lodash/map'
import { Table, DefaultState, TimerRegisters } from './types'

import sortBy from 'lodash/sortBy'
import uniq from 'lodash/uniq'
import forEach from 'lodash/forEach'
import mapValues from 'lodash/mapValues'
import intersection from 'lodash/intersection'

export const getValuesPerBitName = (configs: Table[]) => {
  let valuesPerBitName: Record<string, string[]> = {}
  for (const table of configs) {
    for (const row of table) {
      for (const col in row) {
        const val = row[col]
        valuesPerBitName[col] = valuesPerBitName[col] || []
        if (val) valuesPerBitName[col].push(val)
      }
    }
  }
  return mapValues(valuesPerBitName, uniq)
}

export const splitTables = ([left, ...tables]: Table[]): Table[][] => {
  if (!left) return []
  const cluster = [left]
  let remaining: Table[] = []
  let colsLeft = Object.keys(left[0])
  let changed
  do {
    changed = false
    remaining = []

    for (const table of tables) {
      const colsRight = Object.keys(table[0])
      const match = intersection(colsLeft, colsRight).length > 0
      if (match) {
        cluster.push(table)
        colsLeft = uniq([...colsLeft, ...colsRight])
        changed = true
      } else {
        remaining.push(table)
      }
    }
    tables = remaining
  } while (changed)

  return [cluster, ...splitTables(remaining)]
}

export const joinTables = ([left, right, ...tables]: Table[]): Table => {
  // const left = left_.filter((row) => !Object.values(row).includes('reserved'))
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
