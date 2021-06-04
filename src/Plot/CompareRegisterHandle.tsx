import React, {
  forwardRef,
  MouseEventHandler,
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
          let scaled = yScale.invert(e.nativeEvent.offsetY)
          scaled = Math.round(scaled)
          scaled = Math.min(scaled, yExtent[1])
          scaled = Math.max(scaled, yExtent[0])

          setCompareRegisterValue(scaled)
        }
      }
    }))
    const scaledY = yScale(compareRegisterValue)
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
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setDraggingTV(true)
          }}
          x1={margin.left}
          x2={width}
          // x2={width - margin.right}
          y1={scaledY}
          y2={scaledY}
        ></line>
        <text
          className={`OCRText ${name}`}
          fill="currentColor"
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setDraggingTV(true)
          }}
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
