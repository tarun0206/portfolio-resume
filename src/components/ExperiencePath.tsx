"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

export function ExperiencePath() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const headRef = useRef<SVGCircleElement | null>(null);
  const [length, setLength] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 80%", "end 20%"] });

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setLength(len);
      pathRef.current.style.strokeDasharray = `${len}`;
      pathRef.current.style.strokeDashoffset = `${len}`;
    }

    const unsub = scrollYProgress.on("change", (p) => {
      if (!pathRef.current || !headRef.current || !length) return;
      const off = (1 - p) * length;
      pathRef.current.style.strokeDashoffset = `${off}`;
      const pt = pathRef.current.getPointAtLength(p * length);
      headRef.current.setAttribute("cx", String(pt.x));
      headRef.current.setAttribute("cy", String(pt.y));
    });
    return () => unsub();
  }, [scrollYProgress, length]);

  return (
    <div ref={sectionRef} className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
      <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {/* Python-like snake path */}
        <path
          ref={pathRef}
          d="M50,700 C200,600 250,600 400,700 S600,800 800,700 1000,600 1150,700"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {/* Snake head */}
        <circle ref={headRef} r="10" fill="#a855f7" />
      </svg>
    </div>
  );
}


