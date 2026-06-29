// @ts-expect-error
import timer1 from '../ch32f103/timer1.tsv'
// @ts-expect-error
import timer2 from '../ch32f103/timer2.tsv'
// @ts-expect-error
import timer3 from '../ch32f103/timer3.tsv'
// @ts-expect-error
import timer4 from '../ch32f103/timer4.tsv'
import { ch32Family } from '../timers'

// CH32V307 (WCH RISC-V, F205-class, 144 MHz). TIM1 advanced; TIM2/3/4 general.
export default ch32Family(
  [
    [144000000, '144Mhz'],
    [96000000, '96Mhz'],
    [72000000, '72Mhz'],
    [48000000, '48Mhz'],
    [24000000, '24Mhz'],
    [8000000, '8Mhz']
  ],
  timer1,
  timer2,
  timer3,
  timer4
)
