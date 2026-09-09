import { basePorts, directions } from '../config/projectCircuitGame.config'
import type {
  CircuitTileData,
  Direction,
} from '../types/ProjectCircuitGame.types'

export function getTilePorts(tile: CircuitTileData): Direction[] {
  const turns = tile.rotation / 90
  return basePorts[tile.type].map((port) => {
    const index = (directions.indexOf(port) + turns) % directions.length
    return directions[index]
  })
}
