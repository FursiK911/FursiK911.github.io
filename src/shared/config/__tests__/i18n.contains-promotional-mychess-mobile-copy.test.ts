import { resources } from '../i18n'

it('contains the promotional MyChess Mobile copy in both locales', () => {
  expect(resources.ru.translation.projects.cardTeasers.mychessMobile).toContain(
    'Мобильная версия',
  )
  expect(resources.ru.translation.projects.cardTeasers.mychessMobile).toContain(
    'Flutter',
  )
  expect(resources.ru.translation.projects.mychessMobileDesc).toContain(
    'Более 100 000 пользователей',
  )
  expect(resources.ru.translation.projects.mychessMobileDesc).toContain(
    'реестр российского программного обеспечения',
  )
  expect(resources.en.translation.projects.cardTeasers.mychessMobile).toContain(
    'Flutter app',
  )
  expect(resources.en.translation.projects.mychessMobileDesc).toContain(
    'More than 100,000 users',
  )
  expect(resources.en.translation.projects.mychessMobileDesc).toContain(
    'Russian software registry',
  )
  expect(resources.ru.translation.projects.mychessMobilePoints).toEqual([
    'Разрабатывал кроссплатформенное приложение на Flutter',
    'Поддерживал публикационные версии приложения для Android и iOS',
  ])
  expect(resources.en.translation.projects.mychessMobilePoints).toEqual([
    'Developed a cross-platform application with Flutter',
    'Supported release builds for Android and iOS',
  ])
})
