/* eslint-disable no-loop-func */
import { uniq } from 'lodash-es'
import Fraction from 'fraction.js'
/*
PCPWM == updates at top
PFCPWM == updates at bottom
but this should be passed from update OCRnX upate time bit value
*/
type TimerMode = 'Normal' | 'PCPWM' | 'CTC' | 'FPWM' | 'PFCPWM'
type Counter = { tcnt: number; dir: number }
const tcntToCpu = ({ tcnt, dir }: Counter, top: number) => {
  if (dir === -1) return 2 * top - tcnt
  return tcnt
}
const offsetCounter = (
  counter: Counter,
  offset: number,
  top: number,
  timerMode: TimerMode
) => cpuToTcnt(tcntToCpu(counter, top) + offset, top, timerMode)

const getTimerLength = (top: number, timerMode: TimerMode) => {
  const isDoubleSlope = ['PCPWM', 'PFCPWM'].includes(timerMode)
  return isDoubleSlope ? top * 2 : top
}
const cpuToTcnt = (cpu: number, top: number, timerMode: TimerMode) => {
  while (cpu < 0 && top > 0) cpu += top
  const isDoubleSlope = ['PCPWM', 'PFCPWM'].includes(timerMode)
  if (!isDoubleSlope) {
    // e.g top = 3
    // 0 1 2 3 4 -- cpu
    // 0 1 2 3 0 -- single slope
    return { tcnt: cpu % (top + 1), dir: 1 }
  }
  // e.g top = 3
  // 0 1 2 3 4 5 6
  // 0 1 2 3 2 1 0 -- double slope
  const tcnt = cpu % (top * 2)
  if (tcnt < top) return { tcnt, dir: 1 }
  return { tcnt: top * 2 - tcnt, dir: -1 }
}
const matches = (a: Counter, b: Counter) => a.tcnt === b.tcnt && a.dir === b.dir

