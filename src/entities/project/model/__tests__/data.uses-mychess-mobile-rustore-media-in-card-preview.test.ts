import { expect, it } from 'vitest'

import { projects } from '@/entities/project'

it('uses all five current RuStore screenshots in the MyChess Mobile card preview', () => {
  const project = projects.find((item) => item.id === 'mychess-mobile')

  expect(project?.card.previewImages.map((image) => image.src)).toEqual([
    '/images/projects/my-chess-mobile/mychess-1.webp',
    '/images/projects/my-chess-mobile/mychess-2.webp',
    '/images/projects/my-chess-mobile/mychess-3.webp',
    '/images/projects/my-chess-mobile/mychess-4.webp',
    '/images/projects/my-chess-mobile/mychess-5.webp',
  ])
})
