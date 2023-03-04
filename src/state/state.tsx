import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  selectorFamily,
  useRecoilValue,
  useSetRecoilState
} from 'recoil'
import { setHashFromObject, useHashChangedExternally } from './useHash'

import timers from '../data'
import { MicroControllers, PanelModes } from '../helpers/types'
import without from 'lodash/without'
import uniq from 'lodash/uniq'

export const panelModeState = atom({
  key: 'PanelModeState',
  default: PanelModes.Normal
})
const defaultState: Record<string, string> = {
  mcu: MicroControllers.ATMEGA328P,
  timer: '0'
}

export const RegisterHashUpdater = () => {
  const set = useSetRecoilState(userConfigStateBulk)
  const params = useHashChangedExternally()
  set(params)
  return <></>
}
export const RegisterHashWatcher = () => {
  const obj = useRecoilValue(userConfigStateBulk)
  setHashFromObject({ ...defaultState, ...obj })
  return <></>
}
export const RegisterHashLink = () => {
  return (
    <>
      <RegisterHashWatcher />
      <RegisterHashUpdater />
    </>
  )
}

const userConfigState_vars = atom<string[]>({
  key: 'userConfigState_vars',
  default: [],

  // The hack is to instantly update the userConfigState_vars array
  // otherwise it is imposible to accumulate the list of used variables in the family.
  // This is because subsequent synchronous calls to set the vars array atom don't get an up to date array
  dangerouslyAllowMutability: true
})

const userConfigState_store = atomFamily<string | undefined, string>({
  key: 'userConfigState_store',
  default: (variable) => defaultState[variable]
})

export const userConfigState = selectorFamily<string | undefined, string>({
  key: 'userConfigState',
  get:
    (variable: string) =>
    ({ get }) =>
      get(userConfigState_store(variable)),
  set:
    (variable: string) =>
    ({ set }, value) => {
      if (value instanceof DefaultValue) value = undefined
      set(userConfigState_store(variable), value)
      set(userConfigState_vars, (vars_old) => {
        let vars_new =
          value === undefined
            ? without(vars_old, variable)
            : uniq([...vars_old, variable])
        vars_old.length = 0 // Here the hack. Next set will get also the new vars
        vars_old.push(...vars_new)
        return vars_new // but return a different reference to trigger rerener
      })
    }
})

export const userConfigStateBulk = selector<Record<string, string | undefined>>(
  {
    key: 'userConfigStateBulk',
    get: ({ get }) => {
      const got = Object.fromEntries(
        get(userConfigState_vars).map((variable) => [
          variable,
          get(userConfigState(variable))
        ])
      ) as Record<string, string>
      return got
    },
    set: ({ get, set }, value) => {
      if (value instanceof DefaultValue) return console.warn('why')
      const variables = uniq([
        ...get(userConfigState_vars),
        ...Object.keys(value)
      ])
      for (const variable of variables) {
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
