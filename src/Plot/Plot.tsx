import { useCallback, useEffect, useRef } from 'react'
import useSize from '@react-hook/size'

// import TriggerVoltageHandle, { TriggerVoltageRef } from './TriggerVoltageHandle'
import XAxis from './XAxis'
import YAxis from './YAxis'
import * as d3 from 'd3'
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
  const counterMax = parseInt(bitValues.counterMax!)
  const param = {
    timerNr: bitValues.timerNr,
    timerMode: bitValues.timerMode as any,
    prescaler: parseInt(bitValues.clockPrescalerOrSource!),
    cpuHz: bitValues.clockDoubler === 'on' ? 32000000 * 2 : 32000000,
    top: 0,
    counterMax: parseInt(bitValues.counterMax!),
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
    parseInt(bitValues.topValue!)
  const ocrMax = parseInt(bitValues.topValue!) || counterMax

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
      const top = param.top || Number.parseInt(bitValues.counterMax!)
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
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(simulation.t) as [number, number])
    .range([margin.left, width - margin.right])
  const yScale = d3
    .scaleLinear()
    .domain([0, ocrMax])
    .rangeRound([height_timer - margin.bottom, margin.top])
  useEffect(() => {
    const handleMouseUp = (e: Event) => {
      IOCR_states.forEach(({ ref }) => ref.current?.onMouseUp(undefined as any))
      console.log('up')
      // e.preventDefault()
    }
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchend', handleMouseUp)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [IOCR_states])
  const onMouseMove = useCallback(
    (e) => {
      IOCR_states.forEach(({ ref }) => ref.current?.onMouseMove(e))
      // e.preventDefault()
    },
    [IOCR_states]
  )
  return (
    <div className="plotContainer" ref={containerRef} style={style}>
      <svg className="plot" onMouseMove={onMouseMove} onTouchMove={onMouseMove}>
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
        {activeOCnXs.map(({ isActiveOutput, i }, k) => {
          const yScale = d3
            .scaleLinear()
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
                    key: i,
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
                  key: i,
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
              label: 'Capture interrupt'
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
              label: 'Overflow interrupt'
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
          const yScale = d3
            .scaleLinear()
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
