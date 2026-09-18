import type { ResumeDocument } from '../types/resume.types'

export const resumeDocuments: ResumeDocument[] = [
  {
    id: 'unity',
    title: 'Unity Developer',
    files: {
      ru: '/cv/Dmitry-Fursov-Unity-Developer-RU.pdf',
      en: '/cv/Dmitry-Fursov-Unity-Developer-EN.pdf',
    },
  },
  {
    id: 'frontend',
    title: 'Frontend Developer',
    files: {
      ru: '/cv/Dmitry-Fursov-Frontend-Developer-RU.pdf',
      en: '/cv/Dmitry-Fursov-Frontend-Developer-EN.pdf',
    },
  },
]

export const defaultResumeDocument = resumeDocuments.find(
  (document) => document.id === 'unity',
)!
