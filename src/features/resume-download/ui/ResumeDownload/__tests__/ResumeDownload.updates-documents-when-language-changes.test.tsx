import { act, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ResumeDownload } from '../ResumeDownload'

it('updates an open chooser to English when the site language changes', async () => {
  await changeLanguage('ru')
  renderWithProviders(<ResumeDownload label="CV" />)
  await userEvent.click(screen.getByRole('button', { name: 'CV' }))
  await act(() => changeLanguage('en'))
  const dialog = within(screen.getByRole('dialog', { name: 'Choose a resume' }))
  for (const role of ['Unity', 'Frontend']) {
    const link = dialog.getByRole('link', {
      name: `Download ${role} Developer PDF`,
    })
    expect(link).toHaveAttribute(
      'href',
      `/cv/Dmitry-Fursov-${role}-Developer-EN.pdf`,
    )
    expect(link).toHaveAttribute('download')
  }
})
