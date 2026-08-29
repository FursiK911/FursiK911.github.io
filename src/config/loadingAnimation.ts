import { useSyncExternalStore } from 'react'

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
  resultHold: 1900, // время показа успешного результата до выхода заставки
  exitDuration: 1.64, // длительность slide-up заставки в секундах
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

type LoadingTimer = {
  active: boolean
  callback: () => void
  remaining: number
  timer: number | undefined
  unsubscribe: () => void
}

const listeners = new Set<() => void>()
let loadingAnimationSpeed = 1

export function getLoadingAnimationSpeed() {
  return loadingAnimationSpeed
}

export function setLoadingAnimationSpeed(speed: number) {
  const nextSpeed = Math.max(0, speed)
  if (nextSpeed === loadingAnimationSpeed) return
  loadingAnimationSpeed = nextSpeed
  listeners.forEach((listener) => listener())
}

export function subscribeToLoadingAnimationSpeed(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useLoadingAnimationSpeed() {
  return useSyncExternalStore(
    subscribeToLoadingAnimationSpeed,
    getLoadingAnimationSpeed,
    getLoadingAnimationSpeed,
  )
}

function armTimer(timer: LoadingTimer) {
  if (!timer.active || timer.timer !== undefined) return
  timer.timer = window.setTimeout(() => {
    timer.timer = undefined
    if (loadingAnimationSpeed === 0) {
      armTimer(timer)
      return
    }
    timer.remaining = Math.max(0, timer.remaining - 50 * loadingAnimationSpeed)
    if (timer.remaining > 0) {
      armTimer(timer)
      return
    }
    timer.active = false
    timer.unsubscribe()
    timer.callback()
  }, 50)
}

export function scheduleLoadingAnimation(callback: () => void, delay: number) {
  const timer = {} as LoadingTimer
  timer.active = true
  timer.callback = callback
  timer.remaining = delay
  timer.timer = undefined
  timer.unsubscribe = subscribeToLoadingAnimationSpeed(() => {
    if (!timer.active) return
    armTimer(timer)
  })
  armTimer(timer)

  return () => {
    if (!timer.active) return
    timer.active = false
    if (timer.timer !== undefined) window.clearTimeout(timer.timer)
    timer.unsubscribe()
  }
}
