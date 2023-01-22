import { mapValues, uniq } from 'lodash'
import { selector, selectorFamily } from 'recoil'
import {
  getConstrainedDomains,
  splitTables,
  getFullDomains
} from '../helpers/helpers'
import { TRow, TTable } from '../helpers/types'
import { timerState, userConfigBitState } from '../state/state'

export const groupsState = selector({
  key: 'groupsState',
  get: ({ get }) => splitTables(get(timerState).configs)
})

const getBitNames = (group: TTable[]) => {
  if (group === undefined) debugger
  return uniq(group.flatMap((table: TTable) => Object.keys(table[0])))
}
export const suggestedGroupAssignmentState = selectorFamily({
  key: 'suggestedGroupAssignmentState',
  get:
    (groupIdx: number) =>
    ({ get }) => {
      const userState = get(groupConfigState(groupIdx))
      const tableSets = get(groupsState)
      const group = tableSets[groupIdx]
      let domains = { ...get(groupDomainsState(groupIdx)) }
      const instantiations: Record<string, string> = {}
      for (const variable of Object.keys(domains)) {
        if (domains[variable].length < 2) continue // if there is only one option, no need to fix it
        instantiations[variable] = domains[variable][0]
        domains = getConstrainedDomains(
          [[instantiations], [userState], ...group],
          domains
        )
      }
      return mapValues(domains, (domain) => domain[0])
    }
})

export const suggestedBitAssignmentState = selectorFamily({
  key: 'suggestedBitAssignmentState',
  get:
    (bitName: string) =>
    ({ get }) => {
      const groupIdx = get(groupIdxFromBitNameState(bitName))
      if (groupIdx === -1) return undefined

      return get(suggestedGroupAssignmentState(groupIdx))[bitName]
    }
})
export const suggestedAssignmentState = selector<TRow>({
  key: 'suggestedAssignmentState',
  get: ({ get }) => {
    const assignments = get(groupsState)
      .map((_, i) => get(suggestedGroupAssignmentState(i)))
      .flat()
    return Object.assign({}, ...assignments)
  }
})

export const groupConfigState = selectorFamily({
  key: 'groupConfigState',
  get:
    (groupIdx: number) =>
    ({ get }) => {
      const tableSets = get(groupsState)
      const group = tableSets[groupIdx]
      const relevantBitNames = getBitNames(group)
      const userConfig: TRow = {}
      for (const bitName of relevantBitNames) {
        const userBitConfig = get(userConfigBitState(bitName))
        if (userBitConfig !== undefined) userConfig[bitName] = userBitConfig
      }
      return userConfig
    }
})

export const groupIdxFromBitNameState = selectorFamily({
  key: 'groupIdxFromBitNameState',
  get:
    (bitName: string) =>
    ({ get }) => {
      const tableSets = get(groupsState)
      const idx = tableSets.findIndex((group) =>
        group.some((table) => table[0].hasOwnProperty(bitName))
      )
      return idx
    }
})
export const groupFromBitNameState = selectorFamily({
  key: 'groupFromBitNameState',
  get:
    (bitName: string) =>
    ({ get }) => {
      const tableSets = get(groupsState)
      const idx = get(groupIdxFromBitNameState(bitName))
      return tableSets[idx]
    }
})
export const groupDomainsState = selectorFamily({
  key: 'groupDomainsState',
  get:
    (groupIdx: number) =>
    ({ get }) => {
      const tableSets = get(groupsState)
      const group = tableSets[groupIdx]
      const userState = get(groupConfigState(groupIdx))
      return getConstrainedDomains([[userState], ...group])
    }
})
export const allBitOptionsState = selectorFamily({
  key: 'allBitOptionsState',
  get:
    (bitName: string) =>
    ({ get }) => {
      const group = get(groupFromBitNameState(bitName))
      return getFullDomains(group)[bitName]
    }
})
export const enabledBitOptionsState = selectorFamily({
  key: 'enabledBitOptionsState',
  get:
    (bitName: string) =>
    ({ get }) => {
      // todo, cleanup, perf
      const groupIdx = get(groupIdxFromBitNameState(bitName))
      const domains = get(groupDomainsState(groupIdx))
      return domains[bitName]
    }
})

export const bitOptionsState = selectorFamily({
  key: 'bitOptionsState',
  get:
    (bitName: string) =>
    ({ get }) => {
      const groupIdx = get(groupIdxFromBitNameState(bitName))
      const userState = get(groupConfigState(groupIdx))
      const allBitOptions = get(allBitOptionsState(bitName))

      const tableSets = get(groupsState)
      const group = tableSets[groupIdx]
      let enabledOptions = get(groupDomainsState(groupIdx))[bitName]
      if (userState[bitName]) {
        const { [bitName]: _discarded, ...selectedWithout } = userState
        enabledOptions = getConstrainedDomains([[selectedWithout], ...group])[
          bitName
        ]
      }
      const defaultValue = get(suggestedBitAssignmentState(bitName))
      const forcedOption =
        !userState[bitName] && enabledOptions.length === 1
          ? enabledOptions[0]
          : undefined
      const suggestedOption =
        !userState[bitName] && enabledOptions.length > 1
          ? defaultValue
          : undefined
      return {
        bitName,
        selectedOption: userState[bitName],
        suggestedOption: suggestedOption || forcedOption || userState[bitName],
        forcedOption: forcedOption,
        options: allBitOptions.map((value) => ({
          isSuggested: value === suggestedOption,
          value,
          isDisabled: !enabledOptions.includes(value) || !!forcedOption
        }))
      }
    }
})

export type TCheckboxGroupData = {
  bitName: string
  selectedOption: string | undefined
  suggestedOption: string | undefined
  forcedOption: string | undefined
  options: {
    isSuggested: boolean
    value: string
    isDisabled: boolean
  }[]
}[]
export type TCheckboxMinimalGroupData = {
  bitName: string
  options: {
    value: string
  }[]
}[]
