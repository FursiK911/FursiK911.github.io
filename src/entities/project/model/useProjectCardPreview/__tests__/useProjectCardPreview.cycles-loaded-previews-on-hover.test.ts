import { act, renderHook } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { useProjectCardPreview } from '../useProjectCardPreview'

const images = [
  { kind: 'image' as const, src: '/first.png', altKey: 'first' },
  { kind: 'image' as const, src: '/second.png', altKey: 'second' },
]

afterEach(() => vi.useRealTimers())

it('cycles loaded previews only while hovered and restores the cover afterwards', () => {
  vi.useFakeTimers()
  const { result, rerender, unmount } = renderHook(
    ({ active, reducedMotion }) =>
      useProjectCardPreview({ active, images, reducedMotion }),
    { initialProps: { active: false, reducedMotion: false } },
  )

  act(() => {
    result.current.reportImageLoad(images[0].src)
    result.current.reportImageLoad(images[1].src)
  })
  rerender({ active: true, reducedMotion: false })
  expect(result.current.currentImage?.src).toBe('/first.png')

  act(() => vi.advanceTimersByTime(2000))
  expect(result.current.currentImage?.src).toBe('/second.png')

  rerender({ active: false, reducedMotion: false })
  expect(result.current.currentImage?.src).toBe('/first.png')
  unmount()
  expect(vi.getTimerCount()).toBe(0)

  const reduced = renderHook(() =>
    useProjectCardPreview({ active: true, images, reducedMotion: true }),
  )
  act(() => {
    reduced.result.current.reportImageLoad(images[0].src)
    reduced.result.current.reportImageLoad(images[1].src)
  })
  act(() => vi.advanceTimersByTime(4000))
  expect(reduced.result.current.currentImage?.src).toBe('/first.png')

  reduced.unmount()
  expect(vi.getTimerCount()).toBe(0)
})
