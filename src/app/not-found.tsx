import Link from "next/link";
import { TopBar } from "@/components/top-bar";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <main className="mx-auto flex w-full max-w-3xl flex-col items-start px-5 pt-24 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-[15.5px] text-muted">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-6 font-mono text-[13px] text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-strong"
        >
          ← Back to the home page
        </Link>
      </main>
    </>
  );
}
