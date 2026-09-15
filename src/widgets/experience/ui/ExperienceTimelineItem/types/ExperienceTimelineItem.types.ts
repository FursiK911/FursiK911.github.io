export interface ExperienceTimelineItemProps {
  entry: import('@/entities/work-experience').WorkExperience
  index: number
  reducedMotion: boolean
  axisPoint: { x: number; y: number }
  mobileOrder?: number
  mobileSide?: import('../../ExperienceTimeline/types/ExperienceTimeline.types').MobileTimelineSide
  onSelect: () => void
}
