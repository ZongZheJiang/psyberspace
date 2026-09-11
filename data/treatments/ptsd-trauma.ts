import type { Treatment } from "@/types/treatment"

export const ptsdTrauma: Treatment = {
    slug: "ptsd-trauma",
    name: "PTSD/Trauma",
    tagline: "Process and heal from trauma — find strength and freedom.",
    image: "/assets/treatments/ptsd-trauma.jpg",
    imageAlt: "A person standing at the edge of a quiet lake at sunrise",
    sections: [
        {
            kind: "hero",
            heading: "Heal from PTSD & Trauma – Find Peace, Strength, and Freedom",
            subheading: "Effective, Compassionate Therapy for PTSD & Trauma Recovery",
            intro: [
                "Living with trauma can feel like being trapped in a cycle of fear, anxiety, and painful memories. If you’re struggling with PTSD, past trauma, or emotional wounds, know that healing is possible. Our specialized PTSD and trauma treatment helps you regain control, feel safe, and rebuild your life with confidence.",
            ],
            image: "/assets/treatments/ptsd-trauma.jpg",
            imageAlt: "A person standing at the edge of a quiet lake at sunrise",
        },
        {
            kind: "bullets",
            heading: "What Is PTSD & How Does Trauma Affect You?",
            intro: ["Post-Traumatic Stress Disorder (PTSD) and trauma-related symptoms can develop after experiencing or witnessing distressing events such as"],
            items: [
                "Childhood abuse or neglect",
                "Combat or military-related trauma",
                "Sexual assault or domestic violence",
                "Serious accidents or medical trauma",
                "Sudden loss of a loved one",
                "Natural disasters or life-threatening events",
            ],
        },
        {
            kind: "bullets",
            heading: "Trauma affects both the mind and body, leading to symptoms like",
            intro: ["If these symptoms are interfering with your life, specialized trauma therapy can help you heal."],
            items: [
                "Flashbacks or intrusive memories",
                "Nightmares and sleep disturbances",
                "Anxiety, panic attacks, or emotional numbness",
                "Hypervigilance and difficulty feeling safe",
                "Avoidance of certain places, people, or memories",
                "Depression, guilt, or self-blame",
            ],
        },
        {
            kind: "card-grid",
            heading: "Our Evidence-Based PTSD & Trauma Therapy Approaches",
            intro: [
                "We use proven, research-backed methods to help you process trauma and reclaim your life.",
            ],
            cards: [
                {
                    title: "EMDR Therapy (Eye Movement Desensitization & Reprocessing)",
                    description: "A powerful, evidence-based treatment that helps the brain reprocess traumatic memories and reduce their emotional impact.",
                },
                {
                    title: "Somatic Therapy & Mind-Body Healing",
                    description: "Addresses trauma stored in the body through movement, breathwork, and nervous system regulation.",
                },
                {
                    title: "Ketamine-Assisted Therapy (For Deep Trauma Healing)",
                    description: "A groundbreaking approach that helps unlock repressed trauma and promote emotional healing.",
                },
                {
                    title: "Mindfulness & Holistic Approaches",
                    description: "Meditation, guided visualization, and relaxation techniques to reduce stress and improve emotional resilience.",
                },
            ],
        },
        {
            kind: "bullets",
            heading: "Why Choose Our PTSD & Trauma Therapy?",
            items: [
                "Personalized, Compassionate Care – Tailored therapy to fit your unique needs and healing journey.",
                "Proven, Evidence-Based Methods – Effective treatments backed by research.",
                "Trauma-Informed & Safe Space – We create a supportive, non-judgmental environment for healing.",
            ],
        },
    ],
}
