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
  ATMEGA328PB = 'ATMEGA328PB',
  CH32V003 = 'CH32V003',
  CH32V103 = 'CH32V103',
  CH32V203 = 'CH32V203',
  CH32V307 = 'CH32V307'
}
