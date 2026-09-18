import { projectMedia, projects } from '@/entities/project'

it('keeps Chudobooks video-first media and local WebP assets', () => {
  expect(
    projects.find((project) => project.id === 'chudobooks')?.media,
  ).toEqual([
    {
      kind: 'youtube',
      videoId: 'L1wo7UmOsr4',
    },
    {
      kind: 'image',
      src: projectMedia.arChudobook.screens[0],
      altKey: 'chudobooksMediaScreen1',
    },
    {
      kind: 'image',
      src: projectMedia.arChudobook.screens[1],
      altKey: 'chudobooksMediaScreen2',
    },
  ])
  expect(
    projects.find((project) => project.id === 'chudobooks')?.card.previewImages,
  ).toEqual([
    {
      kind: 'image',
      src: projectMedia.arChudobook.screens[0],
      altKey: 'chudobooksMediaScreen1',
    },
    {
      kind: 'image',
      src: projectMedia.arChudobook.screens[1],
      altKey: 'chudobooksMediaScreen2',
    },
  ])
})
