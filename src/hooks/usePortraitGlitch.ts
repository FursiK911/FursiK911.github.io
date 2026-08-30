import { useEffect, type RefObject } from 'react'
import { Effects, Glitch } from '@isonimus/glitch-js'
const createGlitch = (image: HTMLImageElement) =>
  new Glitch(image, {
    trigger: 'always',
    active: true,
    effects: [
      Effects.rgbSplit({ maxOffset: 30, frequency: 1, blendMode: 'screen' }),
      Effects.slice({ maxOffset: 60, frequency: 0.05 }),
      Effects.shake({ amplitudeX: 11, amplitudeY: 15, frequency: 0.05 }),
    ],
  })

export function usePortraitGlitch(
  active: boolean,
  reducedMotion: boolean,
  src: string,
  imageRef: RefObject<HTMLImageElement | null>,
) {
  useEffect(() => {
    const image = imageRef.current
    if (!active || reducedMotion || !image) return

    const glitch = createGlitch(image)

    return () => {
      glitch.destroy()
    }
  }, [active, imageRef, reducedMotion, src])
}
