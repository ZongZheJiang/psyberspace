import type { Treatment } from "@/types/treatment"

export const palliativeCare: Treatment = {
    slug: "palliative-care",
    name: "Palliative Care/EOL",
    tagline: "Ease the journey: compassionate ketamine therapy for palliative and end-of-life care.",
    image: "/assets/treatments/palliative-care.jpg",
    imageAlt: "A caregiver holding an elderly person’s hand",
    sections: [
        {
            kind: "hero",
            heading: "Palliative Psychotherapy: Finding Peace, Comfort, and Meaning",
            subheading: "Emotional & Spiritual Support for Life’s Most Challenging Journeys",
            intro: [
                "Facing a serious illness, chronic condition, or end-of-life transition can bring overwhelming emotions, fear, and uncertainty. Palliative psychotherapy provides a safe, supportive space to process these experiences, find meaning, and enhance emotional well-being—for both individuals and their loved ones.",
            ],
            image: "/assets/treatments/palliative-care.jpg",
            imageAlt: "A caregiver holding an elderly person’s hand",
        },
        {
            kind: "bullets",
            heading: "What Is Palliative Psychotherapy?",
            intro: ["Palliative psychotherapy is a specialized form of therapy designed to support individuals with: This approach integrates emotional support, existential exploration, and coping strategies to improve quality of life—regardless of medical prognosis."],
            items: [
                "Serious or life-limiting illnesses",
                "Chronic pain or degenerative conditions",
                "End-of-life transitions",
                "Grief, loss, and anticipatory mourning",
                "Existential distress and fear of the unknown",
            ],
        },
        {
            kind: "card-grid",
            heading: "How Palliative Psychotherapy Helps",
            intro: [
                "Our therapy sessions provide a space to",
            ],
            cards: [
                {
                    title: "Process Fear & Anxiety",
                    description: "Navigate worries about the future with compassionate guidance.",
                },
                {
                    title: "Find Meaning & Purpose",
                    description: "Explore spiritual and existential concerns to bring comfort and clarity.",
                },
                {
                    title: "Improve Emotional Well-Being",
                    description: "Reduce distress, depression, and feelings of isolation.",
                },
                {
                    title: "Strengthen Relationships",
                    description: "Foster open communication and connection with loved ones.",
                },
                {
                    title: "Enhance Quality of Life",
                    description: "Develop coping tools for peace, resilience, and acceptance.",
                },
            ],
        },
        {
            kind: "card-grid",
            heading: "Our Approach to Palliative Psychotherapy",
            intro: [
                "We offer a holistic, patient-centered approach, drawing from",
            ],
            cards: [
                {
                    title: "Existential & Meaning-Centered Therapy",
                    description: "Helping individuals find purpose, dignity, and peace in their journey.",
                },
                {
                    title: "Mindfulness & Acceptance-Based Therapy",
                    description: "Practical tools to reduce suffering and enhance presence in the moment.",
                },
                {
                    title: "Ketamine Assisted Psychotherapy (KAP)",
                    description: "Assisting individuals facing serious illness find relief from emotional distress, anxiety, and existential suffering.",
                },
                {
                    title: "Grief & Bereavement Support",
                    description: "Helping both patients and loved ones cope with loss and transition.",
                },
            ],
        },
        {
            kind: "card-grid",
            heading: "Why Choose Our Palliative Psychotherapy Services?",
            cards: [
                {
                    title: "Compassionate, Specialized Care",
                    description: "Experienced therapists in palliative and existential therapy.",
                },
                {
                    title: "Personalized Support",
                    description: "Tailored sessions based on your unique needs and values.",
                },
                {
                    title: "Flexible Options",
                    description: "Available in-person, online, or at-home for those with mobility challenges.",
                },
                {
                    title: "Inclusive & Non-Denominational",
                    description: "Open to all beliefs, backgrounds, and perspectives.",
                },
            ],
        },
    ],
}
