import { cx, styles } from '@/shared/styles'
import { useRef } from 'react'
import { usePortraitGlitch } from '@/widgets/profile/model/usePortraitGlitch/usePortraitGlitch'

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
    <div ref={targetRef} className={cx(styles.portraitGlitch)}>
      <div
        ref={burstTargetRef}
        className={cx(styles.portraitGlitchBurstTarget)}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}
