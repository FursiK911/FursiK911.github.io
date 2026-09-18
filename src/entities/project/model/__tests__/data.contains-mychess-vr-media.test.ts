import { expect, it } from 'vitest'

import { projects } from '@/entities/project'
import { projectMedia } from '../data/project-media.data'

it('defines the MyChessVR video and all local gallery images', () => {
  const project = projects.find((item) => item.id === 'mychessvr')

  expect(project?.media).toHaveLength(11)
  expect(project?.media?.[0]).toEqual({
    kind: 'youtube',
    videoId: 'Q8PqTr5Yfvw',
  })
  expect(
    project?.media?.filter((media) => media.kind === 'image'),
  ).toHaveLength(10)
  expect(
    project?.media
      ?.filter((media) => media.kind === 'image')
      .map((media) => media.src),
  ).toEqual([
    projectMedia.myChessVr.locationLibrary,
    projectMedia.myChessVr.gameplay1,
    projectMedia.myChessVr.gameplay2,
    projectMedia.myChessVr.gameplay3,
    projectMedia.myChessVr.gameplay4,
    projectMedia.myChessVr.gameplay5,
    projectMedia.myChessVr.stockfishAnalysis,
    projectMedia.myChessVr.chessPuzzles,
    projectMedia.myChessVr.locationPark,
    projectMedia.myChessVr.locationCafe,
  ])
  expect(project?.card.previewImages).toEqual(
    project?.media?.filter((media) => media.kind === 'image'),
  )
})
