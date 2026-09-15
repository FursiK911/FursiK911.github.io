import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ResumeDownload } from '../ResumeDownload'

it('offers both Russian PDFs without a separate language selector', async () => {
  await changeLanguage('ru')
  renderWithProviders(<ResumeDownload label="Резюме" />)
  await userEvent.click(screen.getByRole('button', { name: 'Резюме' }))
  const dialog = within(screen.getByRole('dialog', { name: 'Выберите резюме' }))
  for (const role of ['Unity', 'Frontend']) {
    const link = dialog.getByRole('link', {
      name: `Скачать ${role} Developer в PDF`,
    })
    expect(link).toHaveAttribute(
      'href',
      `/cv/Dmitry-Fursov-${role}-Developer-RU.pdf`,
    )
    expect(link).toHaveAttribute('download')
  }
  expect(dialog.getAllByRole('link')).toHaveLength(2)
  expect(dialog.queryByRole('combobox')).not.toBeInTheDocument()
})
