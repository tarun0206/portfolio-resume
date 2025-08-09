"use client";

import { motion } from "framer-motion";
import { contact, summary } from "@/lib/resume";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50 via-transparent to-transparent dark:from-purple-950/20" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h1
          className="text-4xl/tight sm:text-6xl/tight font-bold tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {contact.name}
          <span className="block text-lg sm:text-2xl text-purple-600 dark:text-purple-400 font-medium mt-2">
            {contact.title}
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl text-base/7 sm:text-lg/8 text-foreground/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          {summary}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500 transition">Contact</a>
          <a href="#experience" className="px-5 py-2.5 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition">Experience</a>
        </motion.div>
      </div>
    </section>
  );
}


