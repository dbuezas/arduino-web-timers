import { setHashFromObject, useHashChangedExternally } from './useHash'

import timers from '../data'
import { MicroControllers, PanelModes } from '../helpers/types'
import without from 'lodash/without'
import uniq from 'lodash/uniq'
import { computed, Signal, signal } from '@preact/signals'
import mapValues from 'lodash/mapValues'
export const panelModeState = signal(PanelModes.Normal)
const defaultState: Record<string, string> = {
  mcu: MicroControllers.ATMEGA328P,
  timer: '0'
}

export const RegisterHashUpdater = () => {
  return <></>
  //TODO: impl hash
  // const set = useSetRecoilState(userConfigStateBulk)
  // const params = useHashChangedExternally()
  // set(params)
  // return <></>
}
export const RegisterHashWatcher = () => {
  return <></>
  //TODO: impl hash
  // const obj = useRecoilValue(userConfigStateBulk)
  // setHashFromObject({ ...defaultState, ...obj })
  // return <></>
}
export const RegisterHashLink = () => {
  return (
    <>
      <RegisterHashWatcher />
      <RegisterHashUpdater />
    </>
  )
}

export const userConfigState: Record<
  string,
  Signal<string | undefined>
> = mapValues(defaultState, (value) => signal(value))

export const mcuTimers = computed(
  () => timers[userConfigState.mcu?.value as MicroControllers]
)
export const timerState = computed(() => {
  const timer = userConfigState.timer?.value || '0'
  return mcuTimers.value?.[+timer]
})
