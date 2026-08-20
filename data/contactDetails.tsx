import { ContactDetails } from "@/types/contactDetails"

// Sourced from psyberspacetherapy.com/contact-us.
export const CONTACT_DETAILS: ContactDetails = {
    phones: ["347-321-8629", "408-620-4040"],
    emails: ["admin@psyberspacetherapy.com", "psyberspacetherapy@hushmail.com"],
    address: {
        line1: "1751 2nd Avenue #102",
        line2: "New York, NY 10128",
        mapQuery: "1751 2nd Avenue #102, New York, NY 10128",
    },
    hours: [
        { days: "Monday – Friday", time: "8am – 8pm EST" },
        { days: "Saturday", time: "10am – 5pm EST" },
    ],
    serviceAreas: ["California", "New Jersey", "New York", "Georgia"],
    bookingUrl: "https://psyberspacetherapy.janeapp.com/",
}
