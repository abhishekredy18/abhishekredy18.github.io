import Link from "next/link";
import type { Experience } from "@/data/experience";
import type { Project } from "@/lib/content";

export function TimelineItem({
  entry,
  projects,
}: {
  entry: Experience;
  /** Resolved case studies for entry.projects slugs (may be empty). */
  projects: Pick<Project, "slug" | "title">[];
}) {
  return (
    <li className="group relative pb-10 pl-6 last:pb-0">
      {/* rail + square node */}
      <span
        className="absolute left-[4px] top-3 h-full w-px bg-line group-last:hidden"
        aria-hidden
      />
      <span
        className="absolute left-0 top-[7px] size-[9px] rounded-[2px] bg-accent"
        aria-hidden
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-semibold tracking-tight">
          {entry.title}
        </h3>
        <span className="font-mono text-[11px] text-faint">{entry.dates}</span>
      </div>
      <p className="mt-0.5 text-sm text-muted">
        {entry.org}
        {entry.location ? ` · ${entry.location}` : ""}
        {entry.advisor ? (
          <span className="text-faint"> · Advisor: {entry.advisor}</span>
        ) : null}
      </p>
      <ul className="mt-3 space-y-2">
        {entry.bullets.map((b) => (
          <li
            key={b}
            className="relative pl-4 text-sm leading-relaxed text-fg before:absolute before:left-0 before:top-[9px] before:size-1 before:rounded-full before:bg-faint"
          >
            {b}
          </li>
        ))}
      </ul>
      {projects.length > 0 ? (
        <p className="mt-3 font-mono text-[11.5px] text-muted">
          Case {projects.length === 1 ? "study" : "studies"}:{" "}
          {projects.map((p, i) => (
            <span key={p.slug}>
              {i > 0 ? " · " : ""}
              <Link
                href={`/projects/${p.slug}`}
                className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-strong"
              >
                {p.title}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
    </li>
  );
}
