"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface ScrollZoomSectionProps {
  children: ReactNode;
  className?: string;
  scaleRange?: [number, number];
  borderRadiusRange?: [number, number];
}

export function ScrollZoomSection({
  children,
  className = "",
  scaleRange = [1, 0.85],
  borderRadiusRange = [0, 24],
}: ScrollZoomSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : scaleRange
  );

  const borderRadius = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : borderRadiusRange
  );

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className={`h-full w-full origin-center overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
