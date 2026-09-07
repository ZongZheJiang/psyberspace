import type { Treatment } from "@/types/treatment"

// Every treatment page as an ordered list of sections, using the same
// vocabulary as @/data/services. Array order is render order, so moving a
// section is a data edit rather than a component change.

export const TREATMENTS: Treatment[] = [
    {
        slug: "anxiety",
        name: "Anxiety",
        tagline: "From chaos to calm — take charge of your peace.",
        image: "/assets/treatments/anxiety.jpg",
        imageAlt: "A person standing outdoors with arms raised, smiling in the sunlight",
        sections: [
            {
                kind: "hero",
                eyebrow: "Anxiety",
                heading: "Overcome Anxiety & Regain Peace of Mind",
                subheading: "Effective anxiety treatment to help you feel calm and in control.",
                intro: [
                    "Anxiety can interfere with your work, relationships, and sense of ease in daily life — but you don't have to face it alone. With the right support, relief is possible, and a calmer, more grounded life is within reach.",
                ],
            },
            {
                kind: "bullet-grid",
                heading: "What is anxiety?",
                intro: "Anxiety is a natural response to stress. It becomes a problem when it turns chronic or overwhelming and starts to shape your everyday choices. Common symptoms include:",
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
                kind: "bullet-grid",
                heading: "Types of anxiety disorders we treat",
                items: [
                    "Generalized Anxiety Disorder — excessive, everyday worry",
                    "Panic Disorder — sudden, intense episodes of fear",
                    "Social Anxiety Disorder — fear of judgment in social settings",
                    "Obsessive-Compulsive Disorder — intrusive thoughts and behaviors",
                    "Post-Traumatic Stress Disorder — trauma-triggered anxiety",
                ],
            },
            {
                kind: "card-grid",
                heading: "Effective anxiety treatment options",
                cards: [
                    {
                        title: "Mindfulness & Relaxation Techniques",
                        description: "Deep breathing, meditation, and grounding exercises to reduce stress and promote calmness.",
                    },
                    {
                        title: "EMDR Therapy",
                        description: "A proven approach for processing the traumatic memories that keep anxiety alive.",
                    },
                    {
                        title: "Medication Management",
                        description: "A collaborative exploration of pharmaceutical options alongside our medical team, when appropriate.",
                    },
                ],
            },
            {
                kind: "card-grid",
                heading: "Why choose our anxiety therapy?",
                cards: [
                    {
                        title: "Personalized Treatment Plans",
                        description: "Care tailored to your individual needs and goals.",
                    },
                    {
                        title: "Evidence-Based Approaches",
                        description: "Methods backed by peer-reviewed research.",
                    },
                    {
                        title: "Compassionate Therapists",
                        description: "Experienced clinicians who meet you with warmth and without judgment.",
                    },
                ],
            },
        ],
    },
    {
        slug: "depression",
        name: "Depression",
        tagline: "Break free from depression and reclaim your life.",
        image: "/assets/treatments/depression.jpg",
        imageAlt: "A person relaxing on a sofa with their arms stretched behind their head",
        sections: [
            {
                kind: "hero",
                eyebrow: "Depression",
                heading: "Break Free from Depression & Reclaim Your Life",
                subheading: "Compassionate, effective depression therapy for lasting healing.",
                intro: [
                    "Depression is more than sadness. It's a serious mental health condition that affects your thoughts, emotions, and daily life — and it's treatable. If symptoms persist beyond two weeks, reaching out for professional support is an important first step.",
                ],
            },
            {
                kind: "bullet-grid",
                heading: "What is depression?",
                intro: "Depression can touch every part of your life. Common symptoms include:",
                items: [
                    "Persistent sadness or emptiness",
                    "Loss of interest in previously enjoyed activities",
                    "Fatigue and low energy",
                    "Sleep disturbances — insomnia or excessive sleep",
                    "Feelings of guilt, worthlessness, or hopelessness",
                    "Appetite or weight changes",
                    "Difficulty concentrating or making decisions",
                ],
            },
            {
                kind: "bullet-grid",
                heading: "Types of depression we treat",
                items: [
                    "Major Depressive Disorder (MDD) — persistent sadness and loss of pleasure",
                    "Persistent Depressive Disorder (Dysthymia) — a chronic, long-term condition",
                    "Bipolar Depression — alternating depressive and manic episodes",
                    "Postpartum Depression — depression following childbirth",
                    "Seasonal Affective Disorder (SAD) — a seasonal pattern of depression",
                ],
            },
            {
                kind: "card-grid",
                heading: "Effective depression therapy options",
                cards: [
                    {
                        title: "EMDR Therapy",
                        description: "Targeted work for trauma-related depression, helping the brain reprocess painful memories.",
                    },
                    {
                        title: "Mindfulness & Holistic Approaches",
                        description: "Meditation, breathwork, and lifestyle modifications that support emotional balance.",
                    },
                    {
                        title: "Medication Management",
                        description: "Careful, collaborative care with our medical professionals when medication is part of the plan.",
                    },
                ],
            },
            {
                kind: "card-grid",
                heading: "Why choose our depression therapy?",
                cards: [
                    {
                        title: "Personalized Treatment Plans",
                        description: "Care aligned with your individual needs.",
                    },
                    {
                        title: "Evidence-Based Techniques",
                        description: "Therapeutic methods grounded in research.",
                    },
                    {
                        title: "Compassionate Therapists",
                        description: "Experienced clinicians who walk with you toward healing.",
                    },
                ],
            },
        ],
    },
    {
        slug: "eating-disorders",
        name: "Eating Disorders",
        tagline: "Reclaim your strength, nourish your true self.",
        image: "/assets/treatments/eating-disorders.jpg",
        imageAlt: "A person looking at their reflection in a round wall mirror",
        sections: [
            {
                kind: "hero",
                eyebrow: "Eating Disorders",
                heading: "Eating Disorder Therapy: Healing Your Relationship with Food & Yourself",
                subheading: "Find freedom from disordered eating with compassionate, evidence-based support.",
                intro: [
                    "Struggling with food can feel isolating, but recovery is achievable. We offer compassionate, non-judgmental, and specialized treatment that supports you toward self-acceptance and a healthier relationship with food.",
                ],
            },
            {
                kind: "bullet-grid",
                heading: "Do you struggle with…?",
                items: [
                    "Constant thoughts about food, weight, or body image",
                    "Guilt, shame, or anxiety after eating",
                    "Binge eating, emotional eating, or loss of control around food",
                    "Strict food rules, excessive exercise, or restrictive eating",
                    "Purging behaviors like self-induced vomiting or laxative use",
                    "Feeling disconnected from your body or struggling with self-worth",
                ],
            },
            {
                kind: "card-grid",
                heading: "How eating disorder therapy can help",
                cards: [
                    {
                        title: "Heal the Root Causes",
                        description: "Explore the underlying emotional struggles — trauma, anxiety — that fuel disordered eating.",
                    },
                    {
                        title: "Rewire Negative Thought Patterns",
                        description: "Develop healthier mindsets around food and a deeper sense of self-acceptance.",
                    },
                    {
                        title: "Learn to Nourish, Not Punish",
                        description: "Cultivate a compassionate, sustainable approach to eating.",
                    },
                    {
                        title: "Build Healthy Coping Strategies",
                        description: "Replace harmful behaviors with tools for emotional regulation.",
                    },
                    {
                        title: "Embrace Your Body & Self-Worth",
                        description: "Shift from shame to confidence and self-trust.",
                    },
                ],
            },
            {
                kind: "card-grid",
                heading: "Our approach to eating disorder treatment",
                cards: [
                    {
                        title: "EMDR Therapy",
                        description: "Processing trauma and rewiring beliefs about food and the body.",
                    },
                    {
                        title: "Family-Based & Relational Therapy",
                        description: "Strengthening the support systems around you.",
                    },
                    {
                        title: "Ketamine-Assisted Therapy",
                        description: "Reducing compulsive behaviors and the anxiety that drives them.",
                    },
                    {
                        title: "Nutritional Counseling & Intuitive Eating",
                        description: "Relearning how to trust your body's cues.",
                    },
                    {
                        title: "Somatic & Sensorimotor Therapy",
                        description: "Rebuilding a safe, connected body-mind relationship.",
                    },
                ],
            },
        ],
    },
    {
        slug: "ocd-ocpd",
        name: "OCD/OCPD",
        tagline: "Quiet the loop of intrusive thoughts and compulsions.",
        image: "/assets/treatments/ocd-ocpd.png",
        imageAlt: "A person sitting calmly on a couch with their hands behind their head",
        sections: [
            {
                kind: "hero",
                eyebrow: "OCD/OCPD",
                heading: "Break Free from OCD & Regain Control of Your Life",
                subheading: "Effective, compassionate therapy for Obsessive-Compulsive Disorder.",
                intro: [
                    "OCD is far more than a preference for tidiness. It produces unwanted, intrusive thoughts and compulsive behaviors meant to relieve anxiety — a loop that can feel impossible to break. With the right care, it can loosen its grip.",
                ],
            },
            {
                kind: "bullet-grid",
                heading: "Understanding OCD: why does it feel so hard to stop?",
                intro: "If OCD is part of your life, you may recognize these struggles:",
                items: [
                    "Constant doubt and fear of making mistakes",
                    "Repetitive behaviors that interfere with daily life",
                    "Anxiety and distress when unable to complete rituals",
                    "Shame or isolation caused by obsessive thoughts",
                    "A never-ending loop of intrusive thoughts and compulsions",
                ],
            },
            {
                kind: "card-grid",
                heading: "Proven therapy options for OCD",
                cards: [
                    {
                        title: "Exposure & Response Prevention (ERP)",
                        description: "Gradually facing fears while resisting the urge to perform compulsions.",
                    },
                    {
                        title: "Cognitive Behavioral Therapy (CBT)",
                        description: "Reframing and loosening the grip of obsessive thoughts.",
                    },
                    {
                        title: "Mindfulness & Acceptance-Based Strategies",
                        description: "Managing intrusive thoughts without reacting to them.",
                    },
                    {
                        title: "Medication Support",
                        description: "A collaborative approach with our medical professionals when helpful.",
                    },
                ],
            },
            {
                kind: "bullet-grid",
                heading: "Imagine life without OCD",
                items: [
                    "Waking up without the weight of intrusive thoughts",
                    "Enjoying activities without rituals",
                    "Rebuilding relationships",
                    "Regaining confidence and self-trust",
                ],
            },
        ],
    },
    {
        slug: "palliative-care",
        name: "Palliative Care/EOL",
        tagline: "Ease the journey: compassionate ketamine therapy for palliative and end-of-life care.",
        image: "/assets/treatments/palliative-care.jpg",
        imageAlt: "A nurse holding the hands of an older person seated with a cane",
        sections: [
            {
                kind: "hero",
                eyebrow: "Palliative Care/EOL",
                heading: "Palliative Psychotherapy: Finding Peace, Comfort, and Meaning",
                subheading: "Emotional and spiritual support for life's most challenging journeys.",
                intro: [
                    "Palliative psychotherapy supports individuals navigating serious illness, chronic pain, and end-of-life transitions. It integrates emotional support with existential exploration and coping strategies to enhance quality of life — whatever the medical outcome.",
                ],
            },
            {
                kind: "bullet-grid",
                heading: "What is palliative psychotherapy?",
                intro: "This specialized approach can help with:",
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
                heading: "How palliative psychotherapy helps",
                cards: [
                    {
                        title: "Process Fear & Anxiety",
                        description: "Navigate worries about the future with compassionate guidance.",
                    },
                    {
                        title: "Find Meaning & Purpose",
                        description: "Explore spiritual and existential concerns.",
                    },
                    {
                        title: "Improve Emotional Well-Being",
                        description: "Reduce distress, depression, and isolation.",
                    },
                    {
                        title: "Strengthen Relationships",
                        description: "Foster open communication with loved ones.",
                    },
                    {
                        title: "Enhance Quality of Life",
                        description: "Develop coping tools that make room for peace and acceptance.",
                    },
                ],
            },
            {
                kind: "card-grid",
                heading: "Our approach to palliative psychotherapy",
                cards: [
                    {
                        title: "Existential & Meaning-Centered Therapy",
                        description: "Working with questions of purpose, legacy, and meaning.",
                    },
                    {
                        title: "Mindfulness & Acceptance-Based Therapy",
                        description: "Finding steadiness in the present moment.",
                    },
                    {
                        title: "Ketamine-Assisted Psychotherapy (KAP)",
                        description: "Easing existential distress and opening space for connection.",
                    },
                    {
                        title: "Grief & Bereavement Support",
                        description: "Compassionate care through loss and anticipatory mourning.",
                    },
                ],
            },
            {
                kind: "card-grid",
                heading: "Why choose our palliative psychotherapy?",
                cards: [
                    {
                        title: "Specialized Therapists",
                        description: "Clinicians experienced in palliative and end-of-life care.",
                    },
                    {
                        title: "Personalized Sessions",
                        description: "Care tailored to your individual needs and values.",
                    },
                    {
                        title: "Flexible Delivery",
                        description: "In-person, online, or at-home options.",
                    },
                    {
                        title: "Inclusive Approach",
                        description: "A non-denominational space welcoming all backgrounds.",
                    },
                ],
            },
        ],
    },
    {
        slug: "ptsd-trauma",
        name: "PTSD/Trauma",
        tagline: "Process and heal from trauma — find strength and freedom.",
        image: "/assets/treatments/ptsd-trauma.jpg",
        imageAlt: "A family embracing one another and smiling",
        sections: [
            {
                kind: "hero",
                eyebrow: "PTSD/Trauma",
                heading: "Heal from PTSD & Trauma — Find Peace, Strength, and Freedom",
                subheading: "Effective, compassionate therapy for PTSD and trauma recovery.",
                intro: [
                    "Trauma can trap you in a limiting cycle, but healing is possible. Specialized PTSD and trauma treatment helps you regain control and rebuild your life.",
                ],
            },
            {
                kind: "bullet-grid",
                heading: "What is PTSD & how does trauma affect you?",
                intro: "Traumatic experiences take many forms, including:",
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
                kind: "bullet-grid",
                heading: "Symptoms you may experience",
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
                heading: "Evidence-based PTSD & trauma therapy approaches",
                cards: [
                    {
                        title: "EMDR Therapy",
                        description: "A research-backed treatment that helps the brain reprocess traumatic memories and reduce their emotional weight.",
                    },
                    {
                        title: "Somatic Therapy & Mind-Body Healing",
                        description: "Movement, breathwork, and nervous-system regulation to address trauma held in the body.",
                    },
                    {
                        title: "Ketamine-Assisted Therapy",
                        description: "A newer approach designed for deep trauma healing and emotional breakthrough.",
                    },
                    {
                        title: "Mindfulness & Holistic Approaches",
                        description: "Meditation, guided visualization, and relaxation for stress reduction and resilience.",
                    },
                ],
            },
            {
                kind: "card-grid",
                heading: "Why choose our PTSD & trauma therapy?",
                cards: [
                    {
                        title: "Personalized, Compassionate Care",
                        description: "Treatment tailored to your individual needs.",
                    },
                    {
                        title: "Proven, Evidence-Based Methods",
                        description: "Approaches with strong research support.",
                    },
                    {
                        title: "Trauma-Informed & Safe Space",
                        description: "Non-judgmental support at every step.",
                    },
                ],
            },
        ],
    },
]

export function getTreatment(
    slug: string
): Treatment | undefined {
    return TREATMENTS.find((treatment) => treatment.slug === slug)
}
