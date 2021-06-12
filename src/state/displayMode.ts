import { atom } from 'recoil'
export enum PanelModes {
  Normal = 'Normal',
  Internal = 'With Internals',
  ByDependencies = 'By Dependencies'
}
export const PanelModeState = atom({
  key: 'PanelModeState',
  default: PanelModes.Normal
})
