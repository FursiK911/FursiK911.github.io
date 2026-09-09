export type Direction = 'top' | 'right' | 'bottom' | 'left'

export type Rotation = 0 | 90 | 180 | 270

export type CircuitTileType = 'straight' | 'corner' | 'tee' | 'empty'

export type CircuitTileData = {
  type: CircuitTileType
  rotation: Rotation
}

export type CircuitPuzzle = {
  id: 'a' | 'b' | 'c'
  initialTiles: CircuitTileData[]
  solvedTiles: CircuitTileData[]
  solutionPath: number[]
}

export type CircuitEvaluation = {
  poweredTileIndices: number[]
  poweredEdges: string[]
  flowPercent: number
  isSolved: boolean
}

export type GamePhase = 'playing' | 'celebrating' | 'solved'

export type ProjectCircuitGameState = {
  puzzleIndex: number
  tiles: CircuitTileData[]
  visualRotations: number[]
  evaluation: CircuitEvaluation
  phase: GamePhase
  showNewRoute: boolean
}
