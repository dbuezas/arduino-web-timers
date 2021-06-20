import { TRow } from './types'

export type GenericCompRegName = 'OutputA' | 'OutputB' | 'OutputC' | 'Input'

const getName = (genericName: GenericCompRegName, bitValues: TRow) =>
  ({
    OutputA: `OCR${bitValues.timerNr}A`,
    OutputB: `OCR${bitValues.timerNr}B`,
    OutputC: `OCR${bitValues.timerNr}C`,
    Input: `ICR${bitValues.timerNr}`
  }[genericName])

const getIsTop = (genericName: GenericCompRegName, bitValues: TRow) =>
  bitValues.topValue === getName(genericName, bitValues)
const getIsInterrupt = (genericName: GenericCompRegName, bitValues: TRow) =>
  bitValues[
    {
      OutputA: `OCIE${bitValues.timerNr}A`,
      OutputB: `OCIE${bitValues.timerNr}B`,
      OutputC: `OCIE${bitValues.timerNr}C`,
      Input: `ICIE${bitValues.timerNr}`
    }[genericName]
  ] === '1'
const getIsActiveOutput = (genericName: GenericCompRegName, bitValues: TRow) =>
  (bitValues[
    {
      OutputA: `CompareOutputModeA`,
      OutputB: `CompareOutputModeB`,
      OutputC: `CompareOutputModeC`,
      Input: ``
    }[genericName]
  ] || 'disconnect') !== 'disconnect'
const getIsUsed = (genericName: GenericCompRegName, bitValues: TRow) =>
  getIsTop(genericName, bitValues) ||
  getIsInterrupt(genericName, bitValues) ||
  getIsActiveOutput(genericName, bitValues)
const getIsInput = (genericName: GenericCompRegName) => genericName === 'Input'
const getIsOutput = (genericName: GenericCompRegName) =>
  !getIsInput(genericName)

const compareRegs: GenericCompRegName[] = [
  'OutputA',
  'OutputB',
  'OutputC',
  'Input'
]

export const getCompareRegTraints = (bitValues: TRow) =>
  compareRegs.map((genericName) => {
    const name = getName(genericName, bitValues)
    const value = parseFloat(bitValues[name] || '')
    // if (Number.isNaN(value)) debugger
    return {
      genericName: genericName,
      name,
      value,
      code: `${name} = ${value};`,
      isInput: getIsInput(genericName),
      isOutput: getIsOutput(genericName),
      isActiveOutput: getIsActiveOutput(genericName, bitValues),
      isTop: getIsTop(genericName, bitValues),
      isInterrupt: getIsInterrupt(genericName, bitValues),
      isUsed: getIsUsed(genericName, bitValues)
    }
  })
