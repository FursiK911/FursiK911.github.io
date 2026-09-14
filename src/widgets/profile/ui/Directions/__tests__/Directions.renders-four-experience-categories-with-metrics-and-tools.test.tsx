import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { Directions } from '@/widgets/profile'
import { changeLanguage } from '@/shared/config/i18n'
it('renders four experience categories with metrics and tools', async () => {
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
  expect(screen.getByText('VR · AR · MR')).toBeInTheDocument()
  const toolsByCard = screen
    .getAllByRole('article')
    .map((card) =>
      Array.from(card.querySelectorAll('.direction-tools li')).map(
        (tool) => tool.textContent,
      ),
    )
  expect(toolsByCard).toEqual([
    ['React', 'Vue', 'TypeScript', 'Next.js', 'Nuxt.js', 'Mantine'],
    ['Unity', 'Unreal Engine', 'Godot'],
    ['React Native', 'Flutter'],
    ['OpenXR', 'SteamVR', 'XR Interaction Toolkit', 'Meta XR SDK', 'Vuforia'],
  ])
  expect(screen.getAllByText('VR · AR · MR')).toHaveLength(1)
  expect(
    document.querySelectorAll('.direction-card > .direction-tools'),
  ).toHaveLength(4)
  expect(
    document.querySelectorAll('.direction-content .direction-tools'),
  ).toHaveLength(0)
  expect(document.querySelectorAll('.metric-counter')).toHaveLength(4)
  expect(
    document.querySelectorAll('.direction-card .metric-counter'),
  ).toHaveLength(4)
})
