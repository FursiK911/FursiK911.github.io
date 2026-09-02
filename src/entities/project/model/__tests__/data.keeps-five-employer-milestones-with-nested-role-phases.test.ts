import { expect, it } from 'vitest'
import { workExperience } from '@/entities/work-experience'
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