type Props = {
  timerMode: TimerMode
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
  ICRn: number
  deadTimeEnable: boolean
  deadTimeA: number
  deadTimeB: number
}
const TOGGLE = -1
export default function simTimer({
  timerMode,
  prescaler,
  cpuHz,
  top,
  counterMax,
  tovTime,
  OCRnXs,
  OCRnXs_behaviour,
  ICRn,
  deadTimeEnable,
  deadTimeA,
  deadTimeB
}: Props) {
  const timerLength = getTimerLength(top, timerMode)
  const prescaledCPUEnd = timerLength * 4
  const results = {
    t: [] as number[],
    cpu: [] as number[],
    TCNT: [] as number[],
    OCnXs: OCRnXs.map(() => [] as number[]),
    OCnXsDuty: OCRnXs.map(() => 0),
    MATCH_Xs: OCRnXs.map(() => [] as number[]),
    OVF: [] as number[],
    CAPT: [] as number[],
    deadTimes: [[], []] as number[][],
    freq:
      timerLength === 0
        ? new Fraction(0)
        : new Fraction(cpuHz).div(timerLength).div(prescaler)
  }
  if (isNaN(top)) return results
  let OCnXs = OCRnXs.map(() => 0)
  let deadTimes = [0, 0]

  const actions = OCRnXs_behaviour.map((behaviour, i) => {
    const action = {
      at: [] as { tcnt: number; dir: number; to: number }[],
      matchAt: OCRnXs[i],
      behaviour
    }
    switch (behaviour) {
      case 'set':
        action.at = [{ tcnt: OCRnXs[i], dir: 1, to: 1 }]
        break
      case 'clear':
        action.at = [{ tcnt: OCRnXs[i], dir: 1, to: 0 }]
        break
      case 'toggle':
        action.at = [{ tcnt: OCRnXs[i], dir: 1, to: TOGGLE }]
        break
      case 'set-on-match, clear-at-max':
        action.at = [
          { tcnt: OCRnXs[i], dir: 1, to: 1 },
          { tcnt: top, dir: 1, to: 0 }
        ]
        break
      case 'clear-on-match, set-at-max':
        action.at = [
          { tcnt: OCRnXs[i], dir: 1, to: 0 },
          { tcnt: top, dir: 1, to: 1 }
        ]
        break
      case 'set-up, clear-down':
        action.at = [
          { tcnt: OCRnXs[i], dir: 1, to: 1 },
          { tcnt: OCRnXs[i], dir: -1, to: 0 }
        ]
        break
      case 'clear-up, set-down':
        action.at = [
          { tcnt: OCRnXs[i], dir: 1, to: 0 },
          { tcnt: OCRnXs[i], dir: -1, to: 1 }
        ]
        break
    }
    OCnXs[i] = +!action.at[0]?.to || 0
    return action
  })

  let actionDeadTimeA = [] as { tcnt: number; dir: number; to: number }[]
  let actionDeadTimeB = [] as { tcnt: number; dir: number; to: number }[]
  const isDoubleSlope = ['PCPWM', 'PFCPWM'].includes(timerMode)
  const period = !isDoubleSlope ? top + 1 : top * 2
  if (deadTimeEnable) {
    /* deadtime 

      Output B (index 1) determines duty

      setB at setB + deadTimeB
      changeA at setB (to !isAInverted)
      clearB at clearB
      changeA at clearB+deadTimeA (to isAInverted)
    */
    const bClear = actions[1].at.find(({ to }) => to === 0)!
    const bSet = actions[1].at.find(({ to }) => to === 1)!
    actionDeadTimeA = [{ to: 1, tcnt: bClear.tcnt, dir: bClear.dir }]
    if (deadTimeA < period) {
      actionDeadTimeA.push({
        to: 0,
        ...offsetCounter(bClear, deadTimeA, top, timerMode)
      })
    }
    actionDeadTimeB = [{ to: 1, tcnt: bSet.tcnt, dir: bSet.dir }]
    if (deadTimeB < period) {
      actionDeadTimeB.push({
        to: 0,
        ...offsetCounter(bSet, deadTimeB, top, timerMode)
      })
    }
  }
  let tcntEventTimes = [
    // Optimization:
    // Things happen only when TCNT equals these values.
    // values surounding the events are added to ensure the plot
    // keeps the lines at their values until a change happens
    0,
    ...OCRnXs,
    ICRn,
    ...actionDeadTimeA.map(({ tcnt }) => tcnt),
    ...actionDeadTimeB.map(({ tcnt }) => tcnt),
    top,
    counterMax
  ]
    .flatMap((n) => [n - 1, n, n + 1])
    .filter(Number.isFinite)

  let prescaledCPU = -1
  tcntEventTimes = uniq(tcntEventTimes)

  let counter = {
    tcnt: -1,
    dir: 1
  }
  while (prescaledCPU <= prescaledCPUEnd) {
    const nextEvents = tcntEventTimes
      .map((n) => (n - counter.tcnt) * counter.dir)
      .filter((n) => n > 0)
    let distToNext = Math.min(...nextEvents)
    let MATCH_Xs = OCRnXs.map(() => 0)
    let OVF = 0
    let CAPT = 0
    prescaledCPU += distToNext

    counter = cpuToTcnt(prescaledCPU, top, timerMode)
    if (counter.tcnt === 0 && tovTime === 'BOTTOM') OVF = 1
    if (counter.tcnt === top && tovTime === 'TOP') OVF = 1
    if (counter.tcnt === counterMax && tovTime === 'MAX') OVF = 1

    actions.forEach(({ at, matchAt }, i) => {
      at.forEach((action) => {
        if (matches(counter, action)) {
          OCnXs[i] = action.to === TOGGLE ? +!OCnXs[i] : action.to
        }
      })
      ;[actionDeadTimeA, actionDeadTimeB].forEach((at, i) => {
        at.forEach((action) => {
          if (matches(counter, action)) {
            deadTimes[i] = action.to
          }
        })
      })
      if (counter.tcnt === matchAt) MATCH_Xs[i] = 1
    })

    if (counter.tcnt === ICRn) CAPT = 1
    results.t.push((prescaledCPU * prescaler) / cpuHz)
    results.cpu.push(prescaledCPU * prescaler)
    results.TCNT.push(counter.tcnt)
    results.OVF.push(OVF)
    results.CAPT.push(CAPT)
    for (const i in OCRnXs_behaviour) {
      results.OCnXs[i].push(OCnXs[i])
      results.MATCH_Xs[i].push(MATCH_Xs[i])
    }
    for (const i in deadTimes) {
      results.deadTimes[i].push(deadTimes[i])
    }
  }
  if (deadTimeEnable) {
    results.OCnXs[0] = results.OCnXs[1].map((b, i) => {
      const r = b || results.deadTimes[0][i]
      return OCRnXs_behaviour[0] === OCRnXs_behaviour[1] ? +r : +!r
    })

    results.OCnXs[1] = results.OCnXs[1].map(
      (b, i) => +(b && !results.deadTimes[1][i])
    )
  }

  // for the duties take the 2 cicles after the first one
  const counterPeriod = (isDoubleSlope ? top * 2 : top + 1) * prescaler
  const range = [counterPeriod, counterPeriod * 3]
  results.OCnXs.forEach((out, n) => {
    let lastCounter = range[0]
    results.cpu.forEach((counter, i) => {
      if (counter < range[0] || counter > range[1]) return
      results.OCnXsDuty[n] +=
        (out[i] * (counter - lastCounter)) / counterPeriod / 2
      lastCounter = counter
    })
  })
  return results
}

export type Simulation = ReturnType<typeof simTimer>
