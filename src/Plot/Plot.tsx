import { useEffect, useRef } from 'react'
import useSize from '@react-hook/size'
import { Tag } from 'rsuite'

import XAxis from './XAxis'
import YAxis from './YAxis'
import { scaleLinear, extent } from 'd3'
import { margin } from './margin'
import simTimer from '../helpers/simulator'

import './Plot.css'
import CompareRegisterHandle, {
  CompareRegisterHandleRef
} from './CompareRegisterHandle'
import InterruptArrow from './InterruptArrow'
import { Curve } from './Curve'
import {
  getAllCompareRegTraits,
  getCompareRegTraits
} from '../helpers/compareRegisterUtil'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { usePrevious, userConfigBitState } from '../state/state'
import { suggestedAssignmentState } from '../Panes/state'

type Props = {
  style: Object
}
export default function Plot({ style }: Props) {
  const bitValues = useRecoilValue(suggestedAssignmentState)
  const counterMax = parseInt(bitValues.counterMax)
  const param = {
    timerNr: bitValues.timerNr,
    timerMode: bitValues.timerMode as any,
    prescaler:
      bitValues.clockPrescalerOrSource === 'disconnect'
        ? NaN
        : parseInt(bitValues.clockPrescalerOrSource) ||
          parseInt(bitValues.FCPU) / 1000,
    cpuHz:
      parseInt(bitValues.FCPU || '1') *
      (bitValues.clockDoubler === 'on' ? 2 : 1),
    top: 0,
    counterMax: parseInt(bitValues.counterMax),
    tovTime: bitValues.setTovMoment as any,
    OCRnXs: [] as number[],
    OCRnXs_behaviour: [
      bitValues.CompareOutputModeA as any,
      bitValues.CompareOutputModeB as any,
      bitValues.CompareOutputModeC as any
    ],
    ICRn: 0,
    deadTimeEnable: bitValues.DeadTime === 'on',
    deadTimeA: getCompareRegTraits('DeadTimeA', bitValues).value,
    deadTimeB: getCompareRegTraits('DeadTimeB', bitValues).value
  }

  const IOCR_states = getAllCompareRegTraits(bitValues).map((traits, i) => ({
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
    parseInt(bitValues.topValue)
  const ocrMax = parseInt(bitValues.topValue) || counterMax

  /* TODO: put somewhere else */
  /* DEFAULTS FOR COMPARE REGISTERS */
  {
    const prev = usePrevious(IOCR_states)
    const ioCount = IOCR_states.filter(
      ({ isDeadTime, isUsed }) => !isDeadTime
    ).length
    IOCR_states.forEach((iocr, i) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const setReg = useSetRecoilState(userConfigBitState(iocr.name))
      const top = param.top || Number.parseInt(bitValues.counterMax)
      if (prev && !prev[i].isUsed && iocr.isUsed) {
        const n = iocr.isDeadTime
          ? Math.sqrt(counterMax) / 2
          : (top / (ioCount + 1)) * (i + 1)
        setReg('' + Math.round(n))
      }
      if (prev?.[i].isUsed && !iocr.isUsed) {
        setReg(undefined)
      }
    })
  }
  /* --- */
  const simulation = simTimer(param)
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, height_] = useSize(containerRef)
  const height_ouputCompare = 30
  const margin_ouputCompare = 10
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
      <Tag className="frequency">
        Freq: {Math.round(simulation.freq * 100) / 100}Hz
      </Tag>
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
        {activeOCnXs.map(({ isActiveOutput, i }, k) => {
          const yScale = scaleLinear()
            .domain([0, 1])
            .rangeRound([
              height_timer + height_ouputCompare * (k + 1),
              height_timer + height_ouputCompare * k + margin_ouputCompare
            ])
          return (
            <>
              {isActiveOutput && (
                <Curve
                  {...{
                    key: 'OC' + i,
                    idx: i,
                    name: 'OC' + param.timerNr + 'ABC'[i],
                    xScale,
                    yScale,
                    data: simulation.t.map((t, j) => [
                      t,
                      simulation.OCnXs[i][j]
                    ])
                  }}
                />
              )}
              {param.deadTimeEnable && (
                <Curve
                  {...{
                    key: 'DeadTime-' + i,
                    idx: 'DeadTime-' + i,
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
              )}
            </>
          )
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
              label: 'Capture interrupt',
              key: 'Capture interrupt'
            }}
          />
        )}
        {bitValues.InterruptOnTimerOverflow === 'on' && (
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
          const setUserConfigBit = useSetRecoilState(userConfigBitState(name))

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
                    setUserConfigBit(val + ''),
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
