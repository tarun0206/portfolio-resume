"use client";

import { experiences } from "@/lib/resume";
import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function InteractiveExperience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const headRef = useRef<SVGCircleElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 20%", "end 80%"] });
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
      pathRef.current.style.strokeDasharray = `${len}`;
      pathRef.current.style.strokeDashoffset = `${len}`;
    }
    const unsub = scrollYProgress.on("change", (p) => {
      if (!pathRef.current || !headRef.current || !pathLength) return;
      const off = (1 - p) * pathLength;
      pathRef.current.style.strokeDashoffset = `${off}`;
      const pt = pathRef.current.getPointAtLength(p * pathLength);
      headRef.current.setAttribute("cx", String(pt.x));
      headRef.current.setAttribute("cy", String(pt.y));
    });
    return () => unsub();
  }, [scrollYProgress, pathLength]);

  return (
    <section id="experience" ref={sectionRef} className="py-12 sm:py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-10 relative">
          {/* Vertical animated snake divider */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 hidden sm:block">
            <svg width="8" height="100%" viewBox="0 0 8 800" preserveAspectRatio="none" className="h-full">
              <defs>
                <linearGradient id="expGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path ref={pathRef} d="M4 0 C 1 80, 7 160, 4 240 S 7 400, 4 480 S 7 640, 4 800" stroke="url(#expGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
              <circle ref={headRef} cx="4" cy="0" r="5" fill="#a855f7" />
            </svg>
          </div>
          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, idx) => (
              <TimelineCard key={exp.company} exp={exp} align={idx % 2 === 0 ? "left" : "right"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ exp, align }: { exp: (typeof experiences)[number]; align: "left" | "right" }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0% -20% 0%" });
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative grid sm:grid-cols-2 gap-6"
    >
      <div className={align === "left" ? "order-1" : "order-2 sm:text-right"}>
        <div className="text-sm text-foreground/60">{exp.start} – {exp.end}</div>
        <h3 className="text-lg font-semibold mt-1">{exp.role}</h3>
        <div className="text-foreground/80">{exp.company} • {exp.location}</div>
      </div>
      <div className={"order-3 sm:order-none " + (align === "left" ? "sm:text-right" : "") }>
        <div className="rounded-xl border border-black/10 dark:border-white/15 p-5 bg-background/60 hover:bg-background/80 transition cursor-pointer" onClick={() => setOpen(!open)}>
          <ul className="space-y-2 text-foreground/85">
            {(open ? exp.bullets : exp.bullets.slice(0, 3)).map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
          <div className="text-sm mt-3 text-purple-600 dark:text-purple-400">{open ? "Show less" : "Show more"}</div>
        </div>
      </div>
      <div className="absolute left-3 sm:left-1/2 sm:-translate-x-1/2 top-3 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_0_6px_rgba(168,85,247,0.2)]" />
    </motion.article>
  );
}


