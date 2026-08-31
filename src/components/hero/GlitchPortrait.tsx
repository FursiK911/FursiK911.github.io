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
  const targetRef = useRef<HTMLDivElement>(null)
  const burstTargetRef = useRef<HTMLDivElement>(null)

  usePortraitGlitch(active, reducedMotion, src, targetRef, burstTargetRef)

  return (
    <div ref={targetRef} className="portrait-glitch">
      <div ref={burstTargetRef} className="portrait-glitch-burst-target">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}
