import { fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import { useKonamiCode } from './useKonamiCode'

it('toggles after the Konami code', () => {
  const { result } = renderHook(() => useKonamiCode())
  for (const key of [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ])
    fireEvent.keyDown(document, { key })
  expect(result.current.active).toBe(true)
})
