export interface EducationCopy {
  date: string
  title: string
  organization: string
  accountRecord?: string
  details: Array<{ label: string; value: string }>
  topics: string[]
}
