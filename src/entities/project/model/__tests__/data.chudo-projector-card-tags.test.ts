import { expect, it } from 'vitest'

import { projects } from '../data/projects.data'

it('includes AR in the Chudo Projector card technology tags', () => {
  const project = projects.find((item) => item.id === 'chudo-projector')

  expect(project?.card.tags).toEqual(['Unity', 'AR', 'OpenCV', 'Photon'])
})
