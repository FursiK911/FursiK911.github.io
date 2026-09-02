import { expect, it } from 'vitest'
import { directions } from '@/widgets/profile/model/directions'
it('defines the four experience directions', () => {
  expect(directions.map((direction) => direction.id)).toEqual([
    'web',
    'game-engines',
    'mobile',
    'xr',
  ])
})
