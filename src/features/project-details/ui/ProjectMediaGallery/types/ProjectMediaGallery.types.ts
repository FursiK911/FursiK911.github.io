import type { Project } from '@/entities/project'

export interface ProjectMediaGalleryProps {
  project: Project
  variant: 'preview' | 'detail'
}
