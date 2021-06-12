import every from 'lodash/every'
import { TTable } from './types'

import uniq from 'lodash/uniq'
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

const negatedMatch = (a: string, b: string) => {
  const [, negA] = a.match(/!(.*)/) || []
  const [, negB] = b.match(/!(.*)/) || []
  if (negA) {
    if (!b) return a
    if (negA !== b) return b
  }
  if (negB) {
    if (!a) return b
    if (negB !== a) return a
  }
  return false
}
const _joinTables = ([left, right, ...tables]: TTable[]): TTable => {
  if (!right) return left
  const joined = left.flatMap((leftRow) =>
    right
      .map((rightRow) => {
        const row = { ...leftRow }
        const keep = every(rightRow, (rightVal, key) => {
          const leftVal = leftRow[key]
          const negMatch = negatedMatch(leftVal || '', rightVal || '')
          if (!leftVal && !rightVal) return true
          else if (!leftVal) row[key] = rightVal
          else if (!rightVal) row[key] = leftVal
          else if (negMatch !== false) row[key] = negMatch
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
