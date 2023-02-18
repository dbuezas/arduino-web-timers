import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  selectorFamily,
  useSetRecoilState
} from 'recoil'
import { setHashFromObject, useHashChangedExternally } from './useHash'

import timers from '../data'
import { MicroControllers, PanelModes } from '../helpers/types'
import { uniq, without } from 'lodash'

export const panelModeState = atom({
  key: 'PanelModeState',
  default: PanelModes.Normal
})

export const RegisterHashWatcher = () => {
  const set = useSetRecoilState(userConfigStateBulk)
  const params = useHashChangedExternally()
  set(params)
  return <></>
}
const defaultState: Record<string, string> = {
  mcu: MicroControllers.ATMEGA328P,
  timer: '0'
}

const userConfigState_vars = atom<string[]>({
  key: 'userConfigState_vars',
  default: [] //Object.keys(defaultState)
})

const userConfigState_store = atomFamily<string | undefined, string>({
  key: 'userConfigState_store',
  default: (param) => defaultState[param]
})

export const userConfigState = selectorFamily<string | undefined, string>({
  key: 'userConfigState',
  get:
    (variable: string) =>
    ({ get }) =>
      get(userConfigState_store(variable)),
  set:
    (variable: string) =>
    ({ get, set }, value) => {
      if (value instanceof DefaultValue) value = undefined
      const current = get(userConfigState_store(variable))
      if (current !== value) {
        set(userConfigState_store(variable), value)
        set(userConfigState_vars, (prev) => {
          if (value === undefined) return without(prev, variable)
          else return uniq([...prev, variable])
        })
        const obj = { ...get(userConfigStateBulk), [variable]: value }
        console.log(get(userConfigStateBulk), obj)
        setHashFromObject(obj)
      }
    }
})

export const userConfigStateBulk = selector<Record<string, string | undefined>>(
  {
    key: 'userConfigStateBulk',
    get: ({ get }) =>
      Object.fromEntries(
        get(userConfigState_vars).map((variable) => [
          variable,
          get(userConfigState_store(variable))
        ])
      ) as Record<string, string>,
    set: ({ get, set }, value) => {
      if (value instanceof DefaultValue) return console.warn('why')
      const variables = uniq([
        ...get(userConfigState_vars),
        ...Object.keys(value)
      ])
      for (const variable of variables) {
        // problem is here: userConfigStte needs the bulk and it sets it wrong
        set(userConfigState(variable), value[variable])
      }
    }
  }
)

export const mcuTimers = selector({
  key: 'mcuTimers',
  get: ({ get }) => {
    const micro = get(userConfigState('mcu')) as MicroControllers
    return timers[micro]
  }
})
export const timerState = selector({
  key: 'timerState',
  get: ({ get }) => get(mcuTimers)[+(get(userConfigState('timer')) || 0)]
})
