/* eslint-disable no-loop-func */
/*
PCPWM == updates at top
PFCPWM == updates at bottom
but this should be passed from update OCRnX upate time bit value
*/

import { uniq } from 'lodash'

type Props = {
  timerMode: 'Normal' | 'PCPWM' | 'CTC' | 'FPWM' | 'PFCPWM'
  maxCpuTicks: number
  prescaler: number
  cpuHz: number
  top: number
  counterMax: number
  tovTime: 'BOTTOM' | 'TOP' | 'MAX'
  OCRnXs: number[]
  OCRnXs_behaviour: (
    | 'clear'
    | 'set'
    | 'set-on-match, clear-at-max'
    | 'clear-on-match, set-at-max'
    | 'toggle'
    | 'clear-up, set-down'
    | 'set-up, clear-down'
  )[]
  deadTimeEnable: boolean
  deadTimeA: number
  deadTimeB: number
  ICRn: number
}

export default function simTimer({
  timerMode,
  maxCpuTicks,
  prescaler,
  cpuHz,
  top,
  counterMax,
  tovTime,
  OCRnXs,
  OCRnXs_behaviour,
  deadTimeEnable,
  deadTimeA,
  deadTimeB,
  ICRn
}: Props) {
  // TODO: refactor the simulation

  const results = {
    t: [] as number[],
    cpu: [] as number[],
    TCNT: [] as number[],
    OCnXs: OCRnXs.map(() => [] as number[]),
    MATCH_Xs: OCRnXs.map(() => [] as number[]),
    OVF: [] as number[],
    CAPT: [] as number[]
  }
  const actionAt = OCRnXs_behaviour.map((behaviour, i) => {
    const action = {
      setAt: Number.NaN,
      clearAt: Number.NaN,
      toggleAt: Number.NaN,
      matchAt: OCRnXs[i]
    }
    switch (behaviour) {
      case 'set':
        action.setAt = OCRnXs[i]
        break
      case 'clear':
        action.clearAt = OCRnXs[i]
        break
      case 'toggle':
        action.toggleAt = OCRnXs[i]
        break
      case 'set-on-match, clear-at-max':
        action.setAt = OCRnXs[i]
        action.clearAt = top
        break
      case 'clear-on-match, set-at-max':
        action.clearAt = OCRnXs[i]
        action.setAt = top
        break
      case 'set-up, clear-down':
        action.setAt = OCRnXs[i]
        action.clearAt = -OCRnXs[i]
        break
      case 'clear-up, set-down':
        action.clearAt = OCRnXs[i]
        action.setAt = -OCRnXs[i]
        break
    }
    return action
  })
  if (deadTimeEnable) {
    if (OCRnXs_behaviour[0] === OCRnXs_behaviour[1]) {
      actionAt[0].setAt = actionAt[1].setAt
      actionAt[0].clearAt = actionAt[1].clearAt + deadTimeA
      actionAt[1].setAt = actionAt[1].setAt + deadTimeB
    } else {
      actionAt[0].clearAt = actionAt[1].setAt
      actionAt[0].setAt = actionAt[1].clearAt + deadTimeA
      actionAt[1].setAt = actionAt[1].setAt + deadTimeB
    }
    if (['PCPWM', 'PFCPWM'].includes(timerMode)) {
      if (actionAt[0].clearAt > top)
        actionAt[0].clearAt = actionAt[0].clearAt - top - top - 2
      if (actionAt[0].clearAt < -top)
        actionAt[0].clearAt = actionAt[0].clearAt + top + top + 2
      if (actionAt[0].setAt > top)
        actionAt[0].setAt = actionAt[0].setAt - top - top - 2
      if (actionAt[0].setAt < -top)
        actionAt[0].setAt = actionAt[0].setAt + top + top + 2
      if (actionAt[1].setAt > top)
        actionAt[1].setAt = actionAt[1].setAt - top - top - 2
      if (actionAt[1].setAt < -top)
        actionAt[1].setAt = actionAt[1].setAt + top + top + 2
    } /*FPWM*/ else {
      actionAt[0].clearAt = actionAt[0].clearAt % (top + 1)
      actionAt[0].setAt = actionAt[0].setAt % (top + 1)
      actionAt[1].setAt = actionAt[1].setAt % (top + 1)
    }
  }
  let TCNT = -1
  let dir = 1
  let OCnXs = OCRnXs.map(() => 0)
  OCRnXs_behaviour.forEach((behaviour, x) => {
    if (behaviour === 'clear') OCnXs[x] = 1
  })
  let cpu = -1
  let eventTimes = [
    // only when TCNT equals these values, something can happen
    // values surounding the events are added to ensure the plot
    // keeps the lines at their values until a change happens
    top + 1,
    counterMax,
    0,
    top,
    ...actionAt.map(Object.values),
    ICRn,
    maxCpuTicks - 1,
    maxCpuTicks
  ]
    .flat()
    .map((n) => Math.abs(n || 0))
    .flatMap((n) => [n - 1, n, n + 1])
  eventTimes = uniq(eventTimes)
  while (cpu < maxCpuTicks) {
    cpu += prescaler
    TCNT += dir
    let distToNext
    const nextEvents = eventTimes
      // eslint-disable-next-line no-loop-func
      .map((n) => (n - TCNT) * dir)
      .filter((n) => n >= 0)
    distToNext = Math.min(...nextEvents)
    let MATCH_Xs = OCRnXs.map(() => 0)
    let OVF = 0
    let CAPT = 0
    cpu += distToNext * prescaler
    TCNT += dir * distToNext
    if (TCNT === top + 1) TCNT = 0

    if (TCNT === counterMax && tovTime === 'MAX') OVF = 1

    if (TCNT === 0) {
      if (dir === -1 && tovTime === 'BOTTOM') OVF = 1
      if (['PCPWM', 'PFCPWM'].includes(timerMode)) dir = 1
    }
    if (TCNT === top) {
      if (dir === 1 && tovTime === 'TOP') OVF = 1
      if (['PCPWM', 'PFCPWM'].includes(timerMode)) dir = -1
    }
    actionAt.forEach(({ setAt, clearAt, toggleAt, matchAt }, i) => {
      if (TCNT * dir === setAt) OCnXs[i] = 1
      if (TCNT * dir === clearAt) OCnXs[i] = 0
      if (TCNT * dir === toggleAt) OCnXs[i] = OCnXs[i] === 1 ? 0 : 1
      if (TCNT * dir === matchAt) MATCH_Xs[i] = 1
    })

    if (TCNT === ICRn) CAPT = 1 //CAPT
    results.t.push(cpu / cpuHz)
    results.cpu.push(cpu)
    results.TCNT.push(TCNT)
    results.OVF.push(OVF)
    results.CAPT.push(CAPT)
    for (const i in OCRnXs_behaviour) {
      results.OCnXs[i].push(OCnXs[i])
      results.MATCH_Xs[i].push(MATCH_Xs[i])
    }
  }
  return results
}

export type Simulation = ReturnType<typeof simTimer>
