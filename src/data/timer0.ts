import { tsv, tsvRegisters } from './timers'
import { TimerConfig } from './types'

export const registers = tsvRegisters(`
TCCR0A	TCCR0B	TCCR0C	TIMSK0	DTR0	TIFR0	TCKSCR	8 bit
COM0A1	FOC0A	DSX07	-	DTR07	OC0A	-	TCNT0
COM0A0	FOC0B	DSX06	-	DTR06	OC0B	F2XEN	-
COM0B1	OC0AS	DSX05	-	DTR05	-	TC2XF1	OCR0A
COM0B0	DTEN0	DSX04	-	DTR04	-	TC2XF0	OCR0B
DOC0B	WGM02	-	-	DTR03	-	-	-
DOC0A	CS02	-	OCIE0B	DTR02	OCF0B	AFCKS	-
WGM01	CS01	DSX01	OCIE0A	DTR01	OCF0A	TC2XS1	-
WGM00	CS00	DSX00	TOIE0	DTR00	TOV0	TC2XS0	-
`)
export const configs: TimerConfig = [
  tsv(`
WGM0	WGM02	WGM01	WGM00	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	Normal	0xFF	immediate	MAX
1	0	0	1	PCPWM	0xFF	TOP	BOTTOM
2	0	1	0	CTC	OCR0A	immediate	MAX
3	0	1	1	FPWM	0xFF	TOP	MAX
4	1	0	0	reserved	-	-	-
5	1	0	1	PCPWM	OCR0A	TOP	BOTTOM
6	1	1	0	reserved	-	-	-
7	1	1	1	FPWM	OCR0A	TOP	TOP
  `),
  tsv(`
COM0A	COM0A0	COM0A1	timerMode	CompareOutputModeA	WGM02
0	0	0	Normal	disconnect
1	0	1	Normal	toggle
2	1	0	Normal	clear
3	1	1	Normal	set
0	0	0	CTC	disconnect
1	0	1	CTC	toggle
2	1	0	CTC	clear
3	1	1	CTC	set
0	0	0	FPWM	disconnect
1	0	1	FPWM	toggle	1
2	1	0	FPWM	clear, set-at-max
3	1	1	FPWM	set, clear-at-max
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	toggle	1
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
1	0	1	FPWM	reserved
2	1	0	FPWM	clear, set-at-max
3	1	1	FPWM	set, clear-at-max
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	reserved
2	1	0	PCPWM	clear-up, set-down
3	1	1	PCPWM	set-up, clear-down
`),
  tsv(`
CS0	CS02	CS01	CS00	clockPrescalerOrSource
0	0	0	0	0
1	0	0	1	1
2	0	1	0	8
3	0	1	1	64
4	1	0	0	256
5	1	0	1	1024
6	1	1	0	external_clock_falling_edge
7	1	1	1	external_clock_rising_edge
`),
  tsv(`
OCIE0A	OCIE0A_text	interruptVectorCodeA
0	no
1	yes ISR(TIMER0_COMPA_vect) { /* on OCR0A match */ }
`),
  tsv(`
OCIE0B	OCIE0B_text interruptVectorCodeB
0	no
1	yes	ISR(TIMER0_COMPB_vect) { /* on OCR0B match */ }
    
`),
  tsv(`
TOIE0	TOIE0_text	interruptVectorCodeOVF
0	no
1	yes	ISR(TIMER0_OVF_vect) { /* on overflow*/ }
`),
  tsv(`
F2XEN	TC2XS0	clockDoubler
0	0	off
1	0	off
1	1	on
`)
]
