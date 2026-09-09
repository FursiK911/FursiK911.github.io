import type { ProjectCardTag, ProjectDirection } from '@/entities/project'

export interface ProjectFiltersProps {
  direction: 'all' | ProjectDirection
  directionCounts: Record<'all' | ProjectDirection, number>
  technologies: ProjectCardTag[]
  technology: ProjectCardTag | null
  onDirectionChange: (direction: 'all' | ProjectDirection) => void
  onTechnologyChange: (technology: ProjectCardTag | null) => void
}
