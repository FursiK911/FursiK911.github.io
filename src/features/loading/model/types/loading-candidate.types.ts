export type CandidateStatus = 'searching' | 'rejected' | 'matched'

export interface LoadingCandidate {
  id: string
  name: string
  status: CandidateStatus
  dimmed?: boolean
}
