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
  groups: number[][]
  duration: number
}
type RandomSource = () => number
const between = (min: number, max: number, random: RandomSource) =>
  Math.floor(random() * (max - min + 1)) + min
const pick = <T>(items: T[], random: RandomSource) =>
  items[Math.min(items.length - 1, Math.floor(random() * items.length))]
const neighbors = (index: number, gridSize: number) => {
  const row = Math.floor(index / gridSize),
    column = index % gridSize
  return [
    row > 0 ? index - gridSize : -1,
    row < gridSize - 1 ? index + gridSize : -1,
    column > 0 ? index - 1 : -1,
    column < gridSize - 1 ? index + 1 : -1,
  ].filter((candidate) => candidate >= 0)
}
function growGroup(
  gridSize: number,
  size: number,
  occupied: Set<number>,
  random: RandomSource,
) {
  const starts = Array.from(
    { length: gridSize * gridSize },
    (_, index) => index,
  ).filter((index) => !occupied.has(index))
  const group = [pick(starts, random)]
  occupied.add(group[0])
  while (group.length < size) {
    const frontier = group
      .flatMap((index) => neighbors(index, gridSize))
      .filter(
        (index, position, values) =>
          !occupied.has(index) && values.indexOf(index) === position,
      )
    if (!frontier.length) break
    const next = pick(frontier, random)
    group.push(next)
    occupied.add(next)
  }
  return group
}
export function generatePortraitGlitchFrame(
  gridSize: number,
  random: RandomSource = Math.random,
): PortraitGlitchFrame {
  const totalCells = gridSize * gridSize
  const minActive = Math.max(
    2,
    Math.ceil((totalCells * portraitGlitchConfig.minActivePercent) / 100),
  )
  const maxActive = Math.max(
    minActive,
    Math.floor((totalCells * portraitGlitchConfig.maxActivePercent) / 100),
  )
  const activeCount = between(minActive, maxActive, random)
  const groupCount = between(
    Math.min(2, activeCount),
    Math.min(6, activeCount),
    random,
  )
  const sizes = Array.from({ length: groupCount }, () => 1)
  for (
    let remaining = activeCount - groupCount;
    remaining > 0;
    remaining -= 1
  ) {
    const candidates = sizes
      .map((size, index) => (size < 6 ? index : -1))
      .filter((index) => index >= 0)
    if (!candidates.length) break
    sizes[pick(candidates, random)] += 1
  }
  const occupied = new Set<number>()
  const groups = sizes.map((size) =>
    growGroup(gridSize, size, occupied, random),
  )
  const cells = groups.flat().map((index) => ({
    index,
    column: index % gridSize,
    row: Math.floor(index / gridSize),
    opacity: between(45, 85, random) / 100,
    offsetX: between(-12, 12, random),
    offsetY: between(-8, 8, random),
    scale: between(98, 108, random) / 100,
    sourceX: between(0, gridSize - 1, random),
    sourceY: between(0, gridSize - 1, random),
  }))
  return {
    gridSize,
    cells,
    groups,
    duration: between(
      portraitGlitchConfig.burstMinDuration,
      portraitGlitchConfig.burstMaxDuration,
      random,
    ),
  }
}
