import type {
  CircuitPuzzle,
  CircuitTileData,
  Rotation,
} from '../types/ProjectCircuitGame.types'

const empty = (): CircuitTileData => ({ type: 'empty', rotation: 0 })
const tile = (
  type: CircuitTileData['type'],
  rotation: Rotation,
): CircuitTileData => ({ type, rotation })

function createPuzzle(
  id: CircuitPuzzle['id'],
  solved: Record<number, CircuitTileData>,
  changed: number[],
  solutionPath: number[],
): CircuitPuzzle {
  const solvedTiles = Array.from(
    { length: 10 },
    (_, index) => solved[index] ?? empty(),
  )
  const initialTiles = solvedTiles.map((current, index) => {
    if (!changed.includes(index) || current.type === 'empty')
      return { ...current }
    return {
      ...current,
      rotation: ((current.rotation + 270) % 360) as Rotation,
    }
  })
  return {
    id,
    initialTiles,
    solvedTiles: solvedTiles.map((current) => ({ ...current })),
    solutionPath,
  }
}

export const projectCircuitPuzzles: CircuitPuzzle[] = [
  createPuzzle(
    'a',
    {
      0: tile('straight', 0),
      1: tile('corner', 180),
      6: tile('corner', 0),
      7: tile('straight', 0),
      8: tile('corner', 270),
      3: tile('corner', 90),
      4: tile('straight', 0),
    },
    [1, 6, 8, 3],
    [0, 1, 6, 7, 8, 3, 4],
  ),
  createPuzzle(
    'b',
    {
      0: tile('corner', 180),
      5: tile('corner', 0),
      6: tile('corner', 270),
      1: tile('corner', 90),
      2: tile('straight', 0),
      3: tile('straight', 0),
      4: tile('straight', 0),
    },
    [0, 5, 6, 1, 2],
    [0, 5, 6, 1, 2, 3, 4],
  ),
  createPuzzle(
    'c',
    {
      0: tile('straight', 0),
      1: tile('straight', 0),
      2: tile('corner', 180),
      7: tile('corner', 0),
      8: tile('straight', 0),
      9: tile('corner', 270),
      4: tile('corner', 90),
    },
    [0, 1, 2, 7, 9, 4],
    [0, 1, 2, 7, 8, 9, 4],
  ),
]
