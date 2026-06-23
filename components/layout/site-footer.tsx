import { Link } from "next-view-transitions";
import { Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/components/ui/x-icon";

const nav = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Writing", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const elsewhere = [
  { name: "GitHub", href: "https://github.com/pedrocarlos-ti", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/pedro-santos", icon: Linkedin },
  { name: "X", href: "https://x.com/pcgs_tsx", icon: XIcon },
  { name: "Email", href: "mailto:pedrocarlos.ti@gmail.com", icon: Mail },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-mono text-sm font-semibold text-foreground hover:text-brand transition-colors"
            >
              pedrosantos.dev
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Software engineer shipping production React/Next.js by day, building
              Melro.io on the side. Open to full-time and contract work.
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[12px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              available for new work
            </p>
          </div>

          <div>
            <p className="label mb-3">Navigate</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-3">Elsewhere</p>
            <ul className="space-y-2">
              {elsewhere.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Pedro Santos — Belmonte, Portugal</p>
          <p>Built with Next.js · Tailwind · privacy-friendly analytics</p>
        </div>
      </div>
    </footer>
  );
}
