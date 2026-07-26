import type { SkillGroup as SkillGroupType } from "@/data/skills";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
        {group.label}
      </h3>
      <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
        {group.skills.map((skill) => (
          <li key={skill} className="text-sm text-fg">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
