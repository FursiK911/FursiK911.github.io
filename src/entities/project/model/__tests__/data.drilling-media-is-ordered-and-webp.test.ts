import { projects } from '@/entities/project'

it('keeps drilling screens in screen order with local WebP paths', () => {
  const drilling = projects.find((project) => project.id === 'drilling-vr')

  expect(drilling?.media).toEqual([
    { kind: 'youtube', videoId: 'LLJtFASLiHM' },
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((screen) => ({
      kind: 'image' as const,
      src: `/images/projects/vr-drilling-training/screen_${screen}.webp`,
      altKey: `drillingMediaScreen${screen}`,
    })),
  ])
})
