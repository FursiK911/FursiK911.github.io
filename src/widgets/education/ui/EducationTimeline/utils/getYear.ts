export function getYear(date: string) {
  return date.match(/\d{4}$/)?.[0] ?? date
}
