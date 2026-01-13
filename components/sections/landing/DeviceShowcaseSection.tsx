"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type Variants,
} from "framer-motion";

type AnimationDirection = "left" | "right" | "top" | "bottom";

interface DeviceConfig {
  id: string;
  component: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  className?: string;
}

interface DeviceShowcaseSectionProps {
  devices: DeviceConfig[];
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
}

function AnimatedDevice({
  device,
  scrollYProgress,
  prefersReducedMotion,
}: {
  device: DeviceConfig;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  prefersReducedMotion: boolean | null;
}) {
  const direction = device.direction || "bottom";
  const delay = device.delay || 0;

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -200, y: 0 };
      case "right":
        return { x: 200, y: 0 };
      case "top":
        return { x: 0, y: -200 };
      case "bottom":
      default:
        return { x: 0, y: 200 };
    }
  };

  const initial = getInitialPosition();

  const x = useTransform(
    scrollYProgress,
    [0 + delay * 0.1, 0.4 + delay * 0.1],
    prefersReducedMotion ? [0, 0] : [initial.x, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0 + delay * 0.1, 0.4 + delay * 0.1],
    prefersReducedMotion ? [0, 0] : [initial.y, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0 + delay * 0.1, 0.3 + delay * 0.1],
    prefersReducedMotion ? [1, 1] : [0, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0 + delay * 0.1, 0.4 + delay * 0.1],
    prefersReducedMotion ? [1, 1] : [0.8, 1]
  );

  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        opacity: smoothOpacity,
        scale: smoothScale,
      }}
      className={device.className}
    >
      {device.component}
    </motion.div>
  );
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function DeviceShowcaseSection({
  devices,
  className = "",
  title,
  description,
}: DeviceShowcaseSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.2],
    prefersReducedMotion ? [0, 0] : [50, 0]
  );

  const smoothTitleOpacity = useSpring(titleOpacity, { stiffness: 100, damping: 30 });
  const smoothTitleY = useSpring(titleY, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden py-20 ${className}`}
    >
      {(title || description) && (
        <motion.div
          style={{
            opacity: smoothTitleOpacity,
            y: smoothTitleY,
          }}
          className="container mx-auto mb-16 px-4 text-center"
        >
          {title && (
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {title}
            </motion.div>
          )}
          {description && (
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4"
            >
              {description}
            </motion.div>
          )}
        </motion.div>
      )}

      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap items-center justify-center gap-8">
          {devices.map((device) => (
            <AnimatedDevice
              key={device.id}
              device={device}
              scrollYProgress={scrollYProgress}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
