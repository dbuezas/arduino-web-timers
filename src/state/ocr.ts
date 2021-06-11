import { atom } from 'recoil'

export const OCRnAState = atom({
  key: 'OCRnA',
  default: 0
})
export const OCRnBState = atom({
  key: 'OCRnb',
  default: 0
})
export const OCRnCState = atom({
  key: 'OCRnC',
  default: 0
})
export const ICRState = atom({
  key: 'ICR',
  default: 0
})

export const OCRnStates = [OCRnAState, OCRnBState, OCRnCState]
