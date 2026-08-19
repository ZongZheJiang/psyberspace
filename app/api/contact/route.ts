import { NextResponse, type NextRequest } from "next/server"

import { contactSchema } from "../../../lib/contact-schema"
import { supabaseAdmin } from "../../../lib/supabase-admin"

// This route handles PHI-adjacent data — never cache or prerender it.
export const dynamic = "force-dynamic"

// Very small in-memory rate limiter (per server instance). For production
// across multiple instances, back this with a shared store (e.g. Upstash).
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const entry = hits.get(ip)
    if (!entry || now > entry.resetAt) {
        hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
        return false
    }
    entry.count += 1
    return entry.count > MAX_PER_WINDOW
}

export async function POST(request: NextRequest) {
    // Identify the caller for rate limiting (proxy-aware, best effort).
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "unknown"

    if (isRateLimited(ip)) {
        return NextResponse.json(
            { error: "Too many requests. Please try again shortly." },
            { status: 429 },
        )
    }

    let body: unknown
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
    }

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
        return NextResponse.json(
            { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
            { status: 422 },
        )
    }

    const { name, email, phone, message, consent, company } = parsed.data

    // Honeypot tripped — pretend success, store nothing.
    if (company) {
        return NextResponse.json({ ok: true }, { status: 200 })
    }

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
        name,
        email,
        phone: phone || null,
        message,
        consent,
        // Store minimal metadata for abuse investigation / audit, not analytics.
        source_ip: ip,
        user_agent: request.headers.get("user-agent"),
    })

    if (error) {
        // Log server-side only. Never echo DB internals — and never log the
        // submission contents (PHI) to application logs.
        console.error("contact_submissions insert failed:", error.message)
        return NextResponse.json(
            { error: "Could not save your message. Please try again later." },
            { status: 500 },
        )
    }

    return NextResponse.json({ ok: true }, { status: 201 })
}
