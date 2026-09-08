import { Effects, Glitch } from '@isonimus/glitch-js'

export function createHologram(target: HTMLDivElement) {
  return new Glitch(target, {
    trigger: 'always',
    active: true,
    effects: [
      Effects.hologram({
        color: '#00d9ff',
        opacity: 1,
        glowIntensity: 0.35,
        scanSpeed: 1,
        flickerFrequency: 0,
        floatAmplitude: 1,
      }),
    ],
  })
}
