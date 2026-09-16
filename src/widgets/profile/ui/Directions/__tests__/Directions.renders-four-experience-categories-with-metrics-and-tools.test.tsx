import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { Directions } from '@/widgets/profile'
import { changeLanguage } from '@/shared/config/i18n'
it('renders four experience categories with metrics without tools', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Directions />)
  expect(
    screen.queryByRole('heading', { name: 'НАПРАВЛЕНИЯ' }),
  ).not.toBeInTheDocument()
  expect(
    document.querySelector('.section-shell > .directions-grid'),
  ).toBeInTheDocument()
  expect(
    screen.getByText('Современные веб-приложения и платформы'),
  ).toBeInTheDocument()
  expect(screen.getByText('04')).toBeInTheDocument()
  expect(document.querySelectorAll('article svg')).toHaveLength(4)
  expect(screen.getAllByRole('article')).toHaveLength(4)
  expect(screen.getByText('WEB')).toBeInTheDocument()
  expect(screen.getByText('GAME ENGINES')).toBeInTheDocument()
  expect(screen.getByText('MOBILE')).toBeInTheDocument()
  expect(screen.getByText('XR')).toBeInTheDocument()
  expect(screen.getByLabelText('8+ ПРОЕКТОВ')).toBeInTheDocument()
  expect(screen.getByLabelText('15+ ПРОЕКТОВ')).toBeInTheDocument()
  expect(screen.getByLabelText('5+ ПРОЕКТОВ')).toBeInTheDocument()
  expect(screen.getByLabelText('10+ ПРОЕКТОВ')).toBeInTheDocument()
  expect(document.querySelectorAll('.direction-tools')).toHaveLength(0)
  expect(document.querySelectorAll('.direction-tool')).toHaveLength(0)
  expect(document.querySelectorAll('.metric-counter')).toHaveLength(4)
  expect(
    document.querySelectorAll('.direction-card .metric-counter'),
  ).toHaveLength(4)
})
