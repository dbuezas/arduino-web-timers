import { computed, signal } from '@preact/signals'
import { mapValues, uniq } from 'lodash-es'
import {
  getConstrainedDomains,
  getFullDomains,
  splitTables
} from '../helpers/helpers'
import { TRow, TTable } from '../helpers/types'
import { fromVarToSelectedValue, timerState } from '../state/state'

export const groups = computed(() => splitTables(timerState.value.configs))

const fromGroupToDomains = computed(() =>
  groups.value.map((group, groupIdx) =>
    computed(() => {
      const userState = fromGroupToUserConfig.value[groupIdx].value
      return getConstrainedDomains([[userState], ...group])
    })
  )
)
const fromGroupToFullDomains = computed(() =>
  groups.value.map((group, groupIdx) => {
    const userState = fromGroupToUserConfig.value[groupIdx].value
    return getFullDomains([...group, [userState]])
  })
)
const fromGroupToSuggestions = computed(() =>
  groups.value.map((group, groupIdx) =>
    computed(() => {
      const userState = fromGroupToUserConfig.value[groupIdx].value
      let domains = fromGroupToDomains.value[groupIdx].value
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
const fromGroupToUserConfig = computed(() =>
  groups.value.map((group) =>
    computed(() => {
      const relevantVariables = getVariables(group)
      const userConfig: TRow = {}
      for (const variable of relevantVariables) {
        fromVarToSelectedValue[variable] ??= signal(undefined) // TODO signal_init
        const userValue = fromVarToSelectedValue[variable].value
        if (userValue !== undefined) userConfig[variable] = userValue
      }
      return userConfig
    })
  )
)
const fromGroupToVars = computed(() => groups.value.map(getVariables))

const getVariables = (group: TTable[]) => {
  return uniq(group.flatMap((table: TTable) => Object.keys(table[0])))
}

export const fromVarToOptions = computed(() =>
  Object.fromEntries(
    fromGroupToVars.value.flatMap((variables, groupIdx) =>
      variables.map((variable) => [
        variable,
        computed(() => {
          const group = groups.value[groupIdx]
          const userState = fromGroupToUserConfig.value[groupIdx].value
          const fullDomains = fromGroupToFullDomains.value[groupIdx][variable]
          let constrainedDomain =
            fromGroupToDomains.value[groupIdx].value[variable]
          if (userState[variable]) {
            const { [variable]: _discarded, ...selectedWithout } = userState
            constrainedDomain = getConstrainedDomains([
              [selectedWithout],
              ...group
            ])[variable]
          }
          const defaultValue =
            fromGroupToSuggestions.value[groupIdx].value[variable]
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

export const getValue = (variable: string) => {
  return fromVarToOptions.value[variable]?.value.suggestedOption
}
export const allSuggestedValues = computed(() => {
  const assignments = fromGroupToSuggestions.value
    .map((assignment) => assignment.value)
    .flat()
  return Object.assign({}, ...assignments)
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
