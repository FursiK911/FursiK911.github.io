import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { Skills } from '../Skills'

it('keeps group headings in English for Russian', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Skills />)

  expect(
    screen
      .getAllByRole('heading', { level: 3 })
      .map(({ textContent }) => textContent),
  ).toEqual(['Web', 'Game Development', 'Mobile', 'XR'])

  await changeLanguage('en')
})
