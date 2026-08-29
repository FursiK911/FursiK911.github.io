import { useMemo, useRef } from 'react'
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
  const frameRef = useRef<HTMLDivElement>(null)
  const rgbRefs = useRef<Array<HTMLDivElement | null>>([])
  const sliceRefs = useRef<Array<HTMLDivElement | null>>([])
  const blockRefs = useRef<Array<HTMLDivElement | null>>([])
  const layerRefs = useMemo(
    () => ({ frameRef, sliceRefs, blockRefs, rgbRefs }),
    [blockRefs, frameRef, rgbRefs, sliceRefs],
  )
  usePortraitGlitch(active, reducedMotion, src, layerRefs)

  return (
    <div className="portrait-glitch" ref={frameRef}>
      <img src={src} alt={alt} />
      {Array.from({ length: 7 }, (_, index) => (
        <div
          className="portrait-glitch-slice"
          key={`slice-${index}`}
          ref={(element) => {
            sliceRefs.current[index] = element
          }}
          aria-hidden="true"
        >
          <img src={src} alt="" />
        </div>
      ))}
      {Array.from({ length: 5 }, (_, index) => (
        <div
          className="portrait-glitch-block"
          key={`block-${index}`}
          ref={(element) => {
            blockRefs.current[index] = element
          }}
          aria-hidden="true"
        >
          <img src={src} alt="" />
        </div>
      ))}
      {(['red', 'cyan'] as const).map((channel, index) => (
        <div
          className={`portrait-glitch-rgb portrait-glitch-rgb-${channel}`}
          key={channel}
          ref={(element) => {
            rgbRefs.current[index] = element
          }}
          aria-hidden="true"
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  )
}
