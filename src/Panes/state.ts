import { uniq } from 'lodash'
import { selector, selectorFamily } from 'recoil'
import { isTruthy, joinTables, splitTables } from '../helpers/helpers'
import { TRow, TTable } from '../helpers/types'
import { timerState, userConfigBitState } from '../state/state'

export const groupsState = selector({
  key: 'groupsState',
  get: ({ get }) => splitTables(get(timerState).configs)
})

const getBitNames = (group: TTable[]) =>
  uniq(group.flatMap((table: TTable) => Object.keys(table[0])))

export const suggestedAssignmentState = selector<TRow>({
  key: 'suggestedAssignmentState',
  get: ({ get }) => {
    const assignments = get(groupsState)
      .map((_, i) => get(groupAssignmentsState(i))[0])
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
export const groupAssignmentsState = selectorFamily({
  key: 'groupAssignmentsState',
  get:
    (groupIdx: number) =>
    ({ get }) => {
      const tableSets = get(groupsState)
      const group = tableSets[groupIdx]
      const userState = get(groupConfigState(groupIdx))
      return joinTables([[userState], ...group])
    }
})
export const allBitOptionsState = selectorFamily({
  key: 'allBitOptionsState',
  get:
    (bitName: string) =>
    ({ get }) => {
      const group = get(groupFromBitNameState(bitName))
      return uniq(
        group
          .flat()
          .map((col) => col[bitName])
          .filter(isTruthy)
      )
    }
})
export const enabledBitOptions = selectorFamily({
  key: 'enabledBitOptions',
  get:
    (bitName: string) =>
    ({ get }) => {
      const group = get(groupFromBitNameState(bitName))
      const groupIdx = get(groupIdxFromBitNameState(bitName))
      const userState = get(groupConfigState(groupIdx))
      const fullAssignments = get(groupAssignmentsState(groupIdx))
      let enabledAssignments = fullAssignments
      if (userState[bitName]) {
        const selectedWithout = { ...userState, [bitName]: undefined }
        enabledAssignments = joinTables([[selectedWithout], ...group])
      }
      return uniq(
        enabledAssignments.map((col) => col[bitName]).filter(isTruthy)
      )
    }
})
export const bitOptionsState = selectorFamily({
  key: 'bitOptionsState',
  get:
    (bitName: string) =>
    ({ get }) => {
      const groupIdx = get(groupIdxFromBitNameState(bitName))
      const userState = get(groupConfigState(groupIdx))
      const fullAssignments = get(groupAssignmentsState(groupIdx))
      const allBitOptions = get(allBitOptionsState(bitName))
      const enabledOptions = get(enabledBitOptions(bitName))
      const forcedOption =
        !userState[bitName] && enabledOptions.length === 1
          ? fullAssignments[0][bitName]
          : undefined
      const suggestedOption =
        !userState[bitName] && enabledOptions.length > 1
          ? fullAssignments[0][bitName]
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
