import timer0 from './timer0.txt'
import timer1 from './timer1.txt'
import timer2 from './timer2.txt'
import timer3 from './timer3.txt'
import { tsv, tsvConstraints } from '../timers'

// const timers = [timer0, timer1, timer2, timer3]
const timers = [tsv(timer0), tsv(timer1), tsv(timer2), tsv(timer3)]

timers.forEach((t) =>
  t.configs.push(
    tsvConstraints(`
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
export default timers
