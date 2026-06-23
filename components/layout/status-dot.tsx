import { cn } from "@/lib/utils";

export function StatusDot({
  className,
  label,
  pulse = true,
}: {
  className?: string;
  label?: string;
  pulse?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[12px] text-muted-foreground",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        {pulse && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
        )}
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
      </span>
      {label}
    </span>
  );
}
