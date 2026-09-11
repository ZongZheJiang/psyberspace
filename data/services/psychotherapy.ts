import type { Service } from "@/types/service"

export const psychotherapy: Service = {
    slug: "psychotherapy",
    title: "Psychotherapy",
    tagline: "For healing, growth, and emotional well-being.",
    category: "Talk Therapy",
    image: "/productSummaryCards/psychotherapy.jpg",
    imageAlt: "Two people in conversation during a therapy session",
    sections: [
        {
            kind: "hero",
            eyebrow: "Talk Therapy",
            heading: "Psychotherapy for Healing, Growth & Emotional Well-Being",
            subheading: "Find Clarity, Overcome Challenges & Reclaim Your Life",
            intro: [
                "Life can feel overwhelming at times. Anxiety, depression, past trauma, relationship struggles, or simply feeling lost can make it hard to move forward. If you’re struggling with emotional pain, know that you are not alone—and healing is possible.",
                "Psychotherapy offers a safe, supportive space to explore your emotions, gain self-awareness, and develop tools to navigate life’s challenges. Whether you’re facing deep-seated trauma or simply feeling stuck, therapy can help you find relief, rediscover purpose, and create the life you want.",
            ],
            image: "/productSummaryCards/psychotherapy.jpg",
            imageAlt: "Two people in conversation during a therapy session",
        },
        {
            kind: "bullets",
            heading: "Are You Struggling With…?",
            intro: ["If any of these resonate with you, therapy can be the first step toward healing and transformation."],
            items: [
                "Persistent Anxiety & Stress – Feeling constantly on edge, overwhelmed, or unable to relax.",
                "Depression & Low Self-Worth – Experiencing hopelessness, lack of motivation, or emotional numbness.",
                "Relationship & Family Struggles – ExpeDifficulty communicating, feeling disconnected, or past wounds affecting your current relationships.",
                "Grief & Loss – Coping with the pain of losing a loved one or a significant life change.",
                "Past Trauma & PTSD – Unresolved pain from past experiences affecting your daily life.",
                "Feeling Lost or Stuck – Unsure of your direction, struggling with self-doubt, or feeling unfulfilled.",
            ],
        },
        {
            kind: "card-grid",
            heading: "How Psychotherapy Can Help",
            intro: [
                "Psychotherapy isn’t just about talking—it’s about understanding yourself, healing past wounds, and building a better future. Through compassionate, evidence-based therapy, you can",
            ],
            cards: [
                {
                    title: "Gain Emotional Clarity",
                    description: "Understand the root causes of your struggles and learn how to navigate them.",
                },
                {
                    title: "Rewire Negative Thought Patterns",
                    description: "Replace self-criticism and fear with self-compassion and confidence.",
                },
                {
                    title: "Strengthen Relationships",
                    description: "Improve communication, resolve conflicts, and build healthier connections.",
                },
                {
                    title: "Develop Coping Strategies",
                    description: "Learn practical tools to manage stress, anxiety, and overwhelming emotions.",
                },
                {
                    title: "Heal from Trauma & Pain",
                    description: "Process past wounds in a safe and supportive environment.",
                },
            ],
        },
        {
            kind: "card-grid",
            heading: "Our Approach to Therapy",
            intro: [
                "We believe in the power of therapy and integrate a personalized, compassionate, and non-judgmental approach to foster growth, healing, and resilience. Every individual’s journey is unique, which is why we tailor our sessions to meet your specific needs and goals. Through a collaborative and empathetic process, we work together to uncover underlying issues, develop coping strategies, and achieve meaningful change. Our goal is to empower you to lead a more fulfilling and balanced life. Discover how psychotherapy can make a difference in your journey towards mental wellness.",
            ],
            cards: [
                {
                    title: "Somatic Therapy",
                    description: "Process trauma, anxiety, and emotional distress by addressing the connection between mind and body.",
                },
                {
                    title: "Mindfulness-Based Therapy",
                    description: "Learn to be present and manage stress effectively.",
                },
                {
                    title: "Trauma-Informed Therapy",
                    description: "Heal from past experiences with care and support.",
                },
                {
                    title: "Humanistic & Holistic Approaches",
                    description: "Focus on self-growth, self-compassion, and personal meaning. No matter where you are on your journey, we’re here to help you find hope, healing, and empowerment.",
                },
            ],
        },
    ],
}
