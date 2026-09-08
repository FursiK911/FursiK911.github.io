import type { LoadingCandidate } from '../../../model/types/loading-candidate.types'
import type { LoadingPhase } from '../../../model/useLoadingSequence/types/useLoadingSequence.types'

export interface LoadingScreenProps {
  allReady: boolean
  buttonActive: boolean
  candidates: LoadingCandidate[]
  cursorClicked: boolean
  onFadeComplete?: () => void
  onSkipComplete?: () => void
  notifyVideo: (available: boolean) => void
  phase: LoadingPhase
  queryText: string
  resultVisible: boolean
  skip: () => void
  videoFallback: boolean
}
