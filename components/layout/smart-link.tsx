import Link from "next/link";

/**
 * Renders a Next `<Link>` for internal paths (starting with "/") and a plain
 * `<a>` for external URLs — so callers don't branch on `startsWith` everywhere.
 * External links get `target="_blank"` + `rel="noopener noreferrer"`.
 */
export function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}