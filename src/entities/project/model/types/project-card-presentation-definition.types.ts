import type { ProjectCardTag, ProjectDirection } from './project.types'

export type ProjectCardPresentationDefinition = {
  direction: ProjectDirection
  teaserKey: string
  tags: ProjectCardTag[]
  previewImageIndexes: number[]
}
