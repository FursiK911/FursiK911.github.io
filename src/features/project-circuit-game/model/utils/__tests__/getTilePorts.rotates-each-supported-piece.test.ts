import { getTilePorts } from '../getTilePorts'

it('rotates each supported circuit piece clockwise while leaving empty cells disconnected', () => {
  expect(getTilePorts({ type: 'straight', rotation: 0 })).toEqual([
    'left',
    'right',
  ])
  expect(getTilePorts({ type: 'straight', rotation: 90 })).toEqual([
    'top',
    'bottom',
  ])
  expect(getTilePorts({ type: 'corner', rotation: 180 })).toEqual([
    'bottom',
    'left',
  ])
  expect(getTilePorts({ type: 'tee', rotation: 270 })).toEqual([
    'left',
    'top',
    'bottom',
  ])
  expect(getTilePorts({ type: 'empty', rotation: 0 })).toEqual([])
})
