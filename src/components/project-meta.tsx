import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 py-2.5">
      <dt className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
        {label}
      </dt>
      <dd className="min-w-0 text-sm text-fg">{children}</dd>
    </div>
  );
}

export function ProjectMeta({ project }: { project: Project }) {
  const links = [
    project.links.paper && { label: "Paper", href: project.links.paper },
    project.links.demo && { label: "Website", href: project.links.demo },
    project.links.github && { label: "Code", href: project.links.github },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <dl className="divide-y divide-line border-y border-line">
      <MetaRow label="Role">{project.role}</MetaRow>
      <MetaRow label="Dates">{project.dates}</MetaRow>
      <MetaRow label="Stack">{project.tech.join(" · ")}</MetaRow>
      {links.length > 0 ? (
        <MetaRow label="Links">
          <span className="flex flex-wrap gap-x-5 gap-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-strong"
              >
                {l.label} <ExternalLink className="size-3.5" aria-hidden />
              </a>
            ))}
          </span>
        </MetaRow>
      ) : null}
    </dl>
  );
}
