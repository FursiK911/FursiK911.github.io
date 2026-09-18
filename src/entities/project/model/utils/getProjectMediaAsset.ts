const projectMediaAssets = import.meta.glob(
  '/src/shared/assets/images/projects/**/*.{webp,jpg}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
) as Record<string, string>

export function getProjectMediaAsset(path: string): string {
  const asset = projectMediaAssets[`/src/shared/assets/images/projects/${path}`]

  if (!asset) {
    throw new Error(`Project media asset not found: ${path}`)
  }

  return asset
}
