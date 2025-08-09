"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = ["home", "skills", "experience", "education", "contact"] as const;
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkClass = (id: string) =>
    `relative hover:opacity-70 transition ${active === id ? "text-purple-600 dark:text-purple-400" : ""}`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <motion.a href="#home" className="font-semibold tracking-tight" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>Tarun Singh</motion.a>
        <nav className="hidden sm:flex items-center gap-5 text-sm">
          <a href="#skills" className={linkClass("skills")}>
            Skills
            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full transition ${active === "skills" ? "bg-purple-500 scale-100" : "bg-transparent scale-0"}`} />
          </a>
          <a href="#experience" className={linkClass("experience")}>
            Experience
            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full transition ${active === "experience" ? "bg-purple-500 scale-100" : "bg-transparent scale-0"}`} />
          </a>
          <a href="#education" className={linkClass("education")}>
            Education
            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full transition ${active === "education" ? "bg-purple-500 scale-100" : "bg-transparent scale-0"}`} />
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full transition ${active === "contact" ? "bg-purple-500 scale-100" : "bg-transparent scale-0"}`} />
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="https://www.linkedin.com/in/tarunsingh0206" aria-label="LinkedIn" className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10">
            <Linkedin size={20} />
          </Link>
          <Link href="https://github.com/" aria-label="GitHub" className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10">
            <Github size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}


