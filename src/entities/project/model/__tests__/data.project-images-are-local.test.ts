import { describe, expect, it } from 'vitest'

import { projects } from '../data/projects.data'

describe('project image assets', () => {
  it('uses local Vite URLs for every project image', () => {
    const images = projects.flatMap(
      (project) =>
        project.media?.filter((media) => media.kind === 'image') ?? [],
    )

    expect(images).toHaveLength(93)
    images.forEach((image) => {
      expect(image.src).not.toMatch(/^https?:\/\//)
      expect(image.src).toMatch(
        /\/(?:src\/shared\/assets\/images\/projects|assets)\//,
      )
    })
  })
})
