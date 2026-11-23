import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import {
  audienceLabel,
  storyTypeColor,
  storyTypeLabel,
} from "@utils/storyMeta";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  variant?: "tile" | "feature";
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  variant = "tile",
}: Props) {
  const {
    title,
    pubDatetime,
    modDatetime,
    description,
    storyType,
    audience = [],
    tags = [],
  } = frontmatter;
  const typeLabel = storyTypeLabel(storyType);
  const color = storyTypeColor(storyType);
  const Heading = secHeading ? "h2" : "h3";
  const isFeature = variant === "feature";

  return (
    <li
      className={`story-card group ${isFeature ? "story-card--feature" : ""}`}
      style={{ ["--c" as string]: color }}
      data-type={storyType ?? ""}
      data-audience={audience.join(" ")}
    >
      <a href={href} className="story-card__link">
        <span className="sr-only">{title}</span>
      </a>
      <div className="story-card__body">
        {typeLabel && <span className="type-badge">{typeLabel}</span>}
        <Heading
          className="story-card__title"
          style={{ viewTransitionName: slugifyStr(title) }}
        >
          {title}
        </Heading>
        <p className="story-card__desc">{description}</p>
        {audience.length > 0 && (
          <div className="story-card__audience">
            <span className="sr-only">Key audience:</span>
            {audience.map(a => (
              <span key={a} className="chip">
                {audienceLabel(a)}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="story-card__footer">
        <Datetime
          pubDatetime={pubDatetime}
          modDatetime={modDatetime}
          className="shrink-0 whitespace-nowrap"
        />
        {tags.length > 0 && tags[0] !== "others" && (
          <span className="story-card__topics">
            {tags.slice(0, 3).join(" · ")}
          </span>
        )}
      </div>
    </li>
  );
}
