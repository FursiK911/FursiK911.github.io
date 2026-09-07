import { cx, styles } from '@/shared/styles'
import { useEffect, useRef } from 'react'
import { usePortraitGlitch } from '@/widgets/profile/model/usePortraitGlitch/usePortraitGlitch'
import type { GlitchPortraitProps } from './types/GlitchPortrait.types'

export function GlitchPortrait({
  src,
  alt,
  active,
  imageRef,
  onPortraitReady,
  portraitVisible = true,
  reducedMotion,
}: GlitchPortraitProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const burstTargetRef = useRef<HTMLDivElement>(null)

  usePortraitGlitch(active, reducedMotion, src, targetRef, burstTargetRef)

  useEffect(() => {
    if (!portraitVisible || !imageRef || !onPortraitReady) return
    const image = imageRef.current
    if (!image) return

    let frame: number | undefined
    const confirmPaint = () => {
      frame = window.requestAnimationFrame(onPortraitReady)
    }

    if (image.complete) {
      confirmPaint()
    } else {
      image.addEventListener('load', confirmPaint, { once: true })
    }

    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame)
      image.removeEventListener('load', confirmPaint)
    }
  }, [imageRef, onPortraitReady, portraitVisible, src])

  return (
    <div ref={targetRef} className={cx(styles.portraitGlitch)}>
      <div
        ref={burstTargetRef}
        className={cx(styles.portraitGlitchBurstTarget)}
      >
        <img ref={imageRef} src={src} alt={alt} />
      </div>
    </div>
  )
}
