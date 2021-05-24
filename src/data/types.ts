export type TableNames = string

export type Table = {
  [k: string]: string | null
}[]
export type TimerConfig = Table[]

export type TimerRegisters = {
  [k: string]: string[]
}
export type Descriptions = {
  [k: string]: string
}

export type DefaultState = {
  [k: string]: string | null
}
