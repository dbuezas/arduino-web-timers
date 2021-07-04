import { ScaleLinear, ticks, select, axisLeft } from 'd3'
import { useRef, useLayoutEffect } from 'react'

import { margin } from './margin'

type Props = {
  width: number
  yScale: ScaleLinear<number, number>
}
export default function YAxis({ width, yScale }: Props) {
  const nodeRef = useRef<SVGSVGElement>(null)
  const gEl = nodeRef.current

  useLayoutEffect(() => {
    if (!gEl) return
    const yTicks = ticks(yScale.domain()[0], yScale.domain()[1], 10)
    select(gEl)
      // .transition()
      // .duration(200)
      .call((g) =>
        g.attr('transform', `translate(${margin.left},0)`).call(
          axisLeft(yScale)
            .tickValues(yTicks)
            .tickPadding(10)
            .tickSize(-width + margin.right + margin.left - 1)
            .tickFormat((v: any) => v)
        )
      )
      .call((g) =>
        g.select('.domain').attr(
          'd',
          (_d, _, path) =>
            // close path so the domain has a right border
            select(path[0]).attr('d') + 'z'
        )
      )
  }, [gEl, yScale, width])

  return <g className="y axis" ref={nodeRef} />
}
