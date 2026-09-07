export interface TeamMember {
    name: string
    role: string
    /** Short credential line shown under the role, e.g. a training program. */
    credentials?: string
    photo?: string
    /** YouTube link (or /public video path) for the member's video intro. */
    video_url?: string
    /** Two-sentence teaser shown on the team grid; full bio lives on the slug page. */
    summary: string
    /** URL slug — this member's detail page lives at /about/<slug>. */
    slug: string
    bio: string[]
    specialties?: string[]
    education?: string[]
    certificates?: string[]
    licenses?: string[]
}
