import { describe, expect, it } from 'vitest'

import { projectMedia } from '../data/project-media.data'
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
      projectMedia.earthDragons.logo,
      projectMedia.earthDragons.gameplay1,
      projectMedia.earthDragons.gameplay2,
      projectMedia.earthDragons.gameplay3,
      ...projectMedia.earthDragons.screens,
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
