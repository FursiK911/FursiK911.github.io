import { expect, it } from 'vitest'
import { projects } from '@/entities/project'
const allowedCategories = new Set([
  'web',
  'mobile',
  'unity',
  'unigine',
  'xr-ar',
  'multiplayer',
])
it('contains 22 unique projects with valid categories', () => {
  expect(projects).toHaveLength(22)
  expect(new Set(projects.map((project) => project.id)).size).toBe(22)
  projects.forEach((project) => {
    expect(project.category.length).toBeGreaterThan(0)
    project.category.forEach((category) => {
      expect(allowedCategories.has(category)).toBe(true)
    })
  })
})
