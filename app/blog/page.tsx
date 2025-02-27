"use client";

import { motion } from "framer-motion";
import { BlogPreview, BlogPost } from "@/components/sections/BlogPreview";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Performant React Applications",
    excerpt:
      "Learn how to optimize your React applications for better performance. This guide covers code splitting, memoization, and other techniques to make your apps faster.",
    content:
      "React has become one of the most popular JavaScript libraries for building user interfaces. However, as applications grow in complexity, performance can become an issue. In this article, we'll explore various techniques to optimize your React applications, including code splitting with React.lazy and Suspense, memoization with useMemo and useCallback, virtualization for long lists, and more. By implementing these techniques, you can significantly improve the performance of your React applications and provide a better user experience.",
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
    content:
      "Next.js 13 introduced a revolutionary new routing system called the App Router. This new approach to routing in Next.js applications brings several benefits, including nested layouts, server components, streaming, and more. In this comprehensive guide, we'll walk through the key concepts of the App Router, including file-system based routing, layout components, loading states, error handling, and data fetching strategies. By the end of this article, you'll have a solid understanding of how to leverage the App Router to build modern, performant web applications with Next.js.",
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
    content:
      "TailwindCSS has revolutionized the way developers approach CSS by providing a utility-first framework that allows for rapid UI development without leaving your HTML. In this practical guide, we'll explore the core concepts of TailwindCSS, including utility classes, responsive design, customization, and component extraction. We'll also cover advanced topics such as using plugins, optimizing for production, and integrating with popular frameworks like React and Next.js. Whether you're new to TailwindCSS or looking to deepen your knowledge, this guide will help you leverage the full power of this innovative CSS framework.",
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
  {
    id: "4",
    title: "Integrating AI into Web Applications",
    excerpt:
      "Learn how to integrate AI capabilities into your web applications using modern JavaScript libraries and APIs.",
    content:
      "Artificial Intelligence is no longer confined to specialized applications—it's becoming an integral part of web development. In this article, we'll explore practical ways to integrate AI capabilities into your web applications using JavaScript libraries and APIs. We'll cover topics such as natural language processing with libraries like compromise.js, image recognition with TensorFlow.js, chatbots with open-source frameworks, and leveraging cloud AI services from providers like OpenAI, Google, and Azure. By the end of this guide, you'll have a solid understanding of how to enhance your web applications with AI features that can improve user experience and provide valuable functionality.",
    slug: "integrating-ai-into-web-applications",
    date: "2023-12-05",
    readTime: "12 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "AI",
    image: "/images/placeholder.svg",
    tags: ["AI", "Machine Learning", "JavaScript", "Web Development"],
  },
  {
    id: "5",
    title: "Mastering TypeScript for Frontend Development",
    excerpt:
      "Dive deep into TypeScript and learn how to leverage its type system to build more robust and maintainable frontend applications.",
    content:
      "TypeScript has become an essential tool for modern frontend development, providing static typing and other features that help catch errors early and improve code quality. In this comprehensive guide, we'll explore advanced TypeScript concepts specifically relevant to frontend development, including typing React components, managing state with TypeScript, handling API responses, creating reusable generic components, and setting up a robust development environment. We'll also cover best practices for gradually adopting TypeScript in existing JavaScript projects and strategies for maintaining type safety across your application. By mastering TypeScript, you'll be able to build more robust, maintainable, and scalable frontend applications.",
    slug: "mastering-typescript-for-frontend-development",
    date: "2023-12-18",
    readTime: "9 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "TypeScript",
    image: "/images/placeholder.svg",
    tags: ["TypeScript", "JavaScript", "Frontend", "Web Development"],
  },
  {
    id: "6",
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn the principles of web accessibility and how to implement them in your applications to create inclusive experiences for all users.",
    content:
      "Web accessibility is not just a nice-to-have feature—it's a necessity for creating inclusive digital experiences and often a legal requirement. In this comprehensive guide, we'll explore the fundamental principles of web accessibility based on the WCAG guidelines and practical implementation strategies for developers. We'll cover semantic HTML, keyboard navigation, ARIA attributes, color contrast, accessible forms, and testing methodologies. We'll also look at how popular frameworks like React and Next.js can be leveraged to build accessible applications from the ground up. By following these principles and practices, you can ensure that your web applications are usable by everyone, including people with disabilities.",
    slug: "building-accessible-web-applications",
    date: "2024-01-10",
    readTime: "11 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "Accessibility",
    image: "/images/placeholder.svg",
    tags: ["Accessibility", "Web Development", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "7",
    title: "State Management in Modern React Applications",
    excerpt:
      "Compare different state management approaches in React and learn when to use each one for optimal application architecture.",
    content:
      "State management is a critical aspect of building React applications, especially as they grow in complexity. In this article, we'll explore the evolution of state management in React, from local component state to global state solutions. We'll compare different approaches including React's built-in Context API and useReducer hook, Redux and Redux Toolkit, Zustand, Jotai, Recoil, and server state management with React Query and SWR. For each approach, we'll discuss its strengths, weaknesses, and ideal use cases, providing practical code examples to illustrate implementation. By understanding the nuances of these different state management solutions, you'll be better equipped to choose the right approach for your specific application needs.",
    slug: "state-management-in-modern-react-applications",
    date: "2024-01-25",
    readTime: "13 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "React",
    image: "/images/placeholder.svg",
    tags: ["React", "State Management", "JavaScript", "Web Development"],
  },
  {
    id: "8",
    title: "Creating Custom Hooks in React",
    excerpt:
      "Learn how to build reusable custom hooks in React to share logic across components and simplify your codebase.",
    content:
      "Custom hooks are one of React's most powerful features, allowing developers to extract and reuse stateful logic across multiple components. In this practical guide, we'll explore the concept of custom hooks in depth and walk through the process of creating various useful custom hooks for common scenarios. We'll build hooks for form handling, API data fetching, local storage interaction, media queries, animations, and more. For each hook, we'll provide a detailed implementation, usage examples, and best practices. By mastering custom hooks, you'll be able to significantly improve the organization and reusability of your React code, leading to more maintainable and efficient applications.",
    slug: "creating-custom-hooks-in-react",
    date: "2024-02-08",
    readTime: "8 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "React",
    image: "/images/placeholder.svg",
    tags: ["React", "Hooks", "JavaScript", "Web Development"],
  },
];

const categories = [
  { id: "all", name: "All Posts" },
  { id: "React", name: "React" },
  { id: "Next.js", name: "Next.js" },
  { id: "TypeScript", name: "TypeScript" },
  { id: "CSS", name: "CSS" },
  { id: "AI", name: "AI" },
  { id: "Accessibility", name: "Accessibility" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-bold">Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Thoughts, tutorials, and insights on web development, design, and technology
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="min-w-[90px] text-sm md:min-w-24 md:text-base rounded-full px-3 md:px-6"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BlogPreview 
            posts={filteredPosts} 
            showHeading={false} 
            showViewAllButton={false} 
            layout="grid"
          />
        </motion.div>
      </div>
    </div>
  );
}
