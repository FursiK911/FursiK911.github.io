import { describe, expect, it } from 'vitest'
import { directions, projects, workExperience } from './data/portfolio'

const allowedCategories = new Set([
  'web',
  'mobile',
  'unity',
  'unigine',
  'xr-ar',
  'multiplayer',
])

describe('portfolio data', () => {
  it('contains 21 unique projects with valid categories', () => {
    expect(projects).toHaveLength(21)
    expect(new Set(projects.map((project) => project.id)).size).toBe(21)
    projects.forEach((project) => {
      expect(project.category.length).toBeGreaterThan(0)
      project.category.forEach((category) => {
        expect(allowedCategories.has(category)).toBe(true)
      })
    })
  })

  it('defines the four experience directions', () => {
    expect(directions.map((direction) => direction.id)).toEqual([
      'web',
      'game-engines',
      'mobile',
      'xr',
    ])
  })

  it('keeps five employer milestones with nested role phases', () => {
    expect(workExperience).toHaveLength(5)
    expect(workExperience.map((entry) => entry.company)).toEqual([
      'YELLOW ELEMENT',
      'IT TAB',
      'ООО ЦУП',
      'YELLOW ELEMENT',
      'TOO ME GROUP',
    ])
    expect(workExperience.every((entry) => entry.phases.length > 0)).toBe(true)
    expect(workExperience[1].phases.map((phase) => phase.roleKey)).toEqual([
      'experience.itTabFrontendPhaseRole',
      'experience.itTabVrPhaseRole',
    ])
  })
})
