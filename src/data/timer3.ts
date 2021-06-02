import { tsv, tsvRegisters } from './timers'
import { TTimerConfig } from '../helpers/types'

const registers = tsvRegisters(`
TCCR3A	TCCR3B	TCCR3C	TCCR3D	DTR3	TIMSK3	TIFR3	PMX0	PMX1	PMX2	HDR
COM3A1	ICNC3	FOC3A	DSX37		-	-	WCE	-	-	-
COM3A0	ICES3	FOC3B	DSX36		-	-	C1BF4	-		-
COM3B1	-	DOC3B	DSX35		ICIE3	ICF3	C1AF5	-		HDR5
COM3B0	WGM33	DOC3A	DSX34		-	-	C0BF3	-		HDR4
COM3C1	WGM32	DTEN3	-		OCIE3C	OCF3C	C0AC0	-		HDR3
COM3C0	CS32	-	-		OCIE3B	OCF3B	SSB1	C3AC		HDR2
WGM31	CS31	DOC3C	DSX31		OCIE3A	OCF3A	TXD6	C2BF7		HDR1
WGM30	CS30	FOC3C	DSX30		TOIE3	TOV3	RXD5	C2AF6		HDR0
`)
const configs: TTimerConfig = [
  tsv(`
WGM3	WGM33	WGM32	WGM31	WGM30	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	0	Normal	0xFFFF	Immediately	MAX
1	0	0	0	1	PCPWM	0x00FF	TOP	BOTTOM
2	0	0	1	0	PCPWM	0x01FF	TOP	BOTTOM
3	0	0	1	1	PCPWM	0x03FF	TOP	BOTTOM
4	0	1	0	0	CTC	OCR3A	Immediately	MAX
5	0	1	0	1	FPWM	0x00FF	BOTTOM	TOP
6	0	1	1	0	FPWM	0x01FF	BOTTOM	TOP
7	0	1	1	1	FPWM	0x03FF	BOTTOM	TOP
8	1	0	0	0	PFCPWM	ICR3	BOTTOM	BOTTOM
9	1	0	0	1	PFCPWM	OCR3A	BOTTOM	BOTTOM
10	1	0	1	0	PCPWM	ICR3	TOP	BOTTOM
11	1	0	1	1	PCPWM	OCR3A	TOP	BOTTOM
12	1	1	0	0	CTC	ICR3	Immediately	MAX
13	1	1	0	1	-	-	-	-
14	1	1	1	0	FPWM	ICR3	TOP	TOP
15	1	1	1	1	FPWM	OCR3A	TOP	TOP
`),
  tsv(`
COM3A	COM3A1	COM3A0	timerMode	CompareOutputModeA	WGM3	CompareOutputModeB	CompareOutputModeC
0	0	0	Normal	disconnect
1	0	1	Normal	toggle
2	1	0	Normal	clear
3	1	1	Normal	set
0	0	0	CTC	disconnect
1	0	1	CTC	toggle
2	1	0	CTC	clear
3	1	1	CTC	set
0	0	0	FPWM	disconnect
1	0	1	FPWM	toggle	15	disconnect	disconnect
2	1	0	FPWM	clear, set-at-max
3	1	1	FPWM	set, clear-at-max
0	0	0	PCPWM	disconnect
1	0	1	PCPWM	toggle	11	disconnect	disconnect
2	1	0	PCPWM	clear-up, set-down
3	1	1	PCPWM	set-up, clear-down
0	0	0	PFCPWM	disconnect
1	0	1	PFCPWM	toggle	9	disconnect	disconnect
2	1	0	PFCPWM	clear-up, set-down
3	1	1	PFCPWM	set-up, clear-down
`),
  tsv(`
COM3B	COM3B1	COM3B0	timerMode	CompareOutputModeB
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
COM3C	COM3C1	COM3C0	timerMode	CompareOutputModeC
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
6	1	1	0	external clock falling edge	PF6
7	1	1	1	external clock rising edge	PF6
0	0	0	0	disconnect	N/A
`),
  tsv(`
OCIE3A	OCIEnA_text	interruptVectorCodeA
0	no
1	yes	ISR(TIMER3_vect) {\\n  if (TIFR3 & (1 << OCF3A)) {\\n    TIFR3 = 1 << OCF3A;\\n    // [... your code]\\n  }\\n}
`),
  tsv(`
OCIE3B	OCIEnB_text	interruptVectorCodeB
0	no
1	yes	ISR(TIMER3_vect) {\\n  if (TIFR3 & (1 << OCF3B)) {\\n    TIFR3 = 1 << OCF3B;\\n    // [... your code]\\n  }\\n}
`),
  tsv(`
OCIE3C	OCIEnC_text	interruptVectorCodeC
0	no
1	yes	ISR(TIMER3_vect) {\\n  if (TIFR3 & (1 << OCF3C)) {\\n    TIFR3 = 1 << OCF3C;\\n    // [... your code]\\n  }\\n}
`),
  tsv(`
TOIE3	TOIEn_text	interruptVectorCodeD
0	no
1	yes	ISR(TIMER3_vect) {\\n  if (TIFR3 & (1 << TOV3)) {\\n    TIFR3 = 1 << TOV3;\\n    // [... your code]\\n  }\\n}
`),
  tsv(`
ICIE3	ICIEn_text	interruptVectorCodeCapture
0	no
1	yes	ISR(TIMER3_vect) {\\n  if (TIFR3 & (1 << ICF3)) {\\n    TIFR3 = 1 << ICF3;\\n    // [... your code]\\n  }\\n}
`),
  tsv(`
C3AC	WCE	OCnA_OutputPort
0	0	PF1 (wired to PD1 in QFP32)
0	1	PF1 (wired to PD1 in QFP32)
1	1	AC0P (wired to PD6 in QFP32 and SSOP20)
`),
  tsv(`
OCnB_OutputPort
PF2 (wired to PD2 in QFP32 and SSOP20)
PF3 (can't find the way in the datasheet)
`),
  tsv(`
OCnC_OutputPort
PF3
`),
  tsv(`
HDR2	OCnA_OutputPort	OCnA_OutputCurrent
0		12mA
1	PF1 (wired to PD1 in QFP32)	80mA
`),
  tsv(`
HDR3	OCnB_OutputPort	OCnB_OutputCurrent
0		12mA
1	PF2 (wired to PD2 in QFP32 and SSOP20)	80mA
`),
  tsv(`
OCnC_OutputCurrent
12mA
`)
]

const timer = { registers, configs }
export default timer
