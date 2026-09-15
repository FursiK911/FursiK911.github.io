import { expect, it } from 'vitest'

import { projects } from '@/entities/project'

it('uses the five current RuStore screenshots for MyChess Mobile media', () => {
  const project = projects.find((item) => item.id === 'mychess-mobile')

  expect(
    project?.media
      ?.filter((media) => media.kind === 'image')
      .map((media) => media.src),
  ).toEqual([
    '/images/projects/my-chess-mobile/myChess-1.webp',
    '/images/projects/my-chess-mobile/myChess-2.webp',
    '/images/projects/my-chess-mobile/myChess-3.webp',
    '/images/projects/my-chess-mobile/myChess-4.webp',
    '/images/projects/my-chess-mobile/myChess-5.webp',
  ])
})
