import { projects } from '@/entities/project'

it('keeps Neo4 screens in screen order with local WebP paths', () => {
  const neo4 = projects.find((project) => project.id === 'neo4-sightline')

  expect(neo4?.media).toEqual(
    [1, 2, 3, 4, 5].map((screen) => ({
      kind: 'image',
      src: `/images/projects/neo4-sightline/screen_${screen}.webp`,
      altKey: `neo4SightlineMediaScreen${screen}`,
    })),
  )
})
