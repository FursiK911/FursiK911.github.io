import type { Project } from '../../../model/types/project.types'

export interface ProjectCardProps {
  project: Project
  onOpen: (project: Project, element: HTMLElement) => void
}
