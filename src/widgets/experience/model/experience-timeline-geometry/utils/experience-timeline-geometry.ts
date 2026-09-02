import { experienceTimelineEdgeInset } from '../config/experienceTimelineGeometry.config'

export function getEvenlySpacedX(
  sceneWidth: number,
  count: number,
  inset = experienceTimelineEdgeInset,
) {
  if (count < 2) return [sceneWidth / 2]

  const step = (sceneWidth - inset * 2) / (count - 1)
  return Array.from({ length: count }, (_, index) => inset + step * index)
}
