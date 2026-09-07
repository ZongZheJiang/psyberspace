import { cn } from "@/lib/utils"

type BulletSize = "sm" | "base" | "lg"
type BulletLayout = "stack" | "grid"

// The dot offset optically centres the 6px marker on the first line of text.
// Values assume `leading-relaxed` (1.625): half the line box, less half the dot.
const SIZE: Record<BulletSize, { text: string; dot: string }> = {
  sm: { text: "text-sm", dot: "mt-2" }, // 22.75px line box
  base: { text: "text-base", dot: "mt-2.5" }, // 26px
  lg: { text: "text-lg", dot: "mt-3" }, // 29.25px
}

const LAYOUT: Record<BulletLayout, string> = {
  stack: "space-y-2",
  grid: "grid gap-3 sm:grid-cols-2",
}

// Shared bulleted list with a dot marker. Marker colour is deliberately a tint
// of the text colour, not `primary` — it accompanies copy rather than acting
// as a brand accent.
export default function BulletList({
  items,
  size = "base",
  layout = "stack",
  className,
}: {
  items: string[]
  size?: BulletSize
  layout?: BulletLayout
  className?: string
}) {
  const { text, dot } = SIZE[size]

  return (
    <ul className={cn(LAYOUT[layout], text, "leading-relaxed", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className={cn("h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40", dot)}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
