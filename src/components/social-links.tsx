import { GraduationCap, Mail } from "lucide-react";
import { site } from "@/data/site";

/* lucide deprecated brand icons — inline the two we need. */
export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-muted transition-colors hover:text-accent"
      >
        <GitHubIcon className="size-[18px]" />
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-muted transition-colors hover:text-accent"
      >
        <LinkedInIcon className="size-[18px]" />
      </a>
      <a
        href={site.scholar}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Scholar"
        className="text-muted transition-colors hover:text-accent"
      >
        <GraduationCap className="size-5" aria-hidden />
      </a>
      <a
        href={`mailto:${site.email}`}
        aria-label="Email"
        className="text-muted transition-colors hover:text-accent"
      >
        <Mail className="size-5" aria-hidden />
      </a>
    </div>
  );
}
