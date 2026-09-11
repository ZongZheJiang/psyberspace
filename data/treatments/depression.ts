import type { Treatment } from "@/types/treatment"

export const depression: Treatment = {
    slug: "depression",
    name: "Depression",
    tagline: "Break free from depression and reclaim your life.",
    image: "/assets/treatments/depression.jpg",
    imageAlt: "Morning light falling across an unmade bed",
    sections: [
        {
            kind: "hero",
            heading: "Break Free from Depression & Reclaim Your Life",
            intro: [
                "Compassionate & Effective Depression Therapy for Lasting Healing",
                "Are you feeling hopeless, unmotivated, or stuck in a cycle of sadness? Depression can make even the simplest tasks feel overwhelming, but you don’t have to navigate it alone. With the right therapy and support, healing is possible.",
            ],
            image: "/assets/treatments/depression.jpg",
            imageAlt: "Morning light falling across an unmade bed",
        },
        {
            kind: "bullets",
            heading: "What Is Depression?",
            intro: ["Depression is more than just feeling sad—it’s a serious mental health condition that affects your thoughts, emotions, and daily life. Common symptoms include"],
            items: [
                "Persistent sadness or emptiness",
                "Loss of interest in activities you once enjoyed",
                "Fatigue and low energy",
                "Difficulty sleeping or sleeping too much",
                "Feelings of guilt, worthlessness, or hopelessness",
                "Changes in appetite or weight",
                "Trouble concentrating or making decisions",
            ],
        },
        {
            kind: "card-grid",
            heading: "Types of Depression We Treat",
            cards: [
                {
                    title: "Major Depressive Disorder (MDD)",
                    description: "Persistent feelings of sadness and loss of interest",
                },
                {
                    title: "Persistent Depressive Disorder (Dysthymia)",
                    description: "Long-term, chronic depression with milder symptoms.",
                },
                {
                    title: "Bipolar Depression",
                    description: "Depressive episodes alternating with periods of mania.",
                },
                {
                    title: "Postpartum Depression",
                    description: "Depression following childbirth.",
                },
                {
                    title: "Seasonal Affective Disorder (SAD)",
                    description: "Depression that occurs seasonally, often in winter months.",
                },
            ],
        },
        {
            kind: "card-grid",
            heading: "Effective Depression Therapy Options",
            intro: [
                "Our evidence-based therapy approaches are designed to help you overcome depression and regain a sense of purpose and joy.",
            ],
            cards: [
                {
                    title: "EMDR Therapy for Trauma-Related Depression",
                    description: "If past trauma contributes to your depression, EMDR can help you process distressing memories.",
                },
                {
                    title: "Mindfulness & Holistic Approaches",
                    description: "Meditation, breathwork, and lifestyle changes can support emotional well-being.",
                },
                {
                    title: "Medication Management",
                    description: "For those who may benefit, we collaborate with medical professionals to explore safe and effective medication options.",
                },
                {
                    title: "Why Choose Our Depression Therapy?",
                    description: "Personalized Treatment Plans – Tailored to your unique needs and goals. Evidence-Based Approaches – Proven techniques for managing depression Compassionate, Experienced Therapists – Supportive professionals dedicated to your healing.",
                },
            ],
        },
    ],
}
