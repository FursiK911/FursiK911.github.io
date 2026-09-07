import { act, renderHook } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { vi } from 'vitest'
import { useLoadingSequence } from '../useLoadingSequence'
beforeEach(() => sessionStorage.clear())
it('skips only after the page is ready', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => result.current.skip())
  expect(result.current.phase).toBe('initializing')
  act(() => result.current.notifyVideo(false))
  act(() => result.current.skip())
  expect(result.current.phase).toBe('skipping')
  expect(sessionStorage.getItem('df-intro-seen')).toBeNull()
  act(() => result.current.finishSkip())
  expect(result.current.phase).toBe('complete')
  expect(sessionStorage.getItem('df-intro-seen')).toBe('1')
  vi.useRealTimers()
})
