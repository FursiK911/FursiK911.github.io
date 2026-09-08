import { screen } from '@testing-library/react'
import { Projects } from '../Projects'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('keeps the eyebrow in English and localizes the projects intro title', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Projects />)

  expect(document.querySelector('.section-heading .eyebrow')).toHaveTextContent(
    '02 // PROJECTS',
  )
  expect(
    screen.getByRole('heading', { level: 2, name: 'ПРОЕКТЫ' }),
  ).toBeVisible()
})
