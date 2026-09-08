import type { ExperienceProject } from '../types/work-experience.types'

export function createExperienceProject(
  id: string,
  titleKey: string,
  descriptionKey: string,
  pointsKey: string,
  url?: string,
  linkLabel?: string,
  unavailableReasonKey?: string,
): ExperienceProject {
  return {
    id,
    titleKey,
    descriptionKey,
    pointsKey,
    url,
    linkLabel,
    unavailableReasonKey,
  }
}
