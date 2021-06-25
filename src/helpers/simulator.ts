/*
PCPWM == updates at top
PFCPWM == updates at bottom
but this should be passed from update OCRnX upate time bit value
*/

import { groupBy } from 'lodash'
import { format } from 'prettier'

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
type EventOutput = {
  evt: 'OUTPUT'
  reg: number
  output: boolean
  cpu: number
}
type Event =
  | {
      evt: 'OVF'
      cpu: number
    }
  | {
      evt: 'TCNT'
      value: number
      cpu: number
    }
  | {
      evt: 'MATCH'
      reg: number
      cpu: number
    }
  | {
      evt: 'CAPTURE'
      cpu: number
    }
  | EventOutput
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
  let TCNT = -1
  let dir = 1
  let cpu = -1
  const eventTimes = [
    // only when TCNT equals these values, something can happen
    // values surounding the events are added to ensure the plot
    // keeps the lines at their values until a change happens
    top + 1,
    counterMax,
    0,
    top,
    ...OCRnXs,
    top,
    ICRn,
    maxCpuTicks - 1,
    maxCpuTicks
  ].flatMap((n) => [n - 1, n, n + 1])

  let data: Event[] = []
  while (cpu < maxCpuTicks) {
    cpu += prescaler
    TCNT += dir
    let distToNext
    const nextEvents = eventTimes
      // eslint-disable-next-line no-loop-func
      .map((n) => (n - TCNT) * dir)
      .filter((n) => n >= 0)
    distToNext = Math.min(...nextEvents)
    cpu += distToNext * prescaler
    TCNT += dir * distToNext
    if (TCNT === top + 1) TCNT = 0

    if (TCNT === counterMax)
      if (tovTime === 'MAX') data.push({ evt: 'OVF', cpu })

    if (TCNT === 0) {
      if (dir === -1 && tovTime === 'BOTTOM') data.push({ evt: 'OVF', cpu })
      if (['PCPWM', 'PFCPWM'].includes(timerMode)) dir = 1
      data.push({ evt: 'TCNT', value: TCNT, cpu })
    }
    if (TCNT === top) {
      if (dir === 1 && tovTime === 'TOP') data.push({ evt: 'OVF', cpu })
      if (['PCPWM', 'PFCPWM'].includes(timerMode)) dir = -1
      data.push({ evt: 'TCNT', value: TCNT, cpu })
    }
    if (TCNT === ICRn) data.push({ evt: 'CAPTURE', cpu })

    for (let i = 0; i < OCRnXs_behaviour.length; i++) {
      const behaviour = OCRnXs_behaviour[i]
      let output: null | boolean = null
      if (TCNT === OCRnXs[i]) {
        if (behaviour === 'set') output = true
        if (behaviour === 'clear') output = false
        if (behaviour === 'set-on-match, clear-at-max') output = true
        if (behaviour === 'clear-on-match, set-at-max') output = false
        if (behaviour === 'toggle') output = !output
        if (behaviour === 'clear-up, set-down') {
          if (dir === 1) output = false
          if (dir === -1) output = true
        }
        if (behaviour === 'set-up, clear-down') {
          if (dir === 1) output = true
          if (dir === -1) output = false
        }
        data.push({ evt: 'MATCH', reg: i, cpu })
      }

      if (TCNT === top) {
        if (behaviour === 'set-on-match, clear-at-max') output = false
        if (behaviour === 'clear-on-match, set-at-max') output = true
      }
      if (output !== null) data.push({ evt: 'OUTPUT', reg: i, output, cpu })
    }

    data.push({ evt: 'TCNT', value: TCNT, cpu })
  }
  if (deadTimeEnable) {
    const isCOMB3 = [
      'set-on-match, clear-at-max',
      'set-up, clear-down'
    ].includes(OCRnXs_behaviour[1])
    const isAInverted = OCRnXs_behaviour[1] !== OCRnXs_behaviour[0]
    const outA = []
    const outB = []
    let was: boolean | undefined
    const outputB = data.filter(function (event): event is EventOutput {
      return event.evt === 'OUTPUT' && event.reg === 1
    })
    data = data.filter(
      (event) => !(event.evt === 'OUTPUT' && [0, 1].includes(event.reg))
    )
    for (const { cpu, output } of outputB) {
      const is = output
      if (was === undefined) was = !is
      if (!was && is) {
        // setting B is delayied
        data.push({ evt: 'OUTPUT', cpu: cpu + deadTimeB, output: true, reg: 1 })
        // change in A is immediate
        data.push({ evt: 'OUTPUT', cpu, output: !isAInverted, reg: 0 })
      }
      if (was && !is) {
        // clearing B is immediate
        data.push({ evt: 'OUTPUT', cpu, output: false, reg: 1 })
        // change in A is delayed
        data.push({
          evt: 'OUTPUT',
          cpu: cpu + deadTimeA,
          output: isAInverted,
          reg: 0
        })
      }
      was = is
    }
  }

  return formatData(data, cpuHz, OCRnXs.length)
}

const formatData = (data: Event[], cpuHz: number, outputsCount: number) => {
  const results = {
    t: [] as number[],
    cpu: [] as number[],
    TCNT: [] as number[],
    OCnXs: [...Array(outputsCount)].map(() => [] as number[]),
    MATCH_Xs: [...Array(outputsCount)].map(() => [] as number[]),
    OVF: [] as number[],
    CAPT: [] as number[]
  }
  data.sort((a, b) => a.cpu - b.cpu)
  const grouped = Object.entries(groupBy(data, 'cpu'))

  const OCnXs = [...Array(outputsCount)].map(() => 0)
  let TCNT = 0

  for (const [cpu, group] of grouped) {
    const MATCH_Xs = [...Array(outputsCount)].map(() => 0)
    let OVF = 0
    let CAPT = 0
    for (const datum of group) {
      switch (datum.evt) {
        case 'TCNT':
          TCNT = datum.value
          break
        case 'OVF':
          OVF = 1
          break
        case 'OUTPUT':
          OCnXs[datum.reg] = datum.output ? 1 : 0
          break
        case 'CAPTURE':
          CAPT = 1
          break
        case 'MATCH':
          MATCH_Xs[datum.reg] = 1
          break
      }
    }
    results.t.push(+cpu / cpuHz)
    results.cpu.push(+cpu)
    results.TCNT.push(TCNT)
    for (const i in OCnXs) {
      results.OCnXs[i].push(OCnXs[i])
      results.MATCH_Xs[i].push(MATCH_Xs[i])
    }
    results.OVF.push(OVF)
    results.CAPT.push(CAPT)
  }
  return results
}

export type Simulation = ReturnType<typeof simTimer>
