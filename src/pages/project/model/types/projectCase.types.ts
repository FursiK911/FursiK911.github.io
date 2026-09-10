import type { ReactNode, TouchEvent } from 'react'
import type { Project, ProjectMedia, ProjectMetric } from '@/entities/project'
export type ProjectContentProps = { project: Project }
export type CaseSectionProps = {
  id: string
  number: string
  title: string
  children: ReactNode
}
export type CaseNavigationProps = { sections: { id: string; label: string }[] }
export type GalleryImageProps = {
  src: string
  alt: string
  youtube?: boolean
  className?: string
}
export type GallerySlideProps = {
  media: ProjectMedia
  title: string
  playing: boolean
  onPlay: () => void
  onExpand: () => void
}
export type ProjectGalleryFullscreenProps = {
  opened: boolean
  media: ProjectMedia
  title: string
  index: number
  total: number
  playing: boolean
  reducedMotion: boolean | null
  onClose: () => void
  onPlay: () => void
  onPrevious: () => void
  onNext: () => void
  onTouchStart: (event: TouchEvent<HTMLElement>) => void
  onTouchEnd: (event: TouchEvent<HTMLElement>) => void
}
export type ProjectResultsProps = { metrics: ProjectMetric[] }
export type ProjectIntroProps = ProjectContentProps & { facts: ProjectMetric[] }
export type MetricPlacement = { achievements: number[]; facts: number[] }
