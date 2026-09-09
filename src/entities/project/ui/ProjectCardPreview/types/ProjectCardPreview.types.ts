import type { ProjectMedia } from '../../../model/types/project.types'

export type ProjectCardPreviewProps = {
  active: boolean
  images: Array<Extract<ProjectMedia, { kind: 'image' }>>
}
