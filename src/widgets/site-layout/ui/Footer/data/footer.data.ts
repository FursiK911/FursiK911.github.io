import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
} from '@tabler/icons-react'

export const sectionIds = [
  'top',
  'projects',
  'experience',
  'stack',
  'education',
  'contact',
] as const

export const socialLinks = [
  {
    label: 'Telegram',
    href: 'https://t.me/FursiK911',
    Icon: IconBrandTelegram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dmitry-fursov-251097213/',
    Icon: IconBrandLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/FursiK911',
    Icon: IconBrandGithub,
  },
]
