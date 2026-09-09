import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  NEW_ROUTE_DELAY_MS,
  WIN_CELEBRATION_MS,
} from '../config/projectCircuitGame.config'
import { projectCircuitPuzzles } from '../data/projectCircuitPuzzles.data'
import { evaluateCircuit } from '../utils/evaluateCircuit'
import { rotateCircuitTile } from '../utils/rotateCircuitTile'
import type {
  GamePhase,
  ProjectCircuitGameState,
} from '../types/ProjectCircuitGame.types'

function createState(puzzleIndex: number): ProjectCircuitGameState {
  const puzzle = projectCircuitPuzzles[puzzleIndex]
  return {
    puzzleIndex,
    tiles: puzzle.initialTiles.map((tile) => ({ ...tile })),
    visualRotations: puzzle.initialTiles.map((tile) => tile.rotation),
    evaluation: evaluateCircuit(puzzle, puzzle.initialTiles),
    phase: 'playing',
    showNewRoute: false,
  }
}

export function useProjectCircuitGame() {
  const [state, setState] = useState(() => createState(0))
  const [expanded, setExpanded] = useState(false)
  const timers = useRef<number[]>([])
  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer))
    timers.current = []
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  useEffect(() => {
    if (state.phase !== 'celebrating') return
    clearTimers()
    const celebrationTimer = window.setTimeout(() => {
      setState((current) => ({ ...current, phase: 'solved' }))
    }, WIN_CELEBRATION_MS)
    const newRouteTimer = window.setTimeout(() => {
      setState((current) => ({ ...current, showNewRoute: true }))
    }, NEW_ROUTE_DELAY_MS)
    timers.current.push(celebrationTimer, newRouteTimer)
  }, [clearTimers, state.phase])

  const rotateTile = useCallback((index: number) => {
    setState((current) => {
      if (current.phase !== 'playing') return current
      const puzzle = projectCircuitPuzzles[current.puzzleIndex]
      const tiles = current.tiles.map((tile, tileIndex) =>
        tileIndex === index ? rotateCircuitTile(tile) : { ...tile },
      )
      const evaluation = evaluateCircuit(puzzle, tiles)
      const visualRotations = current.visualRotations.map(
        (rotation, tileIndex) =>
          tileIndex === index ? rotation + 90 : rotation,
      )
      if (evaluation.isSolved) {
        return {
          ...current,
          tiles,
          visualRotations,
          evaluation,
          phase: 'celebrating' as GamePhase,
        }
      }
      return { ...current, tiles, visualRotations, evaluation }
    })
  }, [])

  const resetPuzzle = useCallback(() => {
    clearTimers()
    setState((current) => createState(current.puzzleIndex))
  }, [clearTimers])

  const nextPuzzle = useCallback(() => {
    clearTimers()
    setState((current) =>
      createState((current.puzzleIndex + 1) % projectCircuitPuzzles.length),
    )
  }, [clearTimers])

  const toggleExpanded = useCallback(
    () => setExpanded((current) => !current),
    [],
  )

  return useMemo(
    () => ({
      ...state,
      puzzle: projectCircuitPuzzles[state.puzzleIndex],
      canRotate: state.phase === 'playing',
      showNewRoute: state.showNewRoute,
      expanded,
      toggleExpanded,
      rotateTile,
      resetPuzzle,
      nextPuzzle,
    }),
    [expanded, nextPuzzle, resetPuzzle, rotateTile, state, toggleExpanded],
  )
}
