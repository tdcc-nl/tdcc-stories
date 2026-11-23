/**
 * Controlled vocabularies for story metadata.
 * Keep in sync with the `select` options in `.pages.yml`.
 */
export const STORY_TYPES = {
  "how-to": "How-to guide",
  "success-story": "Success story",
  "lessons-learned": "Lessons learned",
  "resource-overview": "Resource overview",
} as const;

export const AUDIENCES = {
  researchers: "Researchers",
  "data-stewards": "Data stewards",
  "research-software-engineers": "Research software engineers",
  "ri-managers": "Research infrastructure managers",
  "community-managers": "Community managers",
  "policy-makers": "Policy makers",
  "it-infrastructure": "IT and infrastructure teams",
} as const;

export type StoryType = keyof typeof STORY_TYPES;
export type Audience = keyof typeof AUDIENCES;

const keys = <T extends Record<string, string>>(o: T) =>
  Object.keys(o) as [keyof T & string, ...(keyof T & string)[]];

export const STORY_TYPE_KEYS = keys(STORY_TYPES);
export const AUDIENCE_KEYS = keys(AUDIENCES);

export const storyTypeLabel = (t?: string | null) =>
  t ? STORY_TYPES[t as StoryType] ?? t : undefined;

export const audienceLabel = (a: string) => AUDIENCES[a as Audience] ?? a;
