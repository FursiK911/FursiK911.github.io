import type { Project } from '@/entities/project'

export interface ProjectDetailsProps {
  project: Project
  returnFocus: HTMLElement | null
  onClose: () => void
}
