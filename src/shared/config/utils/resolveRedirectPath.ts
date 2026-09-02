export function resolveRedirectPath() {
  const redirectPath = new URLSearchParams(window.location.search).get('__path')
  if (redirectPath) window.history.replaceState({}, '', redirectPath)
}
