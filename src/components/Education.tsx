import { Section } from "@/components/ui/section";
import { education } from "@/lib/resume";

export function Education() {
  return (
    <Section id="education">
      <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
      <div className="mt-8 space-y-6">
        {education.map((ed) => (
          <div key={ed.school} className="rounded-xl border border-black/10 dark:border-white/15 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="font-semibold">{ed.school}</div>
                <div className="text-sm text-foreground/70">{ed.degree}</div>
              </div>
              <div className="text-sm text-foreground/60">{ed.year ?? ""}</div>
            </div>
            <div className="text-sm text-foreground/70 mt-1">{ed.location}</div>
            <div className="text-sm mt-2">{ed.score}</div>
            {ed.notes && ed.notes.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-sm text-foreground/85">
                {ed.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}


