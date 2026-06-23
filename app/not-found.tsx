import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="label-brand mb-4">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        It may have been moved or never built. The rest of the site is still
        here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 font-mono text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
      >
        <ArrowLeft className="h-4 w-4" />
        back home
      </Link>
    </main>
  );
}
