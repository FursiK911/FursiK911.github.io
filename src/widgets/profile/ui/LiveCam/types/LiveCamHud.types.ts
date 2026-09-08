import type { CSSProperties } from 'react'
import type { LiveCamStatus } from './LiveCam.types'

export interface LiveCamTelemetryState {
  fps: number
  latency: number
  signal: number
  uplink: number
}

export interface LiveCamTrackerState {
  lock: number
  x: number
  y: number
}

export type LiveCamJournalSeverity = 'success' | 'warning' | 'failed'

export interface LiveCamJournalEvent {
  code: string
  message: string
  severity: LiveCamJournalSeverity
  time: number
}

export type LiveCamJournalEventTemplate = Omit<LiveCamJournalEvent, 'time'>

export interface UseLiveCamHudArgs {
  isInViewport: boolean
  reducedMotion: boolean
  retryRemainingSeconds: number | null
  status: LiveCamStatus
}

export interface LiveCamWaveStyle extends CSSProperties {
  '--wave-height': string
}

export interface LiveCamTrackerStyle extends CSSProperties {
  '--tracker-x': string
  '--tracker-y': string
}
