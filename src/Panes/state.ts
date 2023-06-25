import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { mapValues, uniq } from 'lodash-es'
import {
  findOneSolution,
  getConstrainedDomains,
  getFullDomains,
  splitTables
} from '../helpers/helpers'
import { TRow, TTable } from '../helpers/types'
import { timerState, userConfigState } from '../state/state'

export const groupsState = atom((get) => splitTables(get(timerState).configs))
const groupState = atomFamily((groupIdx: number) =>
  atom((get) => {
    const tableSets = get(groupsState)
    return tableSets[groupIdx]
  })
)

const getVariables = (group: TTable[]) => {
  return uniq(group.flatMap((table: TTable) => Object.keys(table[0])))
}
const suggestedGroupAssignmentState = atomFamily((groupIdx: number) =>
  atom((get) => {
    const userState = get(groupConfigState(groupIdx))
    const group = get(groupState(groupIdx))
    const solution = findOneSolution([[userState], ...group])
    if (!solution) {
      // console.log('no solutioins found', userState, JSON.stringify(group))
      // this only happens with the numeric registers when removing them
      return {}
    }
    return solution
  })
)

export const suggestedVariableAssignmentState = atomFamily((variable: string) =>
  atom((get) => {
    const groupIdx = get(groupIdxFromVariableState(variable))
    if (groupIdx === -1) return undefined

    return get(suggestedGroupAssignmentState(groupIdx))[variable]
  })
)
export const suggestedAssignmentState = atom<TRow>((get) => {
  const assignments = get(groupsState)
    .map((_, i) => get(suggestedGroupAssignmentState(i)))
    .flat()
  return Object.assign({}, ...assignments)
})

const groupConfigState = atomFamily((groupIdx: number) =>
  atom((get) => {
    const group = get(groupState(groupIdx))
    const relevantVariables = getVariables(group)
    const userConfig: TRow = {}
    for (const variable of relevantVariables) {
      const userValue = get(userConfigState(variable))
      if (userValue !== undefined) userConfig[variable] = userValue
    }
    return userConfig
  })
)

const groupIdxFromVariableState = atomFamily((variable: string) =>
  atom((get) => {
    const tableSets = get(groupsState)
    const idx = tableSets.findIndex((group) =>
      group.some((table) => table[0].hasOwnProperty(variable))
    )
    return idx
  })
)

const constrainedGroupDomainsState = atomFamily((groupIdx: number) =>
  atom((get) => {
    const group = get(groupState(groupIdx))
    const userState = get(groupConfigState(groupIdx))
    return getConstrainedDomains([[userState], ...group])
  })
)
const fullGroupDomainsState = atomFamily((groupIdx: number) =>
  atom((get) => {
    const group = get(groupState(groupIdx))
    const userState = get(groupConfigState(groupIdx))
    return getFullDomains([...group, [userState]])
  })
)

export const variableOptionsState = atomFamily((variable: string) =>
  atom((get) => {
    const groupIdx = get(groupIdxFromVariableState(variable))
    if (groupIdx === -1) {
      return {
        variable,
        selectedOption: '',
        suggestedOption: '',
        forcedOption: '',
        options: []
      }
    }

    const userState = get(groupConfigState(groupIdx))
    const fullDomains = get(fullGroupDomainsState(groupIdx))[variable] || []

    const group = get(groupState(groupIdx))
    let constrainedDomain = get(constrainedGroupDomainsState(groupIdx))[
      variable
    ]
    if (userState[variable]) {
      const { [variable]: _discarded, ...selectedWithout } = userState
      constrainedDomain = getConstrainedDomains([[selectedWithout], ...group])[
        variable
      ]
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
  })
)

type TCheckboxGroupData = {
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
type TCheckboxMinimalGroupData = {
  variable: string
  options: {
    value: string
  }[]
}[]
