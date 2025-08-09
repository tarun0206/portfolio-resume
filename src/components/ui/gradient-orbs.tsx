"use client";

import { motion } from "framer-motion";

export function GradientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 -left-24 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-purple-600/50 to-cyan-500/40 blur-[100px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-fuchsia-500/40 to-sky-400/40 blur-[100px]"
        animate={{ x: [0, -30, 20, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}


