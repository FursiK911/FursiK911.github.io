import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { expect, it, vi } from 'vitest'
import { ContactPortrait } from '../ContactPortrait'

vi.mock('@mantine/hooks', () => ({
  useInViewport: () => ({ inViewport: true, ref: vi.fn() }),
}))

vi.mock('@/widgets/contact/ui/GlitchPortrait/GlitchPortrait', () => ({
  GlitchPortrait: ({ active }: { active: boolean }) => (
    <div data-glitch-active={String(active)} />
  ),
}))

it('activates the glitch only after the portrait card enters the viewport', () => {
  const { container } = renderWithProviders(
    <ContactPortrait entered reducedMotion={false} />,
  )

  expect(container.querySelector('[data-glitch-active]')).toHaveAttribute(
    'data-glitch-active',
    'true',
  )
})
