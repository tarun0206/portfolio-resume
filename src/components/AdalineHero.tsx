"use client";

import { motion } from "framer-motion";
import { GradientOrbs } from "@/components/ui/gradient-orbs";

export function AdalineHero() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <GradientOrbs />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="display text-5xl/tight sm:text-7xl/tight font-extrabold tracking-tight"
        >
          Tarun builds resilient, measurable products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-sm/6 sm:text-lg/8 text-foreground/80 mx-auto max-w-3xl"
        >
          Senior Full Stack Developer specializing in React, Angular, Spring Boot, and Django. Fast iterations, measurable outcomes, and reliability at scale.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#experience" className="px-5 py-2.5 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500 transition">Experience</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition">Contact</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 grid sm:grid-cols-3 gap-4 text-left"
        >
          {[
            { title: "Speed", desc: "Ship iterations weekly with clean CI and previews." },
            { title: "Security", desc: "Hardened APIs, auth, and observability baseline." },
            { title: "Scale", desc: "Perf budgets, profiling, and resilient infra." },
          ].map((x) => (
            <div key={x.title} className="rounded-xl border border-black/10 dark:border-white/15 p-5 bg-background/60">
              <div className="font-semibold">{x.title}</div>
              <div className="text-sm mt-1 text-foreground/70">{x.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


