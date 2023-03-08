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

const userConfigState_vars = atom<string[]>([])

const userConfigState_store = atomFamily((variable: string) =>
  atom<string | undefined>(defaultState[variable])
)

export const userConfigState = atomFamily((variable: string) =>
  atom(
    (get) => get(userConfigState_store(variable)),
    (_get, set, value: string | undefined) => {
      set(userConfigState_store(variable), value)
      set(userConfigState_vars, (vars_old) =>
        value === undefined
          ? without(vars_old, variable)
          : uniq([...vars_old, variable])
      )
    }
  )
)

export const userConfigStateBulk = atom(
  (get) =>
    Object.fromEntries(
      get(userConfigState_vars).map((variable) => [
        variable,
        get(userConfigState(variable))
      ])
    ),
  (get, set, value: Record<string, string | undefined>) => {
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
