import { expect, it } from 'vitest'

import { projects } from '@/entities/project'

it('defines the MyChessVR video and all local gallery images', () => {
  const project = projects.find((item) => item.id === 'mychessvr')

  expect(project?.media).toHaveLength(11)
  expect(project?.media?.[0]).toEqual({
    kind: 'youtube',
    videoId: 'Q8PqTr5Yfvw',
  })
  expect(
    project?.media?.filter((media) => media.kind === 'image'),
  ).toHaveLength(10)
  expect(
    project?.media
      ?.filter((media) => media.kind === 'image')
      .map((media) => media.src),
  ).toEqual([
    '/images/projects/my-chess-vr/location_library.webp',
    ...[1, 2, 3, 4, 5].map(
      (gameplay) => `/images/projects/my-chess-vr/gameplay${gameplay}.webp`,
    ),
    '/images/projects/my-chess-vr/stockfish_analysis.webp',
    '/images/projects/my-chess-vr/chess_puzzles.webp',
    '/images/projects/my-chess-vr/location_park.webp',
    '/images/projects/my-chess-vr/location_cafe.webp',
  ])
  expect(project?.card.previewImages).toEqual(
    project?.media?.filter((media) => media.kind === 'image'),
  )
})
