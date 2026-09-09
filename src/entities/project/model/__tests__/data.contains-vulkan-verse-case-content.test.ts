import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('contains the enriched Vulkan Verse case with media and project facts', () => {
  const project = projects.find((item) => item.id === 'vulkan-verse')

  expect(project).toMatchObject({
    titleKey: 'vulkanVerse',
    metricsKey: 'vulkanVerseMetrics',
    media: expect.arrayContaining([
      expect.objectContaining({
        kind: 'youtube',
        videoId: 'VYT8kBTMOf0',
      }),
      expect.objectContaining({
        kind: 'image',
        altKey: 'vulkanVerseMediaCity',
      }),
    ]),
  })
})
