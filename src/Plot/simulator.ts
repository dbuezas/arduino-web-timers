type Props = {
  timerMode: 'Normal' | 'PCPWM' | 'CTC' | 'FPWM' | 'PFCPWM'
  maxCpuTicks: number
  prescaler: number
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
  top,
  tovTime,
  OCRnXs,
  OCRnXs_behaviour,
  ICRn
}: Props) {
  const results = {
    cpu: [] as number[],
    TCNT: [] as number[],
    OCnXs: OCRnXs.map(() => [] as number[]),
    MATCH_Xs: OCRnXs.map(() => [] as number[]),
    OVF: [] as number[],
    CAPT: [] as number[]
  }
  let TCNT = 0
  let dir = 1
  let OCnXs = OCRnXs.map(() => 0)
  OCRnXs_behaviour.forEach((behaviour, x) => {
    if (behaviour === 'clear') OCnXs[x] = 1
  })
  let MATCH_Xs = OCRnXs.map(() => 0)

  for (let cpu = 0; cpu < maxCpuTicks; cpu += prescaler) {
    let OVF = 0
    let CAPT = 0
    TCNT += dir
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
