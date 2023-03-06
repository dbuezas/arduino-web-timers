import { TTable } from './types'

import uniq from 'lodash/uniq'
import intersection from 'lodash/intersection'
import { remove } from 'lodash-es'
import Fraction from 'fraction.js'
import { selector } from 'recoil'
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

export const simulationState = selector({
  key: 'simulationState',
  get: ({ get }) => {
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
  }
})

function formatTime(s: Fraction) {
  if (s.valueOf() >= 1) return `${s.round(5)} s`
  const ms = s.mul(1000)
  if (ms.valueOf() >= 1) return `${ms.round(5)} ms`
  const us = ms.mul(1000)
  if (us.valueOf() >= 1) return `${us.round(5)} us`
  const ns = us.mul(1000)
  return `${ns.round(5)} ns`
}
export function formatFrequency(hz: Fraction) {
  if (hz.valueOf() < 1000) return `${hz.round(5)} Hz`
  const khz = hz.div(1000)
  if (khz.valueOf() < 1000) return `${khz.round(5)} kHz`
  const mhz = khz.div(1000)
  return `${mhz.round(5)} MHz`
}
export function formatPeriod(freq: Fraction) {
  return `${freq.equals(0) ? 0 : formatTime(freq.inverse())}`
}

export const outputFrequencyState = selector({
  key: 'outputFrequencyState',
  get: ({ get }) => {
    const { simulation } = get(simulationState)
    const { freq } = simulation
    return formatFrequency(freq)
  }
})
export const outputPeriodState = selector({
  key: 'outputPeriodState',
  get: ({ get }) => {
    const { simulation } = get(simulationState)
    const { freq } = simulation
    return formatPeriod(freq)
  }
})
