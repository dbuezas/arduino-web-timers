import { ScaleLinear, ticks, select, axisBottom } from 'd3'
import { useRef, useLayoutEffect } from 'preact/compat'
import { margin } from './margin'

type ohNoItIsAny = any

const toFixed = (float: number, digits = 0) => {
  const padding = Math.pow(10, digits)
  return Math.round(float * padding) / padding
}

function formatTime(s: ohNoItIsAny) {
  s = Number(s)
  if (!Number.isFinite(s)) return '--'
  if (s === 0) return '0'

  const m = s / 60
  const h = s / 60 / 60
  const ms = s * 1000
  const us = ms * 1000
  const ns = us * 1000
  if (ns < 10) return toFixed(ns, 1) + 'ns'
  if (ns < 1000) return toFixed(ns) + 'ns'
  if (us < 10) return toFixed(us, 1) + 'μs'
  if (us < 1000) return toFixed(us) + 'μs'
  if (ms < 10) return toFixed(ms, 1) + 'ms'
  if (ms < 1000) return toFixed(ms) + 'ms'
  if (s < 10) return toFixed(s, 1) + 's'
  if (h > 1) return toFixed(h, 0) + 'h' + toFixed(m % 60, 1) + 'm'
  if (m > 5) return toFixed(m, 0) + 'm' + toFixed(s % 60, 1) + 's'
  return toFixed(s, 0) + 's'
}
function formatFreq(hz: ohNoItIsAny) {
  hz = Number(hz)
  if (!Number.isFinite(hz)) return '--'
  if (hz === 0) return '0'

  const khz = hz / 1000
  const mhz = khz / 1000
  if (hz < 10) return toFixed(hz, 3) + 'Hz'
  if (hz < 100) return toFixed(hz, 3) + 'Hz'
  if (hz < 1000) return toFixed(hz, 1) + 'Hz'
  if (khz < 100) return toFixed(khz, 2) + 'kHz'
  if (khz < 1000) return toFixed(khz, 1) + 'kHz'
  if (mhz < 100) return toFixed(mhz, 2) + 'MHz'
  return toFixed(mhz, 1) + 'MHz'
}

type Props = {
  height: number
  xScale: ScaleLinear<number, number>
}
export default function XAxis({ height, xScale }: Props) {
  const nodeRef = useRef<SVGSVGElement>(null)
  const gEl = nodeRef.current
  useLayoutEffect(() => {
    if (!gEl) return
    const xTicks = ticks(xScale.domain()[0], xScale.domain()[1], 10)

    select(gEl).call((g) => {
      g.attr('transform', `translate(0,${height - margin.bottom})`)
        // .transition()
        // .ease(easeLinear)
        // .duration(100)
        .call(
          axisBottom(xScale)
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
