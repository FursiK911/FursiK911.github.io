import type { WorkExperience } from '@/entities/work-experience'

export interface ExperienceTimelineProps {
  entries: WorkExperience[]
  reducedMotion?: boolean
}

export type ScenePoint = { x: number; y: number }
