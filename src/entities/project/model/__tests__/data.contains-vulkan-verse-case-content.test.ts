import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('contains the enriched Vulkan Verse case with media and project facts', () => {
  const project = projects.find((item) => item.id === 'vulkan-verse')

  expect(project).toMatchObject({
    titleKey: 'vulkanVerse',
    metricsKey: 'vulkanVerseMetrics',
    platformKey: 'platformPcWindows',
    period: { from: '2025', to: '2025' },
    actions: expect.arrayContaining([
      expect.objectContaining({
        type: 'download',
        labelKey: 'projects.actionLabels.vulkanVerseClient',
        href: 'https://vv.vulcanforged.com/',
        unavailableReasonKey: 'projects.unavailableActions.vulkanVerseClient',
      }),
      expect.objectContaining({
        type: 'external',
        href: 'https://www.youtube.com/watch?v=VYT8kBTMOf0',
      }),
    ]),
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
  expect(project?.actions).not.toEqual(
    expect.arrayContaining([
      expect.objectContaining({ href: 'https://career.habr.com/fursik1' }),
    ]),
  )
  expect(project?.period).toEqual({ from: '2025', to: '2025' })
})
