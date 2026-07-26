export function Section({
  id,
  label,
  className = "",
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={className}>
      <h2 className="mb-6 flex items-center gap-3 text-[21px] font-semibold tracking-tight">
        <span className="inline-block h-px w-6 bg-accent" aria-hidden />
        {label}
      </h2>
      {children}
    </section>
  );
}
