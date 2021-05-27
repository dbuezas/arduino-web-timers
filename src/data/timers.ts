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
  clockPrescalerOrSource: 'Clock prescaler or external source',
  OCIE0A_text: 'Interrupt on Compare Output A',
  OCIE0B_text: 'Interrupt on Compare Output B',
  TOIE0_text: 'Interrupt on Timer Overflow',
  OCIE1A_text: 'Interrupt on Compare Output A',
  OCIE1B_text: 'Interrupt on Compare Output B',
  TOIE1_text: 'Interrupt on Timer Overflow',
  ICIE1_text: 'Interrupt on Input Capture',
  OCIE2A_text: 'Interrupt on Compare Output A',
  OCIE2B_text: 'Interrupt on Compare Output B',
  TOIE2_text: 'Interrupt on Timer Overflow',
  OCIE3A_text: 'Interrupt on Compare Output A',
  OCIE3B_text: 'Interrupt on Compare Output B',
  OCIE3C_text: 'Interrupt on Compare Output C',
  TOIE3_text: 'Interrupt on Timer Overflow',
  ICIE3_text: 'Interrupt on Input Capture',
  clockDoubler: 'Double timer clock speed',
  ExternalClockInput: 'ExternalClockInput',
  OC0A_OutputPort: 'OC0A_OutputPort',
  OC0B_OutputPort: 'OC0B_OutputPort',
  OC1A_OutputPort: 'OC1A_OutputPort',
  OC1B_OutputPort: 'OC1B_OutputPort',
  OC2A_OutputPort: 'OC2A_OutputPort',
  OC2B_OutputPort: 'OC2B_OutputPort',
  OC3A_OutputPort: 'OC3A_OutputPort',
  OC3B_OutputPort: 'OC3B_OutputPort',
  OC3C_OutputPort: 'OC3C_OutputPort',
  OC0A_OutputCurrent: 'OC0A_OutputCurrent',
  OC0B_OutputCurrent: 'OC0B_OutputCurrent',
  'PF1(PD1)Current': 'PF1(PD1)Current',
  'PF2(PD2)Current': 'PF2(PD2)Current',
  OC1A_OutputCurrent: 'OC1A_OutputCurrent',
  OC1B_OutputCurrent: 'OC1B_OutputCurrent',
  OC3A_OutputCurrent: 'OC3A_OutputCurrent',
  OC3B_OutputCurrent: 'OC3B_OutputCurrent',
  OC3C_OutputCurrent: 'OC3C_OutputCurrent'
}
