import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 md:mb-12", className)}>
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-baseline gap-3">
          {index && <span className="label-brand">{index}</span>}
          <span className="label">{eyebrow}</span>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
