import { expect, it } from 'vitest'

import { projectMedia, projects } from '@/entities/project'

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
    projectMedia.myChessWeb.logo,
    projectMedia.myChessWeb.profile,
    projectMedia.myChessWeb.allVersusOne,
    projectMedia.myChessWeb.analysis,
    projectMedia.myChessWeb.authorization,
    projectMedia.myChessWeb.champions,
    projectMedia.myChessWeb.messages,
    projectMedia.myChessWeb.notifications,
    projectMedia.myChessWeb.observerTournament,
    projectMedia.myChessWeb.puzzles,
    projectMedia.myChessWeb.puzzles2,
    projectMedia.myChessWeb.selectGame,
    projectMedia.myChessWeb.tournament,
  ])
  expect(
    mychessWeb?.card.previewImages.slice(0, 2).map((image) => image.src),
  ).toEqual([projectMedia.myChessWeb.logo, projectMedia.myChessWeb.profile])
})
