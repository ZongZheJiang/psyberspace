-- Run this in the Supabase SQL editor to create the contact submissions table.
--
-- HIPAA reminders:
--   * The Supabase project must be on a BAA-eligible plan AND the BAA signed
--     BEFORE any real submissions (potential PHI) are stored.
--   * RLS is enabled and NO policies are granted to anon/authenticated roles,
--     so the table is unreachable from the browser / public API. Only the
--     server-side service-role key (which bypasses RLS) can write to it.
--   * Access reads via the Supabase dashboard (audited) or a separate,
--     access-controlled admin surface — not the public site.

create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
    id          uuid primary key default gen_random_uuid(),
    created_at  timestamptz not null default now(),
    name        text not null,
    email       text not null,
    phone       text,
    message     text not null,
    consent     boolean not null,
    source_ip   text,
    user_agent  text
);

-- Lock the table down. With RLS enabled and no policies, anon/authenticated
-- clients get zero access; the service-role key still bypasses RLS.
alter table public.contact_submissions enable row level security;

-- Revoke direct table grants from the public API roles as defense in depth.
revoke all on public.contact_submissions from anon, authenticated;
