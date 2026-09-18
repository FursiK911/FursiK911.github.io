import { expect, it } from 'vitest'

import { projects } from '@/entities/project'
import { projectMedia } from '../data/project-media.data'

it('uses the five current RuStore screenshots for MyChess Mobile media', () => {
  const project = projects.find((item) => item.id === 'mychess-mobile')

  expect(
    project?.media
      ?.filter((media) => media.kind === 'image')
      .map((media) => media.src),
  ).toEqual([...projectMedia.myChessMobile.screens])
})
