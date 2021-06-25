import * as d3 from 'd3'
import { useRef, useLayoutEffect } from 'react'
import { margin } from './margin'
import { Simulation } from '../helpers/simulator'
// @ts-ignore
// import useD3Transition from 'use-d3-transition'

type ohNoItIsAny = any

const toFixed = (float: number, digits = 0) => {
  const padding = Math.pow(10, digits)
  return (Math.round(float * padding) / padding).toFixed(digits)
}

export function formatTime(s: ohNoItIsAny) {
  s = Number(s)
  if (!Number.isFinite(s)) return '--'
  if (s === 0) return '0'

  const m = s / 60
  const h = s / 60 / 60
  const ms = s * 1000
  const us = ms * 1000
  const ns = us * 1000
  if (ns < 1000) return toFixed(ns, 0) + 'ns'
  if (us < 1000) return toFixed(us, 0) + 'μs'
  if (ms < 10) return toFixed(ms, 2) + 'ms'
  if (ms < 1000) return toFixed(ms) + 'ms'
  if (s < 10) return toFixed(s, 1) + 's'
  if (h > 1) return toFixed(h, 0) + 'h' + toFixed(m % 60, 1) + 'm'
  if (m > 5) return toFixed(m, 0) + 'm' + toFixed(s % 60, 1) + 's'
  return toFixed(s, 0) + 's'
}

type Props = {
  height: number
  xScale: d3.ScaleLinear<number, number>
}
export default function XAxis({ height, xScale }: Props) {
  const nodeRef = useRef<SVGSVGElement>(null)
  const gEl = nodeRef.current
  useLayoutEffect(() => {
    if (!gEl) return
    const xTicks = d3.ticks(xScale.domain()[0], xScale.domain()[1], 10)

    d3.select(gEl).call((g) => {
      g.attr('transform', `translate(0,${height - margin.bottom})`)
        // .transition()
        // .ease(d3.easeLinear)
        // .duration(100)
        .call(
          d3
            .axisBottom(xScale)
            .tickValues(xTicks)
            .tickPadding(10)
            .tickSize(-height + margin.top + margin.bottom)
            .tickFormat((t) => formatTime(t as any))
            .tickSizeOuter(0)
        )

      //   .call((g) => g.select('.domain').remove())
      // g.call((g) => g.select('.domain').remove())

      // return the selection:
    })
  }, [gEl, xScale, height])

  return <g className="x axis" ref={nodeRef} />
}
