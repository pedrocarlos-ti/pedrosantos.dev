"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface ParallaxSectionProps {
  background: ReactNode;
  foreground: ReactNode;
  className?: string;
  backgroundSpeed?: number;
  foregroundSpeed?: number;
}

export function ParallaxSection({
  background,
  foreground,
  className = "",
  backgroundSpeed = 0.5,
  foregroundSpeed = 1,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", `${backgroundSpeed * 100}%`]
  );

  const foregroundY = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", `${foregroundSpeed * 50}%`]
  );

  const backgroundOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          y: backgroundY,
          opacity: prefersReducedMotion ? 1 : backgroundOpacity,
        }}
        className="absolute inset-0 -z-10"
      >
        {background}
      </motion.div>

      <motion.div
        style={{ y: foregroundY }}
        className="relative z-10"
      >
        {foreground}
      </motion.div>
    </section>
  );
}
