import { parseCommandLine } from 'typescript'

type Props = {
  timerMode: 'Normal' | 'PCPWM' | 'CTC' | 'FPWM' | 'PFCPWM'
  maxCpuTicks: number
  prescaler: number
  cpuHz: number
  top: number
  tovTime: 'BOTTOM' | 'TOP'
  OCRnXs: number[]
  OCRnXs_behaviour: (
    | 'clear'
    | 'set'
    | 'set, clear-at-max'
    | 'clear, set-at-max'
    | 'toggle'
    | 'clear-up, set-down'
    | 'set-up, clear-down'
  )[]
  ICRn: number
}

export default function simTimer({
  timerMode,
  maxCpuTicks,
  prescaler,
  cpuHz,
  top,
  tovTime,
  OCRnXs,
  OCRnXs_behaviour,
  ICRn
}: Props) {
  const results = {
    t: [] as number[],
    cpu: [] as number[],
    TCNT: [] as number[],
    OCnXs: OCRnXs.map(() => [] as number[]),
    MATCH_Xs: OCRnXs.map(() => [] as number[]),
    OVF: [] as number[],
    CAPT: [] as number[]
  }
  let TCNT = -1
  let dir = 1
  let OCnXs = OCRnXs.map(() => 0)
  OCRnXs_behaviour.forEach((behaviour, x) => {
    if (behaviour === 'clear') OCnXs[x] = 1
  })
  let MATCH_Xs = OCRnXs.map(() => 0)
  let cpu = -1
  const eventTimes = [
    // only when TCNT equals these values, something can happen
    // values surounding the events are added to ensure the plot
    // keeps the lines at their values until a change happens
    top + 1,
    0,
    top,
    ...OCRnXs,
    top,
    ICRn,
    maxCpuTicks - 1
  ].flatMap((n) => [n, n - 1, n + 1])

  while (cpu < maxCpuTicks) {
    cpu += prescaler
    TCNT += dir
    let distToNext
    const nextEvents = eventTimes
      .map((n) => (n - TCNT) * dir)
      .filter((n) => n >= 0)
    distToNext = Math.min(...nextEvents)

    let OVF = 0
    let CAPT = 0
    cpu += distToNext * prescaler
    TCNT += dir * distToNext
    if (TCNT === top + 1) TCNT = 0
    if (TCNT === 0) {
      if (timerMode === 'PCPWM') dir = 1
      if (tovTime === 'BOTTOM') OVF = 1 //OVF
    }
    if (TCNT === top) {
      if (timerMode === 'PCPWM') dir = -1
      if (tovTime === 'TOP') OVF = 1 //OVF
    }
    for (const i in OCRnXs_behaviour) {
      const behaviour = OCRnXs_behaviour[i]
      if (TCNT === OCRnXs[i]) {
        if (behaviour === 'set') OCnXs[i] = 1
        if (behaviour === 'clear') OCnXs[i] = 0
        if (behaviour === 'set, clear-at-max') OCnXs[i] = 1
        if (behaviour === 'clear, set-at-max') OCnXs[i] = 0
        if (behaviour === 'toggle') OCnXs[i] = OCnXs[i] === 1 ? 0 : 1
        if (behaviour === 'clear-up, set-down') {
          if (dir === 1) OCnXs[i] = 0
          if (dir === -1) OCnXs[i] = 1
        }
        if (behaviour === 'set-up, clear-down') {
          if (dir === 1) OCnXs[i] = 1
          if (dir === -1) OCnXs[i] = 0
        }
        MATCH_Xs[i] = 1 // "MATCH_Xs"
      }

      if (TCNT === top) {
        if (behaviour === 'set, clear-at-max') OCnXs[i] = 0
        if (behaviour === 'clear, set-at-max') OCnXs[i] = 1
      }
    }
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
