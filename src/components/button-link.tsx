import Link from "next/link";

const variants = {
  primary: "bg-accent text-bg hover:bg-accent-strong border border-transparent",
  secondary: "border border-line text-fg hover:border-accent hover:text-accent",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  download,
  external,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  download?: boolean;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className = `inline-flex items-center gap-2 rounded px-3.5 py-2 text-sm font-medium transition-colors ${variants[variant]}`;

  if (external || download) {
    return (
      <a
        href={href}
        className={className}
        {...(download ? { download: true } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
