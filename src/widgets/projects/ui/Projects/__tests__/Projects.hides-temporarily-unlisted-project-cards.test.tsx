import { screen } from '@testing-library/react'
import { Projects } from '../Projects'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'

it('hides temporarily unlisted project cards from the showcase', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Projects />)

  for (const title of [
    'Мобильная multiplayer RTS',
    'Сайт компании Cat-citten',
    'Промышленные VR-тренажёры',
    'CMS поставщика топлива',
    'CMS магазина дверей',
    'Quest room testing',
  ]) {
    expect(
      screen.queryByRole('heading', { name: title }),
    ).not.toBeInTheDocument()
  }
})
