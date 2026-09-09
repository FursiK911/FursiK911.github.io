import { canReturnWithinSite } from '../utils/canReturnWithinSite'
it('permits back navigation only for a known same-origin referrer with an earlier entry', () => {
  expect(
    canReturnWithinSite(
      'https://portfolio.test/#projects',
      'https://portfolio.test',
      2,
    ),
  ).toBe(true)
  for (const [referrer, length] of [
    ['', 3],
    ['invalid', 3],
    ['https://external.test/', 3],
    ['https://portfolio.test/', 1],
  ] as const) {
    expect(
      canReturnWithinSite(referrer, 'https://portfolio.test', length),
    ).toBe(false)
  }
})
