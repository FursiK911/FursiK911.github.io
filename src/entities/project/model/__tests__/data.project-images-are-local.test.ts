import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

import { projects } from '../data/projects.data'

describe('project image assets', () => {
  it('uses local files for every project image', () => {
    const images = projects.flatMap(
      (project) =>
        project.media?.filter((media) => media.kind === 'image') ?? [],
    )

    expect(images).toHaveLength(77)
    images.forEach((image) => {
      expect(image.src).not.toMatch(/^https?:\/\//)
      expect(existsSync(resolve('public', image.src.slice(1)))).toBe(true)
    })
  })
})
