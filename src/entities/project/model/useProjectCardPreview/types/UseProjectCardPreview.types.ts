import type { ProjectMedia } from '../../types/project.types'

export type UseProjectCardPreviewOptions = {
  active: boolean
  images: Array<Extract<ProjectMedia, { kind: 'image' }>>
  reducedMotion: boolean | null
}
