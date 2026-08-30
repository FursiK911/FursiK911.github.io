import { useRef } from 'react'
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
  const imageRef = useRef<HTMLImageElement>(null)

  usePortraitGlitch(active, reducedMotion, src, imageRef)

  return (
    <div className="portrait-glitch">
      <img ref={imageRef} src={src} alt={alt} />
    </div>
  )
}
