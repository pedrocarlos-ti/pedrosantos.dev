"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  slug: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
  tags: string[];
};

// Sample blog posts data
const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Performant React Applications",
    excerpt:
      "Learn how to optimize your React applications for better performance. This guide covers code splitting, memoization, and other techniques to make your apps faster.",
    slug: "building-performant-react-applications",
    date: "2023-10-15",
    readTime: "8 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "React",
    image: "/images/placeholder.svg",
    tags: ["React", "Performance", "JavaScript", "Web Development"],
  },
  {
    id: "2",
    title: "Getting Started with Next.js App Router",
    excerpt:
      "Explore the new App Router in Next.js 13+ and learn how to build modern web applications with this powerful framework.",
    slug: "getting-started-with-nextjs-app-router",
    date: "2023-11-02",
    readTime: "10 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "Next.js",
    image: "/images/placeholder.svg",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
  },
  {
    id: "3",
    title: "The Power of TailwindCSS: A Practical Guide",
    excerpt:
      "Discover why TailwindCSS has become so popular and how to use it effectively in your projects. Learn best practices and tips for creating beautiful UIs.",
    slug: "the-power-of-tailwindcss",
    date: "2023-11-20",
    readTime: "7 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "CSS",
    image: "/images/placeholder.svg",
    tags: ["TailwindCSS", "CSS", "Web Design", "Frontend"],
  },
];

interface BlogPreviewProps {
  posts?: BlogPost[];
  showHeading?: boolean;
  showViewAllButton?: boolean;
  title?: string;
  subtitle?: string;
  layout?: "grid" | "list";
}

export function BlogPreview({
  posts = defaultPosts,
  showHeading = true,
  showViewAllButton = true,
  title = "From My Blog",
  subtitle = "Thoughts, insights, and tutorials on web development",
  layout = "grid",
}: BlogPreviewProps) {
  const displayPosts = posts.slice(0, layout === "grid" ? 6 : 3);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
          >
            <div>
              <h2 className="mb-2 text-3xl font-bold">{title}</h2>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
            {showViewAllButton && (
              <Button variant="outline" asChild className="rounded-full">
                <Link href="/blog">
                  View All Posts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </motion.div>
        )}

        <div className={`grid gap-4 md:gap-8 ${layout === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 mt-2 text-xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary hover:underline hover:underline-offset-4"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="rounded-full bg-secondary px-2 py-1 text-xs font-medium">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="p-0 hover:bg-transparent hover:text-primary"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
