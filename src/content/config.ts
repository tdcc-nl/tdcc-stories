import { SITE } from "@config";
import { defineCollection, z } from "astro:content";
import { AUDIENCE_KEYS, STORY_TYPE_KEYS } from "@utils/storyMeta";

// Pages CMS may save empty fields as "" or null. Treat those as "not set".
const blank = (v: unknown) => (v === "" || v === null ? undefined : v);
const optionalString = z.preprocess(blank, z.string().optional());
const stringList = z.preprocess(
  v => (Array.isArray(v) ? v.filter(x => x !== "" && x != null) : blank(v)),
  z.array(z.string()).default([])
);

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.preprocess(blank, z.string().default(SITE.author)),
      pubDatetime: z.coerce.date(),
      modDatetime: z.preprocess(blank, z.coerce.date().optional()),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.preprocess(
        v => (Array.isArray(v) && v.length === 0 ? undefined : blank(v)),
        z.array(z.string()).default(["others"])
      ),
      ogImage: z.preprocess(
        blank,
        image()
          .refine(img => img.width >= 1200 && img.height >= 630, {
            message: "OpenGraph image must be at least 1200 X 630 pixels!",
          })
          .or(z.string())
          .optional()
      ),
      description: z.string(),
      canonicalURL: optionalString,

      // Story metadata
      storyType: z.preprocess(blank, z.enum(STORY_TYPE_KEYS).optional()),
      audience: z.preprocess(
        v => (Array.isArray(v) ? v : blank(v)),
        z.array(z.enum(AUDIENCE_KEYS)).default([])
      ),
      organisations: stringList,
      links: z.preprocess(
        v =>
          Array.isArray(v)
            ? v.filter(l => l && typeof l === "object" && l.url)
            : blank(v),
        z
          .array(
            z.object({
              label: optionalString,
              url: z.string().url(),
            })
          )
          .default([])
      ),
      contact: z.preprocess(
        blank,
        z
          .object({
            name: optionalString,
            email: z.preprocess(blank, z.string().email().optional()),
            url: z.preprocess(blank, z.string().url().optional()),
          })
          .optional()
      ),
    }),
});

export const collections = { blog };
