import { screen } from '@testing-library/react'
import { Education } from '../Education'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders the education copy in English', async () => {
  await changeLanguage('en')
  renderWithProviders(<Education />)
  expect(document.querySelector('.section-heading .eyebrow')).toHaveTextContent(
    '05 // EDUCATION',
  )
  expect(screen.getAllByText('Donetsk National University')).toHaveLength(2)
  expect(screen.getAllByText('Cisco Networking Academy')).toHaveLength(4)
})
