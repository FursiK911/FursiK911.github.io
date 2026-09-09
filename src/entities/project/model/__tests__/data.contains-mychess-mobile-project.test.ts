import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('defines the MyChess Mobile Flutter project with mobile store actions', () => {
  const project = projects.find((item) => item.id === 'mychess-mobile')

  expect(project).toMatchObject({
    titleKey: 'mychessMobile',
    category: ['mobile', 'multiplayer'],
    platformKey: 'platformMobile',
    tech: expect.arrayContaining(['Flutter', 'Dart']),
  })
  expect(project?.actions).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        label: 'App Store',
        href: 'https://apps.apple.com/app/mychess/id6532618342',
      }),
      expect.objectContaining({
        label: 'RuStore',
        href: 'https://apps.rustore.ru/app/com.mychess.app',
      }),
      expect.objectContaining({
        label: 'Website',
        href: 'https://mychess.app/',
        unavailableReasonKey: 'projects.unavailableActions.mychessWebsite',
      }),
    ]),
  )
})
