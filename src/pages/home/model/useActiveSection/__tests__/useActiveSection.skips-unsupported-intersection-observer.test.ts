import { renderHook } from '@testing-library/react'
import { useActiveSection } from '../useActiveSection'

it('keeps the initial section when IntersectionObserver is unavailable', () => {
  vi.stubGlobal('IntersectionObserver', undefined)

  const { result } = renderHook(() =>
    useActiveSection(['overview', 'details'], 'fallback'),
  )

  expect(result.current).toBe('fallback')
})
