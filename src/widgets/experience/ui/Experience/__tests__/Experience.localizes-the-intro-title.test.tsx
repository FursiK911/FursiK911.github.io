import { screen } from '@testing-library/react'
import { Experience } from '../Experience'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('keeps the eyebrow in English and localizes the experience intro title', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Experience />)

  expect(document.querySelector('.section-heading .eyebrow')).toHaveTextContent(
    '03 // EXPERIENCE LOG',
  )
  expect(
    screen.getByRole('heading', { level: 2, name: 'ОПЫТ' }),
  ).toBeInTheDocument()
})
