import lgt328p from './lgt328p'
import atmega328p from './atmega328p'
import { MicroControllers } from '../helpers/types'
const timers = {
  [MicroControllers.LGT8F328P]: lgt328p,
  [MicroControllers.ATMEGA328P]: atmega328p
}
export default timers
