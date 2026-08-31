import { useEffect, type RefObject } from 'react'
import { Effects, Glitch } from '@isonimus/glitch-js'

const createBurstGlitch = (target: HTMLDivElement) =>
  new Glitch(target, {
    trigger: 'manual',
    active: false,
    effects: [
      Effects.rgbSplit({
        maxOffset: 10,
        frequency: 0.3,
        blendMode: 'screen',
      }),
      Effects.slice({
        maxOffset: 20,
        frequency: 0.5,
      }),
      Effects.shake({
        amplitudeX: 20,
        amplitudeY: 20,
        frequency: 0.1,
      }),
      // Effects.flicker({
      //   minOpacity: 0.4,
      //   frequency: 0.4
      // })
    ],
  })

const createHologram = (target: HTMLDivElement) =>
  new Glitch(target, {
    trigger: 'always',
    active: true,
    effects: [
      Effects.hologram({
        color: '#00d9ff',
        opacity: 1,
        glowIntensity: 0.35,
        scanSpeed: 1,
        flickerFrequency: 0,
        floatAmplitude: 1,
      }),
    ],
  })

const randomBetween = (min: number, max: number) =>
  Math.round(min + Math.random() * (max - min))

const nextPause = () => randomBetween(1000, 4000)
const burstDuration = () => randomBetween(180, 320)

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
          scheduleBurst(nextPause())
        }, burstDuration())
      }, delay)
    }

    scheduleBurst(nextPause())

    return () => {
      if (pauseTimer) clearTimeout(pauseTimer)
      if (burstTimer) clearTimeout(burstTimer)
      if (burstActive) glitch.stop()
      hologram.destroy()
      glitch.destroy()
    }
  }, [active, reducedMotion, src, targetRef, burstTargetRef])
}
