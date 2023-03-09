import { useState } from 'preact/hooks'
import { ReactNode, CSSProperties, useEffect } from 'react'
import './ResizePanel.css'
export default function ResizePanel(props: { children: ReactNode }) {
  const [height, setHeight] = useState(300)
  const [startY, setStartY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const onMouseDown = (e: MouseEvent | TouchEvent) => {
    let y = e instanceof MouseEvent ? e.clientY : e.targetTouches[0].clientY
    setStartY(y)
    setIsDragging(true)
  }
  useEffect(() => {
    if (!isDragging) return
    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      let y = e instanceof MouseEvent ? e.clientY : e.targetTouches[0].clientY
      setHeight(height + (startY - y))
      setStartY(y)
    }
    const onMouseEnd = (e: MouseEvent | TouchEvent) => {
      setIsDragging(false)
    }
    document.addEventListener('mouseup', onMouseEnd)
    document.addEventListener('touchend', onMouseEnd)
    document.addEventListener('mousemove', onMouseMove, {
      passive: false
    })
    document.addEventListener('touchmove', onMouseMove, {
      passive: false
    })
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onMouseMove)
      document.removeEventListener('mouseup', onMouseEnd)
      document.removeEventListener('touchend', onMouseEnd)
    }
  }, [isDragging, height, startY])

  return (
    <div
      className={`ResizePanel ${isDragging ? 'dragging' : ''}`}
      style={{ height: height }}
    >
      <div className="notch-container">
        <div
          className="notch"
          onMouseDown={onMouseDown as any}
          onTouchStart={onMouseDown as any}
        >
          <span className="dots">......</span>
        </div>
      </div>
      {props.children}
    </div>
  )
}
