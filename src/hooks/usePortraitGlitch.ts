import { useEffect, type MutableRefObject } from 'react'
import {
  chooseGlitchLevel,
  portraitGlitchConfig,
  randomBetween,
} from '../config/portraitGlitch'
import {
  generatePortraitGlitchFrame,
  type PortraitGlitchFrame,
} from '../config/portraitGlitchFrame'

type LayerRef = { current: HTMLDivElement | null }

interface PortraitGlitchRefs {
  frameRef: LayerRef
  sliceRefs: MutableRefObject<Array<HTMLDivElement | null>>
  blockRefs: MutableRefObject<Array<HTMLDivElement | null>>
  rgbRefs: MutableRefObject<Array<HTMLDivElement | null>>
}

const setHidden = (element: HTMLDivElement | null) => {
  if (!element) return
  element.style.opacity = '0'
  element.style.transform = 'translate3d(0, 0, 0)'
}

const setLayer = (
  element: HTMLDivElement | null,
  styles: Record<string, string>,
) => {
  if (!element) return
  Object.entries(styles).forEach(([property, value]) => {
    element.style.setProperty(property, value)
  })
}

function clearLayers(refs: PortraitGlitchRefs) {
  refs.frameRef.current?.classList.remove('is-glitching')
  refs.sliceRefs.current.forEach(setHidden)
  refs.blockRefs.current.forEach(setHidden)
  refs.rgbRefs.current.forEach(setHidden)
}

function applyFrame(frame: PortraitGlitchFrame, refs: PortraitGlitchRefs) {
  refs.frameRef.current?.classList.add('is-glitching')
  const sourceWidth = refs.frameRef.current?.clientWidth ?? 0
  const sourceHeight = refs.frameRef.current?.clientHeight ?? 0
  refs.sliceRefs.current.forEach((slice, index) => {
    const data = frame.slices[index]
    if (!data) return setHidden(slice)
    setLayer(slice, {
      opacity: '1',
      clipPath: `inset(${data.top}% 0 ${100 - data.top - data.height}% 0)`,
      transform: `translate3d(${data.offset}px, 0, 0)`,
      '--glitch-source-x': `${data.sourceX}px`,
      '--glitch-source-y': `${data.sourceY}px`,
    })
  })
  refs.blockRefs.current.forEach((block, index) => {
    const data = frame.blocks[index]
    if (!data) return setHidden(block)
    setLayer(block, {
      opacity: '1',
      left: `${data.x}%`,
      top: `${data.y}%`,
      width: `${data.width}%`,
      height: `${data.height}%`,
      transform: `translate3d(${data.offsetX}px, ${data.offsetY}px, 0) scaleX(${data.scale})`,
      '--glitch-block-source-x': `${-(data.sourceX / 100) * sourceWidth}px`,
      '--glitch-block-source-y': `${-(data.sourceY / 100) * sourceHeight}px`,
      '--glitch-source-width': `${sourceWidth}px`,
      '--glitch-source-height': `${sourceHeight}px`,
    })
  })
  refs.rgbRefs.current.forEach((rgb, index) => {
    setLayer(rgb, {
      opacity: frame.rgb ? '0.55' : '0',
      transform: `translate3d(${index === 0 ? frame.rgbOffset : -frame.rgbOffset}px, 0, 0)`,
    })
  })
}

function createBurstFrames(forcedLevel?: ReturnType<typeof chooseGlitchLevel>) {
  const level = forcedLevel ?? chooseGlitchLevel()
  return Array.from(
    {
      length: randomBetween(
        portraitGlitchConfig.minFrames,
        portraitGlitchConfig.maxFrames,
      ),
    },
    () => generatePortraitGlitchFrame(level),
  )
}

export function usePortraitGlitch(
  active: boolean,
  reducedMotion: boolean,
  src: string,
  refs: PortraitGlitchRefs,
) {
  useEffect(() => {
    if (!active || reducedMotion) return
    let schedulerTimeout = 0
    let frameTimeout = 0
    let cancelled = false
    let firstBurst = true

    const schedule = () => {
      const isFirstBurst = firstBurst
      const pause = firstBurst
        ? randomBetween(
            portraitGlitchConfig.firstMinInterval,
            portraitGlitchConfig.firstMaxInterval,
          )
        : randomBetween(
            portraitGlitchConfig.minInterval,
            portraitGlitchConfig.maxInterval,
          )
      const delay =
        !firstBurst && Math.random() < portraitGlitchConfig.longPauseChance
          ? pause * portraitGlitchConfig.longPauseMultiplier
          : pause
      firstBurst = false
      schedulerTimeout = window.setTimeout(() => {
        if (cancelled) return
        const frames = createBurstFrames(isFirstBurst ? 'normal' : undefined)
        let index = 0
        const showNextFrame = () => {
          if (cancelled) return
          const frame = frames[index]
          if (!frame) {
            clearLayers(refs)
            schedule()
            return
          }
          applyFrame(frame, refs)
          index += 1
          frameTimeout = window.setTimeout(showNextFrame, frame.duration)
        }
        showNextFrame()
      }, delay)
    }

    schedule()
    return () => {
      cancelled = true
      window.clearTimeout(schedulerTimeout)
      window.clearTimeout(frameTimeout)
      clearLayers(refs)
    }
  }, [active, reducedMotion, refs, src])
}
