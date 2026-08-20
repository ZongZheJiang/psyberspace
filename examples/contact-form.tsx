"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema } from "@/lib/contact-schema"

type FieldErrors = Partial<Record<string, string[]>>
type Status = "idle" | "submitting" | "success" | "error"

const CONTACT_ENDPOINT = "/api/.contact"

export default function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle")
  const [errors, setErrors] = React.useState<FieldErrors>({})
  const [formError, setFormError] = React.useState<string | null>(null)
  const [consent, setConsent] = React.useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrors({})
    setFormError(null)

    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      consent,
      // Honeypot — hidden from real users.
      company: String(data.get("company") ?? ""),
    }

    // Validate client-side with the same schema the API uses.
    const parsed = contactSchema.safeParse(payload)
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors)
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        if (res.status === 422 && body?.issues) setErrors(body.issues)
        setFormError(
          body?.error ??
            "Something went wrong sending your message. Please try again."
        )
        setStatus("error")
        return
      }

      form.reset()
      setConsent(false)
      setStatus("success")
    } catch {
      setFormError(
        "We couldn't reach the server. Please try again, or email us directly."
      )
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <h3 className="text-xl font-semibold text-card-foreground">
          Thank you — your message is on its way.
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          We&rsquo;ve received your request and will get back to you soon. For
          anything urgent, please call us directly.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Send us a message
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form below and a member of our team will be in touch.
      </p>

      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name[0]}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              placeholder="(000) 000-0000"
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone[0]}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            aria-invalid={Boolean(errors.message)}
            placeholder="Tell us a little about what you're looking for."
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message[0]}</p>
          )}
        </div>

        {/* Honeypot: hidden from humans, tempting to bots. */}
        <div aria-hidden className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(value) => setConsent(value === true)}
              aria-invalid={Boolean(errors.consent)}
              className="mt-0.5"
            />
            <Label
              htmlFor="consent"
              className="text-sm font-normal leading-relaxed text-muted-foreground"
            >
              I agree that my submitted data is being collected and stored.
            </Label>
          </div>
          {errors.consent && (
            <p className="text-sm text-destructive">{errors.consent[0]}</p>
          )}
        </div>

        {formError && (
          <p className="text-sm text-destructive" role="alert">
            {formError}
          </p>
        )}

        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  )
}
