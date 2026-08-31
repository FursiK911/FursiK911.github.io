import { screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '../../test/render'
import { Directions } from './Directions'
import { changeLanguage } from '../../i18n'

describe('Directions', () => {
  it('renders four experience categories with metrics and tools', async () => {
    await changeLanguage('ru')
    renderWithProviders(<Directions />)

    expect(
      screen.queryByRole('heading', { name: 'НАПРАВЛЕНИЯ' }),
    ).not.toBeInTheDocument()
    expect(
      document.querySelector('.section-shell > .directions-grid'),
    ).toBeInTheDocument()
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
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Unigine')).toBeInTheDocument()
    expect(screen.getByText('Android')).toBeInTheDocument()
    expect(screen.getByText('OpenXR')).toBeInTheDocument()
    expect(screen.getAllByText('VR · AR · MR')).toHaveLength(1)
    expect(document.querySelectorAll('.metric-counter')).toHaveLength(4)
    expect(
      document.querySelectorAll('.direction-card .metric-counter'),
    ).toHaveLength(4)
  })

  it('localizes the metric label in English', async () => {
    await changeLanguage('en')
    renderWithProviders(<Directions />)

    expect(screen.getAllByText('PROJECTS')).toHaveLength(4)
    expect(screen.getByText('GAME ENGINES')).toBeInTheDocument()
    expect(screen.getByText('VR · AR · MR')).toBeInTheDocument()
  })

  it('holds metrics until the section entrance completes', async () => {
    const view = renderWithProviders(
      <Directions entered={false} reducedMotion={false} />,
    )

    expect(
      document.querySelectorAll('.metric-counter[data-active="false"]'),
    ).toHaveLength(4)

    view.rerender(<Directions entered reducedMotion={false} />)

    await waitFor(() => {
      expect(
        document.querySelectorAll('.metric-counter[data-active="true"]'),
      ).toHaveLength(4)
    })
  })

  it('starts metrics immediately when reduced motion is requested', () => {
    renderWithProviders(<Directions entered reducedMotion />)

    expect(
      document.querySelectorAll('.metric-counter[data-active="true"]'),
    ).toHaveLength(4)
  })
})
