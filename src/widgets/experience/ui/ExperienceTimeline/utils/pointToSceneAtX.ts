import type { ScenePoint } from '../types/ExperienceTimeline.types'

export function pointToSceneAtX(
  path: SVGPathElement,
  targetX: number,
  sceneRect: DOMRect,
): ScenePoint | null {
  const totalLength = path.getTotalLength()
  const matrix = path.getScreenCTM()
  const svg = path.ownerSVGElement
  if (!totalLength || !matrix || !svg?.createSVGPoint()) return null

  let low = 0
  let high = totalLength
  let closest: ScenePoint | null = null

  for (let iteration = 0; iteration < 24; iteration += 1) {
    const length = (low + high) / 2
    const point = path.getPointAtLength(length)
    const svgPoint = svg.createSVGPoint()
    svgPoint.x = point.x
    svgPoint.y = point.y
    const screenPoint = svgPoint.matrixTransform(matrix)
    const scenePoint = {
      x: screenPoint.x - sceneRect.left,
      y: screenPoint.y - sceneRect.top,
    }
    if (
      !closest ||
      Math.abs(scenePoint.x - targetX) < Math.abs(closest.x - targetX)
    ) {
      closest = scenePoint
    }
    if (scenePoint.x < targetX) low = length
    else high = length
  }
  return closest
}
