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
export const tsvConstraints = (str: string) => {
  const table = str
    .trim()
    .split('\n')
    .filter((line) => !line.startsWith('//'))
    .map((line) => line.trim().split('\t'))
  const [header, ...rows] = table
  return rows
    .map((row) =>
      Object.fromEntries(
        header.map((colName, i) => [
          colName,
          row[i].trim().replace(/\\n/g, '\n').replace(/\\t/g, '\t')
        ])
      )
    )
    .filter((row) => !Object.values(row).includes('-'))
}

export const tsvRegisters = (str: string) => {
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
    FCPU_UI: 'CPU Clock'
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
    InputCaptureEdgeSelect: 'Input Capture Edge Select',
    DeadTime: 'Insert dead time'
  }
}
export const valueDescriptions: Record<string, Record<string, string>> = {
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
    'E4+C0': 'Both at the same time',
    AC0P: 'Package	Silk	IC\n───────	────	──\nQFP48:	D?	15 \nQFP32:	D6	10 \nSSOP20:	D6	9',
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
    on: `dead time enable control
    Setting DTENn to logic one, inserting dead time is enable. Base on waveform generated in B channel compare output, both OCnA and OCnB can insert dead time, whose interval is decided by corresponding counter time of DTRn register. Waveform polarity output by OCnA is decided by relationship between CnMn and COMnB, for details referring to list for waveform polarity after inserting dead time.`
  }
}
