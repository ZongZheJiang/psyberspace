import type { Treatment } from "@/types/treatment"

export const eatingDisorders: Treatment = {
    slug: "eating-disorders",
    name: "Eating Disorders",
    tagline: "Reclaim your strength, nourish your true self.",
    image: "/assets/treatments/eating-disorders.jpg",
    imageAlt: "A man looking thoughtfully into a mirror",
    sections: [
        {
            kind: "hero",
            heading: "Eating Disorder Therapy: Healing Your Relationship with Food & Yourself",
            subheading: "Find Freedom from Disordered Eating with Compassionate, Evidence-Based Support",
            intro: [
                "If you’re struggling with an eating disorder, body image issues, or an unhealthy relationship with food, know that you are not alone, and healing is possible. Whether you feel trapped in cycles of restriction, binge eating, purging, emotional eating, or obsessive thoughts about food and weight, therapy can help you break free and reclaim your life.",
                "At our practice, we provide compassionate, non-judgmental, and specialized treatment to support your journey toward self-acceptance, emotional well-being, and a healthier relationship with food and your body.",
            ],
            image: "/assets/treatments/eating-disorders.jpg",
            imageAlt: "A man looking thoughtfully into a mirror",
        },
        {
            kind: "bullets",
            heading: "Do You Struggle With…?",
            intro: ["If you see yourself in these struggles, you are not alone—help and healing are within reach."],
            items: [
                "Constant thoughts about food, weight, or body image?",
                "Feeling guilt, shame, or anxiety after eating?",
                "Binge eating, emotional eating, or loss of control around food?",
                "Strict food rules, excessive exercise, or restrictive eating habits?",
                "Purging behaviors like self-induced vomiting or laxative use?",
                "Feeling disconnected from your body or struggling with self-worth?",
            ],
        },
        {
            kind: "card-grid",
            heading: "How Eating Disorder Therapy Can Help",
            intro: [
                "Eating disorders aren’t just about food—they’re about deep emotional pain, anxiety, perfectionism, and the need for control or comfort. Through therapy, you can",
            ],
            cards: [
                {
                    title: "Heal the Root Causes",
                    description: "Explore underlying emotional struggles like trauma, anxiety, and self-worth issues.",
                },
                {
                    title: "Rewire Negative Thought Patterns",
                    description: "Develop a healthier mindset around food, body image, and self-acceptance.",
                },
                {
                    title: "Learn to Nourish, Not Punish",
                    description: "Cultivate a compassionate approach to eating and self-care.",
                },
                {
                    title: "Build Healthy Coping Strategies",
                    description: "Replace harmful behaviors with tools for emotional regulation and resilience.",
                },
                {
                    title: "Embrace Your Body & Self-Worth",
                    description: "Shift from body shame to body appreciation and confidence. You deserve a life free from the grip of disordered eating—and we’re here to help you get there.",
                },
            ],
        },
        {
            kind: "bullets",
            heading: "Our Approach to Eating Disorder Treatment",
            intro: ["We take a holistic, trauma-informed, and evidence-based approach to eating disorder recovery, offering: We meet you where you are, offering a compassionate, personalized treatment plan that supports your unique healing journey."],
            items: [
                "EMDR Therapy – help process underlying trauma, rewire negative beliefs about food and body image, and reduce emotional triggers that drive disordered eating behaviors.",
                "Family-Based & Relational Therapy – Strengthen support systems for long-term recovery",
                "Ketamine-assisted therapy for eating disorders helps reduce compulsive behaviors, alleviate anxiety and depression, and promote neuroplasticity, allowing for deeper healing and a healthier relationship with food and body image.",
                "Nutritional Counseling & Intuitive Eating – Develop a balanced and peaceful relationship with food.",
                "Somatic & Sensorimotor Therapy – Heal the body-mind connection and address stored trauma.",
            ],
        },
    ],
}
