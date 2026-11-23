/**
 * Prefix a root-relative path with the configured Astro `base`
 * so links keep working when the site is served from a subpath
 * (e.g. https://tdcc-nl.github.io/tdcc-stories/).
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export default function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (BASE && (path === BASE || path.startsWith(`${BASE}/`))) return path;
  return `${BASE}${path}`;
}

/** Remove the base from a pathname, e.g. for breadcrumbs. */
export function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    return pathname.slice(BASE.length) || "/";
  }
  return pathname;
}
