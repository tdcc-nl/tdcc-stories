# TDCC Stories

Practical stories from the life sciences and health research community, published at
<https://tdcc-nl.github.io/tdcc-stories/>.

Built with [Astro](https://astro.build) (based on the AstroPaper theme) and edited with
[Pages CMS](https://pagescms.org).

## Writing stories

Use Pages CMS. The available fields are defined in `.pages.yml`. New stories are drafts
by default and are published by unticking **Draft**.

Stories live in `src/content/blog/` as Markdown. Their frontmatter is validated by
`src/content/config.ts`, and the vocabularies for story type and audience live in
`src/utils/storyMeta.ts`. If you change those lists, update `.pages.yml` too.

## Local development

```bash
npm ci
npm run dev       # http://localhost:4321/tdcc-stories/
npm run build     # production build in ./dist
npm run preview
```

## Deployment

Every push to `main` builds and deploys the site to GitHub Pages through
`.github/workflows/deploy.yml`. The site is served from the `/tdcc-stories` subpath, so
internal links should go through `withBase()` from `src/utils/withBase.ts`.

## Licence

The theme code is MIT licensed (see `LICENSE`).
