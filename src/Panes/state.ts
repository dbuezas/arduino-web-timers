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
export const groupState = selectorFamily({
  key: 'groupsState',
  get:
    (groupIdx: number) =>
    ({ get }) => {
      const tableSets = get(groupsState)
      return tableSets[groupIdx]
    }
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
      const group = get(groupState(groupIdx))
      let domains = get(constrainedGroupDomainsState(groupIdx))
      const instantiations: Record<string, string> = {}
      for (const variable of Object.keys(domains)) {
        if (domains[variable].length < 2) continue // if the domain of a var is only one element, there's no need to assign it.
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
      const group = get(groupState(groupIdx))
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
export const constrainedGroupDomainsState = selectorFamily({
  key: 'constrainedGroupDomainsState',
  get:
    (groupIdx: number) =>
    ({ get }) => {
      const group = get(groupState(groupIdx))
      const userState = get(groupConfigState(groupIdx))
      return getConstrainedDomains([[userState], ...group])
    }
})
export const fullGroupDomainsState = selectorFamily({
  key: 'fullGroupDomainsState',
  get:
    (groupIdx: number) =>
    ({ get }) => {
      const group = get(groupState(groupIdx))
      const userState = get(groupConfigState(groupIdx))
      return getFullDomains([...group, [userState]])
    }
})
export const constrainedDomainState = selectorFamily({
  key: 'constrainedDomainState',
  get:
    (variable: string) =>
    ({ get }) => {
      const groupIdx = get(groupIdxFromVariableState(variable))
      return get(constrainedGroupDomainsState(groupIdx))[variable]
    }
})
export const fullDomainState = selectorFamily({
  key: 'fullDomainState',
  get:
    (variable: string) =>
    ({ get }) => {
      const groupIdx = get(groupIdxFromVariableState(variable))
      return get(fullGroupDomainsState(groupIdx))[variable]
    }
})

export const variableOptionsState = selectorFamily({
  key: 'variableOptionsState',
  get:
    (variable: string) =>
    ({ get }) => {
      const groupIdx = get(groupIdxFromVariableState(variable))
      const userState = get(groupConfigState(groupIdx))
      const fullDomains = get(fullDomainState(variable))

      const group = get(groupState(groupIdx))
      let constrainedDomain = get(constrainedDomainState(variable))
      if (userState[variable]) {
        const { [variable]: _discarded, ...selectedWithout } = userState
        constrainedDomain = getConstrainedDomains([
          [selectedWithout],
          ...group
        ])[variable]
      }
      const defaultValue = get(suggestedVariableAssignmentState(variable))
      const forcedOption =
        !userState[variable] && constrainedDomain.length === 1
          ? constrainedDomain[0]
          : undefined
      const suggestedOption =
        !userState[variable] && constrainedDomain.length > 1
          ? defaultValue
          : undefined
      return {
        variable,
        selectedOption: userState[variable],
        suggestedOption: suggestedOption || forcedOption || userState[variable],
        forcedOption: forcedOption,
        options: fullDomains.map((value) => ({
          isSuggested: value === suggestedOption,
          value,
          isDisabled: !constrainedDomain.includes(value) || !!forcedOption
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
