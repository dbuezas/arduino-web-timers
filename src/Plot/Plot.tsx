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
import { getCompareRegTraints } from '../helpers/compareRegisterUtil'

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

  const IOCR_states = getCompareRegTraints(bitValues).map((traits, i) => ({
    ...traits,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ref: useRef<CompareRegisterHandleRef>(null),
    i
  }))

  param.OCRnXs = IOCR_states.filter(({ isOutput }) => isOutput).map(
    ({ value }) => value
  )

  param.ICRn = IOCR_states.find(({ isInput }) => isInput)!.value

  param.top =
    IOCR_states.find(({ isTop }) => isTop)?.value ??
    parseInt(bitValues.topValue as any)
  const ocrMax = parseInt(bitValues.topValue as any) || counterMax

  param.maxCpuTicks = param.top * param.prescaler * 4

  const simulation = simTimer(param)

  const containerRef = useRef<HTMLDivElement>(null)
  const [width, height_] = useSize(containerRef)
  const height_ouputCompare = 30
  const margin_ouputCompare = 10
  const activeOCnXs = IOCR_states.filter(({ isActiveOutput }) => isActiveOutput)
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
            isActiveOutput && (
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

        {simulation.MATCH_Xs.flatMap(
          (matches, i) =>
            IOCR_states[i].isInterrupt && (
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
        {IOCR_states.find(({ isInput }) => isInput)!.isInterrupt && (
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

        {IOCR_states.map(
          ({ isActiveOutput, isTop, isInterrupt, ref, value, name }) =>
            (isActiveOutput || isTop || isInterrupt) && (
              <CompareRegisterHandle
                {...{
                  key: name,
                  ref,
                  width,
                  yExtent: [0, ocrMax],
                  yScale,
                  compareRegisterValue: value,
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
