/**
 * Format an ISO date string for display.
 *
 * Handles `YYYY-MM` (month-only) by appending `-01` so `new Date` doesn't
 * fall back to local-timezone ambiguity. Call sites pass the format options
 * they want; defaults to "Mon DD, YYYY".
 */
export function formatDate(
  iso: string,
  opts: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  },
): string {
  const d = new Date(iso.length === 7 ? `${iso}-01` : iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", opts);
}