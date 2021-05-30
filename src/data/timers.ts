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
        //row.map((cell, col) => [header[col], cell.trim()])
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
    timerMode: 'Timer Mode',
    topValue: 'Top value of timer',
    clockPrescalerOrSource: 'Clock prescaler or external source',
    clockDoubler: 'Double timer clock speed',
    ExternalClockInput: 'ExternalClockInput'
  },
  'Output A': {
    CompareOutputModeA: 'What does output compare A produce in the output A',
    OCIEnA_text: 'Interrupt on Compare Output A',
    OCnA_OutputPort: 'OCnA_OutputPort',
    OCnA_OutputCurrent: 'OCnA_OutputCurrent'
  },
  'Output B': {
    CompareOutputModeB: 'What does output compare B produce in the output B',
    OCIEnB_text: 'Interrupt on Compare Output B',
    OCnB_OutputPort: 'OCnB_OutputPort',
    OCnB_OutputCurrent: 'OCnB_OutputCurrent'
  },
  'Output C': {
    CompareOutputModeC: 'What does output compare C produce in the output C',
    OCIEnC_text: 'Interrupt on Compare Output C',
    OCnC_OutputPort: 'OCnC_OutputPort',
    OCnC_OutputCurrent: 'OCnC_OutputCurrent'
  },
  Extras: {
    updateOcrMoment: 'When are the OCR registers updated (e.g OCR1A)',
    setTovMoment: 'When overflow interrupt is triggered',
    TOIEn_text: 'Interrupt on Timer Overflow',
    ICIEn_text: 'Interrupt on Input Capture'
  }
}
