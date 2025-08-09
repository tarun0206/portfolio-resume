"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CaseStudies() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const cards = [
    {
      title: "Onboarding redesign",
      result: "-18% time to onboard",
      text: "Rebuilt Angular flow with TypeScript, analytics checkpoints, and A/Bs.",
    },
    {
      title: "Unified backend",
      result: "-22% API latency",
      text: "Spring Boot federation and caching, consistent contracts across services.",
    },
    {
      title: "Dashboard UX",
      result: "+16% retention",
      text: "React + TypeScript visualizations; optimized mounts and selectors.",
    },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="sticky top-16 z-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Case Studies</h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                style={{ y: i % 2 === 0 ? y1 : y2 }}
                className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-background/70 backdrop-blur"
              >
                <div className="text-sm text-purple-600 dark:text-purple-400">{c.result}</div>
                <div className="text-lg font-semibold mt-1">{c.title}</div>
                <p className="text-sm mt-2 text-foreground/70">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[200vh]" />
    </section>
  );
}


