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

export type LiveCamTerminalTone =
  | 'comment'
  | 'failed'
  | 'function'
  | 'keyword'
  | 'number'
  | 'plain'
  | 'prompt'
  | 'string'
  | 'success'
  | 'warning'

export type LiveCamTerminalSeverity = 'success' | 'warning' | 'failed'

export interface LiveCamTerminalToken {
  text: string
  tone: LiveCamTerminalTone
}

export interface LiveCamTerminalEntry {
  id: string
  severity?: LiveCamTerminalSeverity
  tokens: LiveCamTerminalToken[]
}

export interface LiveCamTerminalLine {
  entry: LiveCamTerminalEntry
  typedLength: number
}

export interface UseLiveCamHudArgs {
  isInViewport: boolean
  reducedMotion: boolean
  status: LiveCamStatus
}

export interface LiveCamWaveStyle extends CSSProperties {
  '--wave-height': string
}

export interface LiveCamTrackerStyle extends CSSProperties {
  '--tracker-x': string
  '--tracker-y': string
}
