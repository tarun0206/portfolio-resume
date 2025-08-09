import { Section } from "@/components/ui/section";
import { experiences } from "@/lib/resume";

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-8 space-y-8">
        {experiences.map((exp) => (
          <article key={exp.company} className="rounded-xl border border-black/10 dark:border-white/15 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <div className="text-sm text-foreground/60">{exp.start} – {exp.end}</div>
            </div>
            <div className="text-foreground/80 mt-1">
              {exp.company} • {exp.location}
            </div>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-foreground/85">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}


