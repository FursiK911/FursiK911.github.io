import type { LoadingTimer } from './types/scheduleLoadingAnimation.types'
import {
  getLoadingAnimationSpeed,
  subscribeToLoadingAnimationSpeed,
} from '../store/loadingAnimationStore'

export function scheduleLoadingAnimation(callback: () => void, delay: number) {
  const timer = {} as LoadingTimer

  const armTimer = () => {
    if (!timer.active || timer.timer !== undefined) return
    timer.timer = window.setTimeout(() => {
      timer.timer = undefined
      const speed = getLoadingAnimationSpeed()
      if (speed === 0) {
        armTimer()
        return
      }
      timer.remaining = Math.max(0, timer.remaining - 50 * speed)
      if (timer.remaining > 0) {
        armTimer()
        return
      }
      timer.active = false
      timer.unsubscribe()
      timer.callback()
    }, 50)
  }

  timer.active = true
  timer.callback = callback
  timer.remaining = delay
  timer.timer = undefined
  timer.unsubscribe = subscribeToLoadingAnimationSpeed(() => {
    if (timer.active) armTimer()
  })
  armTimer()

  return () => {
    if (!timer.active) return
    timer.active = false
    if (timer.timer !== undefined) window.clearTimeout(timer.timer)
    timer.unsubscribe()
  }
}
