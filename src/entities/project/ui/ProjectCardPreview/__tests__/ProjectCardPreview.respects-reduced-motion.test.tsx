import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectCardPreview } from '../ProjectCardPreview'

vi.mock('motion/react', async (importOriginal) => ({
  ...(await importOriginal<typeof import('motion/react')>()),
  useReducedMotion: () => true,
}))

it('renders a preview scene with reduced-motion transitions', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectCardPreview
      active={false}
      images={[{ kind: 'image', src: '/portrait.png', altKey: 'mychessWeb' }]}
    />,
  )

  expect(screen.getByRole('img', { name: 'myChess' })).toBeInTheDocument()
})
