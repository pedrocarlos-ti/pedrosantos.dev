import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/components/ui/x-icon";
import type { SocialLink } from "@/lib/types";
import { profile } from "@/content/profile";

const icons = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
  mail: Mail,
};

export function SocialRow({
  socials = profile.socials,
  className,
}: {
  socials?: SocialLink[];
  className?: string;
}) {
  return (
    <div className={className}>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {socials.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.name}>
              <Link
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
                {s.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
