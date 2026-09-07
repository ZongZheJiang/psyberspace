// Explainer paragraphs ("What is …"). Body only — the heading and section
// chrome belong to the page that composes this.
export default function ProseSection({ body }: { body: string[] }) {
  return (
    <div className="mt-6 space-y-4">
      {body.map((paragraph, index) => (
        <p key={index} className="text-lg leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
