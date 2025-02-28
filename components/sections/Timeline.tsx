"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
};

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
}

export function Timeline({ items, title, subtitle }: TimelineProps) {
  return (
    <section className="py-12">
      <div className="container">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            {title && <h2 className="mb-3 text-3xl font-bold">{title}</h2>}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12 py-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Content */}
                <div
                  className={`relative mt-4 md:mt-0 w-full max-w-lg rounded-xl border bg-card p-4 md:p-6 shadow-sm md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                  <div className="mb-2 flex items-center gap-2 flex-wrap">
                    <span className="text-xs md:text-sm font-medium text-muted-foreground">
                      {item.subtitle}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <p className="mb-4 text-sm md:text-base text-muted-foreground">{item.description}</p>
                  {item.tags && (
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border bg-background shadow-sm">
                  {item.icon || (
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
