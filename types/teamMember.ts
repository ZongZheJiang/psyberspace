export interface TeamMember {
    name: string
    role: string
    /** Short credential line shown under the role, e.g. a training program. */
    credentials?: string
    photo?: string
    /** Two-sentence teaser shown on the team grid; full bio lives on `href`. */
    summary: string
    /** Route to this member's detail page under /about. */
    href: string
    bio: string[]
    specialties?: string[]
    education?: string[]
    certificates?: string[]
    licenses?: string[]
}
