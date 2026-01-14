"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  gradient?: string;
}

interface V2ProjectsSectionProps {
  projects: Project[];
}

export function V2ProjectsSection({ projects }: V2ProjectsSectionProps) {
  return (
    <motion.section
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of my recent open source work using React, TypeScript, and advanced web technologies
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Subtle glow border on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 to-cyan-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 group-hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col">
                {/* Project number indicator */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-4xl font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${project.gradient || 'from-muted to-muted'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-overlay opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover overlay with split buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button
                      size="sm"
                      className="rounded-full bg-white text-black hover:bg-white/90 shadow-lg"
                      asChild
                    >
                      <Link href={project.link}>
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full bg-black/50 text-white border-white/30 hover:bg-black/70 hover:text-white shadow-lg backdrop-blur-sm"
                      asChild
                    >
                      <Link href="https://github.com/pedrocarlos-ti" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Source
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="rounded-full px-6"
            asChild
          >
            <Link
              href="https://github.com/pedrocarlos-ti"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
