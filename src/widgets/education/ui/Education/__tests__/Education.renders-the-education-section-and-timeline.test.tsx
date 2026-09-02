import { screen } from '@testing-library/react'
import { Education } from '../Education'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
it('renders the education section and timeline', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Education />)
  expect(document.querySelector('#education')).toBeInTheDocument()
  expect(document.querySelector('.section-heading .eyebrow')).toHaveTextContent(
    '05 // ОБРАЗОВАНИЕ',
  )
  expect(screen.getAllByText('Донецкий национальный университет').length).toBe(
    2,
  )
  expect(screen.getAllByText('Cisco Networking Academy').length).toBe(4)
})
