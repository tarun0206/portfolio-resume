"use client";

import { motion } from "framer-motion";

const stack = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Node.js",
  "Spring Boot",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "Kafka",
];

export function Marquee() {
  return (
    <div className="relative py-10 border-y border-black/5 dark:border-white/10 bg-background/60">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap text-foreground/70"
          animate={{ x: [0, -800] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="text-sm sm:text-base">{t}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


