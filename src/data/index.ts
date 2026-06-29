import lgt328p from './lgt328p'
import atmega328p from './atmega328p'
import atmega328pb from './atmega328pb'
import ch32v003 from './ch32v003'
import ch32v103 from './ch32v103'
import ch32v203 from './ch32v203'
import ch32v307 from './ch32v307'
import { MicroControllers } from '../helpers/types'
// Timer tables: https://docs.google.com/spreadsheets/d/1VDKsVMj4c5aOxKWu2UroWFAeODwbeVwksYxhjtuEopI/edit#gid=1264839381
const timers = {
  [MicroControllers.LGT8F328P]: lgt328p,
  [MicroControllers.ATMEGA328P]: atmega328p,
  [MicroControllers.ATMEGA328PB]: atmega328pb,
  [MicroControllers.CH32V003]: ch32v003,
  [MicroControllers.CH32V103]: ch32v103,
  [MicroControllers.CH32V203]: ch32v203,
  [MicroControllers.CH32V307]: ch32v307
}

export default timers
