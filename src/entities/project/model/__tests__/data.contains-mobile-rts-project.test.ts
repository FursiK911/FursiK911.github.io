import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('contains the public Mobile RTS project case with its local media and stack', () => {
  const project = projects.find((item) => item.id === 'mobile-rts')

  expect(project).toMatchObject({
    titleKey: 'mobileRts',
    category: ['mobile', 'unity', 'multiplayer'],
    tech: expect.arrayContaining([
      'Unity 6',
      'C#',
      'Mirror',
      'PlayFab',
      'Firebase',
      'Azure Functions',
      'Addressables',
      'UniTask',
      'Unity Localization',
    ]),
  })
  expect(project?.media).toHaveLength(9)
  expect(project?.media?.slice(0, 3)).toEqual([
    { kind: 'youtube', videoId: 'Y8jRA-wwsbI' },
    { kind: 'youtube', videoId: 'rES-pSwpC0U' },
    { kind: 'youtube', videoId: 'dQPD0NVxoGE' },
  ])
  expect(
    project?.media?.slice(3).every((media) => media.kind === 'image'),
  ).toBe(true)
  expect(project?.card.previewImages).toHaveLength(6)
})
