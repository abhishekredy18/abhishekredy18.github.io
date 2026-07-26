import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line py-8">
      <p className="font-mono text-[12px] text-faint">
        © {new Date().getFullYear()} {site.name} · {site.location} ·{" "}
        <a
          href={site.resume}
          download
          className="underline decoration-line underline-offset-2 transition-colors hover:text-accent"
        >
          Résumé
        </a>{" "}
        ·{" "}
        <a
          href={site.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-line underline-offset-2 transition-colors hover:text-accent"
        >
          view source
        </a>
      </p>
      <SocialLinks />
    </footer>
  );
}
