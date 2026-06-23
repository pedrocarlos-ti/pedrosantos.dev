import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes from rebuilding and building — design trade-offs, developer experience, and the thinking behind a builder's home base.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="container py-16 md:py-24">
      <header className="mb-12 border-b border-border pb-6">
        <p className="label mb-3">Writing</p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Notes from rebuilding and building.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Longer-form thinking on design trade-offs, developer experience, and
          what it takes to keep a personal site honest. Written when there&apos;s
          something worth saying.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="font-mono text-sm text-muted-foreground">
          No posts yet — check back soon.
        </p>
      ) : (
        <ul className="border-y border-border divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 gap-2 py-6 md:grid-cols-[160px_1fr_auto] md:items-baseline md:gap-8"
              >
                <span className="label">{formatDate(post.date)}</span>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[12px] text-muted-foreground/70"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="hidden shrink-0 font-mono text-[12px] text-muted-foreground md:inline">
                  {post.readingTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
