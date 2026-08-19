// lib/blog-categories.ts

/**
 * Soft, pill-style badge colors keyed by a post's `blogType`, mirroring the
 * colored category badges in the reference design (blue / purple / green …).
 * Each entry pairs a tinted background with a saturated text color and a
 * dark-mode counterpart. Unknown categories fall back to a neutral badge.
 */
const CATEGORY_BADGE_STYLES: Record<string, string> = {
  "Mental Health & Burnout Recovery":
    "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "Trauma-Informed Therapy":
    "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "Trauma Recovery":
    "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  "BIPOC Mental Health":
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  Therapy: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  "Mental Health Awareness":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "Mental Health":
    "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  "Men's Mental Health":
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
}

const FALLBACK_BADGE_STYLE = "bg-muted text-muted-foreground"

/** Returns the Tailwind classes that color a badge for the given category. */
export function categoryBadgeClass(category: string): string {
  return CATEGORY_BADGE_STYLES[category] ?? FALLBACK_BADGE_STYLE
}
