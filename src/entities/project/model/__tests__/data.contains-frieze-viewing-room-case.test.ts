import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('contains the Frieze Viewing Room mobile case with its FGP context', () => {
  const project = projects.find((item) => item.id === 'frieze-viewing-room')

  expect(project).toMatchObject({
    company: 'FGP',
    period: { from: '2021', to: '2021' },
    category: ['mobile'],
  })
  expect(project?.actions).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        label: 'App Store',
        href: 'https://apps.apple.com/me/app/frieze/id1582362408',
      }),
      expect.objectContaining({
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.frieze.friezeapp&hl=ru',
      }),
    ]),
  )
  expect(
    project?.actions?.find((action) => action.label === 'App Store'),
  ).not.toHaveProperty('unavailableReasonKey')
  expect(
    project?.actions?.find((action) => action.label === 'Google Play'),
  ).not.toHaveProperty('unavailableReasonKey')
  expect(project?.media).toHaveLength(6)
})
