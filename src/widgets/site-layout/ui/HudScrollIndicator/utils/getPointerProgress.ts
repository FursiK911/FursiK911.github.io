import { clamp } from './clamp'

export function getPointerProgress(clientY: number, bounds: DOMRect) {
  return clamp((clientY - bounds.top) / bounds.height, 0, 1)
}
