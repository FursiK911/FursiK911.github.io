import { useEffect, useMemo, useRef, useState } from 'react'
import { portraitGlitchConfig } from '../../config/portraitGlitch'
import { usePortraitGlitch } from '../../hooks/usePortraitGlitch'

interface GlitchPortraitProps {
  src: string
  alt: string
  active: boolean
  reducedMotion: boolean
}

export function GlitchPortrait({
  src,
  alt,
  active,
  reducedMotion,
}: GlitchPortraitProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [gridSize, setGridSize] = useState<number>(
    portraitGlitchConfig.desktopGridSize,
  )
  const cellRefs = useRef<Array<HTMLDivElement | null>>([])
  useEffect(() => {
    const query = window.matchMedia('(max-width: 560px)')
    const updateGrid = () =>
      setGridSize(
        query.matches
          ? portraitGlitchConfig.mobileGridSize
          : portraitGlitchConfig.desktopGridSize,
      )
    updateGrid()
    query.addEventListener('change', updateGrid)
    return () => query.removeEventListener('change', updateGrid)
  }, [])
  const layerRefs = useMemo(
    () => ({ frameRef, cellRefs, gridSize }),
    [cellRefs, frameRef, gridSize],
  )
  usePortraitGlitch(active, reducedMotion, src, layerRefs)

  return (
    <div className="portrait-glitch" ref={frameRef}>
      <img src={src} alt={alt} />
      {Array.from({ length: gridSize * gridSize }, (_, index) => (
        <div
          className="portrait-glitch-cell"
          key={`cell-${index}`}
          ref={(element) => {
            cellRefs.current[index] = element
          }}
          aria-hidden="true"
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  )
}
