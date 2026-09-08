import { cx, styles } from '@/shared/styles'
import { useRef } from 'react'
import { usePortraitGlitch } from '../../model/usePortraitGlitch/usePortraitGlitch'
import type { GlitchPortraitProps } from './types/GlitchPortrait.types'

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
