export type LoadingTimer = {
  active: boolean
  callback: () => void
  remaining: number
  timer: number | undefined
  unsubscribe: () => void
}
