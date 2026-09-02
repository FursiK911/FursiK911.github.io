export type ProjectCategory =
  'web' | 'mobile' | 'unity' | 'unigine' | 'xr-ar' | 'multiplayer'

export type ProjectLink = { label: string; href: string }
export type ProjectMedia = { kind: 'image' | 'video'; src: string; alt: string }
export type ProjectPeriod = { from: string; to?: string }

export type Project = {
  id: string
  titleKey: string
  category: ProjectCategory[]
  platformKey: string
  roleKey?: string
  descriptionKey: string
  pointsKey: string
  tech: string[]
  company: string
  period: ProjectPeriod
  links?: ProjectLink[]
  media?: ProjectMedia[]
  featured?: boolean
}
