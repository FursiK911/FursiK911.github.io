import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import { GridScan } from '../GridScan'

const threeMock = vi.hoisted(() => {
  class Vector2 {
    x: number
    y: number
    constructor(x = 0, y = 0) {
      this.x = x
      this.y = y
    }
    set(x: number, y: number) {
      this.x = x
      this.y = y
      return this
    }
    clone() {
      return new Vector2(this.x, this.y)
    }
    copy(value: Vector2) {
      this.x = value.x
      this.y = value.y
      return this
    }
    sub(value: Vector2) {
      this.x -= value.x
      this.y -= value.y
      return this
    }
    addScaledVector(value: Vector2, scale: number) {
      this.x += value.x * scale
      this.y += value.y * scale
      return this
    }
    multiplyScalar(scale: number) {
      this.x *= scale
      this.y *= scale
      return this
    }
    length() {
      return Math.hypot(this.x, this.y)
    }
    setLength(length: number) {
      const current = this.length() || 1
      return this.multiplyScalar(length / current)
    }
    dot(value: Vector2) {
      return this.x * value.x + this.y * value.y
    }
  }
  class Vector3 {
    x: number
    y: number
    z: number
    constructor(x = 0, y = 0, z = 0) {
      this.x = x
      this.y = y
      this.z = z
    }
    set(x: number, y: number, z: number) {
      this.x = x
      this.y = y
      this.z = z
      return this
    }
  }
  class Color {
    value: string
    constructor(value: string) {
      this.value = value
    }
    convertSRGBToLinear() {
      return this
    }
    copy(value: Color) {
      this.value = value.value
      return this
    }
  }
  class WebGLRenderer {
    domElement = document.createElement('canvas')
    setPixelRatio = vi.fn()
    setSize = vi.fn()
    getPixelRatio = vi.fn(() => 1)
    setClearColor = vi.fn()
    clear = vi.fn()
    render = vi.fn()
    dispose = vi.fn()
    forceContextLoss = vi.fn()
    outputColorSpace = ''
    toneMapping = 0
    autoClear = false
  }
  class ShaderMaterial {
    uniforms: Record<string, { value: unknown }>
    constructor(options: { uniforms: Record<string, { value: unknown }> }) {
      this.uniforms = options.uniforms
    }
    dispose = vi.fn()
  }
  class Scene {
    add = vi.fn()
  }
  class OrthographicCamera {}
  class PlaneGeometry {
    dispose = vi.fn()
  }
  class Mesh {
    geometry: PlaneGeometry
    constructor(geometry: PlaneGeometry) {
      this.geometry = geometry
    }
  }
  return {
    Vector2,
    Vector3,
    Color,
    WebGLRenderer,
    ShaderMaterial,
    Scene,
    OrthographicCamera,
    PlaneGeometry,
    Mesh,
    SRGBColorSpace: 'srgb',
    NoToneMapping: 0,
    MathUtils: {
      clamp: (value: number, min: number, max: number) =>
        Math.min(Math.max(value, min), max),
      degToRad: (value: number) => (value * Math.PI) / 180,
      lerp: (from: number, to: number, amount: number) =>
        from + (to - from) * amount,
    },
  }
})

const faceApiMock = vi.hoisted(() => ({
  nets: {
    tinyFaceDetector: { loadFromUri: vi.fn().mockResolvedValue(undefined) },
    faceLandmark68TinyNet: {
      loadFromUri: vi.fn().mockResolvedValue(undefined),
    },
  },
  TinyFaceDetectorOptions: vi.fn(),
  detectSingleFace: vi.fn(),
}))

vi.mock('three', () => threeMock)
vi.mock('face-api.js', () => faceApiMock)
vi.mock('postprocessing', () => ({
  BloomEffect: class {
    blendMode = { opacity: { value: 0 } }
    luminanceMaterial = { threshold: 0, smoothing: 0 }
  },
  ChromaticAberrationEffect: class {
    offset = { set: vi.fn() }
  },
  EffectComposer: class {
    addPass = vi.fn()
    render = vi.fn()
    setSize = vi.fn()
    dispose = vi.fn()
  },
  EffectPass: class {
    renderToScreen = false
  },
  RenderPass: class {},
}))

it('initializes the WebGL surface and responds to pointer, gyro, scan, resize, and webcam inputs', async () => {
  const frames: FrameRequestCallback[] = []
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    frames.push(callback)
    return frames.length
  })
  vi.stubGlobal('cancelAnimationFrame', vi.fn())
  vi.stubGlobal('matchMedia', () => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
  class OrientationEvent {}
  Object.defineProperty(OrientationEvent, 'requestPermission', {
    value: vi.fn().mockResolvedValue('granted'),
  })
  Object.defineProperty(window, 'DeviceOrientationEvent', {
    configurable: true,
    value: OrientationEvent,
  })
  const { container, unmount } = render(
    <GridScan
      className="custom-grid"
      enableGyro
      enablePost
      lineStyle="dotted"
      scanDirection="backward"
      scanOnClick
      showPreview
      snapBackDelay={0}
    />,
  )
  const root = container.firstElementChild as HTMLElement
  Object.defineProperty(root, 'clientWidth', { configurable: true, value: 640 })
  Object.defineProperty(root, 'clientHeight', {
    configurable: true,
    value: 360,
  })
  const canvas = root.querySelector('canvas')
  expect(root.className).toContain('custom-grid')
  expect(canvas).toBeInTheDocument()

  fireEvent.mouseMove(root, { clientX: 320, clientY: 180 })
  fireEvent.mouseEnter(root)
  fireEvent.click(root)
  fireEvent(window, new Event('deviceorientation'))
  fireEvent.resize(window)
  fireEvent.mouseLeave(root)
  expect(canvas).toBeInTheDocument()

  unmount()
  expect(cancelAnimationFrame).toHaveBeenCalled()

  Object.defineProperty(navigator, 'mediaDevices', {
    configurable: true,
    value: { getUserMedia: vi.fn().mockResolvedValue({ getTracks: () => [] }) },
  })
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  render(<GridScan enableWebcam showPreview enablePost={false} />)
  await waitFor(() =>
    expect(screen.getByText('Face: searching')).toBeInTheDocument(),
  )
  const points = (x: number, y: number) => [{ x, y }]
  faceApiMock.detectSingleFace.mockReturnValue({
    withFaceLandmarks: vi.fn().mockResolvedValue({
      detection: { box: { x: 0, y: 0, width: 1, height: 1 } },
      landmarks: {
        getJawOutline: () =>
          Array.from({ length: 15 }, (_, index) => ({ x: index, y: index })),
        getLeftEye: () => points(0, 0),
        getNose: () => points(1, 1),
        getRightEye: () => points(2, 1),
      },
    }),
  })
  await act(async () => {
    frames.at(-1)?.(33)
  })
  await waitFor(() =>
    expect(screen.getByText('Face: tracking')).toBeInTheDocument(),
  )
})
