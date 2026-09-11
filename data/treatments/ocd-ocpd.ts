import type { Treatment } from "@/types/treatment"

export const ocdOcpd: Treatment = {
    slug: "ocd-ocpd",
    name: "OCD/OCPD",
    tagline: "Quiet the loop of intrusive thoughts and compulsions.",
    image: "/assets/treatments/ocd-ocpd.png",
    imageAlt: "Neatly aligned objects on a plain surface",
    sections: [
        {
            kind: "hero",
            heading: "Break Free from OCD & Regain Control of Your Life",
            subheading: "Effective, Compassionate Therapy for Obsessive-Compulsive Disorder (OCD)",
            intro: [
                "Do you feel trapped in a cycle of intrusive thoughts and compulsive behaviors? OCD can be exhausting, overwhelming, and isolating—but you don’t have to live this way forever. With the right therapy and support, you can break free from OCD and reclaim a life filled with peace, joy, and confidence.",
            ],
            image: "/assets/treatments/ocd-ocpd.png",
            imageAlt: "Neatly aligned objects on a plain surface",
        },
        {
            kind: "bullets",
            heading: "Understanding OCD: Why Does It Feel So Hard to Stop?",
            intro: ["Obsessive-Compulsive Disorder (OCD) is more than just being overly neat or organized. It’s a condition that creates unwanted, intrusive thoughts (obsessions) and leads to compulsive behaviors performed in an attempt to reduce anxiety. Many people with OCD struggle with: But here’s the good news: OCD is highly treatable. You are not alone, and relief is possible with the right therapeutic approach."],
            items: [
                "Constant doubt and fear of making mistakes",
                "Repetitive behaviors that interfere with daily life",
                "Anxiety and distress when unable to complete rituals",
                "Feeling ashamed or isolated due to obsessive thoughts",
                "A never-ending loop of intrusive thoughts and compulsions",
            ],
        },
        {
            kind: "card-grid",
            heading: "Proven Therapy Options for OCD",
            intro: [
                "Our specialized OCD treatment programs use evidence-based, results-driven techniques to help you regain control",
            ],
            cards: [
                {
                    title: "Exposure & Response Prevention (ERP) Therapy",
                    description: "The gold standard for OCD treatment, ERP helps you gradually face fears while learning to resist compulsions—breaking the cycle of OCD.",
                },
                {
                    title: "Cognitive Behavioral Therapy (CBT)",
                    description: "CBT helps reframe obsessive thoughts, reducing their power over your emotions and behaviors.",
                },
                {
                    title: "Mindfulness & Acceptance-Based Strategies",
                    description: "Learn how to manage intrusive thoughts without reacting to them, using mindfulness and stress reduction techniques.",
                },
                {
                    title: "Medication Support",
                    description: "For some individuals, medication can be a helpful addition to therapy. We collaborate with medical professionals to ensure you receive the best care.",
                },
            ],
        },
        {
            kind: "bullets",
            heading: "Imagine Life Without OCD",
            intro: ["EMDR therapy is effective for individuals dealing with"],
            items: [
                "Waking up without the weight of intrusive thoughts",
                "Feeling free to enjoy everyday activities without rituals",
                "Rebuilding relationships without OCD interfering",
                "Gaining confidence and trusting yourself again",
            ],
        },
    ],
}
