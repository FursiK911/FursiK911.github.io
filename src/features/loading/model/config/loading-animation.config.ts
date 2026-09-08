/**
 * All loader timings are kept here so the demo can be tuned without hunting
 * through the sequence implementation or component styles.
 */
export const loadingAnimationConfig = {
  videoReadyTimeout: 3000, // максимум ожидания готовности фонового видео
  initialDelay: 700, // пауза перед стартом печати запроса
  queryDuration: 1440, // длительность печати текста в поле поиска
  cursorClickDelay: 560, // задержка от наведения курсора до нажатия кнопки
  searchStartDelay: 1320, // пауза между нажатием и появлением списка кандидатов
  candidateSpawnMin: 360, // минимальный интервал появления следующей карточки
  candidateSpawnMax: 600, // максимальный интервал появления следующей карточки
  candidateCheckMin: 1040, // минимальное время проверки кандидата
  candidateCheckMax: 1800, // максимальное время проверки кандидата
  matchedRevealDelay: 800, // пауза между галочкой Дмитрия и модальным окном
  candidateFadeDelay: 400, // пауза после FAILED перед приглушением карточки
  candidateFadeDuration: 700, // длительность приглушения failed-карточки
  postScanHold: 250, // акцент после завершения сканирования портрета
  loaderFadeDuration: 0.55, // затухание заставки без портрета в секундах
  pageRevealDuration: 0.95, // каскадное проявление первого экрана в секундах
  skipFadeDuration: 0.25, // быстрый выход по SKIP в секундах
  css: {
    blink: 2.2, // мигание индикатора статуса загрузки
    cursorOpacity: 0.4, // затухание фальшивого курсора
    cursorTransform: 0.68, // движение фальшивого курсора к кнопке
    candidateIn: 0.7, // появление карточки кандидата
    spinner: 2, // вращение индикатора проверки
    resultIn: 0.9, // появление модального окна результата
    photoDelay: 0.56, // задержка раскрытия портрета
    scan: 1.4, // сканирующая линия на карточке кандидата
  },
} as const
