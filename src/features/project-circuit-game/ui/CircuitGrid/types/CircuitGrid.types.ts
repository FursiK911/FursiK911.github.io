import type { CircuitTileData } from '../../../model/types/ProjectCircuitGame.types'

export type CircuitGridProps = {
  tiles: CircuitTileData[]
  visualRotations: number[]
  poweredTileIndices: number[]
  canRotate: boolean
  onRotate: (index: number) => void
  getTileLabel: (index: number, tile: CircuitTileData) => string
}
