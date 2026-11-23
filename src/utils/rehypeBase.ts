/**
 * Rehype plugin that prefixes root-relative `src`/`href` attributes in
 * Markdown content with the site base path. Pages CMS inserts media as
 * `/assets/...`, which would otherwise 404 on a GitHub Pages project site.
 */
type Node = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: Node[];
  value?: string;
};

export default function rehypeBase(options: { base: string }) {
  const base = (options.base || "").replace(/\/+$/, "");
  const prefix = (v: unknown) =>
    typeof v === "string" &&
    v.startsWith("/") &&
    !v.startsWith("//") &&
    !(base && (v === base || v.startsWith(`${base}/`)))
      ? `${base}${v}`
      : v;
  const rawAttr = /((?:src|href)=["'])(\/(?!\/))/g;

  const walk = (node: Node) => {
    if (node.type === "element" && node.properties) {
      for (const key of ["src", "href", "poster"]) {
        if (key in node.properties) node.properties[key] = prefix(node.properties[key]);
      }
    }
    if (node.type === "raw" && typeof node.value === "string" && base) {
      node.value = node.value.replace(rawAttr, (m, pre, slash, offset, str) =>
        str.startsWith(`${base}/`, offset + pre.length) ? m : `${pre}${base}${slash}`
      );
    }
    node.children?.forEach(walk);
  };

  return (tree: Node) => {
    if (base) walk(tree);
  };
}
