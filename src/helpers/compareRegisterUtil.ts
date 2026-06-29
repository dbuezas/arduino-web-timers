import { TRow } from './types'

type GenericCompRegName =
  | 'OutputA'
  | 'OutputB'
  | 'OutputC'
  | 'OutputD'
  | 'Input'
  | 'DeadTimeA'
  | 'DeadTimeB'

const getOutputPin = (genericName: GenericCompRegName, values: TRow) =>
  values[
    {
      OutputA: `OCnA_OutputPort`,
      OutputB: `OCnB_OutputPort`,
      OutputC: `OCnC_OutputPort`,
      OutputD: `OCnD_OutputPort`,
      Input: ``,
      DeadTimeA: ``,
      DeadTimeB: ``
    }[genericName]
  ]
const getOutputPortMode = (genericName: GenericCompRegName, values: TRow) =>
  values[
    {
      OutputA: `CompareOutputModeA`,
      OutputB: `CompareOutputModeB`,
      OutputC: `CompareOutputModeC`,
      OutputD: `CompareOutputModeD`,
      Input: ``,
      DeadTimeA: ``,
      DeadTimeB: ``
    }[genericName]
  ]
const getName = (genericName: GenericCompRegName, values: TRow) => {
  // CH32 names its compare channels CHnCVR and uses ATRLR (auto-reload) as TOP;
  // AVR uses OCRnX / ICRn / DTRn. One entry per generic name (no parallel maps).
  const n = values.timerNr
  const ch32 = values.family === 'ch32'
  return {
    OutputA: ch32 ? `CH1CVR` : `OCR${n}A`,
    OutputB: ch32 ? `CH2CVR` : `OCR${n}B`,
    OutputC: ch32 ? `CH3CVR` : `OCR${n}C`,
    OutputD: ch32 ? `CH4CVR` : `OCR${n}D`,
    Input: ch32 ? `ATRLR` : `ICR${n}`,
    DeadTimeA: ch32 ? `` : `DTR${n}L`,
    DeadTimeB: ch32 ? `` : `DTR${n}H`
  }[genericName]
}

const getIsTop = (genericName: GenericCompRegName, values: TRow) =>
  values.topValue === getName(genericName, values)
const getIsInterrupt = (genericName: GenericCompRegName, values: TRow) => {
  const n = values.timerNr
  const ch32 = values.family === 'ch32'
  return (
    values[
      {
        OutputA: ch32 ? `CC1IE` : `OCIE${n}A`,
        OutputB: ch32 ? `CC2IE` : `OCIE${n}B`,
        OutputC: ch32 ? `CC3IE` : `OCIE${n}C`,
        OutputD: ch32 ? `CC4IE` : `OCIE${n}D`,
        Input: ch32 ? `` : `ICIE${n}`,
        DeadTimeA: ch32 ? `` : `DTRL${n}`,
        DeadTimeB: ch32 ? `` : `DTRH${n}`
      }[genericName]
    ] === '1'
  )
}
const getIsActiveOutput = (genericName: GenericCompRegName, values: TRow) =>
  (values[
    {
      OutputA: `CompareOutputModeA`,
      OutputB: `CompareOutputModeB`,
      OutputC: `CompareOutputModeC`,
      OutputD: `CompareOutputModeD`,
      Input: ``,
      DeadTimeA: ``,
      DeadTimeB: ``
    }[genericName]
  ] || 'disconnect') !== 'disconnect'
const getIsActiveDeadTime = (genericName: GenericCompRegName, values: TRow) =>
  values[
    {
      OutputA: ``,
      OutputB: ``,
      OutputC: ``,
      OutputD: ``,
      Input: ``,
      DeadTimeA: `DeadTime`,
      DeadTimeB: `DeadTime`
    }[genericName]
  ] === 'on'
const getIsUsed = (genericName: GenericCompRegName, values: TRow) =>
  getIsTop(genericName, values) ||
  getIsInterrupt(genericName, values) ||
  (getIsActiveOutput(genericName, values) &&
    !(genericName === 'OutputA' && values.DeadTime === 'on')) ||
  getIsActiveDeadTime(genericName, values)

const getIsInput = (genericName: GenericCompRegName) =>
  ({
    OutputA: false,
    OutputB: false,
    OutputC: false,
    OutputD: false,
    Input: true,
    DeadTimeA: false,
    DeadTimeB: false
  }[genericName])
const getIsOutput = (genericName: GenericCompRegName) =>
  ({
    OutputA: true,
    OutputB: true,
    OutputC: true,
    OutputD: true,
    Input: false,
    DeadTimeA: false,
    DeadTimeB: false
  }[genericName])
const getIsDeadTime = (genericName: GenericCompRegName) =>
  ({
    OutputA: false,
    OutputB: false,
    OutputC: false,
    OutputD: false,
    Input: false,
    DeadTimeA: true,
    DeadTimeB: true
  }[genericName])

const compareRegs: GenericCompRegName[] = [
  'OutputA',
  'OutputB',
  'OutputC',
  'OutputD',
  'Input',
  'DeadTimeA',
  'DeadTimeB'
]

export const getCompareRegTraits = (
  genericName: GenericCompRegName,
  values: TRow
) => {
  const name = getName(genericName, values)
  const value = parseFloat(values[name] || '')
  // if (Number.isNaN(value)) debugger
  return {
    genericName: genericName,
    name,
    value,
    code: `${name} = ${value};`,
    isInput: getIsInput(genericName),
    isOutput: getIsOutput(genericName),
    isDeadTime: getIsDeadTime(genericName),
    isActiveOutput: getIsActiveOutput(genericName, values),
    isTop: getIsTop(genericName, values),
    isInterrupt: getIsInterrupt(genericName, values),
    isUsed: getIsUsed(genericName, values),
    outputPin: getOutputPin(genericName, values),
    outputMode: getOutputPortMode(genericName, values)
  }
}
export const getAllCompareRegTraits = (values: TRow) =>
  compareRegs.map((genericName) => getCompareRegTraits(genericName, values))
