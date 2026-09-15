import type { MobileTimelineSide } from '../types/ExperienceTimeline.types'

export function getMobileTimelineSide(order: number): MobileTimelineSide {
  return order % 2 === 0 ? 'left' : 'right'
}
