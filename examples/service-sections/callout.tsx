// Legal / availability disclaimer rendered as a muted box.
export default function CalloutSection({ body }: { body: string }) {
  return (
    <p className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground">
      {body}
    </p>
  )
}
