import { TTable } from './types'

import uniq from 'lodash/uniq'
import intersection from 'lodash/intersection'
import { mapValues, without } from 'lodash-es'
import Fraction from 'fraction.js'
import { atom } from 'jotai'
import { suggestedAssignmentState } from '../Panes/state'
import {
  getCompareRegTraits,
  getAllCompareRegTraits
} from './compareRegisterUtil'
import simTimer from './simulator'

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

function constrain(variable: string, value: string, tables: TTable[]) {
  const negVal = '!' + value
  const newTables: TTable[] = []
  for (const table of tables) {
    let newTable = table
    if (variable in table[0]) {
      newTable = table.filter((row) => {
        const value2 = row[variable]
        if (value2 === undefined) return true
        if (value2[0] === '!') return value2 !== negVal
        if (value2 === WILDCARD) return true
        if (value2 === value) return true
        return false
      })
    }
    if (newTable.length === 0) {
      return null
    }
    newTables.push(newTable)
  }
  return newTables
}
function findSolution(
  variables: string[],
  domains: Record<string, string[]>,
  tables: TTable[],
  solutionDomainCache: Record<string, Record<string, boolean>>
): Record<string, string> | false {
  if (variables.length === 0) return {}
  const [variable, ...otherVars] = variables
  const domain = domains[variable]
  for (const value of domain) {
    const newTables = constrain(variable, value, tables)
    if (!newTables) {
      continue
    }
    const solution = findSolution(
      otherVars,
      domains,
      newTables,
      solutionDomainCache
    )
    if (solution) {
      solutionDomainCache[variable] ??= {}
      solutionDomainCache[variable][value] = true
      solution[variable] = value //mutating for perf
      return solution
    } else {
    }
  }
  return false
}

export function findOneSolution(
  tables: TTable[]
): Record<string, string> | false {
  const domains = getFullDomains(tables)
  const variables = Object.keys(domains)
  return findSolution(variables, domains, tables, {})
}

export function getConstrainedDomains(tables: TTable[]) {
  const domains = getFullDomains(tables)
  const variables = Object.keys(domains)
  /*
  solutionDomainCache optimization:
    * when finding solutions, keep track of already found values for each variables
    * then don't check those when computing domains
  */
  const solutionDomainCache: Record<string, Record<string, boolean>> = {}
  return mapValues(domains, (domain, variable) => {
    const otherVars = without(variables, variable)
    return domain.filter((value) => {
      if (solutionDomainCache[variable]?.[value]) return true
      const newTables = constrain(variable, value, tables)
      if (!newTables) {
        return false
      }
      const solution = findSolution(
        otherVars,
        domains,
        newTables,
        solutionDomainCache
      )
      return !!solution
    })
  })
}

export const simulationState = atom((get) => {
  const values = get(suggestedAssignmentState)
  const counterMax = parseInt(values.counterMax)
  const param = {
    timerNr: values.timerNr,
    timerMode: values.timerMode as any,
    prescaler:
      values.clockPrescalerOrSource === 'disconnect'
        ? NaN
        : parseInt(values.clockPrescalerOrSource) ||
          parseInt(values.FCPU) / 1000,
    cpuHz:
      parseInt(values.FCPU || '1') * (values.clockDoubler === 'on' ? 2 : 1),
    top: 0,
    counterMax,
    tovTime: values.setTovMoment as any,
    OCRnXs: [] as number[],
    OCRnXs_behaviour: [
      values.CompareOutputModeA as any,
      values.CompareOutputModeB as any,
      values.CompareOutputModeC as any
    ],
    ICRn: 0,
    deadTimeEnable: values.DeadTime === 'on',
    deadTimeA: getCompareRegTraits('DeadTimeA', values).value,
    deadTimeB: getCompareRegTraits('DeadTimeB', values).value
  }

  const IOCR_states = getAllCompareRegTraits(values)

  param.OCRnXs = IOCR_states.filter(({ isOutput }) => isOutput).map(
    ({ value }) => value
  )

  param.ICRn = IOCR_states.find(({ isInput }) => isInput)!.value

  param.top =
    IOCR_states.find(({ isTop }) => isTop)?.value ?? parseInt(values.topValue)
  const ocrMax = parseInt(values.topValue) || counterMax

  return {
    simulation: simTimer(param),
    IOCR_states,
    ocrMax,
    param,
    counterMax,
    values
  }
})
