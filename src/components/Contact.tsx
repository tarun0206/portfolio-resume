import { Section } from "@/components/ui/section";
import { contact } from "@/lib/resume";

export function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Info label="Email" value={contact.email} href={`mailto:${contact.email}`} />
        <Info label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
        <Info label="Location" value={contact.location} />
        <Info label="LinkedIn" value={"in/tarunsingh0206"} href={contact.linkedin} />
      </div>
    </Section>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = <span className="font-medium">{value}</span>;
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/15 p-5 flex items-center justify-between">
      <div className="text-sm text-foreground/70">{label}</div>
      {href ? (
        <a className="text-purple-600 dark:text-purple-400 hover:underline" href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}


