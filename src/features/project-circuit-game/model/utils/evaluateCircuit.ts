import {
  CIRCUIT_COLUMNS,
  directionDelta,
  oppositeDirection,
} from '../config/projectCircuitGame.config'
import { getTilePorts } from './getTilePorts'
import type {
  CircuitEvaluation,
  CircuitPuzzle,
  CircuitTileData,
  Direction,
} from '../types/ProjectCircuitGame.types'

function edgeKey(from: string | number, to: string | number) {
  return `${from}-${to}`
}

function neighborIndex(index: number, direction: Direction) {
  const row = Math.floor(index / CIRCUIT_COLUMNS)
  const column = index % CIRCUIT_COLUMNS
  const delta = directionDelta[direction]
  const nextRow = row + delta.row
  const nextColumn = column + delta.column
  if (
    nextRow < 0 ||
    nextRow > 1 ||
    nextColumn < 0 ||
    nextColumn >= CIRCUIT_COLUMNS
  ) {
    return null
  }
  return nextRow * CIRCUIT_COLUMNS + nextColumn
}

function hasConnection(tile: CircuitTileData, direction: Direction) {
  return getTilePorts(tile).includes(direction)
}

export function evaluateCircuit(
  puzzle: CircuitPuzzle,
  tiles: CircuitTileData[],
): CircuitEvaluation {
  const powered = new Set<number>()
  const poweredEdges = new Set<string>()
  const queue: number[] = []

  if (hasConnection(tiles[0], 'left')) {
    powered.add(0)
    poweredEdges.add(edgeKey('source', 0))
    queue.push(0)
  }

  while (queue.length > 0) {
    const index = queue.shift()!
    for (const direction of getTilePorts(tiles[index])) {
      const nextIndex = neighborIndex(index, direction)
      if (nextIndex === null) continue
      if (!hasConnection(tiles[nextIndex], oppositeDirection[direction]))
        continue
      poweredEdges.add(edgeKey(index, nextIndex))
      if (!powered.has(nextIndex)) {
        powered.add(nextIndex)
        queue.push(nextIndex)
      }
    }
  }

  const coreConnected = powered.has(4) && hasConnection(tiles[4], 'right')
  if (coreConnected) poweredEdges.add(edgeKey(4, 'core'))

  const routeEdges = [
    edgeKey('source', puzzle.solutionPath[0]),
    ...puzzle.solutionPath
      .slice(0, -1)
      .map((index, pathIndex) =>
        edgeKey(index, puzzle.solutionPath[pathIndex + 1]),
      ),
    edgeKey(puzzle.solutionPath.at(-1)!, 'core'),
  ]
  const poweredReferenceEdges = routeEdges.filter((edge) =>
    poweredEdges.has(edge),
  ).length
  const flowPercent = Math.round(
    (poweredReferenceEdges / routeEdges.length) * 100,
  )

  return {
    poweredTileIndices: [...powered],
    poweredEdges: [...poweredEdges],
    flowPercent,
    isSolved: coreConnected,
  }
}
