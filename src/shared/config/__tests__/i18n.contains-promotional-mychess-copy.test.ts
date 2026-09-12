import { resources } from '../i18n'

it('contains the approved promotional MyChess copy in both locales', () => {
  expect(resources.ru.translation.projects.cardTeasers.mychessWeb).toContain(
    'первая российская шахматная экосистема',
  )
  expect(resources.ru.translation.projects.mychessWebDesc).toContain(
    'более 100 000 пользователей',
  )
  expect(resources.ru.translation.projects.mychessWebDesc).toContain(
    'реестр российского программного обеспечения',
  )
  expect(resources.en.translation.projects.cardTeasers.mychessWeb).toContain(
    'the first Russian chess ecosystem',
  )
  expect(resources.en.translation.projects.mychessWebDesc).toContain(
    'More than 100,000 users',
  )
  expect(resources.en.translation.projects.mychessWebDesc).toContain(
    'Russian software registry',
  )
})
