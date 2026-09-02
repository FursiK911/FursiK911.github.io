import { loadingCandidateNames } from '../data/loading-candidates.data'
import { createCandidateId } from './createCandidateId'
import type { LoadingCandidate } from '../types/loading-candidate.types'

export function createLoadingCandidates(
  random = Math.random,
): LoadingCandidate[] {
  const used = new Set<string>()
  return [...loadingCandidateNames]
    .sort(() => random() - 0.5)
    .slice(0, 9)
    .map((name) => ({
      id: createCandidateId(random, used),
      name,
      status: 'searching' as const,
    }))
}
