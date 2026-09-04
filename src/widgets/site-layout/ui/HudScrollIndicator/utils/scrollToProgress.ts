import { clamp } from './clamp'

export function scrollToProgress(progress: number, range: number) {
  window.scrollTo({
    top: clamp(progress, 0, 1) * range,
    behavior: 'instant',
  })
}
