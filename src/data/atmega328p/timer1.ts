import { tsv, tsvRegisters } from '../timers'
import { TTimerConfig } from '../../helpers/types'

const registers = tsvRegisters(`
TCCR1A	TCCR1B	TCCR1C	TCCR1D	TIMSK1	DTR1	TIFR1	TCKSCR	PMX0	HDR
COM1A1	ICNC1	FOC1A	DSX17	-		-	-	WCE	-
COM1A0	ICES1	FOC1B	DSX16	-		-	F2XEN	C1BF4	-
COM1B1	-	DOC1B	DSX15	ICIE1		ICF1	TC2XF1	C1AF5	HDR5
COM1B0	WGM13	DOC1A	DSX14	-		-	TC2XF0	C0BF3	HDR4
-	WGM12	DTEN1	-	-		-	-	C0AC0	HDR3
-	CS12	-	-	OCIE1A		OCF1B	AFCKS	SSB1	HDR2
WGM11	CS11	-	DSX11	OCIE1B		OCF1A	TC2XS1	TXD6	HDR1
WGM10	CS10	-	DSX10	TOIE1		TOV1	TC2XS0	RXD5	HDR0
`)
const configs: TTimerConfig = [
  tsv(`
timerNr	timerBits	counterMax
1	16	65355
`),
  tsv(`
WGM1	WGM13	WGM12	WGM11	WGM10	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	0	Normal	0xFFFF	immediate	MAX
1	0	0	0	1	PCPWM	0x00FF	TOP	BOTTOM
2	0	0	1	0	PCPWM	0x01FF	TOP	BOTTOM
3	0	0	1	1	PCPWM	0x03FF	TOP	BOTTOM
4	0	1	0	0	CTC	OCR1A	immediate	MAX
5	0	1	0	1	FPWM	0x00FF	BOTTOM	TOP
6	0	1	1	0	FPWM	0x01FF	BOTTOM	TOP
7	0	1	1	1	FPWM	0x03FF	BOTTOM	TOP
8	1	0	0	0	PFCPWM	ICR1	BOTTOM	BOTTOM
9	1	0	0	1	PFCPWM	OCR1A	BOTTOM	BOTTOM
10	1	0	1	0	PCPWM	ICR1	TOP	BOTTOM
11	1	0	1	1	PCPWM	OCR1A	TOP	BOTTOM
12	1	1	0	0	CTC	ICR1	immediate	MAX
13	1	1	0	1	reserved	-	-	-
14	1	1	1	0	FPWM	ICR1	TOP	TOP
15	1	1	1	1	FPWM	OCR1A	TOP	TOP
`),
  tsv(`
COM1A	COM1A1	COM1A0	timerMode	CompareOutputModeA	WGM1	CompareOutputModeB
0	0	0	Normal	disconnect
1	0	1	Normal	toggle
2	1	0	Normal	clear
3	1	1	Normal	set
0	0	0	CTC	disconnect
1	0	1	CTC	toggle
2	1	0	CTC	clear
3	1	1	CTC	set
0	0	0	FPWM	disconnect
1	0	1	FPWM	toggle	15	disconnect
2	1	0	FPWM	clear, set-at-max
3	1	1	FPWM	set, clear-at-max
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	toggle	11	disconnect
2	1	0	PCPWM	clear-up, set-down
3	1	1	PCPWM	set-up, clear-down
0	0	0	PFCPWM	disconnect
1	0	1	PFCPWM	toggle	9	disconnect
2	1	0	PFCPWM	clear-up, set-down
3	1	1	PFCPWM	set-up, clear-down
`),
  tsv(`
COM1B	COM1B1	COM1B0	timerMode	CompareOutputModeB	topValue
0	0	0	Normal	disconnect
1	0	1	Normal	toggle
2	1	0	Normal	clear
3	1	1	Normal	set
0	0	0	CTC	disconnect
1	0	1	CTC	toggle
2	1	0	CTC	clear
3	1	1	CTC	set
0	0	0	FPWM	disconnect
1	0	1	FPWM	disconnect
2	1	0	FPWM	clear, set-at-max
3	1	1	FPWM	set, clear-at-max
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	disconnect
2	1	0	PCPWM	clear-up, set-down
3	1	1	PCPWM	set-up, clear-down
0	0	0	PFCPWM	disconnect
1	0	1	PFCPWM	disconnect
2	1	0	PFCPWM	clear-up, set-down
3	1	1	PFCPWM	set-up, clear-down
`),
  tsv(`
CS1	CS12	CS11	CS10	clockPrescalerOrSource	ExternalClockInput
1	0	0	1	1	N/A
2	0	1	0	8	N/A
3	0	1	1	64	N/A
4	1	0	0	256	N/A
5	1	0	1	1024	N/A
6	1	1	0	external clock falling edge	PD5
7	1	1	1	external clock rising edge	PD5
0	0	0	0	disconnect	N/A
`),
  tsv(`
OCIE1A	OCIEnA_text	interruptVectorCodeA
0	no	//nocode
1	yes	ISR(TIMER1_COMPA_vect) {\\n    /* on OCR0A match */\\n}
`),
  tsv(`
OCIE1B	OCIEnB_text	interruptVectorCodeB
0	no	//nocode
1	yes	ISR(TIMER1_COMPB_vect) {\\n    /* on OCR0B match */\\n}
    
`),
  tsv(`
TOIE1	TOIEn_text	interruptVectorCodeOVF
0	no	//nocode
1	yes	ISR(TIMER1_OVF_vect) {\\n    /* on overflow */\\n}
`),
  tsv(`
ICIE1	ICIEn_text	interruptVectorCodeCapture
0	no	//nocode
1	yes	ISR(TIMER1_CAPT_vect) {\\n    /* on input capture */\\n}
`),

  tsv(`
C1BF4	WCE	OCnB_OutputPort
0	0	PB2
0	1	PB2
1	1	PF4
`),
  tsv(`
C1AF5	WCE	OCnA_OutputPort
0	0	PB1
0	1	PB1
1	1	PF5
`),
  // [{ ICR1: Math.round((65535 * 3) / 4) + '' }],
  // [{ OCR1A: Math.round((65535 * 2) / 4) + '' }],
  // [{ OCR1B: Math.round((65535 * 1) / 4) + '' }]
  [{ ICR1: '' }],
  [{ OCR1A: '' }],
  [{ OCR1B: '' }]
]
const timer = { registers, configs }
export default timer
