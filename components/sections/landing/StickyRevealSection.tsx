"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface RevealItem {
  id: string;
  content: ReactNode;
}

interface StickyRevealSectionProps {
  items: RevealItem[];
  className?: string;
  stickyContent?: ReactNode;
  itemClassName?: string;
}

function RevealItem({
  item,
  index,
  totalItems,
  scrollYProgress,
  prefersReducedMotion,
  className,
}: {
  item: RevealItem;
  index: number;
  totalItems: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  prefersReducedMotion: boolean | null;
  className?: string;
}) {
  const segmentSize = 1 / totalItems;
  const start = index * segmentSize;
  const end = start + segmentSize;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.3, end - segmentSize * 0.1, end],
    prefersReducedMotion ? [1, 1, 1, 1] : [0, 1, 1, 0.3]
  );

  const y = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.3],
    prefersReducedMotion ? [0, 0] : [50, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.3, end - segmentSize * 0.1, end],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.95, 1, 1, 0.98]
  );

  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 30,
  });

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
  });

  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div
      style={{
        opacity: smoothOpacity,
        y: smoothY,
        scale: smoothScale,
      }}
      className={`absolute inset-0 flex items-center justify-center ${className}`}
    >
      {item.content}
    </motion.div>
  );
}

export function StickyRevealSection({
  items,
  className = "",
  stickyContent,
  itemClassName = "",
}: StickyRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollHeight = items.length * 100;

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${scrollHeight}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {stickyContent && (
          <div className="absolute inset-0 z-0">{stickyContent}</div>
        )}

        <div className="relative z-10 h-full w-full">
          {items.map((item, index) => (
            <RevealItem
              key={item.id}
              item={item}
              index={index}
              totalItems={items.length}
              scrollYProgress={scrollYProgress}
              prefersReducedMotion={prefersReducedMotion}
              className={itemClassName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
