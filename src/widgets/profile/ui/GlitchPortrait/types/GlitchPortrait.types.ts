import type { RefObject } from 'react'

export interface GlitchPortraitProps {
  src: string
  alt: string
  active: boolean
  imageRef?: RefObject<HTMLImageElement | null>
  onPortraitReady?: () => void
  portraitVisible?: boolean
  reducedMotion: boolean
}
