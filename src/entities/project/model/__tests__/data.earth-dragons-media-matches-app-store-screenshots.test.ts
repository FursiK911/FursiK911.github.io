import { describe, expect, it } from 'vitest'

import { projects } from '../data/projects.data'

describe('Earth of Dragons media', () => {
  it('orders the logo, gameplay screens and App Store screenshots for the case', () => {
    const project = projects.find((item) => item.id === 'earth-dragons')
    const images =
      project?.media?.filter((media) => media.kind === 'image') ?? []
    const videos =
      project?.media?.filter((media) => media.kind === 'youtube') ?? []

    expect(images).toHaveLength(12)
    expect(images.map((image) => image.src)).toEqual([
      '/images/projects/earth-dragons/logo.webp',
      '/images/projects/earth-dragons/gameplay_1.webp',
      '/images/projects/earth-dragons/gameplay_2.webp',
      '/images/projects/earth-dragons/gameplay_3.webp',
      ...Array.from(
        { length: 8 },
        (_, index) =>
          `/images/projects/earth-dragons/earth-dragons-${String(index + 1).padStart(2, '0')}.webp`,
      ),
    ])
    expect(project?.card.previewImages).toEqual(images)
    expect(videos.map((video) => video.videoId)).toEqual([
      'iXrNLl6rpXI',
      '08QCrgqrIyQ',
      'Xnmc3i2Xmko',
      'Yy4j2gQdXW4',
    ])
  })
})
