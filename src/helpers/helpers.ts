import { TTable } from './types'

import uniq from 'lodash/uniq'
import intersection from 'lodash/intersection'
import { remove } from 'lodash'

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
export function isTruthy<TValue>(value: TValue | undefined): value is TValue {
  return !!value
}

export const WILDCARD = '*'
export const getFullDomains = (tables: TTable[]): Record<string, string[]> => {
  const domains: Record<string, string[]> = {}
  for (const table of tables) {
    for (const row of table) {
      for (const [variable, value] of Object.entries(row)) {
        domains[variable] = domains[variable] || []
        if (value !== WILDCARD && !value.startsWith('!')) {
          if (!domains[variable].includes(value)) domains[variable].push(value)
        }
      }
    }
  }
  return domains
}
export const getConstrainedDomains = (
  tables: TTable[],
  domains_?: Record<string, string[]>
): Record<string, string[]> => {
  const domains: Record<string, string[]> = domains_
    ? { ...domains_ }
    : getFullDomains(tables)
  let done = false
  while (!done) {
    done = true
    for (const table_ of tables) {
      // first remove all rows containing a value out of a variable's domain
      const table = table_.filter((row) => {
        return Object.entries(row).every(([variable, value]) => {
          if (value === WILDCARD) return true
          if (value.startsWith('!')) {
            const negated = value.slice(1)
            return domains[variable].some((value) => value !== negated)
          }
          return domains[variable].includes(value)
        })
      })
      // then update the domain of each variable to only the values avalable in the current table
      for (const variable of Object.keys(table[0] || {})) {
        // todo handle numerics
        const values = table.map((row) => row[variable])
        const hasWildcards = values.includes(WILDCARD)
        if (hasWildcards) continue
        const negatedVals = remove(values, (val) => val?.startsWith('!')).map(
          (val) => val?.slice(1)
        )
        const positiveVals = values // there are no wildcards, and negateds were already removed
        const miniDomain = uniq([
          ...positiveVals,
          ...negatedVals.flatMap((negated) =>
            domains[variable].filter((value) => value !== negated)
          )
        ])
        const sizeBefore = domains[variable].length
        domains[variable] = intersection(domains[variable], miniDomain)
        const sizeAfter = domains[variable].length
        if (sizeBefore !== sizeAfter) done = false
      }
    }
  }
  return domains
}
