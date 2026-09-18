import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { verifyCssModules } from './verify-css-modules.mjs'

it('accepts referenced local modules and rejects unsafe or missing module contracts', async () => {
  const fixtureDirectory = await mkdtemp(join(tmpdir(), 'css-modules-'))
  const sourceDirectory = join(fixtureDirectory, 'src')
  await mkdir(sourceDirectory)

  const writeFixture = async (name: string, source: string, css: string) => {
    await writeFile(join(sourceDirectory, `${name}.tsx`), source)
    await writeFile(join(sourceDirectory, `${name}.module.css`), css)
  }

  try {
    await writeFixture(
      'Valid',
      "import styles from './Valid.module.css'\nexport const Valid = () => <div className={styles.card} />",
      '.card { color: red; }',
    )
    await expect(
      verifyCssModules({ sourceRoot: sourceDirectory }),
    ).resolves.toMatchObject({
      expectedClasses: ['card'],
    })

    await writeFixture(
      'SideEffect',
      "import './SideEffect.module.css'\nexport const SideEffect = () => <div />",
      ':global(.side-effect) { color: red; }',
    )
    await expect(
      verifyCssModules({ sourceRoot: sourceDirectory }),
    ).rejects.toThrow('must be imported through a binding')

    await writeFixture(
      'GlobalOnly',
      "import styles from './GlobalOnly.module.css'\nexport const GlobalOnly = () => <div className={styles.card} />",
      ':global(.global-only) { color: red; }',
    )
    await expect(
      verifyCssModules({ sourceRoot: sourceDirectory }),
    ).rejects.toThrow('has no local selectors')

    await writeFixture(
      'MissingExport',
      "import styles from './MissingExport.module.css'\nexport const MissingExport = () => <div className={styles.missing} />",
      '.card { color: red; }',
    )
    await expect(
      verifyCssModules({ sourceRoot: sourceDirectory }),
    ).rejects.toThrow('is not defined')
  } finally {
    await rm(fixtureDirectory, { recursive: true, force: true })
  }
})
