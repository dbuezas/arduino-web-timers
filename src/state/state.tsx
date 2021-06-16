import { useParams } from 'react-router'
import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  selectorFamily,
  useSetRecoilState
} from 'recoil'
import timers from '../data/lgt328p'
import { useQueryString } from 'use-route-as-state'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

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

type RouterParams = {
  timerIdx: string
  mcu: string
}
function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
export const RegisterLocationState = () => {
  const { timerIdx, mcu } = useParams<RouterParams>()
  const setTimerIdx = useSetRecoilState(timerIdxState)
  const setMcu = useSetRecoilState(microControllerState)
  setTimerIdx(+timerIdx)
  setMcu(mcu as MicroControllers)

  const loc = useLocation()
  console.log('loc', loc)

  const setConfigBitBulk = useSetRecoilState(userConfigBitBulkState)
  let newUserConfig = Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  )
  const oldUserConfig = usePrevious(newUserConfig)
  console.log('RegisterLocationState', newUserConfig, oldUserConfig)
  const withNulls = {} as Record<string, string>
  for (const bitName in { ...oldUserConfig, ...newUserConfig }) {
    withNulls[bitName] = newUserConfig[bitName]
  }
  setConfigBitBulk(withNulls)

  return <></>
}
const userConfigState = atomFamily<string | null, string>({
  key: 'userConfigState',
  default: (param) => null
})

export const userConfigBitState = selectorFamily<string | null, string>({
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
      const currentBitValue = get(userConfigState(bitName))
      value = value instanceof DefaultValue ? null : value
      let params = new URLSearchParams(window.location.search)
      if (currentBitValue !== value) {
        if (value === null || value === undefined) {
          params.delete(bitName)
          set(userConfigState(bitName), null)
        } else {
          params.set(bitName, value)

          set(userConfigState(bitName), value)
        }
      }
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}?${params}`
      )
    }
})
export const userConfigBitBulkState = selector<Record<string, string>>({
  key: 'userConfigBitBulkState',
  get: ({ get }) => {
    throw new Error('Dont use')
  },
  set: ({ set }, obj) => {
    if (obj instanceof DefaultValue) return
    for (const key in obj) {
      set(userConfigBitState(key), obj[key])
    }
  }
})
export const timerIdxState = atom({
  key: 'timerIdxState',
  default: 0
})
export const microControllerState = atom({
  key: 'microControllerState',
  default: MicroControllers.LGT8F328P
})
export const timerState = selector({
  key: 'timerState',
  get: ({ get }) => timers[get(timerIdxState)]
})
