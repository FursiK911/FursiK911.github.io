import { partitionMetrics } from '../utils/partitionMetrics'
it('keeps client context outside achievements and avoids duplicating stack and platform facts', () => {
  const values = Array.from({ length: 4 }, (_, index) => ({
    value: String(index),
    label: String(index),
  }))
  const mychessValues = values.slice(0, 3)
  expect(partitionMetrics('neo4SightlineMetrics', values)).toEqual({
    achievements: [],
    facts: values,
  })
  expect(partitionMetrics('mychessMobileMetrics', values)).toEqual({
    achievements: mychessValues,
    facts: [],
  })
  expect(partitionMetrics(undefined, [])).toEqual({
    achievements: [],
    facts: [],
  })
})
