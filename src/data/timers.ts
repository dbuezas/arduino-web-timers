export const tsv = (str: string) => {
  str = str
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
  const [registers, ...constraints] = str.trim().split('\n\n')
  return {
    registers: tsvRegisters(registers),
    configs: constraints.map(tsvConstraints)
  }
}
// Build a CH32 family's timer list from shared timer-table sources plus a
// per-chip CPU-clock list (the only thing that varies between CH32 chips that
// share the same TIM peripheral).
export const ch32Family = (
  fcpu: [number, string][],
  ...rawTimers: string[]
) => {
  const fcpuTsv = [
    `FCPU\tFCPU_UI`,
    ...fcpu.map(([hz, label]) => `${hz}\t${label}`)
  ].join('\n')
  return rawTimers.map((raw) => {
    const timer = tsv(raw)
    timer.configs.push(tsvConstraints(fcpuTsv))
    return timer
  })
}
export const tsvConstraints = (str: string) => {
  const table = str
    .trim()
    .split('\n')
    .filter((line) => line.trim() && !line.startsWith('//'))
    .map((line) => line.trim().split('\t'))
  const [header, ...rows] = table
  return rows
    .map((row) =>
      Object.fromEntries(
        header
          .map((colName, i) => [
            colName,
            row[i].trim().replace(/\\n/g, '\n').replace(/\\t/g, '\t')
          ])
          .filter(([variable, value]) => variable != '' && value != '')
      )
    )
    .filter((row) => !Object.values(row).includes('-'))
}

const tsvRegisters = (str: string) => {
  const table = str
    .trim()
    .split('\n')
    .filter((line) => !line.startsWith('//'))
    .map((line) => line.trim().split('\t'))
  const [header, ...rows] = table
  return Object.fromEntries(
    header.map((register, column) => [register, rows.map((row) => row[column])])
  )
}

