import type { PageWhatIs } from "@/types/pageSection"

// Explainer paragraphs ("What is …"). Body only — the heading and section
// chrome belong to the page template that frames this.
export default function WhatIsBlock({ section }: { section: PageWhatIs }) {
  return (
    <div className="mt-6 space-y-4">
      {section.body.map((paragraph, index) => (
        <p key={index} className="text-lg leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
