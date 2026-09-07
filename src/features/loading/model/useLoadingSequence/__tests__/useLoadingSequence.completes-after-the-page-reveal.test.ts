import { act, renderHook } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { useLoadingSequence } from '../useLoadingSequence'

beforeEach(() => sessionStorage.clear())

it('persists the intro only after the portrait transfer and page reveal complete', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  vi.spyOn(Math, 'random').mockReturnValue(0)
  const { result } = renderHook(() => useLoadingSequence('QUERY'))

  act(() => result.current.notifyVideo(true))
  act(() => vi.advanceTimersByTime(30000))
  expect(result.current.phase).toBe('fading')
  expect(sessionStorage.getItem('df-intro-seen')).toBeNull()

  act(() => result.current.finishFade())
  expect(result.current.phase).toBe('transferring')
  act(() => result.current.finishTransfer())
  expect(result.current.phase).toBe('revealing')
  act(() => vi.advanceTimersByTime(950))

  expect(result.current.phase).toBe('complete')
  expect(sessionStorage.getItem('df-intro-seen')).toBe('1')
  vi.useRealTimers()
})
