import type { RefObject } from 'react'

export interface UseLiveCamTerminalArgs {
  isInViewport: boolean
  isLive: boolean
  reducedMotion: boolean
}

export interface UseLiveCamTerminalScrollArgs {
  lineRef: RefObject<HTMLSpanElement | null>
  typedLength: number
}
