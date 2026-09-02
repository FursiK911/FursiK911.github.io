import { Effects, Glitch } from '@isonimus/glitch-js'

export function createBurstGlitch(target: HTMLDivElement) {
  return new Glitch(target, {
    trigger: 'manual',
    active: false,
    effects: [
      Effects.rgbSplit({ maxOffset: 10, frequency: 0.3, blendMode: 'screen' }),
      Effects.slice({ maxOffset: 20, frequency: 0.5 }),
      Effects.shake({ amplitudeX: 20, amplitudeY: 20, frequency: 0.1 }),
    ],
  })
}
