import { uniq } from 'lodash'

/*
PCPWM == updates at top
PFCPWM == updates at bottom
but this should be passed from update OCRnX upate time bit value
*/
type TimerMode = 'Normal' | 'PCPWM' | 'CTC' | 'FPWM' | 'PFCPWM'
const tcntToCpu = (
  { tcnt, dir }: { tcnt: number; dir: number },
  top: number
) => {
  if (dir === -1) return 2 * top - tcnt
  return tcnt
}
const cpuToTcnt = (cpu: number, top: number, timerMode: TimerMode) => {
  while (cpu < 0) cpu += top
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
type Props = {
  timerMode: TimerMode
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
  ICRn: number
  deadTimeEnable: boolean
  deadTimeA: number
  deadTimeB: number
}
const TOGGLE = -1
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
  ICRn,
  deadTimeEnable,
  deadTimeA,
  deadTimeB
}: Props) {
  const results = {
    t: [] as number[],
    cpu: [] as number[],
    TCNT: [] as number[],
    OCnXs: OCRnXs.map(() => [] as number[]),
    MATCH_Xs: OCRnXs.map(() => [] as number[]),
    OVF: [] as number[],
    CAPT: [] as number[],
    deadTimes: [[], []] as number[][]
  }
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

  if (deadTimeEnable) {
    /* deadtime 
      setB at setB + deadTimeB
      changeA at setB (to !isAInverted)
      clearB at clearB
      changeA at clearB+deadTimeA (to isAInverted)
    */
    const bClear = actions[1].at.find(({ to }) => to === 0)!
    const bSet = actions[1].at.find(({ to }) => to === 1)!
    actionDeadTimeA = [{ to: 1, tcnt: bClear.tcnt, dir: bClear.dir }]
    if (deadTimeA < top)
      actionDeadTimeA.push({
        to: 0,
        ...cpuToTcnt(tcntToCpu(bClear, top) + deadTimeA, top, timerMode)
      })
    actionDeadTimeB = [{ to: 1, tcnt: bSet.tcnt, dir: bSet.dir }]
    if (deadTimeB < top)
      actionDeadTimeB.push({
        to: 0,
        ...cpuToTcnt(tcntToCpu(bSet, top) + deadTimeB, top, timerMode)
      })
  }
  let prescaledCPU = -1
  let cpu = -1
  let eventTimes = [
    // only when TCNT equals these values, something can happen
    // values surounding the events are added to ensure the plot
    // keeps the lines at their values until a change happens
    0,
    ...OCRnXs,
    ICRn,
    ...actionDeadTimeA.map(({ tcnt }) => tcnt),
    ...actionDeadTimeB.map(({ tcnt }) => tcnt),
    top,
    top + 1,
    counterMax,
    maxCpuTicks - 1,
    maxCpuTicks
  ].flatMap((n) => [n - 1, n, n + 1])
  eventTimes = uniq(eventTimes)
  while (cpu < maxCpuTicks) {
    prescaledCPU++
    cpu += prescaler
    let distToNext
    let TCNT = cpuToTcnt(prescaledCPU, top, timerMode).tcnt
    let dir = cpuToTcnt(prescaledCPU, top, timerMode).dir

    const nextEvents = eventTimes
      // eslint-disable-next-line no-loop-func
      .map((n) => (n - TCNT) * dir)
      .filter((n) => n >= 0)
    distToNext = Math.min(...nextEvents)
    let MATCH_Xs = OCRnXs.map(() => 0)
    let OVF = 0
    let CAPT = 0
    prescaledCPU += distToNext
    cpu += distToNext * prescaler
    TCNT = cpuToTcnt(prescaledCPU, top, timerMode).tcnt
    dir = cpuToTcnt(prescaledCPU, top, timerMode).dir

    if (TCNT === 0 && tovTime === 'BOTTOM') OVF = 1
    if (TCNT === top && tovTime === 'TOP') OVF = 1
    if (TCNT === counterMax && tovTime === 'MAX') OVF = 1

    actions.forEach(({ at, matchAt }, i) => {
      at.forEach((action) => {
        if (TCNT === action.tcnt && dir === action.dir) {
          OCnXs[i] = action.to === TOGGLE ? +!OCnXs[i] : action.to
        }
      })
      ;[actionDeadTimeA, actionDeadTimeB].forEach((at, i) => {
        at.forEach((action) => {
          if (TCNT === action.tcnt && dir === action.dir) {
            deadTimes[i] = action.to
          }
        })
      })
      if (TCNT === matchAt) MATCH_Xs[i] = 1
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
    for (const i in deadTimes) {
      results.deadTimes[i].push(deadTimes[i])
    }
  }
  if (deadTimeEnable) {
    if (OCRnXs_behaviour[0] === OCRnXs_behaviour[1]) {
      results.OCnXs[0] = results.OCnXs[1].map(
        (b, i) => +(b || results.deadTimes[0][i])
      )
    } else {
      results.OCnXs[0] = results.OCnXs[1].map(
        (b, i) => +(!b && !results.deadTimes[0][i])
      )
    }
    results.OCnXs[1] = results.OCnXs[1].map(
      (b, i) => +(b && !results.deadTimes[1][i])
    )
  }
  return results
}

export type Simulation = ReturnType<typeof simTimer>
