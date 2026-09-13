import { expect, it } from 'vitest'

import { projects } from '../data/projects.data'

it('contains the RuStore AR Coloring reskin project and its card', () => {
  const project = projects.find((item) => item.id === 'ar-coloring-zebra')

  expect(project).toMatchObject({
    titleKey: 'arColoringZebra',
    platformKey: 'platformAndroid',
    company: 'Творческая мастерская Зебра',
    actions: [
      {
        href: 'https://www.rustore.ru/catalog/app/com.zebra.arcoloringapp',
      },
    ],
    card: {
      direction: 'games-apps',
      teaserKey: 'projects.cardTeasers.arColoringZebra',
      tags: ['Unity', 'AR', 'Mobile'],
    },
  })
  expect(project?.media).toHaveLength(5)
})
