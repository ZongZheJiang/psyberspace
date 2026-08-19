"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"

const HEADING_FONT = "font-[family-name:var(--font-playfair-display)]"

const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus-visible:border-[#6d8c43] focus-visible:ring-2 focus-visible:ring-[#6d8c43]/30"

type Status = "idle" | "submitting" | "success" | "error"

function ContactForm() {
    const [agreed, setAgreed] = useState(false)
    const [status, setStatus] = useState<Status>("idle")
    const [errorMsg, setErrorMsg] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("submitting")
        setErrorMsg("")

        const form = e.currentTarget
        const data = new FormData(form)
        const payload = {
            name: String(data.get("name") ?? ""),
            email: String(data.get("email") ?? ""),
            phone: String(data.get("phone") ?? ""),
            message: String(data.get("message") ?? ""),
            consent: agreed,
            // Honeypot — hidden field, should stay empty for real users.
            company: String(data.get("company") ?? ""),
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })

            if (!res.ok) {
                const body = await res.json().catch(() => null)
                throw new Error(body?.error ?? "Something went wrong.")
            }

            setStatus("success")
            form.reset()
            setAgreed(false)
        } catch (err) {
            setStatus("error")
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.")
        }
    }

    if (status === "success") {
        return (
            <section className="mx-auto max-w-3xl px-6 py-24 text-center">
                <h2 className={`text-3xl font-medium md:text-5xl ${HEADING_FONT}`}>
                    Thank you
                </h2>
                <p className="mt-6 text-muted-foreground">
                    Your message has been received. We&rsquo;ll be in touch soon.
                </p>
            </section>
        )
    }

    return (
        <section className="mx-auto max-w-3xl px-6 py-24">
            <h2 className={`text-center text-3xl font-medium md:text-5xl ${HEADING_FONT}`}>
                Get in touch
            </h2>

            <form className="mt-12 flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className={inputClass}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className={inputClass}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                    </label>
                    <input id="phone" name="phone" type="tel" className={inputClass} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className={`${inputClass} resize-y`}
                    />
                </div>

                {/* Honeypot: visually hidden, off from tab order. Bots fill it; humans don't. */}
                <div aria-hidden="true" className="hidden">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#6d8c43]"
                    />
                    <span>I agree that my submitted data is collected and stored.</span>
                </label>

                {status === "error" && (
                    <p className="text-sm text-red-600" role="alert">
                        {errorMsg}
                    </p>
                )}

                <Button
                    type="submit"
                    disabled={!agreed || status === "submitting"}
                    className="h-auto self-start rounded-full bg-[#16311f] px-8 py-3 text-base text-white hover:bg-[#16311f]/90"
                >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>
            </form>
        </section>
    )
}

export default ContactForm
