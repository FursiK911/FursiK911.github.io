import { useRef, useState } from 'react'
import type { KeyboardEvent, TouchEvent } from 'react'
export function useProjectGallery(count: number) {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const select = (index: number) => {
    setActive((index + count) % count)
    setPlaying(false)
  }
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (count < 2 || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight'))
      return
    event.preventDefault()
    select(active + (event.key === 'ArrowRight' ? 1 : -1))
  }
  const onTouchStart = (event: TouchEvent<HTMLElement>) => {
    const point = event.touches[0]
    touch.current = { x: point.clientX, y: point.clientY }
  }
  const onTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (!touch.current || count < 2) return
    const point = event.changedTouches[0]
    const dx = point.clientX - touch.current.x
    const dy = point.clientY - touch.current.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
      select(active + (dx < 0 ? 1 : -1))
    touch.current = null
  }
  return {
    active,
    playing,
    expanded,
    select,
    setPlaying,
    setExpanded,
    onKeyDown,
    onTouchStart,
    onTouchEnd,
  }
}
