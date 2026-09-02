import type { WorkExperience } from '@/entities/work-experience'

export interface ExperienceDetailsProps {
  entries: WorkExperience[]
  expanded: boolean
  reducedMotion: boolean
}
