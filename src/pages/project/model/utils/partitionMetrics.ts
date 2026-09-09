import type { ProjectMetric } from '@/entities/project'
import { metricPlacement } from '../config/metricPlacement.config'
export function partitionMetrics(
  key: string | undefined,
  metrics: ProjectMetric[],
) {
  const placement = key ? metricPlacement[key] : undefined
  return {
    achievements: metrics.filter((_, index) =>
      placement?.achievements.includes(index),
    ),
    facts: metrics.filter((_, index) => placement?.facts.includes(index)),
  }
}
