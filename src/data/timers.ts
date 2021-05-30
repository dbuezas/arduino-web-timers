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

export const descriptions: Record<string, string> = {
  timerMode: 'Timer Mode',
  topValue: 'Top value of timer',
  updateOcrMoment: 'When are the OCR registers updated (e.g OCR1A)',
  setTovMoment: 'When overflow interrupt is triggered',
  CompareOutputModeA: 'What does output compare A produce in the output A',
  CompareOutputModeB: 'What does output compare B produce in the output B',
  CompareOutputModeC: 'What does output compare C produce in the output C',
  clockPrescalerOrSource: 'Clock prescaler or external source',
  OCIEnA_text: 'Interrupt on Compare Output A',
  OCIEnB_text: 'Interrupt on Compare Output B',
  OCIEnC_text: 'Interrupt on Compare Output C',
  TOIEn_text: 'Interrupt on Timer Overflow',
  ICIEn_text: 'Interrupt on Input Capture',
  clockDoubler: 'Double timer clock speed',
  ExternalClockInput: 'ExternalClockInput',
  OCnA_OutputPort: 'OCnA_OutputPort',
  OCnB_OutputPort: 'OCnB_OutputPort',
  OCnC_OutputPort: 'OCnC_OutputPort',
  OCnA_OutputCurrent: 'OCnA_OutputCurrent',
  OCnB_OutputCurrent: 'OCnB_OutputCurrent',
  OCnC_OutputCurrent: 'OCnC_OutputCurrent'
}
