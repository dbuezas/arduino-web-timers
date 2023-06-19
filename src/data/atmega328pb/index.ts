// @ts-expect-error
import timer0 from '../atmega328p/timer0.tsv'
// @ts-expect-error
import timer1 from '../atmega328p/timer1.tsv'
// @ts-expect-error
import timer2 from '../atmega328p/timer2.tsv'
// @ts-expect-error
import timer3 from './timer3.tsv'
// @ts-expect-error
import timer4 from './timer4.tsv'
import { tsv, tsvConstraints } from '../timers'

const timers = [tsv(timer0), tsv(timer1), tsv(timer2), tsv(timer3), tsv(timer4)]

timers.forEach((t) =>
  t.configs.push(
    tsvConstraints(`
FCPU	FCPU_UI
16000000	16Mhz
20000000	20Mhz
8000000	8Mhz
4000000	4Mhz
2000000	2Mhz
1000000	1Mhz
`)
  )
)
export default timers
