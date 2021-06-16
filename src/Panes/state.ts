import { map, uniq } from 'lodash'
import { selector, selectorFamily } from 'recoil'
import {
  getValuesPerBitName,
  isTruthy,
  joinTables,
  splitTables
} from '../helpers/helpers'
import { TRow, TTable } from '../helpers/types'
import { timerState, userConfigBitState } from '../state/state'

export const tableSetsState = selector({
  key: 'tableSetsState',
  get: ({ get }) => splitTables(get(timerState).configs)
})
export const allSplitGroupsState = selector({
  key: 'allSplitGroupsState',
  get: ({ get }) => {
    const groups = get(tableSetsState).length
    return [...Array(groups)].map((_, i) => get(splitGroupsState(i)))
  }
})

export const suggestedConfigurationState = selector({
  key: 'suggestedConfigurationState',
  get: ({ get }) => {
    const groups = get(tableSetsState).length
    const allSplitGroups = [...Array(groups)].map((_, i) =>
      get(splitGroupsState(i))
    )
    return Object.fromEntries(
      allSplitGroups
        .flat()
        .map(({ bitName, suggestedOption }) => [bitName, suggestedOption])
    )
  }
})
const getBitNames = (tableSet: TTable[]) =>
  uniq(tableSet.flatMap((table: TTable) => Object.keys(table[0])))

export const relevantGroupConfigState = selectorFamily({
  key: 'relevantGroupConfigState',
  get:
    (idx: number) =>
    ({ get }) => {
      const tableSet = get(tableSetsState)[idx]
      const relevantBitNames = getBitNames(tableSet)
      const userConfig: TRow = {}
      for (const bitName of relevantBitNames) {
        const userBitConfig = get(userConfigBitState(bitName))
        if (userBitConfig !== null) userConfig[bitName] = userBitConfig
      }
      return userConfig
    }
})

export const splitGroupsState = selectorFamily({
  key: 'splitGroupsState',
  get:
    (idx: number) =>
    ({ get }) => {
      const tableSet = get(tableSetsState)[idx]
      const userState = get(relevantGroupConfigState(idx))
      const possibleFullAssignments = joinTables([[userState], ...tableSet])

      const optionsPerBitName = getValuesPerBitName(tableSet)

      const checkboxGroupData = map(
        optionsPerBitName,
        (allOptions, bitName) => {
          let joined
          if (userState[bitName]) {
            const selectedWithout = { ...userState, [bitName]: null }
            joined = joinTables([[selectedWithout], ...tableSet])
          } else {
            // optimization
            joined = possibleFullAssignments
          }

          const enabledOptions = uniq(
            joined.map((col) => col[bitName]).filter(isTruthy)
          )

          const forcedOption =
            !userState[bitName] && enabledOptions.length === 1
              ? possibleFullAssignments[0][bitName]
              : null
          const suggestedOption =
            !userState[bitName] && enabledOptions.length > 1
              ? possibleFullAssignments[0][bitName]
              : null
          return {
            bitName,
            selectedOption: userState[bitName],
            suggestedOption:
              suggestedOption || forcedOption || userState[bitName],
            forcedOption: forcedOption,
            options: allOptions.map((value, i) => ({
              isSuggested: value === suggestedOption,
              value,
              isDisabled: !enabledOptions.includes(value) || !!forcedOption
            }))
          }
        }
      )
      return checkboxGroupData
    }
})

export type TCheckboxGroupData = {
  bitName: string
  selectedOption: string | null
  suggestedOption: string | null
  forcedOption: string | null
  options: {
    isSuggested: boolean
    value: string
    isDisabled: boolean
  }[]
}[]
