export function toIsoDate(date: string) {
  const match = date.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
  return match ? `${match[3]}-${match[2]}-${match[1]}` : date
}
