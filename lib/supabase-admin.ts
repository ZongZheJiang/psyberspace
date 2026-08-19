import "server-only"

import { createClient } from "@supabase/supabase-js"

/**
 * Server-only Supabase client using the SERVICE ROLE key.
 *
 * HIPAA note: this key bypasses Row Level Security and must NEVER reach the
 * browser. It is imported behind `server-only`, so any accidental import from
 * a Client Component will fail the build. Store the values in server-side env
 * vars only (never `NEXT_PUBLIC_*`).
 *
 * Before any PHI is stored, the Supabase project must be on a BAA-eligible plan
 * and the BAA must be signed. See lib/contact-schema.sql for the table + RLS.
 */

const url = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceRoleKey) {
    throw new Error(
        "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.",
    )
}

export const supabaseAdmin = createClient(url, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
})
