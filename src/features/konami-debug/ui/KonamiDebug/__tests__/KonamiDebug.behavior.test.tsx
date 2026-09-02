import { fireEvent, screen } from '@testing-library/react'
import { KonamiDebug } from '../KonamiDebug'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('activates debug mode with Konami code', () => {
  renderWithProviders(<KonamiDebug />)
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
  expect(screen.getByText('DEBUG MODE')).toBeVisible()
})
