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
  expect(result.current.phase).toBe('exiting')
  vi.useRealTimers()
})
