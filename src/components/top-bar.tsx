import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/data/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Sticky translucent header used on every page. */
export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-colors hover:text-accent"
        >
          Abhishek Malreddy
        </Link>
        <nav aria-label="Main" className="flex items-center gap-2">
          <ul className="flex items-center gap-3 sm:gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[12px] text-muted transition-colors hover:text-accent sm:text-[13px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.resume}
            download
            className="ml-1 hidden rounded border border-line px-2.5 py-1 font-mono text-[12px] text-muted transition-colors hover:border-accent hover:text-accent sm:block"
          >
            Résumé
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
