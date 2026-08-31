import { useEffect, useState } from 'react'
import NumberFlow from '@number-flow/react'

type MetricCounterProps = {
  value: number
  suffix?: string
  label: string
  active?: boolean
}

export function MetricCounter({
  value,
  suffix = '',
  label,
  active = true,
}: MetricCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!active) {
      return
    }

    const frame = window.requestAnimationFrame(() => setDisplayValue(value))
    return () => window.cancelAnimationFrame(frame)
  }, [active, value])

  return (
    <div
      className="metric-counter"
      aria-label={`${value}${suffix} ${label}`}
      data-active={active}
    >
      <NumberFlow
        className="metric-counter-value"
        value={active ? displayValue : 0}
        suffix={suffix}
        respectMotionPreference
      />
      <span className="metric-counter-label">{label}</span>
    </div>
  )
}

export type { MetricCounterProps }
