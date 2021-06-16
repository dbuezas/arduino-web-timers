import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  selectorFamily,
  useSetRecoilState
} from 'recoil'
import { setHashFromObject, setHashParam, useHashParams } from './useHash'

import timers from '../data/lgt328p'
import { useEffect, useRef } from 'react'

export enum PanelModes {
  Normal = 'Normal',
  Internal = 'With Internals',
  ByDependencies = 'By Dependencies'
}
export const panelModeState = atom({
  key: 'PanelModeState',
  default: PanelModes.Normal
})

export enum MicroControllers {
  LGT8F328P = 'LGT8F328P',
  ATMEGA328P = 'ATMEGA328P'
}

function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
const defaultState = { mcu: MicroControllers.LGT8F328P, timer: '0' }
export const RegisterLocationState = () => {
  const params = useHashParams()
  const prev = usePrevious(params)
  const withNulls: Record<string, string | undefined> = { ...defaultState }
  for (const key in { ...params, ...prev }) {
    withNulls[key] = params[key]
  }
  useSetRecoilState(userConfigBitBulkState)(withNulls)
  return <></>
}
const userConfigState = atomFamily<string | undefined, string>({
  key: 'userConfigState',
  default: (param) => undefined
})
const userConfigBitBulkState = selector<Record<string, string | undefined>>({
  key: 'userConfigBitBulkState',
  get: ({ get }) => {
    throw new Error('Dont use')
  },
  set: ({ set }, obj) => {
    if (obj instanceof DefaultValue) return
    for (const key in obj) {
      set(userConfigState(key), obj[key])
    }
    setHashFromObject(obj)
  }
})

export const userConfigBitState = selectorFamily<string | undefined, string>({
  key: 'userConfigBitState',
  get:
    (bitName: string) =>
    ({ get }) => {
      const val = get(userConfigState(bitName))
      return val
    },
  set:
    (bitName: string) =>
    ({ get, set }, value) => {
      if (value instanceof DefaultValue) value = undefined
      const current = get(userConfigState(bitName))
      if (current !== value) {
        set(userConfigState(bitName), value)
        setHashParam(bitName, value)
      }
    }
})

export const timerState = selector({
  key: 'timerState',
  get: ({ get }) => timers[+(get(userConfigBitState('timer')) || 0)]
})
