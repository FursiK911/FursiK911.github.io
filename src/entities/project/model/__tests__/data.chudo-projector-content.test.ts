import { expect, it } from 'vitest'

import { projects } from '../data/projects.data'

it('defines Chudo Projector as a 2020–2021 dual-client projection product', () => {
  const project = projects.find((item) => item.id === 'chudo-projector')

  expect(project).toMatchObject({
    descriptionKey: 'chudoProjectorDesc',
    pointsKey: 'chudoProjectorPoints',
    period: { from: '2020', to: '2021' },
    tech: [
      'Unity',
      'C#',
      'AR',
      'Vuforia',
      'Photon',
      'OpenCV',
      'Android',
      'Windows',
      'Projection',
    ],
  })
})
