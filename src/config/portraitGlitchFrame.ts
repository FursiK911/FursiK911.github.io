import { portraitGlitchConfig } from './portraitGlitch'

export interface PortraitGlitchCell {
  index: number
  column: number
  row: number
  opacity: number
  offsetX: number
  offsetY: number
  scale: number
  sourceX: number
  sourceY: number
}

export interface PortraitGlitchFrame {
  gridSize: number
  cells: PortraitGlitchCell[]
  duration: number
}

type RandomSource = () => number

const between = (min: number, max: number, random: RandomSource) =>
  Math.floor(random() * (max - min + 1)) + min

const shuffled = (size: number, random: RandomSource) =>
  Array.from({ length: size }, (_, index) => index).sort(() => random() - 0.5)

function selectDistributedIndexes(
  gridSize: number,
  count: number,
  random: RandomSource,
) {
  const candidates = shuffled(gridSize * gridSize, random)
  const selected: number[] = []
  const rows = new Set<number>()
  const columns = new Set<number>()
  for (const index of candidates) {
    const row = Math.floor(index / gridSize)
    const column = index % gridSize
    if (rows.has(row) && columns.has(column)) continue
    selected.push(index)
    rows.add(row)
    columns.add(column)
    if (selected.length === count) return selected
  }
  return selected.concat(
    candidates
      .filter((index) => !selected.includes(index))
      .slice(0, count - selected.length),
  )
}

export function generatePortraitGlitchFrame(
  gridSize: number,
  random: RandomSource = Math.random,
): PortraitGlitchFrame {
  const totalCells = gridSize * gridSize
  const minActive = Math.max(
    1,
    Math.ceil((totalCells * portraitGlitchConfig.minActivePercent) / 100),
  )
  const maxActive = Math.floor(
    (totalCells * portraitGlitchConfig.maxActivePercent) / 100,
  )
  const activeCount = between(minActive, maxActive, random)
  const cells = selectDistributedIndexes(gridSize, activeCount, random).map(
    (index) => ({
      index,
      column: index % gridSize,
      row: Math.floor(index / gridSize),
      opacity: between(45, 85, random) / 100,
      offsetX: between(-12, 12, random),
      offsetY: between(-8, 8, random),
      scale: between(98, 108, random) / 100,
      sourceX: between(0, gridSize - 1, random),
      sourceY: between(0, gridSize - 1, random),
    }),
  )
  return {
    gridSize,
    cells,
    duration: between(
      portraitGlitchConfig.burstMinDuration,
      portraitGlitchConfig.burstMaxDuration,
      random,
    ),
  }
}
