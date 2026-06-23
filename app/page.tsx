import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { getFeaturedProjects } from "@/content/projects";
import { nowItems, nowUpdated } from "@/content/now";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/layout/section";
import { SocialRow } from "@/components/layout/social-row";
import { StatusDot } from "@/components/layout/status-dot";
import { projectStatusMeta } from "@/components/sections/projects/project-status";

const nowKindLabel: Record<string, string> = {
  working: "working",
  building: "building",
  learning: "learning",
  reading: "reading",
  writing: "writing",
  exploring: "exploring",
};

function formatDate(iso: string) {
  const d = new Date(iso + (iso.length === 7 ? "-01" : ""));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="container py-16 md:py-24">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="fade-up">
        <p className="label mb-5">
          {profile.role} · {profile.location}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-snug text-foreground/90 md:text-2xl">
          {profile.tagline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          {profile.intro}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            See selected work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-5 font-mono text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <StatusDot label="Open to full-time & contract work" />
          <SocialRow />
        </div>
      </section>

      {/* ── Now ──────────────────────────────────────────────── */}
      <section className="mt-24 md:mt-32">
        <SectionHeading
          index="01"
          eyebrow="Now"
          title="What I'm doing right now"
          description="A living snapshot. Updated when things actually change, not on a schedule."
          action={
            <span className="label hidden sm:inline">
              updated {formatDate(nowUpdated)}
            </span>
          }
        />
        <ul className="divide-y divide-border border-y border-border">
          {nowItems.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[140px_1fr] md:items-baseline md:gap-6"
            >
              <span className="label-brand">{nowKindLabel[item.kind]}</span>
              <div>
                {item.href ? (
                  item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="text-[1.0625rem] leading-relaxed text-foreground transition-colors hover:text-brand"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[1.0625rem] leading-relaxed text-foreground transition-colors hover:text-brand"
                    >
                      {item.text}
                      <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  )
                ) : (
                  <p className="text-[1.0625rem] leading-relaxed text-foreground">
                    {item.text}
                  </p>
                )}
                <p className="mt-1 label">{formatDate(item.date)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Selected work ────────────────────────────────────── */}
      <section className="mt-24 md:mt-32">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Things I've built, with the story attached"
          description="Not a logo wall. Each one has a problem, an approach, and what I learned."
          action={
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-brand"
            >
              all work
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          }
        />
        <ul className="border-y border-border divide-y divide-border">
          {featured.map((project) => {
            const meta = projectStatusMeta(project.status);
            return (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid grid-cols-1 gap-3 py-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
                        {project.title}
                      </h3>
                      <span className="label">{meta.label}</span>
                    </div>
                    <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <p className="mt-2 font-mono text-[12px] text-muted-foreground/80">
                      {project.stack.slice(0, 4).join(" · ")}
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-[13px] text-muted-foreground transition-colors group-hover:text-brand md:inline">
                    read the case study →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ── Writing ──────────────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="mt-24 md:mt-32">
          <SectionHeading
            index="03"
            eyebrow="Writing"
            title="Notes from rebuilding and building"
            action={
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-brand"
              >
                all posts
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            }
          />
          <ul className="border-y border-border divide-y divide-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-brand">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-1 max-w-xl text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-[12px] text-muted-foreground sm:inline">
                    {post.readingTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Contact teaser ───────────────────────────────────── */}
      <section className="mt-24 md:mt-32">
        <div className="rounded-lg border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="label-brand mb-3">Let&apos;s talk</p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Open to full-time roles and contract work.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {profile.availability.note} If something here resonates, the
                fastest way is the form — or just email.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-5 font-mono text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
