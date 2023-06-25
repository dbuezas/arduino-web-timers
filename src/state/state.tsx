import { atom, useAtomValue, useSetAtom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { setHashFromObject, useHashChangedExternally } from './useHash'

import timers from '../data'
import { MicroControllers, PanelModes } from '../helpers/types'
import { memo } from 'react'

export const panelModeState = atom(PanelModes.Normal)
const defaultState: Record<string, string> = {
  mcu: MicroControllers.ATMEGA328P,
  timer: '0'
}

 const RegisterHashWatcher = memo(() => {
  const set = useSetAtom(userConfigStateBulk)
  const params = useHashChangedExternally()
  set({ ...defaultState, ...params })
  return <></>
})

 const RegisterHashUpdater = memo(() => {
  const obj = useAtomValue(userConfigStateBulk)
  setHashFromObject({ ...defaultState, ...obj })
  return <></>
})

export const RegisterHashLink = () => {
  return (
    <>
      <RegisterHashWatcher />
      <RegisterHashUpdater />
    </>
  )
}

export const userConfigStateBulk = atom(defaultState)

export const userConfigState = atomFamily((variable: string) =>
  atom(
    (get) => get(userConfigStateBulk)[variable],
    (get, set, value?: string) => {
      const was = get(userConfigStateBulk)
      if (value) {
        set(userConfigStateBulk, { ...was, [variable]: value })
      } else {
        const { [variable]: _removedValue, ...without } = was
        set(userConfigStateBulk, without)
      }
    }
  )
)

export const mcuTimers = atom((get) => {
  const micro = get(userConfigState('mcu')) as MicroControllers
  return timers[micro]
})
export const timerState = atom(
  (get) => get(mcuTimers)[+(get(userConfigState('timer')) || 0)]
)
