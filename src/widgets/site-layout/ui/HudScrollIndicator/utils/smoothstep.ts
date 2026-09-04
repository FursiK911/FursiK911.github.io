import { clamp } from './clamp'

export function smoothstep(value: number) {
  const progress = clamp(value, 0, 1)
  return progress * progress * (3 - 2 * progress)
}
