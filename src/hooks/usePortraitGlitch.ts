import { useEffect, type RefObject } from 'react'
import { Effects, Glitch } from '@isonimus/glitch-js'

const createGlitch = (target: HTMLDivElement) =>
  new Glitch(target, {
    trigger: 'manual',
    active: false,
    effects: [
      Effects.rgbSplit({
        maxOffset: 30,
        frequency: 0.1,
        blendMode: 'screen',
      }),
      Effects.slice({
        maxOffset: 60,
        frequency: 0.1,
      }),
      Effects.shake({
        amplitudeX: 100,
        amplitudeY: 100,
        frequency: 0.1,
      }),
      // Effects.flicker({
      //   minOpacity: 0.4,
      //   frequency: 0.4
      // })
    ],
  })

const randomBetween = (min: number, max: number) =>
  Math.round(min + Math.random() * (max - min))

const nextPause = () => randomBetween(4000, 10000)
const burstDuration = () => randomBetween(500, 1000)

const markDecorativeLayers = (target: HTMLDivElement) => {
  target
    .querySelectorAll<HTMLElement>('.glitch-clone, .glitch-overlay')
    .forEach((layer) => {
      layer.setAttribute('aria-hidden', 'true')
      layer.querySelectorAll<HTMLImageElement>('img').forEach((image) => {
        image.alt = ''
        image.setAttribute('aria-hidden', 'true')
      })
    })
}

export function usePortraitGlitch(
  active: boolean,
  reducedMotion: boolean,
  src: string,
  targetRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const target = targetRef.current
    if (!active || reducedMotion || !target) return

    const glitch = createGlitch(target)
    markDecorativeLayers(target)
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
          scheduleBurst(nextPause())
        }, burstDuration())
      }, delay)
    }

    scheduleBurst(nextPause())

    return () => {
      if (pauseTimer) clearTimeout(pauseTimer)
      if (burstTimer) clearTimeout(burstTimer)
      if (burstActive) glitch.stop()
      glitch.destroy()
    }
  }, [active, reducedMotion, src, targetRef])
}
