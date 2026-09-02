import { act } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'
import { scheduleLoadingAnimation } from '../../scheduleLoadingAnimation/scheduleLoadingAnimation'
import { setLoadingAnimationSpeed } from '../../store/loadingAnimationStore'
beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  setLoadingAnimationSpeed(1)
})
afterEach(() => vi.useRealTimers())
it('pauses and resumes a scheduled animation timer', () => {
  const callback = vi.fn()
  scheduleLoadingAnimation(callback, 1000)
  act(() => vi.advanceTimersByTime(400))
  setLoadingAnimationSpeed(0)
  act(() => vi.advanceTimersByTime(2000))
  expect(callback).not.toHaveBeenCalled()
  setLoadingAnimationSpeed(1)
  act(() => vi.advanceTimersByTime(601))
  expect(callback).toHaveBeenCalledOnce()
})
