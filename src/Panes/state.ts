import { mapValues, uniq } from 'lodash'
import { selector, selectorFamily } from 'recoil'
import {
  getConstrainedDomains,
  splitTables,
  getFullDomains
} from '../helpers/helpers'
import { TRow, TTable } from '../helpers/types'
import { timerState, userConfigState } from '../state/state'

export const groupsState = selector({
  key: 'groupsState',
  get: ({ get }) => splitTables(get(timerState).configs)
})

const getVariables = (group: TTable[]) => {
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

export const suggestedVariableAssignmentState = selectorFamily({
  key: 'suggestedVarAssignmentState',
  get:
    (variable: string) =>
    ({ get }) => {
      const groupIdx = get(groupIdxFromVariableState(variable))
      if (groupIdx === -1) return undefined

      return get(suggestedGroupAssignmentState(groupIdx))[variable]
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
      const relevantVariables = getVariables(group)
      const userConfig: TRow = {}
      for (const variable of relevantVariables) {
        const userValue = get(userConfigState(variable))
        if (userValue !== undefined) userConfig[variable] = userValue
      }
      return userConfig
    }
})

export const groupIdxFromVariableState = selectorFamily({
  key: 'groupIdxFromVariableState',
  get:
    (variable: string) =>
    ({ get }) => {
      const tableSets = get(groupsState)
      const idx = tableSets.findIndex((group) =>
        group.some((table) => table[0].hasOwnProperty(variable))
      )
      return idx
    }
})
export const groupFromVariableState = selectorFamily({
  key: 'groupFromVariableState',
  get:
    (variable: string) =>
    ({ get }) => {
      const tableSets = get(groupsState)
      const idx = get(groupIdxFromVariableState(variable))
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
export const variableDomainsState = selectorFamily({
  key: 'variableDomainsState',
  get:
    (variable: string) =>
    ({ get }) => {
      const group = get(groupFromVariableState(variable))
      return getFullDomains(group)[variable]
    }
})
export const enabledValuesState = selectorFamily({
  key: 'enabledValuesState',
  get:
    (variable: string) =>
    ({ get }) => {
      // todo, cleanup, perf
      const groupIdx = get(groupIdxFromVariableState(variable))
      const domains = get(groupDomainsState(groupIdx))
      return domains[variable]
    }
})

export const variableOptionsState = selectorFamily({
  key: 'variableOptionsState',
  get:
    (variable: string) =>
    ({ get }) => {
      const groupIdx = get(groupIdxFromVariableState(variable))
      const userState = get(groupConfigState(groupIdx))
      const variableDomains = get(variableDomainsState(variable))

      const tableSets = get(groupsState)
      const group = tableSets[groupIdx]
      let enabledOptions = get(groupDomainsState(groupIdx))[variable]
      if (userState[variable]) {
        const { [variable]: _discarded, ...selectedWithout } = userState
        enabledOptions = getConstrainedDomains([[selectedWithout], ...group])[
          variable
        ]
      }
      const defaultValue = get(suggestedVariableAssignmentState(variable))
      const forcedOption =
        !userState[variable] && enabledOptions.length === 1
          ? enabledOptions[0]
          : undefined
      const suggestedOption =
        !userState[variable] && enabledOptions.length > 1
          ? defaultValue
          : undefined
      return {
        variable,
        selectedOption: userState[variable],
        suggestedOption: suggestedOption || forcedOption || userState[variable],
        forcedOption: forcedOption,
        options: variableDomains.map((value) => ({
          isSuggested: value === suggestedOption,
          value,
          isDisabled: !enabledOptions.includes(value) || !!forcedOption
        }))
      }
    }
})

export type TCheckboxGroupData = {
  variable: string
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
  variable: string
  options: {
    value: string
  }[]
}[]
