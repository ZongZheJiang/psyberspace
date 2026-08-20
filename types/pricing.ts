export interface PriceRow {
    /** Service name, e.g. "Individual Psychotherapy". */
    service: string
    /** Session length / format, e.g. "60 minutes" or "2.5 hours". */
    duration?: string
    /** Display price, e.g. "$250". Free-form so "Coming soon" is valid too. */
    price: string
    /** Optional qualifier, e.g. "Limited sliding scale available". */
    note?: string
}

export interface PricingGroup {
    heading: string
    description?: string
    rows: PriceRow[]
}
