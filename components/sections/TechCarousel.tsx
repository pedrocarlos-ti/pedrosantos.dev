"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type TechItem = {
  name: string;
  icon: string;
  color?: string;
};

// Simplified tech stack for the carousel with brand colors
const techItems: TechItem[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#FFCA28",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    color: "#764ABC",
  },
];

// Custom hook for infinite marquee animation
const useInfiniteMarquee = (direction: "left" | "right", speed: number) => {
  const [isReady, setIsReady] = useState(false);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady || !containerRef.current) return;

    const marqueeAnimation = async () => {
      const container = containerRef.current;
      if (!container) return;

      // Calculate the width the container needs to move
      const contentWidth = container.scrollWidth / 3; // Divided by 3 because we have 3 identical sets

      // Set the initial position so animation starts already in progress
      // This prevents the reset at the beginning
      const initialX = direction === "left" ? 0 : -contentWidth;

      // Set the target X position
      const targetX = direction === "left" ? -contentWidth : 0;

      // Start the animation from the middle set to create the illusion of infinite looping
      await controls.set({ x: initialX });

      // Create a seamless animation
      controls.start({
        x: targetX,
        transition: {
          duration: (contentWidth / 50) * speed, // Adjust speed
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        },
      });
    };

    marqueeAnimation();
  }, [isReady, controls, direction, speed]);

  return { controls, containerRef };
};

export function TechCarousel() {
  const [isClient, setIsClient] = useState(false);

  // Create three rows of tech items that move at different speeds
  const firstRow = [
    ...techItems.slice(0, 6),
    ...techItems.slice(0, 6),
    ...techItems.slice(0, 6),
  ];
  const secondRow = [
    ...techItems.slice(6),
    ...techItems.slice(6),
    ...techItems.slice(6),
  ];

  // Use our custom hook for infinite marquee
  const { controls: controlsFirst, containerRef: containerRefFirst } =
    useInfiniteMarquee("left", 1);
  const { controls: controlsSecond, containerRef: containerRefSecond } =
    useInfiniteMarquee("right", 1.2);

  // Use useEffect to ensure animations only run on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR to prevent hydration issues
  }

  // Item component to reuse for each tech item
  const TechItem = ({
    item,
    index,
    isSecondRow = false,
  }: {
    item: TechItem;
    index: number;
    isSecondRow?: boolean;
  }) => (
    <motion.div
      key={`${item.name}-${index}`}
      className="flex flex-col items-center mx-4"
      whileHover={{
        y: -8,
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.05 * index, duration: 0.3 },
      }}
    >
      <motion.div
        className="relative flex h-24 w-24 items-center justify-center rounded-xl bg-black/10 dark:bg-white/10 p-3 backdrop-blur-sm transition-all"
        style={{
          boxShadow: `0 10px 30px -15px ${item.color || "rgba(0, 0, 0, 0.3)"}`,
          border: `1px solid ${item.color || "rgba(255, 255, 255, 0.1)"}20`,
        }}
        whileHover={{
          boxShadow: `0 15px 30px -10px ${item.color || "rgba(0, 0, 0, 0.4)"}`,
          border: `1px solid ${item.color || "rgba(255, 255, 255, 0.2)"}40`,
        }}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-black/5 dark:to-white/5" />
        <Image
          src={item.icon}
          alt={item.name}
          width={64}
          height={64}
          className="h-auto w-auto"
        />
      </motion.div>
      <p className="mt-3 text-sm font-medium">{item.name}</p>
    </motion.div>
  );

  return (
    <div className="relative overflow-hidden py-10">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 z-10 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none" />

      {/* First row - right to left */}
      <div className="mb-12 overflow-hidden">
        <motion.div
          ref={containerRefFirst}
          className="flex"
          animate={controlsFirst}
        >
          {firstRow.map((tech, index) => (
            <TechItem
              key={`row1-${tech.name}-${index}`}
              item={tech}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Second row - left to right */}
      <div className="overflow-hidden">
        <motion.div
          ref={containerRefSecond}
          className="flex"
          animate={controlsSecond}
        >
          {secondRow.map((tech, index) => (
            <TechItem
              key={`row2-${tech.name}-${index}`}
              item={tech}
              index={index}
              isSecondRow
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
