export function markDecorativeLayers(target: HTMLDivElement) {
  target
    .querySelectorAll<HTMLElement>('.glitch-clone, .glitch-overlay')
    .forEach((layer) => {
      layer.setAttribute('aria-hidden', 'true')
      layer.querySelectorAll<HTMLImageElement>('img').forEach((image) => {
        image.alt = ''
        image.setAttribute('aria-hidden', 'true')
      })
    })
}
