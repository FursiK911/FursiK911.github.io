import type { CircuitTileData } from '../../../model/types/ProjectCircuitGame.types'

export type CircuitTileProps = {
  index: number
  tile: CircuitTileData
  visualRotation: number
  powered: boolean
  canRotate: boolean
  onRotate: (index: number) => void
  label: string
}
