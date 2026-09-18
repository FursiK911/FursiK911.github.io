import { expect, it } from 'vitest'

import { projects } from '@/entities/project'
import { projectMedia } from '../data/project-media.data'

it('uses all five current RuStore screenshots in the MyChess Mobile card preview', () => {
  const project = projects.find((item) => item.id === 'mychess-mobile')

  expect(project?.card.previewImages.map((image) => image.src)).toEqual([
    ...projectMedia.myChessMobile.screens,
  ])
})
