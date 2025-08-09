"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

export function Section({ id, className, children, delay = 0 }: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section id={id} className={twMerge("py-16 sm:py-24", className)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </section>
  );
}


