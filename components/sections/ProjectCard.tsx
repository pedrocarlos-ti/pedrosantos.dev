"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  features?: string[];
  techDetails?: string;
  screenshots?: string[];
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 * index }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <Card className="h-full overflow-hidden border shadow-sm transition-all hover:shadow-md">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="line-clamp-1 text-xl">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-4 pt-2">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="transition-transform">
                  Details
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  {project.longDescription && (
                    <div>
                      <h3 className="mb-2 text-lg font-medium">About this project</h3>
                      <p className="text-muted-foreground">{project.longDescription}</p>
                    </div>
                  )}
                  
                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-lg font-medium">Key Features</h3>
                      <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.techDetails && (
                    <div>
                      <h3 className="mb-2 text-lg font-medium">Technical Details</h3>
                      <p className="text-muted-foreground">{project.techDetails}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div>
                      <h3 className="mb-3 text-lg font-medium">Screenshots</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {project.screenshots.map((screenshot, i) => (
                          <div key={i} className="relative aspect-video overflow-hidden rounded-md border">
                            <Image
                              src={screenshot}
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-center gap-4 pt-4">
                    <Button asChild variant="outline" className="rounded-full">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                    <Button asChild className="rounded-full">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full"
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild className="rounded-full">
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
}
