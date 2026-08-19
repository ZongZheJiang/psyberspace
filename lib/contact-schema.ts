import { z } from "zod"

/**
 * Validation shape for a contact-form submission.
 * Kept free of any server-only imports so it can be reused on the client
 * for pre-submit validation if desired.
 */
export const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    email: z.string().trim().email("A valid email is required").max(254),
    // Optional; allow empty string from the form.
    phone: z.string().trim().max(30).optional().or(z.literal("")),
    message: z.string().trim().min(1, "Message is required").max(5000),
    // Must be exactly `true` — the storage consent is a compliance requirement.
    consent: z.literal(true, { message: "Consent is required" }),
    // Honeypot: real users never fill this hidden field.
    company: z.string().max(0).optional().or(z.literal("")),
})

export type ContactInput = z.infer<typeof contactSchema>
