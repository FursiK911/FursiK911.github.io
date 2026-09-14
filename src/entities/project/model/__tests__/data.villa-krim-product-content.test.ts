import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('keeps the Villa Krim projects distinct as quiz and non-quiz AR experiences', () => {
  const sommelier = projects.find((project) => project.id === 'villa-krim')
  const authorsWine = projects.find(
    (project) => project.id === 'authors-wine-villa-krim',
  )

  expect(sommelier?.period).toEqual({ from: '2019', to: '2020' })
  expect(authorsWine?.period).toEqual({ from: '2019', to: '2020' })
  expect(sommelier?.metricsKey).toBeUndefined()
  expect(authorsWine?.metricsKey).toBeUndefined()
  expect(sommelier?.tech).toContain('iOS')
  expect(authorsWine?.tech).toContain('iOS')
  expect(sommelier?.tech).toContain('Cylindrical Marker')
  expect(authorsWine?.tech).toContain('Cylindrical Marker')
  expect(sommelier?.pointsKey).toBe('virtualSommelierVillaKrimPoints')
  expect(authorsWine?.pointsKey).toBe('authorsWineVillaKrimPoints')
  expect(sommelier?.actions?.map((action) => action.label)).toEqual([
    'APKPure · RU',
    'APKPure · UA',
    '24tv · campaign',
  ])
  expect(authorsWine?.actions?.map((action) => action.label)).toEqual([
    'APKPure',
  ])
})
