export interface ContactDetails {
    phones: string[]
    emails: string[]
    address: {
        line1: string
        line2: string
        mapQuery: string
    }
    hours: { days: string; time: string }[]
    serviceAreas: string[]
    bookingUrl: string
}
