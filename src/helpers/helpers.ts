import every from 'lodash/every'
import map from 'lodash/map'
import { TTable, TDefaultState, TTimerRegisters } from './types'

import sortBy from 'lodash/sortBy'
import uniq from 'lodash/uniq'
import forEach from 'lodash/forEach'
import mapValues from 'lodash/mapValues'
import intersection from 'lodash/intersection'
import { pickBy } from 'lodash'

export const getValuesPerBitName = (configs: TTable[]) => {
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

export const splitTables = ([left, ...tables]: TTable[]): TTable[][] => {
  if (!left) return []
  const cluster = [left]
  let remaining: TTable[] = []
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
export function isTruthy<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return !!value
}

const _joinTables = ([left, right, ...tables]: TTable[]): TTable => {
  if (!right) return left
  const joined = left.flatMap((leftRow) =>
    right
      .map((rightRow) => {
        const row = { ...leftRow }
        const keep = every(rightRow, (rightVal, key) => {
          const leftVal = leftRow[key]
          if (!leftVal && !rightVal) return true
          else if (!leftVal) row[key] = rightVal
          else if (!rightVal) row[key] = leftVal
          else if (leftVal !== rightVal) return false
          return true
        })
        if (!keep) return null
        return row
      })
      .filter(isTruthy)
  )
  return _joinTables([joined, ...tables])
}
export const joinTables = (tables: TTable[]): TTable => {
  // first remove empty bitValues to improve speed (bitValue=''|null means the value is not constrained)
  const cleanTables = tables.map((table) => table.map((row) => pickBy(row)))
  return _joinTables(cleanTables)
}
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

  return `
void setup(){
  noInterrupts();
${code.join('\t\n\n')}
  interrupts();
}
${interrupts.join('\n')}`
}
