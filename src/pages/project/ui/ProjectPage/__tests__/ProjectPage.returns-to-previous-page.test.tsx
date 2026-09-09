import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'
it('returns through browser history when the project was opened from this portfolio', async () => {
  await changeLanguage('en')
  const referrer = vi
    .spyOn(document, 'referrer', 'get')
    .mockReturnValue(window.location.origin + '/#projects')
  const length = vi.spyOn(window.history, 'length', 'get').mockReturnValue(2)
  const back = vi.spyOn(window.history, 'back').mockImplementation(() => {})
  renderWithProviders(<ProjectPage projectId="mychess-web" />)
  await userEvent.click(screen.getByRole('link', { name: 'Back' }))
  expect(back).toHaveBeenCalledOnce()
  referrer.mockRestore()
  length.mockRestore()
  back.mockRestore()
})
