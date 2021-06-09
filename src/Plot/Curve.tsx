import * as d3 from 'd3'
import { margin } from './margin'

import './Curve.css'

type CurvesProps = {
  data: [number, number][]
  xScale: d3.ScaleLinear<number, number>
  yScale: d3.ScaleLinear<number, number>
  idx: any
  name?: string
}

export function Curve({ xScale, yScale, data, idx, name }: CurvesProps) {
  const line = d3
    .line<[number, number]>()
    .x(([t, datum]) => xScale(t)!)
    .y(([t, datum]) => yScale(datum)!)

  const d = line(data)
  return (
    <>
      <path className={`curve-${idx}`} d={d || undefined}></path>
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
