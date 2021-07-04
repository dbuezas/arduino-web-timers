import { ScaleLinear, line } from 'd3'

type Props = {
  label: string
  flagValues: number[]
  t: number[]
  TCNT: number[]
  xScale: ScaleLinear<number, number>
  yScale: ScaleLinear<number, number>
}
export default function InterruptArrow({
  label,
  flagValues,
  t,
  TCNT,
  xScale,
  yScale
}: Props) {
  return (
    <>
      {flagValues.map(
        (n, i) =>
          n && (
            <g
              key={i}
              transform={`translate(${xScale(t[i])}, ${yScale(TCNT[i])})`}
            >
              <path
                d={
                  line()([
                    [-3, -5],
                    [0, 0],
                    [3, -5],
                    [0, 0],
                    [0, -12],
                    [20, -12]
                  ])!
                }
              />
              <text key={i} y="-20" x="0" dy=".32em">
                {label}
              </text>
            </g>
          )
      )}
    </>
  )
}
