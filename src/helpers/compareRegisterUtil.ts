import { TRow } from './types'

export type GenericCompRegName =
  | 'OutputA'
  | 'OutputB'
  | 'OutputC'
  | 'Input'
  | 'DeadTimeA'
  | 'DeadTimeB'

const getName = (genericName: GenericCompRegName, values: TRow) =>
  ({
    OutputA: `OCR${values.timerNr}A`,
    OutputB: `OCR${values.timerNr}B`,
    OutputC: `OCR${values.timerNr}C`,
    Input: `ICR${values.timerNr}`,
    DeadTimeA: `DTR${values.timerNr}L`,
    DeadTimeB: `DTR${values.timerNr}H`
  }[genericName])

const getIsTop = (genericName: GenericCompRegName, values: TRow) =>
  values.topValue === getName(genericName, values)
const getIsInterrupt = (genericName: GenericCompRegName, values: TRow) =>
  values[
    {
      OutputA: `OCIE${values.timerNr}A`,
      OutputB: `OCIE${values.timerNr}B`,
      OutputC: `OCIE${values.timerNr}C`,
      Input: `ICIE${values.timerNr}`,
      DeadTimeA: `DTRL${values.timerNr}`,
      DeadTimeB: `DTRH${values.timerNr}`
    }[genericName]
  ] === '1'
const getIsActiveOutput = (genericName: GenericCompRegName, values: TRow) =>
  (values[
    {
      OutputA: `CompareOutputModeA`,
      OutputB: `CompareOutputModeB`,
      OutputC: `CompareOutputModeC`,
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
    Input: true,
    DeadTimeA: false,
    DeadTimeB: false
  }[genericName])
const getIsOutput = (genericName: GenericCompRegName) =>
  ({
    OutputA: true,
    OutputB: true,
    OutputC: true,
    Input: false,
    DeadTimeA: false,
    DeadTimeB: false
  }[genericName])
const getIsDeadTime = (genericName: GenericCompRegName) =>
  ({
    OutputA: false,
    OutputB: false,
    OutputC: false,
    Input: false,
    DeadTimeA: true,
    DeadTimeB: true
  }[genericName])

export const compareRegs: GenericCompRegName[] = [
  'OutputA',
  'OutputB',
  'OutputC',
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
    isUsed: getIsUsed(genericName, values)
  }
}
export const getAllCompareRegTraits = (values: TRow) =>
  compareRegs.map((genericName) => getCompareRegTraits(genericName, values))
