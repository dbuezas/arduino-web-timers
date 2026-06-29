// @ts-expect-error
import timer1 from './timer1.tsv'
// @ts-expect-error
import timer2 from './timer2.tsv'
import { ch32Family } from '../timers'

// CH32V003 (WCH RISC-V, 48 MHz). TIM1 = advanced timer (complementary outputs,
// dead-time, MOE); TIM2 = general-purpose timer. Both share the TIM_TypeDef.
export default ch32Family(
  [
    [48000000, '48Mhz'],
    [24000000, '24Mhz'],
    [8000000, '8Mhz'],
    [1000000, '1Mhz']
  ],
  timer1,
  timer2
)
