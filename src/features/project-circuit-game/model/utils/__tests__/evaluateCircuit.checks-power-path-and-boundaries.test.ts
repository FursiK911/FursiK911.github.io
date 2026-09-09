import { projectCircuitPuzzles } from '../../data/projectCircuitPuzzles.data'
import { evaluateCircuit } from '../evaluateCircuit'

it('checks reciprocal connections, boundaries, partial power and full core connection', () => {
  const puzzle = projectCircuitPuzzles[0]
  const initial = evaluateCircuit(puzzle, puzzle.initialTiles)
  expect(initial.isSolved).toBe(false)
  expect(initial.flowPercent).toBe(13)

  const solved = evaluateCircuit(puzzle, puzzle.solvedTiles)
  expect(solved.isSolved).toBe(true)
  expect(solved.flowPercent).toBe(100)
  expect(solved.poweredTileIndices).toEqual(
    expect.arrayContaining(puzzle.solutionPath),
  )

  const broken = puzzle.solvedTiles.map((tile, index) =>
    index === 1 ? { ...tile, rotation: 0 as const } : { ...tile },
  )
  expect(evaluateCircuit(puzzle, broken).isSolved).toBe(false)

  const teePuzzle = { ...puzzle, solutionPath: [0, 1, 4] }
  const teeTiles = puzzle.solvedTiles.map((tile) => ({ ...tile }))
  teeTiles[0] = { type: 'tee', rotation: 0 }
  teeTiles[1] = { type: 'straight', rotation: 0 }
  teeTiles[4] = { type: 'straight', rotation: 0 }
  expect(evaluateCircuit(teePuzzle, teeTiles).poweredTileIndices).toContain(0)
})
