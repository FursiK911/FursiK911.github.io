import { expect, it } from 'vitest'

import { projects } from '@/entities/project'

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
})
