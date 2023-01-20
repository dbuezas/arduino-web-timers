import { tsv } from '../timers'
import timer0 from './timer0'
import timer1 from './timer1'
import timer2 from './timer2'
import timer3 from './timer3'
const timers = [timer0, timer1, timer2, timer3]
export default timers
timers.forEach((t) =>
  t.configs.push(
    tsv(`
FCPU	FCPU_UI
32000000	32Mhz
16000000	16Mhz
8000000	8Mhz
4000000	4Mhz
2000000	2Mhz
1000000	1Mhz
`)
  )
)
