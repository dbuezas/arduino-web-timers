export const tsv = (str: string) => {
  const table = str
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
  const [header, ...rows] = table
  return rows
    .map((row) =>
      Object.fromEntries(
        header.map((colName, i) => [colName, (row[i] || '').trim()])
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

export const descriptions: Record<string, Record<string, string>> = {
  Timer: {
    timerMode: 'Timer mode',
    topValue: 'Top value of timer',
    clockPrescalerOrSource: 'Clock prescaler or external source',
    clockDoubler: 'Double timer clock speed',
    ExternalClockInput: 'External clock input port'
  },
  'Output A': {
    CompareOutputModeA: 'Behaviour',
    OCIEnA_text: 'Interrupt',
    OCnA_OutputPort: 'Output port',
    OCnA_OutputCurrent: 'Output current'
  },
  'Output B': {
    CompareOutputModeB: 'Behaviour',
    OCIEnB_text: 'Interrupt',
    OCnB_OutputPort: 'Output port',
    OCnB_OutputCurrent: 'Output current'
  },
  'Output C': {
    CompareOutputModeC: 'Behaviour',
    OCIEnC_text: 'Interrupt',
    OCnC_OutputPort: 'Output port',
    OCnC_OutputCurrent: 'Output current'
  },
  Extras: {
    updateOcrMoment: 'When are the OCR registers updated (e.g OCR1A)',
    setTovMoment: 'When overflow interrupt is triggered',
    TOIEn_text: 'Interrupt on Timer Overflow',
    ICIEn_text: 'Interrupt on Input Capture'
  }
}
