import { getEvenlySpacedX } from '../ExperienceTimelineGeometry'
it('spaces milestone targets evenly with fifty-pixel edge insets', () => {
  expect(getEvenlySpacedX(1200, 6)).toEqual([50, 270, 490, 710, 930, 1150])
  expect(getEvenlySpacedX(945, 6)).toEqual([50, 219, 388, 557, 726, 895])
})
