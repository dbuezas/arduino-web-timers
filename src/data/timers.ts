export const tsv = (str: string) => {
  const table = str
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
  const [header, ...rows] = table
  return rows
    .map((row) =>
      Object.fromEntries(
        header.map((colName, i) => [
          colName,
          (row[i] || '').trim().replace(/\\n/g, '\n').replace(/\\t/g, '\t')
        ])
      )
    )
    .filter((row) => !Object.values(row).includes('-'))
}

export const tsvRegisters = (str: string) => {
  const table = str
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
  const [header, ...rows] = table
  return Object.fromEntries(
    header.map((register, column) => [register, rows.map((row) => row[column])])
  )
}

export const bitNameDescriptions: Record<string, Record<string, string>> = {
  Timer: {
    timerMode: 'Timer mode',
    topValue: 'Top value of timer',
    clockPrescalerOrSource: 'Clock prescaler or external source',
    clockDoubler: 'Double timer clock speed',
    ExternalClockInput: 'External clock input port'
  },
  'Output A': {
    CompareOutputModeA: 'Behaviour',
    interruptA: 'Interrupt on match',
    OCnA_OutputPort: 'Output port',
    OCnA_OutputCurrent: 'Output current'
  },
  'Output B': {
    CompareOutputModeB: 'Behaviour',
    interruptB: 'Interrupt on match',
    OCnB_OutputPort: 'Output port',
    OCnB_OutputCurrent: 'Output current'
  },
  'Output C': {
    CompareOutputModeC: 'Behaviour',
    interruptC: 'Interrupt on match',
    OCnC_OutputPort: 'Output port',
    OCnC_OutputCurrent: 'Output current'
  },
  Extras: {
    updateOcrMoment: 'When are the OCRs updated',
    setTovMoment: 'When overflow interrupt is triggered',
    InterruptOnTimerOverflow: 'Interrupt on Timer Overflow',
    InputCaptureNoiseSupression: 'Input capture noise supression',
    InterruptOnInputCapture: 'Interrupt on Input Capture',
    InputCaptureEdgeSelect: 'Input Capture Edge Select'
  }
}
export const bitValueDescriptions: Record<string, Record<string, string>> = {
  timerMode: {
    Normal: 'Counts always up, overflowing to zero. Duty is always 50%.',
    PCPWM:
      'Phase correct PWM: Counts up to TOP then down to 0. Output compare registers updated at TOP, maintaining the phase of the PWM. Output is set in one direction and cleared on the other one. Duty goes from full 0% to full 100% but maximum frequency is half that of FPWM.',
    CTC: 'Clear timer on compare: Counts up to TOP and resets to zero. Duty is always 50%.',
    FPWM: 'Fast PWM: Counts up to TOP and resets to zero. Duty cycle cannot go to 0% (on clear-on-compare-match), or to 100% (on set-on-compare-match).',
    PFCPWM:
      'Phase frequency correct PWM: idem to PCPWM, but output compare registers are updated at zero, resulting in a constant frequency even when the output compare registers are changed during operation.'
  },
  topValue: {
    ICR1: 'If ICR1 is not used as top, the input capture pin (ICP1) is PB0.\nIf ICR1 is used as top, ICP1 is disconnected. The input compare register is not double-buffered so it will be updated immediatly (and not on TOP or BOTTOM like OCRs). This may make the timer lose a match if changed near it.',
    ICR3: 'If ICR3 is not used as top, the input capture pin (ICP3) is PF4.\nIf ICR3 is used as top, ICP3 is disconnected. The input compare register is not double-buffered so it will be updated immediatly (and not on TOP or BOTTOM like OCRs). This may make the timer lose a match if changed near it.'
  },
  OCnA_OutputPort: {
    PF1: 'Wired to PD1 in QFP32',
    AC0P: 'Wired to PD6 in QFP32 and SSOP20'
  },
  OCnB_OutputPort: {
    PF2: 'Wired to PD2 in QFP32 and SSOP20',
    'PF3-broken':
      "DONT USE, I can't find the way to redirect output B of Timer3 to this pin in the datasheet"
  },
  OCnC_OutputPort: {},
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
  }
}
