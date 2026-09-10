import type { ProjectMedia } from '../types/project.types'

export function orderProjectMedia(
  media: readonly ProjectMedia[],
): ProjectMedia[] {
  return [
    ...media.filter((item) => item.kind === 'youtube'),
    ...media.filter((item) => item.kind === 'image'),
  ]
}
