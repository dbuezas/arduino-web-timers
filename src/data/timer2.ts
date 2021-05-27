import { tsv, tsvRegisters } from './timers'
import { TimerConfig } from '../helpers/types'

export const registers = tsvRegisters(`
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
export const configs: TimerConfig = [
  tsv(`
WGM2	WGM22	WGM21	WGM20	timerMode	topValue	updateOcrMoment	setTovMoment
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
2	1	0	FPWM	clear, set-at-max
3	1	1	FPWM	set, clear-at-max
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
2	1	0	FPWM	clear, set-at-max
3	1	1	FPWM	set, clear-at-max
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	-
2	1	0	PCPWM	clear-up, set-down
3	1	1	PCPWM	set-up, clear-down
`),
  tsv(`
CS2	CS22	CS21	CS20	clockPrescalerOrSource
0	0	0	0	0
1	0	0	1	1
2	0	1	0	8
3	0	1	1	32
4	1	0	0	64
5	1	0	1	128
6	1	1	0	256
7	1	1	1	1024
`),
  tsv(`
OCIE2A	OCIE2A_text	interruptVectorCodeA
0	no
1	yes	ISR(TIMER2_COMPA_vect) { /* on OCR2A match */ }
`),
  tsv(`
OCIE2B	OCIE2B_text	interruptVectorCodeB
0	no
1	yes	ISR(TIMER2_COMPB_vect) { /* on OCR2B match */ }
    
`),
  tsv(`
TOIE2	TOIE2_text	interruptVectorCodeOVF
0	no
1	yes	ISR(TIMER2_OVF_vect) { /* on overflow*/ }
`),
  tsv(`
C2AF6	OC2A_OutputPort
0	PB3
1	PF6
`),
  tsv(`
C2BF7	OC2B_OutputPort
0	PD3
1	PF7
`)
]
