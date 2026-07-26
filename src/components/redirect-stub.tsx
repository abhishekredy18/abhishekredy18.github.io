/**
 * Legacy-URL redirect stub for static export (GitHub Pages has no server
 * redirects). Three layers:
 *   1. inline script — location.replace() replaces the history entry, so
 *      Back skips the stub and there is no double-navigation;
 *   2. <meta http-equiv="refresh"> — React 19 hoists it into <head>; no-JS
 *      fallback, and Google treats a 0-delay refresh as a permanent redirect;
 *   3. visible link — fallback for everything else.
 */
export function RedirectStub({ to, label }: { to: string; label: string }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center px-5 sm:px-8">
      <meta httpEquiv="refresh" content={`0;url=${to}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(to)})`,
        }}
      />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        This page moved
      </p>
      <p className="mt-4 text-sm text-muted">
        <a
          href={to}
          className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-strong"
        >
          Continue to {label} →
        </a>
      </p>
    </div>
  );
}
