import { renderHook } from '@testing-library/react'
import { useIntro } from '../useIntro'
it('returns ready when intro was already seen', () => {
  sessionStorage.setItem('df-intro-seen', '1')
  const { result } = renderHook(() => useIntro())
  expect(result.current).toBe(true)
})
