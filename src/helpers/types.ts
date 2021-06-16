export type TTableNames = string

export type TRow = {
  [k: string]: string | null
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
