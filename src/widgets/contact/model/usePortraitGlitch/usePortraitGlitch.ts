import { useEffect, type RefObject } from 'react'
import { createBurstGlitch } from './utils/createBurstGlitch'
import { createHologram } from './utils/createHologram'
import { markDecorativeLayers } from './utils/markDecorativeLayers'
import { getBurstDuration } from './utils/getBurstDuration'
import { getNextPause } from './utils/getNextPause'

export function usePortraitGlitch(
  active: boolean,
  reducedMotion: boolean,
  src: string,
  targetRef: RefObject<HTMLDivElement | null>,
  burstTargetRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const target = targetRef.current
    const burstTarget = burstTargetRef.current
    if (!active || reducedMotion || !target || !burstTarget) return

    const hologram = createHologram(target)
    const glitch = createBurstGlitch(burstTarget)
    markDecorativeLayers(target)
    markDecorativeLayers(burstTarget)
    let pauseTimer: ReturnType<typeof setTimeout> | undefined
    let burstTimer: ReturnType<typeof setTimeout> | undefined
    let burstActive = false

    const scheduleBurst = (delay: number) => {
      pauseTimer = setTimeout(() => {
        glitch.start()
        burstActive = true
        burstTimer = setTimeout(() => {
          glitch.stop()
          burstActive = false
          scheduleBurst(getNextPause())
        }, getBurstDuration())
      }, delay)
    }

    scheduleBurst(getNextPause())

    return () => {
      if (pauseTimer) clearTimeout(pauseTimer)
      if (burstTimer) clearTimeout(burstTimer)
      if (burstActive) glitch.stop()
      hologram.destroy()
      glitch.destroy()
    }
  }, [active, reducedMotion, src, targetRef, burstTargetRef])
}
