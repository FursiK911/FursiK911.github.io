import { renderHook } from '@testing-library/react'
import { useActiveSection } from './useActiveSection'

it('returns the initial section', () => {
  const { result } = renderHook(() =>
    useActiveSection(['projects'], 'projects'),
  )
  expect(result.current).toBe('projects')
})
