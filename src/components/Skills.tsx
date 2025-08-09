import { Section } from "@/components/ui/section";
import { skills } from "@/lib/resume";

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks & Libraries" items={skills.frameworks} />
        <SkillGroup title="Databases" items={skills.databases} />
        <SkillGroup title="Tools & Technologies" items={skills.tools} />
        <SkillGroup title="API Technologies" items={skills.apiTech} />
        <SkillGroup title="Soft Skills" items={skills.soft} />
      </div>
    </Section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/15 p-5">
      <div className="text-sm font-medium text-foreground/70">{title}</div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


