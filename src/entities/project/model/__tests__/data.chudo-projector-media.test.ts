import { expect, it } from 'vitest'

import { projectMedia } from '../data/project-media.data'
import { projects } from '../data/projects.data'

it('contains the Chudo Projector videos, gallery images, and card previews', () => {
  const project = projects.find((item) => item.id === 'chudo-projector')

  expect(project?.media).toEqual([
    { kind: 'youtube', videoId: '0bvWX_7WkKU' },
    { kind: 'youtube', videoId: 'ZmHUsOxiHXA' },
    { kind: 'youtube', videoId: 'bIig8_xRzUM' },
    ...[1, 2, 3].map((screen) => ({
      kind: 'image' as const,
      src: projectMedia.chudoProjector.screens[screen - 1],
      altKey: `chudoProjectorMediaScreen${screen}`,
    })),
  ])
  expect(project?.card.previewImages).toEqual(
    project?.media?.filter((media) => media.kind === 'image'),
  )
})
