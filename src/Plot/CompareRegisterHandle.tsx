import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState
} from 'preact/compat'
import { margin } from './margin'
import './CompareRegisterHandle.css'
import { ScaleLinear } from 'd3-scale'

export type CompareRegisterHandleRef = {
  onMouseUp: (event: MouseEvent | TouchEvent) => void
  onMouseMove: (n: number, e: MouseEvent | TouchEvent) => void
}
type Props = {
  width: number
  yExtent: [number, number]
  yScale: ScaleLinear<number, number>
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
      onMouseMove(y, e) {
        e.preventDefault()
        if (draggingTV) {
          let scaled = yScale.invert(y)
          scaled = constrain(Math.round(scaled), ...yExtent)
          setCompareRegisterValue(scaled)
        }
      }
    }))
    let scaledY = yScale(constrain(compareRegisterValue, ...yExtent))
    const onMouseDown = useCallback(() => {
      setDraggingTV(true)
    }, [setDraggingTV])

    const onChangedInput = (val: string) => {
      setCompareRegisterValue(constrain(parseFloat(val), ...yExtent))
    }
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
          y1={scaledY}
          y2={scaledY}
        ></line>
        <g
          transform={`translate(${width - margin.right + 10},${scaledY - 10})`}
        >
          <foreignObject
            className={`OCRText ${name}`}
            style={{ width: 100, height: 30 }}
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
          >
            {name}=
            <input
              style={{ width: 50, border: 0, background: 'transparent' }}
              contentEditable={true}
              value={compareRegisterValue}
              onChange={(e) => onChangedInput(e.target.value)}
            ></input>
          </foreignObject>
        </g>
      </>
    )
  }
)

CompareRegisterHandle.displayName = 'CompareRegisterHandle'

export default CompareRegisterHandle
