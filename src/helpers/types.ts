export type TRow = {
  [k: string]: string
}
export type TTable = TRow[]

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
