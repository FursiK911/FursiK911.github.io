import { screen } from '@testing-library/react'
import { ExperienceDetailsModal } from '../ExperienceDetailsModal'
import styles from '../styles/ExperienceDetailsModal.module.css'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('applies the dedicated dialog and scrollable body classes', async () => {
  renderWithProviders(
    <ExperienceDetailsModal entry={workExperience[0]} onClose={() => {}} />,
  )

  const dialog = await screen.findByRole('dialog')
  expect(dialog).toHaveClass(styles.dialog)
  expect(dialog.querySelector(`.${styles.body}`)).not.toBeNull()
})
