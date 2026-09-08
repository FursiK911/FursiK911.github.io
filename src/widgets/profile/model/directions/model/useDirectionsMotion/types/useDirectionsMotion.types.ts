import type { RefObject } from 'react'

export type UseDirectionsMotionParams = {
  cardCount: number
  entered: boolean
  reducedMotion: boolean
}

export type UseDirectionsMotionResult = {
  hasEntered: boolean
  sectionRef: RefObject<HTMLElement | null>
  scanningCardIndex: number | null
}
