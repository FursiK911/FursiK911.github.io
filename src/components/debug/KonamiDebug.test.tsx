import { fireEvent, screen } from '@testing-library/react'
import { KonamiDebug } from './KonamiDebug'
import { renderWithProviders } from '../../test/render'

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
