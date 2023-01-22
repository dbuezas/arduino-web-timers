import raw from 'raw.macro'
import { tsv, tsvConstraints } from '../timers'

// const timers = [timer0, timer1, timer2, timer3]
const timers = [
  tsv(raw('./timer0.tsv')),
  tsv(raw('./timer1.tsv')),
  tsv(raw('./timer2.tsv')),
  tsv(raw('./timer3.tsv'))
]

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
