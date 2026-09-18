import { projects } from '@/entities/project'
import { projectMedia } from '../data/project-media.data'

it('keeps both Villa Krim galleries in logo-then-screen WebP order', () => {
  const expected = (
    media: {
      logo1: string
      logo2: string
      screens: readonly string[]
    },
    altPrefix: string,
  ) => [
    {
      kind: 'image',
      src: media.logo1,
      altKey: `${altPrefix}Logo1`,
    },
    {
      kind: 'image',
      src: media.logo2,
      altKey: `${altPrefix}Logo2`,
    },
    ...[1, 2, 3].map((screen) => ({
      kind: 'image',
      src: media.screens[screen - 1],
      altKey: `${altPrefix}Screen${screen}`,
    })),
  ]

  expect(
    projects.find((project) => project.id === 'villa-krim')?.media,
  ).toEqual(expected(projectMedia.villaKrim, 'virtualSommelierVillaKrimMedia'))
  expect(
    projects.find((project) => project.id === 'authors-wine-villa-krim')?.media,
  ).toEqual(
    expected(projectMedia.authorsWineVillaKrim, 'authorsWineVillaKrimMedia'),
  )
})
