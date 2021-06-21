import { tsv, tsvRegisters } from '../timers'
import { TTimerConfig } from '../../helpers/types'

const registers = tsvRegisters(`
TCCR2A	TCCR2B	TIMSK2	TIFR2	PMX1	HDR
COM2A1	FOC2A	-	-	-	-
COM2A0	FOC2B	-	-	-	-
COM2B1	-	-	-	-	HDR5
COM2B0	-	-	-	-	HDR4
-	WGM22	-	-	-	HDR3
-	CS22	OCIE2B	OCF2B	C3AC	HDR2
WGM21	CS21	OCIE2A	OCF2A	C2BF7	HDR1
WGM20	CS20	TOIE2	TOV2	C2AF6	HDR0
`)
const configs: TTimerConfig = [
  tsv(`
timerNr	timerBits	counterMax
2	8	255
  `),
  tsv(`
WGM2	WGM22	WGM21	WGM20	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	Normal	0xFF	immediate	MAX
1	0	0	1	PCPWM	0xFF	TOP	BOTTOM
2	0	1	0	CTC	OCR2A	immediate	MAX
3	0	1	1	FPWM	0xFF	TOP	MAX
4	1	0	0	-	-	-	-
5	1	0	1	PCPWM	OCR2A	TOP	BOTTOM
6	1	1	0	-	-	-	-
7	1	1	1	FPWM	OCR2A	TOP	TOP
  `),
  tsv(`
COM2A	COM2A0	COM2A1	timerMode	CompareOutputModeA
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
COM2B	COM2B0	COM2B1	timerMode	CompareOutputModeB
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
CS2	CS22	CS21	CS20	clockPrescalerOrSource
1	0	0	1	1
2	0	1	0	8
3	0	1	1	32
4	1	0	0	64
5	1	0	1	128
6	1	1	0	256
7	1	1	1	1024
0	0	0	0	disconnect
`),
  tsv(`
OCIE2A	interruptA	interruptVectorCodeA
0	no  	//nocode
1	on	ISR(TIMER2_COMPA_vect) {\\n    /* on OCR2A match */\\n}
`),
  tsv(`
OCIE2B	interruptB	interruptVectorCodeB
0	no  	//nocode
1	on	ISR(TIMER2_COMPB_vect) {\\n    /* on OCR2B match */\\n}
    
`),
  tsv(`
TOIE2	InterruptOnTimerOverflow	interruptVectorCodeOVF
0	no  	//nocode
1	on	ISR(TIMER2_OVF_vect) {\\n    /* on overflow */\\n}
`),
  tsv(`
C2AF6	OCnA_OutputPort
0	PB3
1	PF6
`),
  tsv(`
C2BF7	OCnB_OutputPort
0	PD3
1	PF7
`),
  // [{ OCR2A: Math.round((255 * 2) / 3) + '' }],
  // [{ OCR2B: Math.round((255 * 1) / 3) + '' }]
  [{ OCR2A: '' }],
  [{ OCR2B: '' }]
]
const timer = { registers, configs }
export default timer
