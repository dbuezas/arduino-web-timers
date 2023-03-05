import { setHashFromObject, useHashChangedExternally } from './useHash'

import timers from '../data'
import { MicroControllers, PanelModes } from '../helpers/types'
import { batch, computed, Signal, signal } from '@preact/signals'
import mapValues from 'lodash/mapValues'
export const panelModeState = signal(PanelModes.Normal)
const defaultState: Record<string, string> = {
  mcu: MicroControllers.ATMEGA328P,
  timer: '0'
}

export const getBulk = () =>
  mapValues(fromVarToSelectedValue, (variable) => variable.value)
export const setBulk = (obj: Record<string, string>) => {
  batch(() => {
    const variables = Object.values(fromVarToSelectedValue)
    for (const variable of variables) {
      variable.value = undefined
    }
    for (const name in obj) {
      fromVarToSelectedValue[name] ??= signal(undefined)
      fromVarToSelectedValue[name].value = obj[name]
    }
  })
}

export const RegisterHashToState = () => {
  const params = useHashChangedExternally()
  setBulk({ ...defaultState, ...params })
  return <></>
}
export const RegisterStateToHash = () => {
  const obj = getBulk()
  setHashFromObject({ ...defaultState, ...obj })
  return <></>
}
export const RegisterHashLink = () => {
  return (
    <>
      <RegisterStateToHash />
      <RegisterHashToState />
    </>
  )
}

export const fromVarToSelectedValue: Record<
  string,
  Signal<string | undefined>
> = mapValues(defaultState, (value) => signal(value))

export const mcuTimers = computed(
  () => timers[fromVarToSelectedValue.mcu?.value as MicroControllers]
)
export const timerState = computed(() => {
  const timer = fromVarToSelectedValue.timer?.value || '0'
  return mcuTimers.value?.[+timer]
})
