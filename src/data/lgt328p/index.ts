import timer0 from './timer0'
import timer1 from './timer1'
import timer2 from './timer2'
import timer3 from './timer3'
const timers = [timer0, timer1, timer2, timer3].map((timer, timerNr) => ({
  ...timer,
  timerNr
}))
export default timers
