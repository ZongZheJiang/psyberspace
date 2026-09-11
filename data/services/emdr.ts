import type { Service } from "@/types/service"

export const emdr: Service = {
    slug: "emdr",
    title: "EMDR Therapy",
    tagline: "Reclaim your peace: EMDR therapy for healing trauma and renewed hope.",
    category: "Trauma & Anxiety",
    image: "/productSummaryCards/emdr.jpg",
    imageAlt: "A woman standing outdoors with her eyes closed, breathing calmly in the sunlight",
    sections: [
        {
            kind: "hero",
            eyebrow: "Trauma & Anxiety",
            heading: "Overcome Anxiety, PTSD, and Emotional Pain with Eye Movement Desensitization and Reprocessing (EMDR Therapy)",
            intro: [
                "Are you suffering from painful memories or experiences that continue to impact your daily life? If you have been through trauma or a distressing event, you may find it hard to move forward. Your emotions, thoughts, and even physical responses may be out of your control, making it hard to feel “normal” again. EMDR therapy is a powerful, evidence-based therapeutic approach that helps individuals process and heal from past traumatic experiences. Whether you’re struggling with the effects of PTSD, anxiety, depression, or other emotional challenges, EMDR therapy offers a pathway to reclaiming your life, peace of mind, and emotional wellbeing.",
            ],
            image: "/productSummaryCards/emdr.jpg",
            imageAlt: "A woman standing outdoors with her eyes closed, breathing calmly in the sunlight",
        },
        {
            kind: "prose",
            heading: "What Is EMDR Therapy?",
            body: [
                "Eye Movement Desensitization and Reprocessing (EMDR) is a specialized psychotherapy technique that helps individuals reprocess traumatic memories, reducing their emotional impact. EMDR is not about “just talking” about your trauma; it’s about actively processing and reprogramming the way your mind stores and reacts to past experiences. Through guided eye movements and structured phases, EMDR allows the brain to heal from emotional wounds naturally—just as the body recovers from physical injuries.",
            ],
        },
        {
            kind: "video",
            url: "https://www.youtube.com/watch?v=Pkfln-ZtWeY",
            title: "Introduction to EMDR Therapy",
        },
        {
            kind: "bullets",
            heading: "Benefits of EMDR Therapy",
            items: [
                "Reclaimed Peace of Mind: Feel more present in your life without the emotional weight of past trauma holding you back.",
                "Reduces Anxiety & Stress – Gain control over overwhelming feelings of fear and anxiety.",
                "Enhances Emotional Resilience – Strengthens coping mechanisms and break free from emotional patterns that no longer serve you.",
                "Fast & Effective – Many clients experience relief in fewer sessions than traditional talk therapy.",
            ],
        },
        {
            kind: "bullets",
            heading: "Who Can Benefit from EMDR?",
            intro: ["EMDR therapy is effective for individuals dealing with"],
            items: [
                "PTSD and trauma",
                "Anxiety and panic attacks",
                "Depression",
                "Grief and loss",
                "Phobias and fears",
                "Eating disorders",
                "Low self-esteem",
            ],
        },
        {
            kind: "video",
            url: "https://www.youtube.com/watch?v=1IPsBPH2M1U",
            title: "What is Eye Movement Desensitization Reprocessing Therapy?",
        },
        {
            kind: "sequence",
            heading: "What to Expect During an EMDR Session",
            steps: [
                {
                    title: "History & Assessment",
                    description: "Discuss your history, presenting concerns, and therapy goals. Together, we’ll develop a plan tailored to your needs.",
                },
                {
                    title: "Preparation",
                    description: "Be well equipped with grounding techniques to ensure emotional safety and enhance resilience.",
                },
                {
                    title: "Processing",
                    description: "Using eye movements, tapping, or audio tones, we help you process troubling memories so that they no longer trigger intense emotional reactions.",
                },
                {
                    title: "Integration",
                    description: "The session ends with relaxation techniques to reinforce positive changes and new, healthier perspectives, leading to lasting emotional relief and personal growth.",
                },
            ],
        },
    ],
}
