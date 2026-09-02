import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EducationTimeline } from '../EducationTimeline'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage, resources } from '@/shared/config/i18n'
it('reveals course account data and topics', async () => {
  await changeLanguage('ru')
  const user = userEvent.setup()
  renderWithProviders(<EducationTimeline />)
  await user.click(
    screen.getAllByRole('button', { name: /ПОДРОБНЕЕ|MORE DETAILS/i })[2],
  )
  expect(screen.queryByText('CCNA2-19-IVT1')).not.toBeInTheDocument()
  expect(resources.ru.translation.education.entries.ccna2.accountRecord).toBe(
    'CCNA2-19-IVT1',
  )
  expect(screen.getByText('VLAN')).toBeInTheDocument()
  expect(screen.getByText('NAT/PAT')).toBeInTheDocument()
  expect(screen.getAllByText('SOS COMPUTER')).toHaveLength(2)
})
