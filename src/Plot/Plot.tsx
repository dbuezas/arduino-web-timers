import { useEffect, useRef } from 'react'
import useSize from '@react-hook/size'

// import TriggerVoltageHandle, { TriggerVoltageRef } from './TriggerVoltageHandle'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { TDefaultState } from '../helpers/types'
import * as d3 from 'd3'
import { margin } from './margin'
import simTimer from '../helpers/simulator'

import './Plot.css'
import CompareRegisterHandle, {
  CompareRegisterHandleRef
} from './CompareRegisterHandle'
import InterruptArrow from './InterruptArrow'
import { Curve } from './Curve'

type Props = {
  bitValues: TDefaultState
  setBitValue: (bitName: string, bitValue: string) => void
  style: Object
}
export default function Plot({ bitValues, style, setBitValue }: Props) {
  const counterMax = parseInt(bitValues.counterMax as any)
  const param = {
    timerNr: bitValues.timerNr as string,
    timerMode: bitValues.timerMode as any,
    maxCpuTicks: 0,
    prescaler: parseInt(bitValues.clockPrescalerOrSource as any),
    cpuHz: bitValues.clockDoubler === 'on' ? 32000000 * 2 : 32000000,
    top: 0,
    tovTime: bitValues.setTovMoment as any,
    OCRnXs: [] as number[],
    OCRnXs_behaviour: [
      bitValues.CompareOutputModeA as any,
      bitValues.CompareOutputModeB as any,
      bitValues.CompareOutputModeC as any
    ],
    ICRn: 0
  }

  const OCR_states = ['A', 'B', 'C'].map((ABC, i) => {
    const name = 'OCR' + param.timerNr + ABC
    return {
      name,
      isTop: bitValues.topValue === name,
      isInterrupt: bitValues[`OCIEn${ABC}_text`] === 'yes',
      isActiveOutput:
        bitValues['CompareOutputMode' + ABC] &&
        bitValues['CompareOutputMode' + ABC] !== 'disconnect',
      // state: useState((counterMax / 5) * (i + 1)),
      // eslint-disable-next-line react-hooks/rules-of-hooks
      // state: useRecoilState(OCRnStates[i]),
      state: parseFloat(bitValues[name] || ''),
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ref: useRef<CompareRegisterHandleRef>(null),
      i
    }
  })
  param.OCRnXs = OCR_states.map(({ state }) => state)
  const name = 'ICR' + param.timerNr
  const ICR_state = {
    name,
    isTop: bitValues.topValue === name,
    isInterrupt: bitValues.ICIEn_text === 'yes',
    isActiveOutput: false,
    // state: useState((counterMax / 5) * 4),
    // state: useRecoilState(ICRState),
    state: parseFloat(bitValues[name] || ''),
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ref: useRef<CompareRegisterHandleRef>(null)
  }
  param.ICRn = ICR_state.state

  const IOCR_states = [...OCR_states, ICR_state]
  param.top =
    IOCR_states.find(({ isTop }) => isTop)?.state ??
    parseInt(bitValues.topValue as any)
  const ocrMax = parseInt(bitValues.topValue as any) || counterMax

  param.maxCpuTicks = param.top * param.prescaler * 4

  const simulation = simTimer(param)

  const containerRef = useRef<HTMLDivElement>(null)
  const [width, height_] = useSize(containerRef)
  const height_ouputCompare = 30
  const margin_ouputCompare = 10
  const activeOCnXs = OCR_states.filter(({ isActiveOutput }) => isActiveOutput)
  const height_timer =
    height_ - height_ouputCompare * (activeOCnXs.length + 0.5)
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(simulation.t) as [number, number])
    .range([margin.left, width - margin.right])
  const yScale = d3
    .scaleLinear()
    .domain([0, ocrMax])
    .rangeRound([height_timer - margin.bottom, margin.top])
  useEffect(() => {
    const handleMouseUp = (e: Event) => {
      IOCR_states.forEach(({ ref }) => ref.current?.onMouseUp(undefined as any))
      e.preventDefault()
    }
    document.addEventListener('mouseup', handleMouseUp)
    return () => document.removeEventListener('mouseup', handleMouseUp)
  }, [IOCR_states])

  return (
    <div className="plotContainer" ref={containerRef} style={style}>
      <svg
        className="plot"
        onMouseMove={(e) => {
          IOCR_states.forEach(({ ref }) => ref.current?.onMouseMove(e))
          e.preventDefault()
        }}

        // onMouseDown={(e) => {
        //   e.preventDefault()
        // }}
      >
        <XAxis {...{ xScale, height: height_timer, data: simulation }} />
        <YAxis {...{ yScale, width }} />
        <Curve
          {...{
            xScale,
            yScale,
            width,
            height: height_timer,
            data: simulation.t.map((t, i) => [t, simulation.TCNT[i]]),
            idx: 'TCNT'
          }}
        />
        {activeOCnXs.map(
          ({ isActiveOutput, i }, k) =>
            OCR_states[i].isActiveOutput && (
              <Curve
                {...{
                  key: i,
                  idx: i,
                  name: 'OC' + param.timerNr + 'ABC'[i],
                  xScale,
                  yScale: d3
                    .scaleLinear()
                    .domain([0, 1])
                    .rangeRound([
                      height_timer + height_ouputCompare * (k + 1),
                      height_timer +
                        height_ouputCompare * k +
                        margin_ouputCompare
                    ]),
                  data: simulation.t.map((t, j) => [t, simulation.OCnXs[i][j]])
                }}
              />
            )
        )}

        {/* refactor! */}
        {ICR_state.isInterrupt && (
          <InterruptArrow
            {...{
              flagValues: simulation.CAPT,
              TCNT: simulation.TCNT,
              t: simulation.t,
              xScale,
              yScale,
              label: 'Capture interrupt'
            }}
          />
        )}
        {bitValues.TOIEn_text === 'yes' && (
          <InterruptArrow
            {...{
              flagValues: simulation.OVF,
              TCNT: simulation.TCNT,
              t: simulation.t,
              xScale,
              yScale,
              label: 'Overflow interrupt'
            }}
          />
        )}
        {simulation.MATCH_Xs.flatMap(
          (matches, i) =>
            OCR_states[i].isInterrupt && (
              <InterruptArrow
                {...{
                  key: i,
                  flagValues: matches,
                  TCNT: simulation.TCNT,
                  t: simulation.t,
                  xScale,
                  yScale,
                  label: 'OCR' + bitValues.timerNr + 'ABC'[i] + ' interrupt'
                }}
              />
            )
        )}

        {/*********end refactor me */}
        {IOCR_states.map(
          ({ isActiveOutput, isTop, isInterrupt, ref, state, name }) =>
            (isActiveOutput || isTop || isInterrupt) && (
              <CompareRegisterHandle
                {...{
                  key: name,
                  ref,
                  width,
                  yExtent: [0, ocrMax],
                  yScale,
                  compareRegisterValue: state,
                  setCompareRegisterValue: (val: number) =>
                    setBitValue(name, val + ''),
                  name
                }}
              />
            )
        )}
      </svg>
    </div>
  )
}
