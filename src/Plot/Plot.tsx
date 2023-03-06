import { useEffect, useRef } from 'preact/compat'
import useSize from '@react-hook/size'

import XAxis from './XAxis'
import YAxis from './YAxis'
import { scaleLinear, extent, curveStepAfter } from 'd3'
import { margin } from './margin'

import './Plot.css'
import CompareRegisterHandle, {
  CompareRegisterHandleRef
} from './CompareRegisterHandle'
import InterruptArrow from './InterruptArrow'
import { Curve } from './Curve'
import { getAllCompareRegTraits } from '../helpers/compareRegisterUtil'
import { useAtomValue, useSetAtom } from 'jotai'
import { userConfigState } from '../state/state'
import { simulationState } from '../helpers/helpers'

function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function Plot({ style }: { style: Object }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, height_] = useSize(containerRef)
  const height_ouputCompare = 30
  const margin_ouputCompare = 10
  const { simulation, ocrMax, param, counterMax, values } =
    useAtomValue(simulationState)

  const IOCR_states = getAllCompareRegTraits(values).map((traits, i) => ({
    ...traits,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ref: useRef<CompareRegisterHandleRef>(null),
    i
  }))
  /* TODO: put somewhere else */
  /* DEFAULTS FOR COMPARE REGISTERS */
  {
    const prev = usePrevious(IOCR_states)
    const ioCount = IOCR_states.filter(({ isDeadTime }) => !isDeadTime).length
    let nth = 0
    IOCR_states.forEach((iocr, i) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const setReg = useSetAtom(userConfigState(iocr.name))
      const top = param.top || Number.parseInt(values.counterMax)
      if (!iocr.isDeadTime) nth++
      if (Number.isNaN(iocr.value) && iocr.isUsed) {
        const n = iocr.isDeadTime
          ? Math.pow(counterMax, 0.3)
          : (top / (ioCount + 2)) * (nth + 1)
        setReg('' + Math.round(n))
      }
      if (prev?.[i].isUsed && !iocr.isUsed) {
        setReg(undefined)
      }
    })
  }
  /* --- */
  const activeOCnXs = IOCR_states.filter(({ isActiveOutput }) => isActiveOutput)
  const height_timer =
    height_ - height_ouputCompare * (activeOCnXs.length + 0.5)
  const xScale = scaleLinear()
    .domain(extent(simulation.t) as [number, number])
    .range([margin.left, width - margin.right])
  const yScale = scaleLinear()
    .domain([0, ocrMax])
    .rangeRound([height_timer - margin.bottom, margin.top])

  useEffect(() => {
    const containerEl = containerRef.current

    const handleMouseUp = (e: Event) => {
      IOCR_states.forEach(({ ref }) => ref.current?.onMouseUp(undefined as any))
    }
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!containerEl) return
      let y = e instanceof MouseEvent ? e.clientY : e.targetTouches[0].clientY
      const targetY = containerEl.getBoundingClientRect().y
      const offsetY = y - targetY
      IOCR_states.forEach(({ ref }) => ref.current?.onMouseMove(offsetY, e))
    }
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchend', handleMouseUp)
    containerEl?.addEventListener('mousemove', handleMouseMove, {
      passive: false
    })
    containerEl?.addEventListener('touchmove', handleMouseMove, {
      passive: false
    })
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchend', handleMouseUp)
      containerEl?.removeEventListener('mousemove', handleMouseMove)
      containerEl?.removeEventListener('touchmove', handleMouseMove)
    }
  }, [IOCR_states])
  return (
    <div className="plotContainer" ref={containerRef} style={style}>
      <svg className="plot">
        <XAxis {...{ xScale, height: height_timer, data: simulation }} />
        <YAxis {...{ yScale, width }} />
        <Curve
          {...{
            xScale,
            yScale,
            width,
            height: height_timer,
            data: simulation.t.map((t, i) => [t, simulation.TCNT[i]]),
            idx: 'TCNT',
            key: 'TCNT'
          }}
        />
        {activeOCnXs.flatMap(({ isActiveOutput, i }, k) => {
          const yScale = scaleLinear()
            .domain([0, 1])
            .rangeRound([
              height_timer + height_ouputCompare * (k + 1),
              height_timer + height_ouputCompare * k + margin_ouputCompare
            ])
          return [
            isActiveOutput && (
              <Curve
                {...{
                  key: 'OC' + i,
                  idx: i,
                  curve: curveStepAfter,
                  name: 'OC' + param.timerNr + 'ABC'[i],
                  xScale,
                  yScale,
                  data: simulation.t.map((t, j) => [t, simulation.OCnXs[i][j]])
                }}
              />
            ),
            param.deadTimeEnable && i < 2 && (
              <Curve
                {...{
                  key: 'DeadTime-' + i,
                  idx: 'DeadTime-' + i,
                  curve: curveStepAfter,
                  name: '',
                  xScale,
                  yScale,
                  data: [
                    [0, 0],
                    ...simulation.t.map((t, j) => [
                      t,
                      simulation.deadTimes[i][j]
                    ]),
                    [simulation.t[simulation.t.length - 1], 0]
                  ] as [number, number][]
                }}
              />
            )
          ]
        })}

        {simulation.MATCH_Xs.flatMap(
          (matches, i) =>
            IOCR_states[i].isInterrupt && (
              <InterruptArrow
                {...{
                  key: i + 'interrupt',
                  flagValues: matches,
                  TCNT: simulation.TCNT,
                  t: simulation.t,
                  xScale,
                  yScale,
                  label: 'OCR' + values.timerNr + 'ABC'[i] + ' interrupt'
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
              label: 'Capture interrupt',
              key: 'Capture interrupt'
            }}
          />
        )}
        {values.InterruptOnTimerOverflow === 'on' && (
          <InterruptArrow
            {...{
              flagValues: simulation.OVF,
              TCNT: simulation.TCNT,
              t: simulation.t,
              xScale,
              yScale,
              label: 'Overflow interrupt',
              key: 'Overflow interrupt'
            }}
          />
        )}

        {IOCR_states.map(({ isUsed, ref, value, name }) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const setUserConfigValue = useSetAtom(userConfigState(name))

          // TODO: redo the extent thing with DTRs
          const yExtent2: [number, number] = name.startsWith('DTR')
            ? [0, Math.sqrt(counterMax + 1) - 1]
            : [0, ocrMax]
          const yScale = scaleLinear()
            .domain(yExtent2)
            .rangeRound([height_timer - margin.bottom, margin.top])
          return (
            isUsed && (
              <CompareRegisterHandle
                {...{
                  key: name,
                  ref,
                  width,
                  yExtent: yExtent2,
                  yScale,
                  compareRegisterValue: value,
                  setCompareRegisterValue: (val: number) =>
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    setUserConfigValue(val + ''),
                  name
                }}
              />
            )
          )
        })}
      </svg>
    </div>
  )
}
