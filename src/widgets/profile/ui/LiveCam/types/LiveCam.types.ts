export type LiveCamStatus = 'idle' | 'connecting' | 'live' | 'signal-lost'

export interface LiveCamProps {
  entered: boolean
  reducedMotion: boolean
}
