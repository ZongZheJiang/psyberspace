import type { Service } from "@/types/service"

export const medicationManagement: Service = {
    slug: "medication-management",
    title: "Medication Management",
    tagline: "Personalized medication support for your mental well-being.",
    category: "Psychiatry",
    image: "/productSummaryCards/medication_management.jpg",
    imageAlt: "A prescriber reviewing a treatment plan with a client",
    sections: [
        {
            kind: "hero",
            eyebrow: "Psychiatry",
            heading: "Medication Management for Mental Health: Personalized Support for Your Well-Being",
            subheading: "Safe, Effective, and Personalized Psychiatric Medication Management",
            intro: [
                "Managing mental health symptoms can feel overwhelming, but the right medication—paired with therapy and holistic care—can provide the relief and balance you need. Our medication management services ensure that you receive expert guidance, ongoing monitoring, and personalized adjustments to support your mental health journey.",
                "We partner with Journey Clinical, a trusted provider of psychiatric prescribing services, to ensure safe and effective medication management.",
            ],
            image: "/productSummaryCards/medication_management.jpg",
            imageAlt: "A prescriber reviewing a treatment plan with a client",
        },
        {
            kind: "bullets",
            heading: "What Is Medication Management?",
            intro: ["Medication management is a collaborative process where a licensed psychiatric provider: Whether you’re starting medication for the first time, adjusting your current prescription, or exploring new treatment options, our prescriber ensures a thoughtful, evidence-based approach tailored to your needs."],
            items: [
                "Evaluates your symptoms and medical history",
                "Prescribes and adjusts psychiatric medications as needed",
                "Monitors side effects and effectiveness",
                "Provides ongoing support to optimize your treatment plan",
            ],
        },
        {
            kind: "card-grid",
            heading: "Conditions We Help Manage",
            intro: [
                "Our medication management services can help with",
            ],
            cards: [
                {
                    title: "Anxiety & Panic Disorders",
                    description: "Reduce excessive worry, restlessness, and anxiety attacks.",
                },
                {
                    title: "Depression & Mood Disorders",
                    description: "Improve mood stability and decrease persistent sadness.",
                },
                {
                    title: "ADHD & Focus Challenges",
                    description: "Enhance concentration, organization, and daily functioning.",
                },
                {
                    title: "PTSD & Trauma",
                    description: "Manage distressing symptoms and improve emotional resilience.",
                },
                {
                    title: "Obsessive-Compulsive Disorder (OCD)",
                    description: "Alleviate compulsive behaviors and intrusive thoughts.",
                },
                {
                    title: "Sleep Disorders",
                    description: "Regulate sleep patterns for better rest and mental clarity.",
                },
            ],
        },
        {
            kind: "prose",
            body: [
                "Your mental health journey is unique, and we take the time to find the right medication and dosage for your individual needs.",
            ],
        },
        {
            kind: "bullets",
            heading: "Our Partnership with Journey Clinical",
            intro: ["To provide expert medication management, we work with Journey Clinical, a leading psychiatric provider specializing in evidence-based prescribing. Through this partnership, you receive"],
            items: [
                "Comprehensive Psychiatric Evaluations – A detailed assessment to determine the most effective treatment.",
                "Ongoing Medication Monitoring – Regular check-ins to track progress and make necessary adjustments.",
                "Collaborative Care – Coordination with your therapist to ensure an integrated treatment plan.",
                "Please Note: We do not offer independent ketamine evaluations for home use.",
            ],
        },
        {
            kind: "prose",
            heading: "Is Medication Right for You?",
            body: [
                "Finding the right medication can be a life-changing step toward stability, clarity, and emotional well-being. If you’re struggling with persistent mental health challenges, a medication consultation can help determine the best course of action.",
                "Schedule a Consultation Today to explore your options and take the first step toward relief.",
            ],
        },
    ],
}
