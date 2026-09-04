export function getDocumentScrollRange() {
  const root = document.documentElement
  return Math.max(0, root.scrollHeight - root.clientHeight)
}
