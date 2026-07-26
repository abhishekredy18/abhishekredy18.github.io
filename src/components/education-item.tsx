import type { Education } from "@/data/education";
import { TechChip } from "@/components/badge";

export function EducationItem({ edu }: { edu: Education }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-semibold tracking-tight">{edu.school}</h3>
        <span className="font-mono text-[11px] text-faint">{edu.date}</span>
      </div>
      <p className="mt-0.5 text-sm text-muted">
        {edu.degree} · {edu.location}
        {edu.gpa ? (
          <span className="font-mono text-[12px]"> · GPA {edu.gpa}</span>
        ) : null}
      </p>
      {edu.coursework ? (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {edu.coursework.map((c) => (
            <TechChip key={c}>{c}</TechChip>
          ))}
        </div>
      ) : null}
    </div>
  );
}
