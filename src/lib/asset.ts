/** Base path for GitHub Pages (`/trolley`) or empty for local dev. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public asset paths for GitHub Pages subpath hosting. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
