export function canReturnWithinSite(
  referrer: string,
  origin: string,
  historyLength: number,
) {
  if (!referrer || historyLength <= 1) return false
  try {
    return new URL(referrer).origin === origin
  } catch {
    return false
  }
}
