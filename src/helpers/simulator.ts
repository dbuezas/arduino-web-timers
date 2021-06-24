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
  let OCnXs = OCRnXs.map(() => 0)

  const actionAt = OCRnXs_behaviour.map((behaviour, i) => {
    const action = {
      setAt: { n: Number.NaN, dir: 0 },
      clearAt: { n: Number.NaN, dir: 0 },
      toggleAt: { n: Number.NaN, dir: 0 },
      matchAt: OCRnXs[i],
      insertDeadTimeOn: 'none' as 'none' | 'set' | 'clear',
      behaviour
    }
    switch (behaviour) {
      case 'set':
        action.setAt = { n: OCRnXs[i], dir: 1 }
        OCnXs[i] = 0
        break
      case 'clear':
        action.clearAt = { n: OCRnXs[i], dir: 1 }
        OCnXs[i] = 1
        break
      case 'toggle':
        action.toggleAt = { n: OCRnXs[i], dir: 1 }
        OCnXs[i] = 0
        break
      case 'set-on-match, clear-at-max':
        action.setAt = { n: OCRnXs[i], dir: 1 }
        action.clearAt = { n: top, dir: 1 }
        action.insertDeadTimeOn = 'set'
        OCnXs[i] = 0
        break
      case 'clear-on-match, set-at-max':
        action.clearAt = { n: OCRnXs[i], dir: 1 }
        action.setAt = { n: top, dir: 1 }
        action.insertDeadTimeOn = 'clear'
        OCnXs[i] = 1
        break
      case 'set-up, clear-down':
        action.setAt = { n: OCRnXs[i], dir: 1 }
        action.clearAt = { n: OCRnXs[i], dir: -1 }
        action.insertDeadTimeOn = 'set'
        OCnXs[i] = 0
        break
      case 'clear-up, set-down':
        action.clearAt = { n: OCRnXs[i], dir: 1 }
        action.setAt = { n: OCRnXs[i], dir: -1 }
        action.insertDeadTimeOn = 'clear'
        OCnXs[i] = 1
        break
    }
    return action
  })
  if (deadTimeEnable) {
    const A = actionAt[0]
    const B = actionAt[1]
    if (A.behaviour === B.behaviour) {
      A.insertDeadTimeOn = B.insertDeadTimeOn === 'set' ? 'clear' : 'set'
    } else {
      A.insertDeadTimeOn = B.insertDeadTimeOn
    }

    if (A.insertDeadTimeOn === 'set') A.setAt.n += deadTimeA * A.setAt.dir
    if (A.insertDeadTimeOn === 'clear') A.clearAt.n += deadTimeA * A.clearAt.dir
    if (B.insertDeadTimeOn === 'set') B.setAt.n += deadTimeB * B.setAt.dir
    if (B.insertDeadTimeOn === 'clear') B.clearAt.n += deadTimeB * B.clearAt.dir
    if (['PCPWM', 'PFCPWM'].includes(timerMode)) {
      if (A.clearAt.n > top) A.clearAt.n -= top + top
      if (A.clearAt.n < -top) A.clearAt.n += top + top
      if (A.setAt.n > top) A.setAt.n -= top + top
      if (A.setAt.n < -top) A.setAt.n += top + top
      if (B.setAt.n > top) B.setAt.n -= top + top
      if (B.setAt.n < -top) B.setAt.n += top + top
    }
    if (['FPWM'].includes(timerMode)) {
      A.clearAt.n %= top + 1
      A.setAt.n %= top + 1
      B.setAt.n %= top + 1
    }
  }
  let TCNT = -1
  let dir = 1
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
    const nextEvents = eventTimes
      .map((n) => (n - TCNT) * dir)
      .filter((n) => n > 0)
    const distToNext = Math.min(...nextEvents)
    let MATCH_Xs = OCRnXs.map(() => 0)
    let OVF = 0
    let CAPT = 0
    cpu += distToNext * prescaler
    TCNT += dir * distToNext
    if (TCNT === top + 1) TCNT = 0
    actionAt.forEach(({ setAt, clearAt, toggleAt, matchAt }, i) => {
      if (setAt.dir === dir && setAt.n === TCNT) OCnXs[i] = 1
      if (clearAt.dir === dir && clearAt.n === TCNT) OCnXs[i] = 0
      if (toggleAt.dir === dir && toggleAt.n === TCNT)
        OCnXs[i] = OCnXs[i] === 1 ? 0 : 1
      if (matchAt === TCNT) MATCH_Xs[i] = 1
    })
    if (TCNT === ICRn) CAPT = 1
    if (TCNT === counterMax && tovTime === 'MAX') OVF = 1
    if (TCNT === 0) {
      if (dir === -1 && tovTime === 'BOTTOM') OVF = 1
      if (['PCPWM', 'PFCPWM'].includes(timerMode)) dir = 1
    }
    if (TCNT === top) {
      if (dir === 1 && tovTime === 'TOP') OVF = 1
      if (['PCPWM', 'PFCPWM'].includes(timerMode)) dir = -1
    }

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
