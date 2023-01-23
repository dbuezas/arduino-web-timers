import { ScaleLinear, line, CurveFactory, curveLinear } from 'd3'
import { margin } from './margin'

import './Curve.css'

type CurvesProps = {
  data: [number, number][]
  xScale: ScaleLinear<number, number>
  yScale: ScaleLinear<number, number>
  idx: any
  name?: string
  curve?: CurveFactory
}

export function Curve({
  xScale,
  yScale,
  data,
  idx,
  name,
  curve = curveLinear
}: CurvesProps) {
  const theLine = line<[number, number]>()
    .x(([t, datum]) => xScale(t)!)
    .y(([t, datum]) => yScale(datum)!)
    .curve(curve)

  const d = theLine(data)
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
