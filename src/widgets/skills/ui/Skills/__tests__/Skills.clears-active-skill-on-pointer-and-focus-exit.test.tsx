import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { Skills } from '../Skills'

it('clears a highlighted skill when pointer and keyboard focus leave it', async () => {
  const user = userEvent.setup()
  await changeLanguage('en')
  renderWithProviders(<Skills />)
  const reactButton = screen.getByRole('button', { name: 'React' })

  await user.hover(reactButton)
  expect(reactButton.className).toContain('skillActive')
  await user.unhover(reactButton)
  expect(reactButton.className).not.toContain('skillActive')
  fireEvent.focus(reactButton)
  expect(reactButton.className).toContain('skillActive')
  fireEvent.blur(reactButton)
  expect(reactButton.className).not.toContain('skillActive')
})
