import { projects } from '@/entities/project'

it('keeps both Villa Krim galleries in logo-then-screen WebP order', () => {
  const expected = (slug: string, altPrefix: string) => [
    {
      kind: 'image',
      src: `/images/projects/${slug}/logo_1.webp`,
      altKey: `${altPrefix}Logo1`,
    },
    {
      kind: 'image',
      src: `/images/projects/${slug}/logo_2.webp`,
      altKey: `${altPrefix}Logo2`,
    },
    ...[1, 2, 3].map((screen) => ({
      kind: 'image',
      src: `/images/projects/${slug}/screen_${screen}.webp`,
      altKey: `${altPrefix}Screen${screen}`,
    })),
  ]

  expect(
    projects.find((project) => project.id === 'villa-krim')?.media,
  ).toEqual(expected('villa-krim', 'virtualSommelierVillaKrimMedia'))
  expect(
    projects.find((project) => project.id === 'authors-wine-villa-krim')?.media,
  ).toEqual(expected('authors-wine-villa-krim', 'authorsWineVillaKrimMedia'))
})
