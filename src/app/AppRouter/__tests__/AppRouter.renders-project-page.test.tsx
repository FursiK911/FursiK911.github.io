import { screen } from '@testing-library/react'
import { afterEach, beforeEach, expect } from 'vitest'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { AppRouter } from '../AppRouter'

beforeEach(() => {
  window.history.pushState({}, '', '/projects/mychess-web')
})

afterEach(() => {
  window.history.pushState({}, '', '/')
})

it('routes a project path to its page', async () => {
  await changeLanguage('en')
  renderWithProviders(<AppRouter />)

  expect(
    screen.getByRole('heading', { level: 1, name: 'myChess' }),
  ).toBeInTheDocument()
})
