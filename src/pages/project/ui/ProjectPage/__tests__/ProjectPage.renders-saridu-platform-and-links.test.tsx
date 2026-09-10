import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'

it('renders the SARiDU platform, product metrics and VK links', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectPage projectId="saridu-actuator" />)

  expect(screen.getByText('PC / Astra Linux')).toBeInTheDocument()
  expect(screen.getByText('15+')).toBeInTheDocument()
  expect(screen.getByText('3')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /VK · post 1/i })).toHaveAttribute(
    'href',
    'https://vk.ru/wall-217441512_342',
  )
  expect(screen.getByRole('link', { name: /VK · post 2/i })).toHaveAttribute(
    'href',
    'https://vk.ru/wall-217441512_1118',
  )
  expect(screen.queryByText(/annual report/i)).not.toBeInTheDocument()
  expect(screen.queryByText('.NET 6')).not.toBeInTheDocument()
  expect(screen.queryByText('HTC VIVE')).not.toBeInTheDocument()
})
