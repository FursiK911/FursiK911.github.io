export function className(key: string) {
  return key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}
