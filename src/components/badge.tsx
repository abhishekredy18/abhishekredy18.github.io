export function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
