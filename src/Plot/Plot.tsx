import React, { useRef, useState } from 'react'
import useSize from '@react-hook/size'

// import TriggerVoltageHandle, { TriggerVoltageRef } from './TriggerVoltageHandle'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { TDefaultState } from '../helpers/types'
import * as d3 from 'd3'
import { margin } from './margin'
import simTimer from './simulator'

import './Plot.css'
import CompareRegisterHandle, {
  CompareRegisterHandleRef
} from './CompareRegisterHandle'

type CurvesProps = {
  data: [number, number][]
  xScale: d3.ScaleLinear<number, number>
  yScale: d3.ScaleLinear<number, number>
  idx: any
  name?: string
}

function Curve({ xScale, yScale, data, idx, name }: CurvesProps) {
  const line = d3
    .line<[number, number]>()
    .x(([t, datum]) => xScale(t)!)
    .y(([t, datum]) => yScale(datum)!)
  const area = d3
    .area<[number, number]>()
    .x(([t, datum]) => xScale(t)!)
    .y0(yScale(0)!)
    .y1(([t, datum]) => yScale(datum)!)

  const d = line(data)
  return (
    <>
      <path key={idx} className={`plot-area-${idx}`} d={d || undefined}></path>
      {name && (
        <text
          className={`OCText ${name}`}
          fill="currentColor"
          y={yScale(0)}
          x={xScale(0) - margin.left}
          dy=".32em"
          dx="10"
        >
          {name}
        </text>
      )}
    </>
  )
}

type Props = { bitValues: TDefaultState }
export default function Plot({ bitValues }: Props) {
  const counterMax = parseInt(bitValues.counterMax as any)
  const [ocrA, setOcrA] = useState((counterMax / 5) * 1)
  const [ocrB, setOcrB] = useState((counterMax / 5) * 2)
  const [ocrC, setOcrC] = useState((counterMax / 5) * 3)
  const [icr, setIcr] = useState((counterMax / 5) * 4)
  const param = {
    timerNr: bitValues.timerNr as string,
    counterMax: parseInt(bitValues.counterMax as any),
    timerMode: bitValues.timerMode as any,
    maxCpuTicks: 0,
    prescaler: parseInt(bitValues.clockPrescalerOrSource as any),
    cpuHz: bitValues.clockDoubler == 'on' ? 32000000 * 2 : 32000000,
    top: 0,
    tovTime: 'BOTTOM' as any,
    OCRnXs: [ocrA, ocrB, ocrC],
    OCRnXs_behaviour: [
      bitValues.CompareOutputModeA as any,
      bitValues.CompareOutputModeB as any,
      bitValues.CompareOutputModeC as any
    ],
    ICRn: icr
  }

  param.top = parseInt(bitValues.topValue as any)
  if (bitValues.topValue === 'OCR' + param.timerNr + 'A') param.top = ocrA
  if (bitValues.topValue === 'ICR' + param.timerNr) param.top = icr
  param.maxCpuTicks = param.top * param.prescaler * 4

  const simulation = simTimer(param)
  const nodeRef = useRef<SVGSVGElement>(null)
  const ocrAHandleRef = useRef<CompareRegisterHandleRef>(null)
  const ocrBHandleRef = useRef<CompareRegisterHandleRef>(null)
  const ocrCHandleRef = useRef<CompareRegisterHandleRef>(null)
  const icrHandleRef = useRef<CompareRegisterHandleRef>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, height_] = useSize(containerRef)
  const height_ouputCompare = 30
  const margin_ouputCompare = 10
  const height_timer =
    height_ - height_ouputCompare * (param.OCRnXs.length + 0.5)
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(simulation.t) as [number, number])
    .range([margin.left, width - margin.right])
  const yScale = d3
    .scaleLinear()
    .domain([0, param.counterMax])
    // .domain([0, param.top * 1.1 + 1])
    // .domain([0, 255])
    // .rangeRound([height_timer - margin.bottom, margin.top])
    .rangeRound([height_timer - margin.bottom, margin.top])
  return (
    <div className="plotContainer" ref={containerRef}>
      <svg
        className="plot"
        ref={nodeRef}
        onMouseMove={(e) => {
          ocrAHandleRef.current?.onMouseMove(e)
          ocrBHandleRef.current?.onMouseMove(e)
          ocrCHandleRef.current?.onMouseMove(e)
          icrHandleRef.current?.onMouseMove(e)
          e.preventDefault()
        }}
        onMouseLeave={(e) => {
          ocrAHandleRef.current?.onMouseUp(e)
          ocrBHandleRef.current?.onMouseUp(e)
          ocrCHandleRef.current?.onMouseUp(e)
          icrHandleRef.current?.onMouseUp(e)
          e.preventDefault()
        }}
        onMouseUp={(e) => {
          ocrAHandleRef.current?.onMouseUp(e)
          ocrBHandleRef.current?.onMouseUp(e)
          ocrCHandleRef.current?.onMouseUp(e)
          icrHandleRef.current?.onMouseUp(e)
          e.preventDefault()
        }}
        onMouseDown={(e) => {
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
        {simulation.OCnXs.map((OCx, i) => (
          <Curve
            {...{
              idx: i,
              name: 'OC' + param.timerNr + 'ABC'[i],
              xScale,
              yScale: d3
                .scaleLinear()
                .domain([0, 1])
                .rangeRound([
                  height_timer + height_ouputCompare * (i + 1),
                  height_timer + height_ouputCompare * i + margin_ouputCompare
                ]),
              // .rangeRound([height - margin.bottom, margin.top]),
              data: simulation.t.map((t, i) => [t, OCx[i]])
            }}
          />
        ))}
        <CompareRegisterHandle
          ref={ocrAHandleRef}
          {...{
            width,
            yExtent: [0, param.counterMax],
            yScale,
            compareRegisterValue: ocrA,
            setCompareRegisterValue: setOcrA,
            name: 'OCR' + param.timerNr + 'A'
          }}
        />
        <CompareRegisterHandle
          ref={ocrBHandleRef}
          {...{
            width,
            yExtent: [0, param.counterMax],
            yScale,
            compareRegisterValue: ocrB,
            setCompareRegisterValue: setOcrB,
            name: 'OCR' + param.timerNr + 'B'
          }}
        />
        <CompareRegisterHandle
          ref={ocrCHandleRef}
          {...{
            width,
            yExtent: [0, param.counterMax],
            yScale,
            compareRegisterValue: ocrC,
            setCompareRegisterValue: setOcrC,
            name: 'OCR' + param.timerNr + 'C'
          }}
        />
        <CompareRegisterHandle
          ref={icrHandleRef}
          {...{
            width,
            yExtent: [0, param.counterMax],
            yScale,
            compareRegisterValue: icr,
            setCompareRegisterValue: setIcr,
            name: 'ICR' + param.timerNr
          }}
        />
      </svg>
    </div>
  )
}
