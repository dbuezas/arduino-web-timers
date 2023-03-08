import { useState } from 'preact/hooks'
import { ReactNode, CSSProperties, useEffect } from 'react'

export default function ResizePanel(props: {
  children: ReactNode
  style: CSSProperties
}) {
  const [height, setHeight] = useState(300)
  const [startY, setStartY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const onMouseDown = (e: MouseEvent | TouchEvent) => {
    let y = e instanceof MouseEvent ? e.clientY : e.targetTouches[0].clientY
    console.log('started', y)
    setStartY(y)
    setIsDragging(true)
  }
  useEffect(() => {
    if (!isDragging) return
    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      let y = e instanceof MouseEvent ? e.clientY : e.targetTouches[0].clientY
      console.log('moved', height + startY - y)
      setHeight(height + (startY - y))
      setStartY(y)
    }
    const onMouseEnd = (e: MouseEvent | TouchEvent) => {
      console.log('ended')
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
    <div style={{ ...props.style, height: height }}>
      <div
        onMouseDown={onMouseDown as any}
        onTouchStart={onMouseDown as any}
        style={{
          cursor: ' ns-resize',
          height: '20px',
          marginTop: '-10px',
          marginBottom: '-10px',
          background: 'transparent',
          display: 'flex',
          zIndex: '10',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          touchAction: 'none',
          userSelect: 'none'
        }}
      >
        <div
          style={{
            cursor: 'ns-resize',
            width: '50px',
            height: '12px',
            borderRadius: '8px',
            background: 'white',
            border: '2px solid lightgray',
            zIndex: '10',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            touchAction: 'none'
          }}
        >
          <span
            style={{
              textAlign: 'center',
              marginTop: -14,
              color: 'grey',
              fontSize: 18,
              touchAction: 'none'
            }}
          >
            ......
          </span>
        </div>
      </div>
      {props.children}
    </div>
  )
}
