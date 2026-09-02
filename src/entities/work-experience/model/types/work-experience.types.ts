export interface ExperienceProject {
  id: string
  titleKey: string
  descriptionKey: string
  pointsKey: string
  url?: string
  linkLabel?: string
}

export interface ExperienceRolePhase {
  roleKey: string
  period: { from: string; to?: string }
  summaryKey: string
  technologies: string[]
  achievementsKey: string
  projects: ExperienceProject[]
}

export interface WorkExperience {
  id: string
  company: string
  roleKey: string
  timelineRoleKey: string
  summaryKey: string
  achievementsKey: string
  period: { from: string; to?: string }
  technologies: string[]
  logo?: string
  current?: boolean
  projects: ExperienceProject[]
  phases: ExperienceRolePhase[]
}
