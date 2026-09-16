export function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) =>
      element?.setAttribute(key, value),
    )
    document.head.appendChild(element)
  }
  element.setAttribute('content', attributes.content)
}
