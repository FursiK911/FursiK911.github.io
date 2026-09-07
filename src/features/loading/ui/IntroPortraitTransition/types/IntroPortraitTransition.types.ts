import type { RefObject } from 'react'
import type { LoadingPhase } from '../../../model/useLoadingSequence/types/useLoadingSequence.types'

export interface IntroPortraitTransitionProps {
  heroPortraitReady: boolean
  handoffComplete: boolean
  onHandoffComplete: () => void
  onTransferComplete: () => void
  phase: LoadingPhase
  sourceRef: RefObject<HTMLElement | null>
  targetRef: RefObject<HTMLElement | null>
}
