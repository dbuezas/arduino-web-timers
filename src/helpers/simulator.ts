/* eslint-disable no-loop-func */
import { uniq } from 'lodash-es'
import Fraction from 'fraction.js'
/*
PCPWM == updates at top
PFCPWM == updates at bottom
but this should be passed from update OCRnX upate time bit value
*/
type TimerMode =
  | 'Normal'
  | 'PCPWM'
  | 'CTC'
  | 'FPWM'
  | 'PFCPWM'
  | 'center-aligned'
  | 'edge-aligned up'
  | 'edge-aligned down'
type Counter = { tcnt: number; dir: number }
const tcntToCpu = ({ tcnt, dir }: Counter, top: number) => {
  if (dir === -1) return 2 * top - tcnt
  return tcnt
}
const offsetCounter = (
  counter: Counter,
  offset: number,
  top: number,
  isDoubleSlope: boolean,
  countDown: boolean
) =>
  cpuToTcnt(tcntToCpu(counter, top) + offset, top, isDoubleSlope, countDown)

const getTimerLength = (top: number, isDoubleSlope: boolean) => {
  return isDoubleSlope ? top * 2 : top + 1
}
const cpuToTcnt = (
  cpu: number,
  top: number,
  isDoubleSlope: boolean,
  countDown = false
) => {
  while (cpu < 0 && top > 0) cpu += top
  if (!isDoubleSlope) {
    // e.g top = 3
    // 0 1 2 3 4 -- cpu
    // 0 1 2 3 0 -- single slope (up)
    // 3 2 1 0 3 -- single slope (down)
    const phase = cpu % (top + 1)
    if (countDown) return { tcnt: top - phase, dir: -1 }
    return { tcnt: phase, dir: 1 }
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
    | 'PWM mode 1'
    | 'PWM mode 2'
    | 'toggle'
    | 'clear-up, set-down'
    | 'set-up, clear-down'
  )[]
  ICRn: number
  deadTimeEnable: boolean
  deadTimeA: number
  deadTimeB: number
  // CH32: per-channel active-low polarity, per-channel complementary (CHxN)
  // output + its polarity, and one-pulse mode.
  outputInvert?: boolean[]
  complementaryEnable?: boolean[]
  complementaryInvert?: boolean[]
  onePulse?: boolean
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
  deadTimeB,
  outputInvert = [],
  complementaryEnable = [],
  complementaryInvert = [],
  onePulse = false
}: Props) {
  const isDoubleSlope = ['PCPWM', 'PFCPWM', 'center-aligned'].includes(
    timerMode
  )
  // Edge-aligned down: single slope counting from TOP to 0. The waveform is the
  // up-counting one with the counter reversed, so each output action's direction
  // and target level are flipped.
  const countDown = timerMode === 'edge-aligned down'
  const timerLength = getTimerLength(top, isDoubleSlope)
  const prescaledCPUEnd = timerLength * 4
  const results = {
    t: [] as number[],
    cpu: [] as number[],
    TCNT: [] as number[],
    OCnXs: OCRnXs.map(() => [] as number[]),
    complementaryOut: OCRnXs.map(() => [] as number[]),
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
      // CH32/STM32 PWM modes: output active while CNT < CCR. Edge-aligned (single
      // slope): set at BOTTOM, clear on the up-match — so the match tick is
      // excluded, duty = CCR/(ARR+1), and 0% is reachable (bottom action first so
      // the on-match action wins the CCR==0 tie at tcnt 0). Center-aligned (double
      // slope): clear on the up-match and set on the down-match, so the pulse is
      // symmetric around BOTTOM on both slopes.
      case 'PWM mode 1':
        action.at = isDoubleSlope
          ? [
              { tcnt: OCRnXs[i], dir: 1, to: 0 },
              { tcnt: OCRnXs[i], dir: -1, to: 1 }
            ]
          : [
              { tcnt: 0, dir: 1, to: 1 },
              { tcnt: OCRnXs[i], dir: 1, to: 0 }
            ]
        break
      case 'PWM mode 2':
        action.at = isDoubleSlope
          ? [
              { tcnt: OCRnXs[i], dir: 1, to: 1 },
              { tcnt: OCRnXs[i], dir: -1, to: 0 }
            ]
          : [
              { tcnt: 0, dir: 1, to: 0 },
              { tcnt: OCRnXs[i], dir: 1, to: 1 }
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
    if (countDown) {
      // flip direction and target level; reverse the order too so a same-tcnt
      // tie-break (e.g. CCR==0) still resolves to the on-match action
      action.at = action.at
        .map((a) => ({
          tcnt: a.tcnt,
          dir: -a.dir,
          to: a.to === TOGGLE ? TOGGLE : 1 - a.to
        }))
        .reverse()
    }
    OCnXs[i] = +!action.at[0]?.to || 0
    return action
  })

  let actionDeadTimeA = [] as { tcnt: number; dir: number; to: number }[]
  let actionDeadTimeB = [] as { tcnt: number; dir: number; to: number }[]
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
        ...offsetCounter(bClear, deadTimeA, top, isDoubleSlope, countDown)
      })
    }
    actionDeadTimeB = [{ to: 1, tcnt: bSet.tcnt, dir: bSet.dir }]
    if (deadTimeB < period) {
      actionDeadTimeB.push({
        to: 0,
        ...offsetCounter(bSet, deadTimeB, top, isDoubleSlope, countDown)
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
  while (prescaledCPU < prescaledCPUEnd) {
    const nextEvents = tcntEventTimes
      .map((n) => (n - counter.tcnt) * counter.dir)
      .filter((n) => n > 0)
    let distToNext = Math.min(...nextEvents)
    let MATCH_Xs = OCRnXs.map(() => 0)
    let OVF = 0
    let CAPT = 0
    prescaledCPU += distToNext
    prescaledCPU = Math.min(prescaledCPU, prescaledCPUEnd)
    counter = cpuToTcnt(prescaledCPU, top, isDoubleSlope, countDown)
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

  // CH32 per-channel complementary output (OCxN): the inverse of the OCxREF
  // waveform, with its own active-low polarity. (Dead-time is emitted in the
  // generated code via BDTR.DTG; the nanosecond gap is not drawn here.)
  results.OCnXs.forEach((core, i) => {
    if (!complementaryEnable[i]) return
    results.complementaryOut[i] = core.map((v) => {
      const comp = v ? 0 : 1
      return complementaryInvert[i] ? (comp ? 0 : 1) : comp
    })
  })
  // Output polarity: active-low inverts the main output trace.
  results.OCnXs.forEach((trace, i) => {
    if (!outputInvert[i]) return
    for (let j = 0; j < trace.length; j++) trace[j] = trace[j] ? 0 : 1
  })
  // One-pulse mode: the counter runs a single period then stops; hold the
  // post-pulse idle level for the rest of the window.
  if (onePulse) {
    const onePeriod = (isDoubleSlope ? top * 2 : top + 1) * prescaler
    // first sample at/after the end of period 1; idx0-1 is the post-pulse idle
    const idx0 = results.cpu.findIndex((c) => c >= onePeriod)
    if (idx0 > 0) {
      for (let j = idx0; j < results.cpu.length; j++) {
        results.TCNT[j] = countDown ? top : 0
        results.OVF[j] = 0
        results.CAPT[j] = 0
        results.OCnXs.forEach((tr) => (tr[j] = tr[idx0 - 1]))
        results.complementaryOut.forEach((tr) => {
          if (tr.length) tr[j] = tr[idx0 - 1]
        })
        results.MATCH_Xs.forEach((m) => (m[j] = 0))
      }
    }
  }

  // Duty is averaged over 2 steady-state cycles (periods 2-3). In one-pulse mode
  // those are flat-lined idle, so measure the single pulse itself (period 1).
  const counterPeriod = (isDoubleSlope ? top * 2 : top + 1) * prescaler
  const cycles = onePulse ? 1 : 2
  const range = onePulse
    ? [0, counterPeriod]
    : [counterPeriod, counterPeriod * 3]
  results.OCnXs.forEach((out, n) => {
    let lastCounter = range[0]
    results.cpu.forEach((counter, i) => {
      if (counter < range[0] || counter > range[1]) return
      results.OCnXsDuty[n] +=
        (out[i] * (counter - lastCounter)) / counterPeriod / cycles
      lastCounter = counter
    })
  })
  return results
}
