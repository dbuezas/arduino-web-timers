import { tsv, tsvRegisters } from './timers'

export const registers = tsvRegisters(`
TCCR1A	TCCR1B	TCCR1C	TCCR1D	TIMSK1	DTR1	TIFR1	TCKSCR
COM1A1	ICNC1	FOC1A	DSX17	-		-	-
COM1A0	ICES1	FOC1B	DSX16	-		-	F2XEN
COM1B1	-	DOC1B	DSX15	ICIE1		ICF1	TC2XF1
COM1B0	WGM13	DOC1A	DSX14	-		-	TC2XF0
-	WGM12	DTEN1	-	-		-	-
-	CS12	-	-	OCIE1A		OCF1B	AFCKS
WGM11	CS11	-	DSX11	OCIE1B		OCF1A	TC2XS1
WGM10	CS10	-	DSX10	TOIE1		TOV1	TC2XS0`)
export const config = {
  workingModes: tsv(`
WGM1	WGM13	WGM12	WGM11	WGM10	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	0	Normal	0xFFFF	Immediately	MAX
1	0	0	0	1	PCPWM	0x00FF	TOP	BOTTOM
2	0	0	1	0	PCPWM	0x01FF	TOP	BOTTOM
3	0	0	1	1	PCPWM	0x03FF	TOP	BOTTOM
4	0	1	0	0	CTC	OCR1A	Immediately	MAX
5	0	1	0	1	FPWM	0x00FF	BOTTOM	TOP
6	0	1	1	0	FPWM	0x01FF	BOTTOM	TOP
7	0	1	1	1	FPWM	0x03FF	BOTTOM	TOP
8	1	0	0	0	PFCPWM	ICR1	BOTTOM	BOTTOM
9	1	0	0	1	PFCPWM	OCR1A	BOTTOM	BOTTOM
10	1	0	1	0	PCPWM	ICR1	TOP	BOTTOM
11	1	0	1	1	PCPWM	OCR1A	TOP	BOTTOM
12	1	1	0	0	CTC	ICR1	Immediately	MAX
13	1	1	0	1	reserved	-	-	-
14	1	1	1	0	FPWM	ICR1	TOP	TOP
15	1	1	1	1	FPWM	OCR1A	TOP	TOP
`),
  compareOutputModeA: tsv(`
COM1A	COM1A1	COM0A0	timerMode	CompareOutputModeA	WGM1
0	0	0	Normal	disconnect
1	0	1	Normal	toggle
2	1	0	Normal	clear
3	1	1	Normal	set
0	0	0	CTC	disconnect
1	0	1	CTC	toggle
2	1	0	CTC	clear
3	1	1	CTC	set
0	0	0	FPWM	disconnect
1	0	1	FPWM	toggle	15
2	1	0	FPWM	clear
3	1	1	FPWM	set
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	toggle	11
2	1	0	PCPWM	clear-up, set-down
3	1	1	PCPWM	set-up, clear-down
0	0	0	PFCPWM	disconnect
1	0	1	PFCPWM	toggle	9
2	1	0	PFCPWM	clear-up, set-down
3	1	1	PFCPWM	set-up, clear-down
`),
  compareOutputModeB: tsv(`
COM1B	COM1B2	COM1B1	COM0B0	timerMode	CompareOutputModeB	topValue
0	0	0	0	Normal	disconnect
1	1	0	1	Normal	toggle
2	2	1	0	Normal	clear
3	3	1	1	Normal	set
0	0	0	0	CTC	disconnect
1	1	0	1	CTC	toggle
2	2	1	0	CTC	clear
3	3	1	1	CTC	set
0	0	0	0	FPWM	disconnect
1	1	0	1	FPWM	disconnect
2	2	1	0	FPWM	clear
3	3	1	1	FPWM	set
0	0	0	0	PCPWM	disconnect
1	1	0	1	PCPWM	disconnect
2	2	1	0	PCPWM	clear-up, set-down
3	3	1	1	PCPWM	set-up, clear-down
0	0	0	0	PFCPWM	disconnect
1	1	0	1	PFCPWM	disconnect
2	2	1	0	PFCPWM	clear-up, set-down
3	3	1	1	PFCPWM	set-up, clear-down
`),
  clockSource: tsv(`
CS1	CS12	CS11	CS10	clockSource
0	0	0	0	0
1	0	0	1	1
2	0	1	0	8
3	0	1	1	64
4	1	0	0	256
5	1	0	1	1024
6	1	1	0	external_clock_falling_edge
7	1	1	1	external_clock_rising_edge
`),
  interruptMask: tsv(`
TIMSK1	interrupt vector code
OCIE1A	ISR(TIMER1_COMPA_vect) { /* on OCR1A match */ }
OCIE1B	ISR(TIMER1_COMPB_vect) { /* on OCR1B match */ }
TOIE1	ISR(TIMER1_OVF_vect) { /* on overflow*/ }
ICIE1	ISR(TIMER1_CAPT_vect) { /* on input capture/ }
`),
  frequencyDoubler: tsv(`
F2XEN	TC2XS1	clockDoubler
0	0	off
1	0	off
1	1	on
`)
}
