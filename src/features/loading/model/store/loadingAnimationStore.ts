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
