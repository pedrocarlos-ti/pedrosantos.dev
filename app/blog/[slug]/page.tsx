import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts, getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import { profile } from "@/content/profile";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) return { title: "Not found" };
    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: `/blog/${post.slug}` },
      openGraph: {
        type: "article",
        title: `${post.title} — Pedro Santos`,
        description: post.description,
        url: `https://pedrosantos.dev/blog/${post.slug}`,
        publishedTime: post.date,
        authors: [profile.name],
      },
    };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const index = all.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;

  return (
    <main className="container py-16 md:py-24">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:text-brand"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          all writing
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="label">
                {formatDate(post.date, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            <span className="label text-muted-foreground/60">·</span>
            <span className="label">{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          {post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border px-2.5 py-1 font-mono text-[12px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose mt-10"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Author note */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Written by{" "}
            <Link
              href="/about"
              className="text-foreground underline underline-offset-4 decoration-border hover:text-brand hover:decoration-brand"
            >
              {profile.name}
            </Link>{" "}
            — {profile.role}, {profile.location}.{" "}
            <Link
              href="/contact"
              className="text-brand underline underline-offset-4 decoration-brand/40 hover:decoration-brand"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>

        {/* Prev / next */}
        <nav className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group rounded-lg border border-border p-5 transition-colors hover:border-brand"
            >
              <span className="label flex items-center gap-1.5">
                <ArrowLeft className="h-3.5 w-3.5" />
                previous
              </span>
              <span className="mt-2 block font-medium text-foreground transition-colors group-hover:text-brand">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group rounded-lg border border-border p-5 text-right transition-colors hover:border-brand sm:col-start-2"
            >
              <span className="label flex items-center justify-end gap-1.5">
                next
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-2 block font-medium text-foreground transition-colors group-hover:text-brand">
                {next.title}
              </span>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
        </nav>
      </article>
    </main>
  );
}
