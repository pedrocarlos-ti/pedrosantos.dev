"use client";

import { motion } from "framer-motion";
import { TechCarousel } from "@/components/sections/TechCarousel";
import { HeroSection } from "@/components/sections/home/HeroSection";

import { AboutSection } from "@/components/sections/home/AboutSection";
import { ContactSection } from "@/components/sections/home/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection />

      {/* Tech Carousel Section */}
      <motion.section
        id="tech"
        className="py-16 md:py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ overflowX: 'clip' }}
      >
        <div className="container mx-auto px-4 md:px-6 overflow-hidden" style={{ overflowX: 'clip', maxWidth: '100vw' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8 text-center"
          >
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Technical Expertise
            </h2>
          </motion.div>
          <div className="w-full overflow-hidden" style={{ overflowX: 'clip', maxWidth: '100%' }}>
            <TechCarousel />
          </div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
