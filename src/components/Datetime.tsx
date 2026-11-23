import { LOCALE } from "@config";

interface DatetimesProps {
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined | null;
}

interface Props extends DatetimesProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({
  pubDatetime,
  modDatetime,
  size = "sm",
  className = "",
}: Props) {
  const updated = !!modDatetime && modDatetime > pubDatetime;
  const date = new Date(updated ? modDatetime! : pubDatetime);
  const formatted = date.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div
      className={`flex items-center gap-1.5 text-skin-muted ${
        size === "sm" ? "text-xs" : "text-sm"
      } ${className}`}
    >
      <span>{updated ? "Updated" : <span className="sr-only">Published</span>}</span>
      <time dateTime={date.toISOString()}>{formatted}</time>
    </div>
  );
}
