import {
  forwardRef,
  MouseEventHandler,
  useCallback,
  useImperativeHandle,
  useState
} from 'react'
import { margin } from './margin'
import './CompareRegisterHandle.css'

export type CompareRegisterHandleRef = {
  onMouseUp: MouseEventHandler
  onMouseMove: MouseEventHandler
}
type Props = {
  width: number
  yExtent: [number, number]
  yScale: d3.ScaleLinear<number, number>
  setCompareRegisterValue: (n: number) => void
  compareRegisterValue: number
  name: string
}

const constrain = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max)

const CompareRegisterHandle = forwardRef<CompareRegisterHandleRef, Props>(
  (
    {
      width,
      yScale,
      setCompareRegisterValue,
      compareRegisterValue,
      yExtent,
      name
    },
    ref
  ) => {
    const [draggingTV, setDraggingTV] = useState(false)
    useImperativeHandle(ref, () => ({
      onMouseUp() {
        setDraggingTV(false)
      },
      onMouseMove(e) {
        if (draggingTV) {
          const evt = e.nativeEvent as any
          const y = evt.pageY || evt.targetTouches[0].clientY
          const targetEl = evt.path.find((el: Element) => el.tagName === 'svg')
          if (!targetEl) return
          const targetY = targetEl.getBoundingClientRect().y
          const offsetY = y - targetY
          let scaled = yScale.invert(offsetY)
          scaled = constrain(Math.round(scaled), ...yExtent)
          setCompareRegisterValue(scaled)
        }
      }
    }))
    let scaledY = yScale(constrain(compareRegisterValue, ...yExtent))
    const onMouseDown = useCallback(
      (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDraggingTV(true)
      },
      [setDraggingTV]
    )
    return (
      <>
        <line
          className={`OCR ${name}`}
          x1={margin.left}
          x2={width - margin.right}
          y1={scaledY}
          y2={scaledY}
        ></line>
        <line
          className={`OCRHandle ${name}`}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          x1={margin.left}
          x2={width}
          // x2={width - margin.right}
          y1={scaledY}
          y2={scaledY}
        ></line>
        <text
          className={`OCRText ${name}`}
          fill="currentColor"
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          y={scaledY}
          x={width - margin.right}
          dy=".32em"
          dx="10"
        >
          {name}={compareRegisterValue}
        </text>
      </>
    )
  }
)

CompareRegisterHandle.displayName = 'CompareRegisterHandle'

export default CompareRegisterHandle
