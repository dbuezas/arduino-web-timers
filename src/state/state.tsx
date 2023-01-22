import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  selectorFamily,
  useSetRecoilState
} from 'recoil'
import { setHashFromObject, setHashParam, useHashParams } from './useHash'

import timers from '../data'
import { useEffect, useRef } from 'react'
import { MicroControllers, PanelModes } from '../helpers/types'

export const panelModeState = atom({
  key: 'PanelModeState',
  default: PanelModes.Normal
})

export function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
const defaultState = { mcu: MicroControllers.LGT8F328P, timer: '0' }
export const RegisterLocationStateChange = () => {
  const params = useHashParams()
  const prev = usePrevious(params)
  const withNulls: Record<string, string | undefined> = { ...defaultState }
  for (const key in { ...params, ...prev }) {
    withNulls[key] = params[key]
  }
  useSetRecoilState(userConfigBulkState)(withNulls)
  return <></>
}
export const RegisterLocationState = () => {
  return (
    <>
      <RegisterLocationStateChange />
    </>
  )
}
const userConfigState_internal = atomFamily<string | undefined, string>({
  key: 'userConfigState_internal',
  default: (param) => undefined
})
const userConfigBulkState = selector<Record<string, string | undefined>>({
  key: 'userConfigBulkState',
  get: ({ get }) => {
    throw new Error('Dont use')
  },
  set: ({ set }, obj) => {
    if (obj instanceof DefaultValue) return
    for (const key in obj) {
      set(userConfigState_internal(key), obj[key])
    }
    setHashFromObject(obj)
  }
})

export const userConfigState = selectorFamily<string | undefined, string>({
  key: 'userConfigState',
  get:
    (variable: string) =>
    ({ get }) =>
      get(userConfigState_internal(variable)),
  set:
    (variable: string) =>
    ({ get, set }, value) => {
      if (value instanceof DefaultValue) value = undefined
      const current = get(userConfigState_internal(variable))
      if (current !== value) {
        set(userConfigState_internal(variable), value)
        setHashParam(variable, value)
      }
    }
})

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
