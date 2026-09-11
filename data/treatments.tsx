import type { Treatment } from "@/types/treatment"

// Every treatment page as an ordered list of sections, using the same section
// vocabulary as @/data/services. Copy is transcribed from the live condition
// pages, which WordPress files under /services/ but which this site groups
// under /treatments/. Mid-page booking CTAs are omitted; the page template
// closes with a single CtaSection.

export const TREATMENTS: Treatment[] = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
]

export function getTreatment(
    slug: string
): Treatment | undefined {
    return TREATMENTS.find((treatment) => treatment.slug === slug)
}
