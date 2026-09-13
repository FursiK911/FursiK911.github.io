import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('defines card directions, tags and approved preview images for every project', () => {
  expect(projects).toHaveLength(25)
  expect(
    projects.filter((project) => project.card.direction === 'web'),
  ).toHaveLength(7)
  expect(
    projects.filter((project) => project.card.direction === 'games-apps'),
  ).toHaveLength(15)
  expect(
    projects.filter((project) => project.card.direction === 'vr-training'),
  ).toHaveLength(3)
  projects.forEach((project) => {
    expect(project.card.teaserKey).toMatch(/^projects\.cardTeasers\./)
    expect(project.card.tags.length).toBeGreaterThan(0)
  })
  expect(
    projects.find((project) => project.id === 'earth-dragons')?.card
      .previewImages,
  ).toHaveLength(12)
  expect(
    projects.find((project) => project.id === 'villa-krim')?.card.previewImages,
  ).toHaveLength(5)
  expect(
    projects.find((project) => project.id === 'authors-wine-villa-krim')?.card
      .previewImages,
  ).toHaveLength(5)
  const villaKrimProjectIds = ['villa-krim', 'authors-wine-villa-krim']
  villaKrimProjectIds.forEach((projectId) => {
    const project = projects.find((item) => item.id === projectId)
    expect(project?.card.previewImages).toEqual(
      project?.media?.filter((media) => media.kind === 'image'),
    )
  })
  expect(
    projects.find((project) => project.id === 'drilling-vr')?.card
      .previewImages,
  ).toHaveLength(9)
})
