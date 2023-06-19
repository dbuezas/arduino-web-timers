export type TTableNames = string

export type TRow = {
  [k: string]: string
}
export type TTable = TRow[]
export type TTimerConfig = TTable[]

export type TTimerRegisters = {
  [k: string]: string[]
}
export type TDescriptions = {
  [k: string]: string
}

export type TDefaultState = TRow

export type TTimer = {
  configs: TTimerConfig
  registers: TTimerRegisters
  timerNr: number
}
export enum PanelModes {
  Normal = 'Normal',
  Internal = 'With Internals',
  ByDependencies = 'By Dependencies'
}
export enum MicroControllers {
  LGT8F328P = 'LGT8F328P',
  ATMEGA328P = 'ATMEGA328P',
  ATMEGA328PB = 'ATMEGA328PB'
}
