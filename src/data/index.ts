import lgt328p from './lgt328p'
import atmega328p from './atmega328p'
import atmega328pb from './atmega328pb'
import { MicroControllers } from '../helpers/types'
// Timer tables: https://docs.google.com/spreadsheets/d/1VDKsVMj4c5aOxKWu2UroWFAeODwbeVwksYxhjtuEopI/edit#gid=1264839381
const timers = {
  [MicroControllers.LGT8F328P]: lgt328p,
  [MicroControllers.ATMEGA328P]: atmega328p,
  [MicroControllers.ATMEGA328PB]: atmega328pb
}

export default timers
