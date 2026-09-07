import type { RefObject } from 'react'

export interface ProfileProps {
  typedRole: string
  reducedMotion: boolean
  entered?: boolean
  onPortraitReady?: () => void
  portraitEffectsActive?: boolean
  portraitEffectsReady?: boolean
  portraitTargetRef?: RefObject<HTMLImageElement | null>
  portraitVisible?: boolean
}
