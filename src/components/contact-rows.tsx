import { GraduationCap, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/social-links";
import { site } from "@/data/site";

/** Display strings derived from site.ts — single source of truth. */
const rows = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: <Mail className="size-4" aria-hidden />,
    external: false,
  },
  {
    label: "GitHub",
    value: site.github.replace("https://", ""),
    href: site.github,
    icon: <GitHubIcon className="size-4" />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: site.linkedin.replace("https://www.", "").replace(/\/$/, ""),
    href: site.linkedin,
    icon: <LinkedInIcon className="size-4" />,
    external: true,
  },
  {
    label: "Scholar",
    value: "Google Scholar profile",
    href: site.scholar,
    icon: <GraduationCap className="size-4" aria-hidden />,
    external: true,
  },
] as const;

export function ContactRows() {
  return (
    <div>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center gap-4 border-b border-line py-3 last:border-b-0"
        >
          <span className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            {row.label}
          </span>
          <a
            href={row.href}
            {...(row.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex min-w-0 items-center gap-2 text-sm text-fg transition-colors hover:text-accent"
          >
            {row.icon}
            <span className="truncate">{row.value}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
