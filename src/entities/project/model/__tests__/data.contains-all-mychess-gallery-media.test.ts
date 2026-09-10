import { expect, it } from 'vitest'

import { projects } from '@/entities/project'

it('defines complete galleries and homepage previews for all MyChess projects', () => {
  const expected = [
    ['mychess-web', 13],
    ['mychessvr', 10],
    ['mychess-mobile', 5],
  ] as const

  expected.forEach(([id, imageCount]) => {
    const project = projects.find((item) => item.id === id)
    expect(
      project?.media?.filter((media) => media.kind === 'image'),
    ).toHaveLength(imageCount)
    expect(project?.card.previewImages).toHaveLength(imageCount)
    expect(
      project?.card.previewImages.every((image) => image.src.endsWith('.webp')),
    ).toBe(true)
  })

  const mychessWeb = projects.find((item) => item.id === 'mychess-web')
  expect(
    mychessWeb?.media
      ?.filter((media) => media.kind === 'image')
      .map((media) => media.src),
  ).toEqual([
    '/images/projects/my-chess-web/logo.webp',
    '/images/projects/my-chess-web/profile.webp',
    '/images/projects/my-chess-web/all-versus-one.webp',
    '/images/projects/my-chess-web/analysis.webp',
    '/images/projects/my-chess-web/authorization.webp',
    '/images/projects/my-chess-web/champions.webp',
    '/images/projects/my-chess-web/messages.webp',
    '/images/projects/my-chess-web/notifications.webp',
    '/images/projects/my-chess-web/observer-tournament.webp',
    '/images/projects/my-chess-web/puzzles.webp',
    '/images/projects/my-chess-web/puzzles-2.webp',
    '/images/projects/my-chess-web/select-game.webp',
    '/images/projects/my-chess-web/tournament.webp',
  ])
  expect(
    mychessWeb?.card.previewImages.slice(0, 2).map((image) => image.src),
  ).toEqual([
    '/images/projects/my-chess-web/logo.webp',
    '/images/projects/my-chess-web/profile.webp',
  ])
})
