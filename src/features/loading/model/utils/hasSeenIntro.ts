import { ALWAYS_REPLAY_INTRO, INTRO_STORAGE_KEY } from '../config/intro.config'

export function hasSeenIntro() {
  return (
    !ALWAYS_REPLAY_INTRO && Boolean(sessionStorage.getItem(INTRO_STORAGE_KEY))
  )
}
