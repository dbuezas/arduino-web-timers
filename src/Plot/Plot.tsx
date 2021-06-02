import React, { useRef } from 'react'
import useSize from '@react-hook/size'

// import TriggerVoltageHandle, { TriggerVoltageRef } from './TriggerVoltageHandle'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { TDefaultState } from '../helpers/types'
import * as d3 from 'd3'
import { margin } from './margin'
import simTimer from './simulator'

import './Plot.css'

type CurvesProps = {
  data: [number, number][]
  xScale: d3.ScaleLinear<number, number>
  yScale: d3.ScaleLinear<number, number>
  idx: any
}

function Curve({ xScale, yScale, data, idx }: CurvesProps) {
  const line = d3
    .line<[number, number]>()
    .x(([cpu, datum]) => xScale(cpu)!)
    .y(([cpu, datum]) => yScale(datum)!)
  const area = d3
    .area<[number, number]>()
    .x(([cpu, datum]) => xScale(cpu)!)
    .y0(yScale(0)!)
    .y1(([cpu, datum]) => yScale(datum)!)

  const d = line(data)
  // const d = area(data)
  return (
    <path key={idx} className={`plot-area-${idx}`} d={d || undefined}></path>
  )
}

type Props = { bitValues: TDefaultState }
export default function Plot({ bitValues }: Props) {
  const param = {
    timerMode: bitValues.timerMode as any,
    maxCpuTicks: 0,
    prescaler: parseInt(bitValues.clockPrescalerOrSource as any),
    top: parseInt(bitValues.topValue as any),
    tovTime: 'BOTTOM' as any,
    OCRnXs: [15, 15, 15],
    OCRnXs_behaviour: [
      bitValues.CompareOutputModeA as any,
      bitValues.CompareOutputModeB as any,
      bitValues.CompareOutputModeC as any
    ],
    ICRn: 10
  }
  param.maxCpuTicks = param.top * param.prescaler * 5
  const simulation = simTimer(param)
  const nodeRef = useRef<SVGSVGElement>(null)
  // const triggerVoltageRef = useRef<TriggerVoltageRef>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, height_] = useSize(containerRef)
  const height_ouputCompare = 30
  const margin_ouputCompare = 10
  const height_timer = height_ - height_ouputCompare * param.OCRnXs.length
  const xScale = d3
    .scaleLinear()
    .domain([0, param.maxCpuTicks])
    .range([margin.left, width - margin.right])
  const yScale = d3
    .scaleLinear()
    .domain([0, param.top])
    // .rangeRound([height_timer - margin.bottom, margin.top])
    .rangeRound([height_timer - margin.bottom, margin.top])
  return (
    <div className="plotContainer" ref={containerRef}>
      <svg
        className="plot"
        ref={nodeRef}
        onMouseMove={(e) => {
          // triggerVoltageRef.current?.onMouseMove(e)
          e.preventDefault()
        }}
        onMouseLeave={(e) => {
          // triggerVoltageRef.current?.onMouseUp(e)
          e.preventDefault()
        }}
        onMouseUp={(e) => {
          // triggerVoltageRef.current?.onMouseUp(e)
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
            data: simulation.cpu.map((cpu, i) => [cpu, simulation.TCNT[i]]),
            idx: 'TCNT'
          }}
        />
        {simulation.OCnXs.map((OCx, i) => (
          <Curve
            {...{
              idx: i,
              xScale,
              yScale: d3
                .scaleLinear()
                .domain([0, 1])
                .rangeRound([
                  height_timer + height_ouputCompare * (i + 1),
                  height_timer + height_ouputCompare * i + margin_ouputCompare
                ]),
              // .rangeRound([height - margin.bottom, margin.top]),
              data: simulation.cpu.map((cpu, i) => [cpu, OCx[i]])
            }}
          />
        ))}
        {/* <TriggerVoltageHandle ref={triggerVoltageRef} /> */}
      </svg>
    </div>
  )
}
