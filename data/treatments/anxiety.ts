import type { Treatment } from "@/types/treatment"

export const anxiety: Treatment = {
    slug: "anxiety",
    name: "Anxiety",
    tagline: "From chaos to calm — take charge of your peace.",
    image: "/assets/treatments/anxiety.jpg",
    imageAlt: "A person sitting calmly by a window",
    sections: [
        {
            kind: "hero",
            heading: "Overcome Anxiety & Regain Peace of Mind",
            subheading: "Effective Anxiety Treatment to Help You Feel Calm & In Control",
            intro: [
                "Do you struggle with constant worry, racing thoughts, or overwhelming fear? Anxiety can affect every aspect of your life—from relationships to work and overall well-being. The good news is that anxiety is treatable, and you don’t have to face it alone.",
            ],
            image: "/assets/treatments/anxiety.jpg",
            imageAlt: "A person sitting calmly by a window",
        },
        {
            kind: "bullets",
            heading: "What Is Anxiety?",
            intro: ["Anxiety is a natural response to stress, but when it becomes chronic or overwhelming, it can interfere with daily life. Common symptoms of anxiety include"],
            items: [
                "Persistent worry or fear",
                "Difficulty concentrating",
                "Rapid heartbeat or shortness of breath",
                "Trouble sleeping",
                "Muscle tension or restlessness",
                "Panic attacks",
            ],
        },
        {
            kind: "bullets",
            heading: "Types of Anxiety Disorders",
            intro: ["EMDR therapy is effective for individuals dealing with"],
            items: [
                "Generalized Anxiety Disorder (GAD) – Excessive worry about everyday situations.",
                "Panic Disorder – Sudden, intense episodes of fear with physical symptoms.",
                "Social Anxiety Disorder – Fear of judgment or embarrassment in social situations.",
                "Obsessive-Compulsive Disorder (OCD) – Uncontrollable thoughts and repetitive behaviors.",
                "Post-Traumatic Stress Disorder (PTSD) – Anxiety triggered by past trauma.",
            ],
        },
        {
            kind: "card-grid",
            heading: "Effective Anxiety Treatment Options",
            intro: [
                "Our evidence-based therapies help you manage anxiety and regain control of your life. Treatment options include",
            ],
            cards: [
                {
                    title: "Mindfulness & Relaxation Techniques",
                    description: "Learn deep breathing, meditation, and grounding exercises to reduce stress and promote calmness.",
                },
                {
                    title: "EMDR Therapy",
                    description: "A proven approach for processing traumatic memories that contribute to anxiety.",
                },
                {
                    title: "Medication Management",
                    description: "For those who may benefit, we work with medical professionals to explore safe and effective medication options.",
                },
            ],
        },
        {
            kind: "bullets",
            heading: "Why Choose Our Anxiety Therapy?",
            items: [
                "Personalized Treatment Plans – Tailored to your unique needs and goals.",
                "Evidence-Based Approaches – Backed by research and proven to work.",
                "Compassionate & Experienced Therapists – Dedicated to your well-being.",
            ],
        },
    ],
}
