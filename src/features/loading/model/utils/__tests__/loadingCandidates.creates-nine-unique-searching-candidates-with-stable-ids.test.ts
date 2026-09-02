import { createLoadingCandidates } from '../createLoadingCandidates'
it('creates nine unique searching candidates with stable ids', () => {
  let calls = 0
  const candidates = createLoadingCandidates(() => (calls++ % 20) / 20)
  expect(candidates).toHaveLength(9)
  expect(new Set(candidates.map((candidate) => candidate.id)).size).toBe(9)
  expect(
    candidates.every((candidate) => candidate.status === 'searching'),
  ).toBe(true)
})