export const variableDescriptions: Record<string, Record<string, string>> = {
  Timer: {
    timerMode: 'Timer mode',
    topValue: 'Top value of timer',
    clockPrescalerOrSource: 'Clock prescaler or external source',
    clockDoubler: 'Double timer clock speed',
    ExternalClockInput: 'External clock input port',
    TIM1remap: 'Channel pin remap',
    TIM2remap: 'Channel pin remap',
    FCPU_UI: 'CPU Clock'
  },
  'Output A': {
    CompareOutputModeA: 'Behaviour',
    interruptA: 'Interrupt on match',
    OCnA_OutputPort: 'Output port',
    OCnA_OutputCurrent: 'Output current',
    OutputPolarityA: 'Output polarity',
    ComplementaryA: 'Complementary output',
    OCnA_NOutputPort: 'Complementary port',
    ComplementaryPolarityA: 'Complementary polarity'
  },
  'Output B': {
    CompareOutputModeB: 'Behaviour',
    interruptB: 'Interrupt on match',
    OCnB_OutputPort: 'Output port',
    OCnB_OutputCurrent: 'Output current',
    OutputPolarityB: 'Output polarity',
    ComplementaryB: 'Complementary output',
    OCnB_NOutputPort: 'Complementary port',
    ComplementaryPolarityB: 'Complementary polarity'
  },
  'Output C': {
    CompareOutputModeC: 'Behaviour',
    interruptC: 'Interrupt on match',
    OCnC_OutputPort: 'Output port',
    OCnC_OutputCurrent: 'Output current',
    OutputPolarityC: 'Output polarity',
    ComplementaryC: 'Complementary output',
    OCnC_NOutputPort: 'Complementary port',
    ComplementaryPolarityC: 'Complementary polarity'
  },
  'Output D': {
    CompareOutputModeD: 'Behaviour',
    interruptD: 'Interrupt on match',
    OCnD_OutputPort: 'Output port',
    OCnD_OutputCurrent: 'Output current',
    OutputPolarityD: 'Output polarity'
  },
  Extras: {
    updateOcrMoment: 'When are the OCRs updated',
    setTovMoment: 'When overflow interrupt is triggered',
    InterruptOnTimerOverflow: 'Interrupt on Timer Overflow',
    InputCaptureNoiseSupression: 'Input capture noise supression',
    InterruptOnInputCapture: 'Interrupt on Input Capture',
    InputCaptureEdgeSelect: 'Input Capture Edge Select',
    DeadTime: 'Insert dead time',
    OnePulse: 'One-pulse mode',
    BreakInput: 'Break input',
    BreakPolarity: 'Break polarity'
  }
}
// Shared CH32 tooltip blocks (the same control repeats per channel).
const ch32PwmModes: Record<string, string> = {
  'PWM mode 1':
    'Output active while CNT < CCR. Duty = CCR/(ARR+1); can reach 0% (CCR=0) and 100% (CCR>ARR).',
  'PWM mode 2':
    'Inverse of mode 1: output active while CNT ≥ CCR. Duty = (ARR+1−CCR)/(ARR+1).'
}
const ch32Polarity: Record<string, string> = {
  title: 'Polarity of the channel output pin.',
  'active high': 'Idles low; goes high while the channel is active (default).',
  'active low': 'Inverts the pin: idles high; goes low while active.'
}
const ch32Complementary: Record<string, string> = {
  title:
    'Also drive the complementary CHxN pin with the inverse of the main output — for the low side of a half-bridge (advanced timer only).',
  off: 'Only the main output is driven.',
  on: 'Drive the complementary (CHxN) output too.'
}
const ch32ComplementaryPolarity: Record<string, string> = {
  title: 'Polarity of the complementary CHxN output.',
  'active high': 'CHxN idles low; high while active.',
  'active low': 'CHxN idles high; low while active.'
}
export const valueDescriptions: Record<string, Record<string, string>> = {
  timerMode: {
    Normal: 'Counts always up, overflowing to zero. Duty is always 50%.',
    PCPWM:
      'Phase correct PWM: Counts up to TOP then down to 0. Output compare registers updated at TOP, maintaining the phase of the PWM. Output is set in one direction and cleared on the other one. Duty goes from full 0% to full 100% but maximum frequency is half that of FPWM.',
    CTC: 'Clear timer on compare: Counts up to TOP and resets to zero. Duty is always 50%.',
    FPWM: 'Fast PWM: Counts up to TOP and resets to zero. Duty cycle cannot go to 0% (on clear-on-compare-match), or to 100% (on set-on-compare-match).',
    PFCPWM:
      'Phase frequency correct PWM: idem to PCPWM, but output compare registers are updated at zero, resulting in a constant frequency even when the output compare registers are changed during operation.',
    'edge-aligned up':
      'Counter counts 0 → ARR then resets to 0 (sawtooth up). Standard edge-aligned PWM; period = ARR+1 ticks.',
    'edge-aligned down':
      'Counter counts ARR → 0 then reloads to ARR (sawtooth down). Same duty and frequency as up-counting, but the pulse is mirrored in phase.',
    'center-aligned':
      'Counter counts up to ARR then back down to 0 (triangle). PWM pulses are centered in the period and the frequency is halved — common for motor control and lower EMI.'
  },
  topValue: {
    ATRLR:
      'ATRLR is the auto-reload register: it sets the timer TOP (period). The counter wraps at ARR, so the period is ARR+1 timer ticks.',
    ICR1: 'If ICR1 is not used as top, the input capture pin (ICP1) is PB0.\nIf ICR1 is used as top, ICP1 is disconnected. The input compare register is not double-buffered so it will be updated immediatly (and not on TOP or BOTTOM like OCRs). This may make the timer lose a match if changed near it.',
    ICR3: 'If ICR3 is not used as top, the input capture pin (ICP3) is PF4.\nIf ICR3 is used as top, ICP3 is disconnected. The input compare register is not double-buffered so it will be updated immediatly (and not on TOP or BOTTOM like OCRs). This may make the timer lose a match if changed near it.',
    ICR4: 'If ICR4 is not used as top, the input capture pin (ICP4) is PE0.\nIf ICR4 is used as top, ICP4 is disconnected. The input compare register is not double-buffered so it will be updated immediatly (and not on TOP or BOTTOM like OCRs). This may make the timer lose a match if changed near it.'
  },
  OCnA_OutputPort: {
    'E4+C0': 'Both at the same time',
    'AC0P(D6)':
      'Package	Silk	IC\n───────	────	──\nQFP48:	D?	15 \nQFP32:	D6	10 \nSSOP20:	D6	9',
    B1: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	19 \nQFP32:	D9	13 \nSSOP20:	D9	11',
    B3: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	23 \nQFP32:	D11	15 \nSSOP20:	D11	12',
    C0: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	35 \nQFP32:	A0	25 \nSSOP20:	A0	17',
    D3: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	1 \nQFP32:	D3	1 \nSSOP20:	D3	3',
    D6: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	14 \nQFP32:	D6	10 \nSSOP20:	D6	9',
    E4: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	3 \nQFP32:	-	3 \nSSOP20:	-	-',
    F1: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	46 \nQFP32:	D1	31 \nSSOP20:	D1	1',
    F5: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	9 \nQFP32:	-	6 \nSSOP20:	D?	6',
    F6: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	10 \nQFP32:	-	- \nSSOP20:	-	-',
    F7: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	17 \nQFP32:	-	- \nSSOP20:	D7	10'
  },
  OCnB_OutputPort: {
    F2: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	48 \nQFP32:	D2	32 \nSSOP20:	D2	2',
    F7: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	17 \nQFP32:	-	- \nSSOP20:	D7	10',
    D3: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	1 \nQFP32:	D3	1 \nSSOP20:	D3	3',
    F4: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	5 \nQFP32:	-	5 \nSSOP20:	D3	3',
    B2: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	20 \nQFP32:	D10	14 \nSSOP20:	D10	12',
    F3: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	4 \nQFP32:	-	- \nSSOP20:	-	-',
    D5: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	13 \nQFP32:	D5	9 \nSSOP20:	D5	8'
  },
  OCnC_OutputPort: {
    F3: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	4 \nQFP32:	-	- \nSSOP20:	-	-'
  },
  updateOcrMoment: {
    TOP: 'OCR registers are updated whenever the timer reaches its top. Can be a fixed number or the value of some register',
    BOTTOM: 'OCR registers are updated when the timer resets to zero',
    immediate:
      'OCR registers are updated as soon as they are changed, without a buffer.'
  },
  InterruptOnInputCapture: {
    title: `When ICRn not used as TOP and a capture is triggered (PB0 in Timer1, PF4 in Timer3), the counter value is copied into the input capture register (ICRn). The event will also set the input capture flag (ICFn), and this can be used to cause an input capture interrupt, if this interrupt is enabled. \nIt can also be used to trigger an interrupt on compare match against the counter.`
  },
  InputCaptureNoiseSupression: {
    on: `The noise canceler improves noise immunity by using a simple digital filtering scheme. The noise canceler input is monitored over four samples, and all four must be equal for changing the output that in turn is used by the edge detector.
    When enabled, the noise canceler introduces additional four system clock cycles of delay from a change applied
    to the input, to the update of the ICRn register. The noise canceler uses the system clock and is therefore not affected by the
    prescaler.`
  },
  InputCaptureEdgeSelect: {
    title: `When the ICRn is used as TOP value, the ICPn is disconnected and consequently the input capture function is disabled.`
  },
  DeadTime: {
    title:
      'Inserts a short delay so the main and complementary outputs are never active at the same time (prevents half-bridge shoot-through). On CH32 the value (in timer ticks) is written to BDTR.DTG.',
    on: `dead time enable control
    Setting DTENn to logic one, inserting dead time is enable. Base on waveform generated in B channel compare output, both OCnA and OCnB can insert dead time, whose interval is decided by corresponding counter time of DTRn register. Waveform polarity output by OCnA is decided by relationship between CnMn and COMnB, for details referring to list for waveform polarity after inserting dead time.`
  },
  CompareOutputModeA: ch32PwmModes,
  CompareOutputModeB: ch32PwmModes,
  CompareOutputModeC: ch32PwmModes,
  CompareOutputModeD: ch32PwmModes,
  OutputPolarityA: ch32Polarity,
  OutputPolarityB: ch32Polarity,
  OutputPolarityC: ch32Polarity,
  OutputPolarityD: ch32Polarity,
  ComplementaryA: ch32Complementary,
  ComplementaryB: ch32Complementary,
  ComplementaryC: ch32Complementary,
  ComplementaryPolarityA: ch32ComplementaryPolarity,
  ComplementaryPolarityB: ch32ComplementaryPolarity,
  ComplementaryPolarityC: ch32ComplementaryPolarity,
  OnePulse: {
    title:
      'One-pulse mode: the timer runs a single cycle then stops automatically, instead of running continuously.',
    off: 'Free-running (continuous).',
    on: 'Generate one pulse, then stop.'
  },
  BreakInput: {
    title:
      'Break input: an external fault signal immediately forces all outputs to their inactive state (emergency shutdown for motor drives). Outputs only re-enable when MOE is set again.',
    off: 'Break input disabled.',
    on: 'A fault on the break pin disables the outputs.'
  },
  BreakPolarity: {
    title: 'Active level of the break input pin.',
    'active low': 'Break triggers when the pin is low.',
    'active high': 'Break triggers when the pin is high.'
  },
  // The actual pins differ per CH32 family, so the remap tooltips stay generic
  // and the chosen pins are shown (per family) in each channel's "Output port".
  TIM2remap: {
    title:
      'AFIO pin remap: selects which physical pins this timer’s channels use. The resulting pins are shown in each channel’s "Output port".'
  },
  TIM1remap: {
    title:
      'AFIO pin remap: selects which pins the channels (and complementary CHxN) use. The resulting pins are shown in each channel’s port fields.'
  }
}
