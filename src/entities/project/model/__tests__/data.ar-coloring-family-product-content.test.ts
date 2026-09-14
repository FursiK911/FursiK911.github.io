import { expect, it } from 'vitest'

import { projects } from '../data/projects.data'

it('defines product-led card and page content for the Chudoboxes AR project family', () => {
  const projectIds = [
    'ar-coloring',
    'ar-coloring-zebra',
    'chudobooks',
    'ar-chudaboxes',
  ]

  projectIds.forEach((projectId) => {
    const project = projects.find((item) => item.id === projectId)

    expect(project).toBeDefined()
    expect(project?.descriptionKey).toMatch(/Desc$/)
    expect(project?.pointsKey).toMatch(/Points$/)
    expect(project?.card.teaserKey).toMatch(/^projects\.cardTeasers\./)
    expect(project?.card.tags.length).toBeGreaterThan(0)
  })
})
