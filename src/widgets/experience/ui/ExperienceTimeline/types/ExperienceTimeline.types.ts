import type { WorkExperience } from '@/entities/work-experience'

export interface ExperienceTimelineProps {
  entries: WorkExperience[]
  onEntrySelect: (entry: WorkExperience) => void
  reducedMotion?: boolean
}

export type ScenePoint = { x: number; y: number }
