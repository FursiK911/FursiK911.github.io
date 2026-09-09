import type {
  CircuitTileData,
  Rotation,
} from '../types/ProjectCircuitGame.types'

export function rotateCircuitTile(tile: CircuitTileData): CircuitTileData {
  const rotation = ((tile.rotation + 90) % 360) as Rotation
  return { ...tile, rotation }
}
