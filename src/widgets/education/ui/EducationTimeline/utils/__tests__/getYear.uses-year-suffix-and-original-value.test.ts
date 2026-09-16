import { getYear } from '../getYear'

it('returns a trailing year when present and preserves non-year dates', () => {
  expect(getYear('09.2023')).toBe('2023')
  expect(getYear('Present')).toBe('Present')
})
