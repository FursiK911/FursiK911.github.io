import { createMatchedCandidate } from '../createMatchedCandidate'
it('creates a matched Dmitry candidate', () => {
  expect(createMatchedCandidate(() => 0.25)).toMatchObject({
    name: 'DMITRY FURSOV',
    status: 'matched',
  })
})
