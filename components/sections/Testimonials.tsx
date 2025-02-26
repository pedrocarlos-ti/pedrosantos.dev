"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "/images/testimonials/avatar-1.jpg",
    content:
      "Pedro is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and ability to translate designs into functional interfaces is impressive. He's also great at communicating and explaining technical concepts to non-technical team members.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    avatar: "/images/testimonials/avatar-2.jpg",
    content:
      "Working with Pedro was a game-changer for our project. His expertise in React and modern frontend technologies helped us create a user experience that our customers love. He's proactive, solution-oriented, and always delivers on time.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "DesignStudio",
    avatar: "/images/testimonials/avatar-3.jpg",
    content:
      "As a designer, I appreciate working with developers who can bring my designs to life exactly as envisioned. Pedro not only implemented my designs perfectly but also suggested improvements that enhanced the user experience. His attention to animation details and micro-interactions really elevated our product.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Project Manager",
    company: "Enterprise Solutions",
    avatar: "/images/testimonials/avatar-4.jpg",
    content:
      "Pedro's technical skills are matched by his excellent project management abilities. He communicates clearly, sets realistic timelines, and consistently meets deadlines. His problem-solving approach saved us countless hours during development.",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold">What People Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Feedback from clients and colleagues I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden px-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="overflow-hidden border bg-card shadow-sm">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-6 flex justify-center">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                          <Quote className="h-6 w-6" />
                        </div>
                      </div>
                      <p className="mb-6 text-center text-muted-foreground">
                        "{testimonial.content}"
                      </p>
                      <div className="flex flex-col items-center">
                        <Avatar className="mb-3 h-16 w-16 border-2 border-background">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`h-2 w-8 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-primary"
                    : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
