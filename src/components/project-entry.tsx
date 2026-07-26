import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";
import { TechChip } from "@/components/badge";

/** Stacked entry — ink title, accent reserved for actions. */
export function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="border-b border-line py-6 first:pt-1 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[17px] font-semibold leading-snug tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <span className="font-mono text-[11px] text-faint">
          {project.dates}
        </span>
      </div>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      {project.highlights?.[0] ? (
        <p className="mt-2 font-mono text-xs text-accent">
          {project.highlights[0]}
        </p>
      ) : null}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechChip key={t}>{t}</TechChip>
        ))}
      </div>
      <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[13px]">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-strong"
        >
          Case study <ArrowRight className="size-3.5" aria-hidden />
        </Link>
        {project.links.paper ? (
          <a
            href={project.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            Paper <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : null}
        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            Website <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : null}
      </p>
    </article>
  );
}

export function ProjectEntryList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((p) => (
        <ProjectEntry key={p.slug} project={p} />
      ))}
    </div>
  );
}
