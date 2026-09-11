import { toEmbedSrc } from "@/lib/youtube"
import type { PageVideo } from "@/types/pageSection"

// A responsive 16:9 embed. Deliberately not @/examples/video-demo, which pins
// and scales the player to a full-viewport takeover — that belongs on a landing
// page, not partway down a service page. `aspect-video` keeps this a server
// component, where components/ui/aspect-ratio would pull in a client boundary.
//
// Registered as `plain`, so a video with no `heading` reads as belonging to the
// section above it; when it carries one, it renders its own.
export default function VideoBlock({ section }: { section: PageVideo }) {
  return (
    <figure className="mt-2">
      {section.heading && (
        <h3 className="mb-6 text-lg font-semibold text-foreground">
          {section.heading}
        </h3>
      )}
      <div className="overflow-hidden rounded-2xl border border-border bg-muted">
        <iframe
          className="aspect-video w-full"
          src={toEmbedSrc(section.url)}
          title={section.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {section.caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {section.caption}
        </figcaption>
      )}
    </figure>
  )
}
