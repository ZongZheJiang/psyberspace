import { PricingGroup } from "@/types/pricing"
import { FaqItem } from "@/types/faqItem"

// Prices sourced from psyberspacetherapy.com/pricing. The center's session
// rates and the partnered medical prescriber's fees are listed as separate
// tables on the live page.
export const PRICING_GROUPS: PricingGroup[] = [
    {
        heading: "Therapy & session rates",
        description:
            "Rates for psychotherapy and ketamine-assisted psychotherapy (KAP) sessions with our clinicians.",
        rows: [
            { service: "Individual Psychotherapy", duration: "60 minutes", price: "$250" },
            { service: "Sensorimotor Psychotherapy", duration: "60 minutes", price: "$300" },
            { service: "EMDR", duration: "60 minutes", price: "$300" },
            { service: "EMDR", duration: "90 minutes", price: "$475" },
            { service: "Individual EMDR & KAP Lozenge", duration: "90 minutes", price: "$600" },
            { service: "FBT (Family Based Therapy)", duration: "60 minutes", price: "$350" },
            { service: "Lozenge KAP", duration: "2.5 hours", price: "$800" },
            {
                service: "Group KAP",
                duration: "2 hours",
                price: "$495",
                note: "Limited sliding scale available",
            },
            { service: "Couples KAP", duration: "2.5 hours", price: "$925" },
            { service: "Family KAP", duration: "2.5 hours", price: "$975" },
            {
                service: "Intramuscular / Intravenous KAP",
                duration: "2 hours",
                price: "$700",
                note: "Does not include medical consult and administration",
            },
        ],
    },
    {
        heading: "Medical & prescriber services",
        description:
            "Billed by our partnered medical prescriber for intake, ongoing consultation, medicine, and KAP administration.",
        rows: [
            {
                service: "Medical assessment intake",
                duration: "60 minutes",
                price: "$338",
                note: "Includes medicine for 2 sessions",
            },
            {
                service: "Ongoing treatment consultation",
                price: "$298",
                note: "Includes medicine for 6 sessions",
            },
            {
                service: "IM KAP",
                duration: "90 minutes + 30 min recovery",
                price: "$1,200",
            },
            { service: "Lozenge KAP", duration: "150 minutes", price: "$750" },
            { service: "Group KAP", duration: "150 minutes", price: "$450" },
            { service: "Couples / Family KAP", price: "Coming soon" },
        ],
    },
]

// Verbatim from psyberspacetherapy.com/pricing.
export const REIMBURSEMENT_NOTE =
    "We've partnered with Mentaya, a service that streamlines getting reimbursed for your therapy sessions through your out-of-network benefits. Mentaya charges a 5% fee per claim, which includes handling any paperwork required, dealing with denials, and calling insurance companies. It's risk-free: they guarantee claims are successfully submitted, or a full refund of their fees."

// Billing FAQ drawn from the center's published policies (see @/data/aboutFaqs).
// The live pricing page's FAQ ships placeholder copy, so we surface the real
// billing answers instead.
export const PRICING_FAQS: FaqItem[] = [
    {
        id: 1,
        question: "Do you accept insurance?",
        answer:
            "To ensure quality care without interference, we do not bill third-party payments. As an out-of-network provider, we provide superbills — an invoice of services you can submit to your insurance company — and partner with Mentaya to streamline reimbursement through your out-of-network benefits.",
    },
    {
        id: 2,
        question: "Do you offer a sliding scale fee?",
        answer:
            "On a case-by-case basis, we consider fee reductions based on financial hardship. Reduced-fee rates depend on very limited availability. We also offer interest-free financing via Ravida without a credit-score requirement.",
    },
    {
        id: 3,
        question: "What forms of payment are accepted?",
        answer:
            "We require payment at the beginning of each session and accept cash in exact amounts, HSA/FSA cards (as long as they are associated with a major credit card company such as Visa, Mastercard, or Amex), and credit cards.",
    },
    {
        id: 4,
        question: "Can I cancel if I don't like the therapy?",
        answer:
            "Yes. Clients are never obligated to pre-pay for a course of sessions or commit to our recommendations — you can pause or end treatment at your own will at any time.",
    },
]
