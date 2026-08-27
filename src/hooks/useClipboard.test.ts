import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useClipboard } from './useClipboard'

it('copies text and exposes copied state', async () => {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  })
  const clipboardSpy = vi
    .spyOn(navigator.clipboard, 'writeText')
    .mockResolvedValue(undefined)
  const { result } = renderHook(() => useClipboard())
  await result.current.copy('test')
  expect(clipboardSpy).toHaveBeenCalledWith('test')
})
