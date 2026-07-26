import type { Publication } from "@/data/publications";

/** Hanging-indent citation with mono link line. */
export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <div className="-indent-5 pl-5 text-sm leading-relaxed">
      <span className="text-muted">{pub.authors}. </span>
      <span className="font-medium italic">&ldquo;{pub.title}.&rdquo; </span>
      <span className="text-muted">
        {pub.venue}, {pub.year}.
      </span>
      <span className="mt-1 block indent-0 font-mono text-[12px]">
        <a
          href={pub.arxivUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-colors hover:text-accent-strong"
        >
          arXiv:{pub.arxivId}
        </a>
        {pub.websiteUrl ? (
          <>
            <span className="text-faint"> · </span>
            <a
              href={pub.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:text-accent-strong"
            >
              project website
            </a>
          </>
        ) : null}
      </span>
    </div>
  );
}
