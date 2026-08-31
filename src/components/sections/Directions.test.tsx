import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test/render'
import { Directions } from './Directions'
import { changeLanguage } from '../../i18n'

describe('Directions', () => {
  it('renders all six development directions', async () => {
    await changeLanguage('ru')
    renderWithProviders(<Directions />)

    expect(
      screen.getByRole('heading', { name: 'НАПРАВЛЕНИЯ' }),
    ).toBeInTheDocument()
    expect(screen.getByText('WEB')).toBeInTheDocument()
    expect(screen.getByText('MOBILE')).toBeInTheDocument()
    expect(screen.getByText('UNITY')).toBeInTheDocument()
    expect(screen.getByText('UNIGINE')).toBeInTheDocument()
    expect(screen.getByText('XR / AR')).toBeInTheDocument()
    expect(screen.getByText('REALTIME')).toBeInTheDocument()
  })
})
