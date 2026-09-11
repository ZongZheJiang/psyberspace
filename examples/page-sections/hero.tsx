import Image from "next/image"

import type { PageHero } from "@/types/pageSection"

// Page opener. The back link belongs to the page template, not the section,
// so it is rendered by whichever detail component frames this.
export default function HeroBlock({ section }: { section: PageHero }) {
  return (
    <>
      {/* Fixed 11:6 banner via `fill`, so the frame does not change shape with
          whatever asset the data points at. */}
      {section.image && (
        <div className="relative mt-6 aspect-[11/6] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src={section.image}
            alt={section.imageAlt ?? ""}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      )}
      {section.eyebrow && (
        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {section.eyebrow}
        </p>
      )}
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {section.heading}
      </h1>
      {section.subheading && (
        <p className="mt-4 text-xl leading-relaxed text-foreground/80">
          {section.subheading}
        </p>
      )}
      {section.intro.map((paragraph, index) => (
        <p
          key={index}
          className="mt-6 text-lg leading-relaxed text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}
    </>
  )
}
