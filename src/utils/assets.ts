export function publicAsset(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const base = import.meta.env.BASE_URL
  const normalizedPath = path.replace(/^\//, '')
  return `${base}${normalizedPath}`
}
