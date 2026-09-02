export function getCompanyInitials(company: string) {
  return company
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
}
