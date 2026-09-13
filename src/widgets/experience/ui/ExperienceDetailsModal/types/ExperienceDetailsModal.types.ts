import type { WorkExperience } from '@/entities/work-experience'

export interface ExperienceDetailsModalProps {
  entry: WorkExperience | null
  onClose: () => void
}
