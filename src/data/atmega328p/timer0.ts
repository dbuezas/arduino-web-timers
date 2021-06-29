import { tsv, tsvRegisters } from '../timers'
import { TTimerConfig } from '../../helpers/types'

const registers = tsvRegisters(`
TCCR0A	TCCR0B	TCCR0C	TIMSK0	TIFR0
COM0A1	FOC0A	DSX07	-	OC0A
COM0A0	FOC0B	DSX06	-	OC0B
COM0B1	-	DSX05	-	-
COM0B0	-	DSX04	-	-
-	WGM02	-	-	-
-	CS02	-	OCIE0B	OCF0B
WGM01	CS01	DSX01	OCIE0A	OCF0A
WGM00	CS00	DSX00	TOIE0	TOV0
`)
const configs: TTimerConfig = [
  tsv(`
timerNr	timerBits	counterMax
0	8	255
`),
  tsv(`
WGM0	WGM02	WGM01	WGM00	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	Normal	0xFF	immediate	MAX
1	0	0	1	PCPWM	0xFF	TOP	BOTTOM
2	0	1	0	CTC	OCR0A	immediate	MAX
3	0	1	1	FPWM	0xFF	TOP	MAX
4	1	0	0	-	-	-	-
5	1	0	1	PCPWM	OCR0A	TOP	BOTTOM
6	1	1	0	-	-	-	-
7	1	1	1	FPWM	OCR0A	TOP	TOP
  `),
  tsv(`
COM0A	COM0A0	COM0A1	timerMode	CompareOutputModeA	WGM02	CompareOutputModeB
0	0	0	Normal	disconnect
1	0	1	Normal	toggle
2	1	0	Normal	clear
3	1	1	Normal	set
0	0	0	CTC	disconnect
1	0	1	CTC	toggle
2	1	0	CTC	clear
3	1	1	CTC	set
0	0	0	FPWM	disconnect
1	0	1	FPWM	toggle	1	disconnect
2	1	0	FPWM	clear-on-match, set-at-max
3	1	1	FPWM	set-on-match, clear-at-max
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	toggle	1	disconnect
2	1	0	PCPWM	clear-up, set-down
3	1	1	PCPWM	set-up, clear-down
`),
  tsv(`
COM0B	COM0B0	COM0B1	timerMode	CompareOutputModeB
0	0	0	Normal	disconnect
1	0	1	Normal	toggle
2	1	0	Normal	clear
3	1	1	Normal	set
0	0	0	CTC	disconnect
1	0	1	CTC	toggle
2	1	0	CTC	clear
3	1	1	CTC	set
0	0	0	FPWM	disconnect
1	0	1	FPWM	-
2	1	0	FPWM	clear-on-match, set-at-max
3	1	1	FPWM	set-on-match, clear-at-max
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	-
2	1	0	PCPWM	clear-up, set-down
3	1	1	PCPWM	set-up, clear-down
`),
  tsv(`
CS0	CS02	CS01	CS00	clockPrescalerOrSource	ExternalClockInput
1	0	0	1	1	N/A
2	0	1	0	8	N/A
3	0	1	1	64	N/A
4	1	0	0	256	N/A
5	1	0	1	1024	N/A
6	1	1	0	external clock falling edge	D4
7	1	1	1	external clock rising edge	D4
0	0	0	0	disconnect	N/A
`),
  tsv(`
OCIE0A	interruptA	interruptVectorCodeA
0	off	//nocode
1	on	ISR(TIMER0_COMPA_vect) {\\n    /* on OCR0A match */\\n}
`),
  tsv(`
OCIE0B	interruptB	interruptVectorCodeB
0	off	//nocode
1	on	ISR(TIMER0_COMPB_vect) {\\n    /* on OCR0B match */\\n}
    
`),
  tsv(`
TOIE0	InterruptOnTimerOverflow	interruptVectorCodeOVF
0	off	//nocode
1	on	ISR(TIMER0_OVF_vect) {\\n    /* on overflow */\\n}
`),
  tsv(`
OCnA_OutputPort
D6
`),
  tsv(`
OCnB_OutputPort
D5
`),
  // [{ OCR0A: Math.round((255 * 2) / 3) + '' }],
  // [{ OCR0B: Math.round((255 * 1) / 3) + '' }]
  [{ OCR0A: '' }],
  [{ OCR0B: '' }]
]
const timer = { registers, configs }
export default timer
