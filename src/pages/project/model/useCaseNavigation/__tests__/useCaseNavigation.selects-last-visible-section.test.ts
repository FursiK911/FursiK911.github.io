import { act, renderHook } from '@testing-library/react'
import { useCaseNavigation } from '../useCaseNavigation'

it('selects the last section above the viewport threshold and schedules updates once per frame', () => {
  const overview = document.createElement('section')
  overview.id = 'overview'
  const details = document.createElement('section')
  details.id = 'details'
  document.body.append(overview, details)
  vi.spyOn(overview, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  } as DOMRect)
  vi.spyOn(details, 'getBoundingClientRect').mockReturnValue({
    top: 180,
  } as DOMRect)
  const frames: FrameRequestCallback[] = []
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    frames.push(callback)
    return frames.length
  })
  vi.stubGlobal('cancelAnimationFrame', vi.fn())

  const { result, unmount } = renderHook(() =>
    useCaseNavigation([
      { id: 'overview' },
      { id: 'details' },
      { id: 'missing' },
    ] as never),
  )
  expect(result.current).toBe('details')
  act(() => {
    window.dispatchEvent(new Event('scroll'))
    window.dispatchEvent(new Event('scroll'))
    frames.shift()?.(16)
  })
  expect(result.current).toBe('details')
  unmount()
})
