import type { Direction } from '../../../../../model/directions/types/directions.types'

export type DirectionCardProps = {
  direction: Direction
  hasEntered: boolean
  index: number
  reducedMotion: boolean
  scanning: boolean
}
