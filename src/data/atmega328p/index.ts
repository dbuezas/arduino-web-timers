import raw from 'raw.macro'
import { tsv } from '../timers'

// const timers = [timer0, timer1, timer2, timer3]
const timers = [
  tsv(raw('./timer0.tsv')),
  tsv(raw('./timer1.tsv')),
  tsv(raw('./timer2.tsv'))
]
export default timers
