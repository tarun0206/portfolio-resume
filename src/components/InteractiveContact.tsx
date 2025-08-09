"use client";

import { contact } from "@/lib/resume";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useState } from "react";

const roles = [
  { key: "recruiter", label: "Recruiter", intro: "Looking to fill a senior full‑stack role?" },
  { key: "founder", label: "Founder", intro: "Need help building v1 or scaling?" },
  { key: "engineer", label: "Engineer", intro: "Want to jam on architecture or DX?" },
];

export function InteractiveContact() {
  const [role, setRole] = useState(roles[0]);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {roles.map((r) => (
            <button
              key={r.key}
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded-full border text-sm ${
                role.key === r.key
                  ? "bg-purple-600 text-white border-transparent"
                  : "border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <motion.div
          key={role.key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-xl border border-black/10 dark:border-white/15 p-6 bg-background/60"
        >
          <div className="text-foreground/80">{role.intro}</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a className="flex items-center gap-2 p-3 rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10" href={`mailto:${contact.email}`}>
              <Mail size={18} />
              <span>{contact.email}</span>
            </a>
            <a className="flex items-center gap-2 p-3 rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10" href={`tel:${contact.phone}`}>
              <Phone size={18} />
              <span>{contact.phone}</span>
            </a>
            <a className="flex items-center gap-2 p-3 rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10" target="_blank" rel="noreferrer" href={contact.linkedin}>
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


