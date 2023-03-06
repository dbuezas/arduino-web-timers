import { atom, useAtomValue, useSetAtom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { setHashFromObject, useHashChangedExternally } from './useHash'

import timers from '../data'
import { MicroControllers, PanelModes } from '../helpers/types'
import { uniq, without } from 'lodash-es'

export const panelModeState = atom(PanelModes.Normal)
const defaultState: Record<string, string> = {
  mcu: MicroControllers.ATMEGA328P,
  timer: '0'
}

export const RegisterHashUpdater = () => {
  const set = useSetAtom(userConfigStateBulk)
  const params = useHashChangedExternally()
  set(params)
  return <></>
}
export const RegisterHashWatcher = () => {
  const obj = useAtomValue(userConfigStateBulk)
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

const userConfigState_vars = atom<string[]>(
  []

  // The hack is to instantly update the userConfigState_vars array
  // otherwise it is imposible to accumulate the list of used variables in the family.
  // This is because subsequent synchronous calls to set the vars array atom don't get an up to date array
)

const userConfigState_store = atomFamily<string, string | undefined>(
  (variable) => atom(defaultState[variable])
)

export const userConfigState = atomFamily<string, string | undefined>(
  (variable: string) =>
    atom(
      (get) => get(userConfigState_store(variable)),
      (get, set, value) => {
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
    )
)

export const userConfigStateBulk = atom<Record<string, string | undefined>>(
  (get) => {
    const got = Object.fromEntries(
      get(userConfigState_vars).map((variable) => [
        variable,
        get(userConfigState(variable))
      ])
    ) as Record<string, string>
    return got
  },
  (get, set, value) => {
    const variables = uniq([
      ...get(userConfigState_vars),
      ...Object.keys(value)
    ])
    for (const variable of variables) {
      set(userConfigState(variable), value[variable])
    }
  }
)

export const mcuTimers = atom((get) => {
  const micro = get(userConfigState('mcu')) as MicroControllers
  return timers[micro]
})
export const timerState = atom(
  (get) => get(mcuTimers)[+(get(userConfigState('timer')) || 0)]
)
