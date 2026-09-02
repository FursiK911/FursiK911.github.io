import { useSyncExternalStore } from 'react'
import {
  getLoadingAnimationSpeed,
  subscribeToLoadingAnimationSpeed,
} from '../store/loadingAnimationStore'

export function useLoadingAnimationSpeed() {
  return useSyncExternalStore(
    subscribeToLoadingAnimationSpeed,
    getLoadingAnimationSpeed,
    getLoadingAnimationSpeed,
  )
}
