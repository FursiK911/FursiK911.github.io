import type {
  CircuitTileType,
  Direction,
  Rotation,
} from '../types/ProjectCircuitGame.types'

export const CIRCUIT_COLUMNS = 5
export const CIRCUIT_ROWS = 2
export const TILE_COUNT = CIRCUIT_COLUMNS * CIRCUIT_ROWS
export const WIN_CELEBRATION_MS = 500
export const NEW_ROUTE_DELAY_MS = 2500

export const directions: Direction[] = ['top', 'right', 'bottom', 'left']

export const basePorts: Record<CircuitTileType, Direction[]> = {
  straight: ['left', 'right'],
  corner: ['top', 'right'],
  tee: ['top', 'right', 'left'],
  empty: [],
}

export const rotations: Rotation[] = [0, 90, 180, 270]

export const directionDelta: Record<
  Direction,
  { row: number; column: number }
> = {
  top: { row: -1, column: 0 },
  right: { row: 0, column: 1 },
  bottom: { row: 1, column: 0 },
  left: { row: 0, column: -1 },
}

export const oppositeDirection: Record<Direction, Direction> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
}
