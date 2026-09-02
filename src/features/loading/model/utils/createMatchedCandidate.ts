import { createCandidateId } from './createCandidateId'
import type { LoadingCandidate } from '../types/loading-candidate.types'

export function createMatchedCandidate(random = Math.random): LoadingCandidate {
  return {
    id: createCandidateId(random, new Set()),
    name: 'DMITRY FURSOV',
    status: 'matched',
  }
}
