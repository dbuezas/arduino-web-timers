import { computed, signal } from '@preact/signals'
import mapValues from 'lodash/mapValues'
import uniq from 'lodash/uniq'
import {
  getConstrainedDomains,
  splitTables,
  getFullDomains
} from '../helpers/helpers'
import { TRow, TTable } from '../helpers/types'
import { timerState, userConfigState } from '../state/state'

export const groupState = computed(() => splitTables(timerState.value.configs))

const getVariables = (group: TTable[]) => {
  return uniq(group.flatMap((table: TTable) => Object.keys(table[0])))
}

const variablesState = computed(() => groupState.value.map(getVariables))
export const suggestedGroupAssignmentState = computed(() =>
  groupState.value.map((group, groupIdx) =>
    computed(() => {
      const userState = groupConfigState.value[groupIdx].value
      let domains = constrainedGroupDomainsState.value[groupIdx].value
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
    })
  )
)

export const suggestedVariableAssignmentState = computed(() =>
  Object.fromEntries(
    variablesState.value.flatMap((variables, groupIdx) =>
      variables.map((variable) => [
        variable,
        computed(
          () => suggestedGroupAssignmentState.value[groupIdx].value[variable]
        )
      ])
    )
  )
)
export const suggestedAssignmentState = computed(() => {
  const assignments = suggestedGroupAssignmentState.value
    .map((assignment) => assignment.value)
    .flat()
  return Object.assign({}, ...assignments)
})

export const groupConfigState = computed(() =>
  groupState.value.map((group) =>
    computed(() => {
      const relevantVariables = getVariables(group)
      const userConfig: TRow = {}
      for (const variable of relevantVariables) {
        userConfigState[variable] ??= signal(undefined) // TODO signal_init
        const userValue = userConfigState[variable].value
        if (userValue !== undefined) userConfig[variable] = userValue
      }
      return userConfig
    })
  )
)

export const groupIdxFromVariableState = computed(() =>
  Object.fromEntries(
    variablesState.value.flatMap((variables, groupIdx) =>
      variables.map((variable) => [variable, groupIdx])
    )
  )
)

export const groupFromVariableState = computed(() =>
  Object.fromEntries(
    variablesState.value.flatMap((vaiables, groupIdx) =>
      vaiables.map((variable) => [variable, groupState.value[groupIdx]])
    )
  )
)

export const constrainedGroupDomainsState = computed(() =>
  groupState.value.map((group, groupIdx) =>
    computed(() => {
      const userState = groupConfigState.value[groupIdx].value
      return getConstrainedDomains([[userState], ...group])
    })
  )
)

export const fullGroupDomainsState = computed(() =>
  groupState.value.map((group, groupIdx) => {
    const userState = groupConfigState.value[groupIdx].value
    return getFullDomains([...group, [userState]])
  })
)
export const constrainedDomainState = computed(() =>
  Object.fromEntries(
    variablesState.value.flatMap((variables) =>
      variables.map((variable) => [
        variable,
        computed(() => {
          const groupIdx = groupIdxFromVariableState.value[variable]
          return constrainedGroupDomainsState.value[groupIdx].value[variable]
        })
      ])
    )
  )
)
export const fullDomainState = computed(() =>
  Object.fromEntries(
    variablesState.value.flatMap((variables) =>
      variables.map((variable) => [
        variable,
        fullGroupDomainsState.value[groupIdxFromVariableState.value[variable]][
          variable
        ]
      ])
    )
  )
)

export const variableOptionsState = computed(() =>
  Object.fromEntries(
    variablesState.value.flatMap((variables, groupIdx) =>
      variables.map((variable) => [
        variable,
        computed(() => {
          const group = groupState.value[groupIdx]
          const userState = groupConfigState.value[groupIdx].value
          const fullDomains = fullDomainState.value[variable]
          let constrainedDomain = constrainedDomainState.value[variable].value
          if (userState[variable]) {
            const { [variable]: _discarded, ...selectedWithout } = userState
            constrainedDomain = getConstrainedDomains([
              [selectedWithout],
              ...group
            ])[variable]
          }
          const defaultValue =
            suggestedVariableAssignmentState.value[variable].value
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
            suggestedOption:
              suggestedOption || forcedOption || userState[variable],
            forcedOption: forcedOption,
            options: fullDomains.map((value) => ({
              isSuggested: value === suggestedOption,
              value,
              isDisabled: !constrainedDomain.includes(value) || !!forcedOption
            }))
          }
        })
      ])
    )
  )
)

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
