import { act, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ResumeDownload } from '../ResumeDownload'

it('links to the localized Unity resume by default', async () => {
  await changeLanguage('ru')
  const { rerender } = renderWithProviders(<ResumeDownload label="Резюме" />)

  const resumeLink = screen.getByRole('link', {
    name: 'Скачать Unity Developer в PDF',
  })
  expect(resumeLink).toHaveAttribute(
    'href',
    '/cv/Dmitry-Fursov-Unity-Developer-RU.pdf',
  )
  expect(resumeLink).toHaveAttribute('download')
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

  await act(() => changeLanguage('en'))
  rerender(<ResumeDownload label="CV" />)
  expect(
    screen.getByRole('link', { name: 'Download Unity Developer PDF' }),
  ).toHaveAttribute('href', '/cv/Dmitry-Fursov-Unity-Developer-EN.pdf')
})
