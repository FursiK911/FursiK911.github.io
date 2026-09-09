import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('contains the Frieze Viewing Room mobile case with its FGP context', () => {
  const project = projects.find((item) => item.id === 'frieze-viewing-room')

  expect(project).toMatchObject({
    company: 'FGP',
    period: { from: '2021', to: '2021' },
    category: ['mobile'],
  })
})
