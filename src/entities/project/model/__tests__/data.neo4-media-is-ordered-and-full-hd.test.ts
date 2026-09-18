import { projects } from '@/entities/project'
import { projectMedia } from '../data/project-media.data'

it('keeps Neo4 screens in screen order with local WebP paths', () => {
  const neo4 = projects.find((project) => project.id === 'neo4-sightline')

  expect(neo4?.media).toEqual(
    [1, 2, 3, 4, 5].map((screen) => ({
      kind: 'image',
      src: projectMedia.neo4Sightline.screens[screen - 1],
      altKey: `neo4SightlineMediaScreen${screen}`,
    })),
  )
})
