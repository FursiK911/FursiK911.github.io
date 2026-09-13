import { projects } from '@/entities/project'

it('keeps Chudobooks media in screen order as local WebP assets', () => {
  expect(
    projects.find((project) => project.id === 'chudobooks')?.media,
  ).toEqual([
    {
      kind: 'image',
      src: '/images/projects/ar-chudobook/screen_1.webp',
      altKey: 'chudobooksMediaScreen1',
    },
    {
      kind: 'image',
      src: '/images/projects/ar-chudobook/screen_2.webp',
      altKey: 'chudobooksMediaScreen2',
    },
  ])
  expect(
    projects.find((project) => project.id === 'chudobooks')?.card.previewImages,
  ).toEqual(projects.find((project) => project.id === 'chudobooks')?.media)
})
