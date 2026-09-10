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
})
