import { TRow } from './types'

export type GenericCompRegName =
  | 'OutputA'
  | 'OutputB'
  | 'OutputC'
  | 'Input'
  | 'DeadTimeA'
  | 'DeadTimeB'

const getName = (genericName: GenericCompRegName, bitValues: TRow) =>
  ({
    OutputA: `OCR${bitValues.timerNr}A`,
    OutputB: `OCR${bitValues.timerNr}B`,
    OutputC: `OCR${bitValues.timerNr}C`,
    Input: `ICR${bitValues.timerNr}`,
    DeadTimeA: `DTR${bitValues.timerNr}L`,
    DeadTimeB: `DTR${bitValues.timerNr}H`
  }[genericName])

const getIsTop = (genericName: GenericCompRegName, bitValues: TRow) =>
  bitValues.topValue === getName(genericName, bitValues)
const getIsInterrupt = (genericName: GenericCompRegName, bitValues: TRow) =>
  bitValues[
    {
      OutputA: `OCIE${bitValues.timerNr}A`,
      OutputB: `OCIE${bitValues.timerNr}B`,
      OutputC: `OCIE${bitValues.timerNr}C`,
      Input: `ICIE${bitValues.timerNr}`,
      DeadTimeA: `DTRL${bitValues.timerNr}`,
      DeadTimeB: `DTRH${bitValues.timerNr}`
    }[genericName]
  ] === '1'
const getPinName = (genericName: GenericCompRegName, bitValues: TRow) =>
  bitValues[
    {
      OutputA: `OCnA_OutputPort`,
      OutputB: `OCnB_OutputPort`,
      OutputC: `OCnC_OutputPort`,
      Input: ``,
      DeadTimeA: ``,
      DeadTimeB: ``
    }[genericName]
  ]
const getIsActiveOutput = (genericName: GenericCompRegName, bitValues: TRow) =>
  (bitValues[
    {
      OutputA: `CompareOutputModeA`,
      OutputB: `CompareOutputModeB`,
      OutputC: `CompareOutputModeC`,
      Input: ``,
      DeadTimeA: ``,
      DeadTimeB: ``
    }[genericName]
  ] || 'disconnect') !== 'disconnect'
const getIsActiveDeadTime = (
  genericName: GenericCompRegName,
  bitValues: TRow
) =>
  bitValues[
    {
      OutputA: ``,
      OutputB: ``,
      OutputC: ``,
      Input: ``,
      DeadTimeA: `DeadTime`,
      DeadTimeB: `DeadTime`
    }[genericName]
  ] === 'on'
const getIsUsed = (genericName: GenericCompRegName, bitValues: TRow) =>
  getIsTop(genericName, bitValues) ||
  getIsInterrupt(genericName, bitValues) ||
  getIsActiveOutput(genericName, bitValues) ||
  getIsActiveDeadTime(genericName, bitValues)

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
  bitValues: TRow
) => {
  const name = getName(genericName, bitValues)
  const value = parseFloat(bitValues[name] || '')
  // if (Number.isNaN(value)) debugger
  return {
    genericName: genericName,
    name,
    value,
    code: `${name} = ${value};`,
    pinModeCode: (getPinName(genericName, bitValues) || '')
      .split('+')
      .map((pinName) => `pinMode(${pinName}, OUTPUT);`),
    isInput: getIsInput(genericName),
    isOutput: getIsOutput(genericName),
    isDeadTime: getIsDeadTime(genericName),
    isActiveOutput: getIsActiveOutput(genericName, bitValues),
    isTop: getIsTop(genericName, bitValues),
    isInterrupt: getIsInterrupt(genericName, bitValues),
    isUsed: getIsUsed(genericName, bitValues)
  }
}
export const getAllCompareRegTraits = (bitValues: TRow) =>
  compareRegs.map((genericName) => getCompareRegTraits(genericName, bitValues))
