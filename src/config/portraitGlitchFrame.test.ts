import { generatePortraitGlitchFrame } from './portraitGlitchFrame'

it('generates a desktop frame with 2–10% active cells', () => {
  const frame = generatePortraitGlitchFrame(20, () => 0)
  expect(frame.gridSize).toBe(20)
  expect(frame.cells.length).toBeGreaterThanOrEqual(8)
  expect(frame.cells.length).toBeLessThanOrEqual(40)
  expect(frame.duration).toBe(1200)
  expect(new Set(frame.cells.map((cell) => cell.index)).size).toBe(
    frame.cells.length,
  )
  expect(
    frame.cells.every(
      (cell) => Math.abs(cell.offsetX) <= 12 && Math.abs(cell.offsetY) <= 8,
    ),
  ).toBe(true)
})

it('generates a mobile frame with 1–3 active cells and bounded duration', () => {
  const frame = generatePortraitGlitchFrame(10, () => 0.999)
  expect(frame.gridSize).toBe(10)
  expect(frame.cells.length).toBeGreaterThanOrEqual(2)
  expect(frame.cells.length).toBeLessThanOrEqual(10)
  expect(frame.duration).toBe(1800)
  expect(frame.cells.every((cell) => cell.index >= 0 && cell.index < 100)).toBe(
    true,
  )
})
