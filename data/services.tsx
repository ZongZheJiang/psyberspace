import { Service } from "@/types/service"

// Copy sourced from psyberspacetherapy.com/our-services and its service
// subpages. Slugs mirror the tails in @/data/navbarServices so the navbar
// dropdown links resolve to /services/[slug]. TRIP™ and GRIP™ are the center's
// branded names for its trauma-processing and group-retreat pathways.
export const SERVICES: Service[] = [
    {
        slug: "emdr",
        title: "EMDR Therapy",
        tagline:
            "Reclaim your peace: EMDR therapy for healing trauma and renewed hope.",
        category: "Trauma & Anxiety",
        heroHeading:
            "Overcome Anxiety, PTSD, and Emotional Pain with Eye Movement Desensitization and Reprocessing (EMDR)",
        intro: [
            "Are you suffering from painful memories or experiences that continue to impact your daily life? EMDR is an evidence-based approach that helps individuals process traumatic experiences — whether you are living with PTSD, anxiety, depression, or other emotional challenges.",
        ],
        whatIs: {
            heading: "What is EMDR therapy?",
            body: [
                "Eye Movement Desensitization and Reprocessing (EMDR) is a specialized psychotherapy technique that helps individuals reprocess traumatic memories, reducing their emotional impact.",
                "It goes beyond talking about trauma — it actively reprograms how the mind stores and reacts to difficult experiences, so they no longer hold the same charge.",
            ],
        },
        steps: {
            heading: "How it works",
            items: [
                {
                    title: "History & Assessment",
                    description:
                        "We discuss your background and the goals you want to reach in therapy.",
                },
                {
                    title: "Preparation",
                    description:
                        "You learn grounding techniques that keep you emotionally safe throughout the work.",
                },
                {
                    title: "Processing",
                    description:
                        "Using guided eye movements, tapping, or audio tones, we reprocess distressing memories.",
                },
                {
                    title: "Integration",
                    description:
                        "Relaxation techniques reinforce the positive changes and lock in new, adaptive beliefs.",
                },
            ],
        },
        lists: [
            {
                heading: "Conditions it treats",
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
                heading: "Benefits",
                items: [
                    "Reclaimed peace of mind",
                    "Reduced anxiety and stress",
                    "Enhanced emotional resilience",
                    "Often faster than traditional talk therapy",
                ],
            },
        ],
        whoFor: {
            heading: "Who it's for",
            items: [
                "Anyone carrying painful or intrusive memories",
                "People living with PTSD, anxiety, or depression",
                "Those seeking to break free from long-standing emotional patterns",
            ],
        },
    },
    {
        slug: "fbt",
        title: "Family Based Therapy (FBT)",
        tagline:
            "Strengthening bonds, healing together: family-centered care for eating disorders.",
        category: "Eating Disorders",
        heroHeading:
            "Healing Together: A Family-Centered Approach to Overcoming Anorexia",
        intro: [
            "Anorexia nervosa is a serious mental health condition that affects the entire family, not just the individual. Family-Based Therapy is an evidence-based approach that empowers parents and caregivers to take an active role in their child's recovery.",
        ],
        whatIs: {
            heading: "What is Family-Based Therapy?",
            body: [
                "Family-Based Therapy (FBT), also known as the Maudsley Method, is the gold-standard treatment for adolescents with anorexia nervosa.",
                "Unlike individual therapy, it actively involves parents and caregivers as the primary support in restoring their child's health.",
            ],
        },
        steps: {
            heading: "The three phases",
            items: [
                {
                    title: "Nutritional Restoration",
                    description:
                        "Parents take charge of meals and nutrition while therapy addresses eating-related distress.",
                },
                {
                    title: "Gradual Return to Independence",
                    description:
                        "As health stabilizes, responsibility around eating shifts back to the child.",
                },
                {
                    title: "Developing Healthy Autonomy",
                    description:
                        "The individual regains independence while the family works to prevent relapse.",
                },
            ],
        },
        lists: [
            {
                heading: "Why FBT",
                items: [
                    "Highest success rate for adolescent anorexia",
                    "Strengthens family relationships",
                    "Reduces the need for hospitalization",
                    "Supports lasting, long-term recovery",
                ],
            },
        ],
        whoFor: {
            heading: "Who it's for",
            items: [
                "Adolescents and young adults with anorexia nervosa",
                "Families willing to participate actively in recovery",
                "Those who need structured meal support",
                "Parents seeking eating-disorder guidance",
            ],
        },
    },
    {
        slug: "kap",
        title: "Ketamine Assisted Psychotherapy (KAP)",
        tagline:
            "Unlock new perspectives: ketamine-assisted therapy for depression, anxiety, and trauma.",
        category: "Psychedelic-Assisted",
        heroHeading:
            "Ketamine Therapy for Healing: A New Path to Overcome Depression, Anxiety, and Trauma",
        intro: [
            "Psyberspace provides Ketamine-Assisted Psychotherapy through partnerships with medical prescribers. The medical team manages eligibility, treatment planning, prescribing, and outcome monitoring, while our therapists guide the psychotherapy that surrounds each session.",
        ],
        whatIs: {
            heading: "What is ketamine therapy?",
            body: [
                "Ketamine therapy is an innovative treatment that uses low-dose ketamine to help rewire the brain and promote healing.",
                "Unlike traditional antidepressants, it works rapidly and effectively to provide relief when other treatments may have fallen short — stimulating brain function and promoting new neural connections that help clients break free from intrusive thoughts, self-sabotaging behaviors, emotional outbursts, and flashbacks.",
            ],
        },
        steps: {
            heading: "The treatment process",
            items: [
                {
                    title: "Initial Medical Consultation",
                    description:
                        "The medical team reviews your history, provides education, determines eligibility, and develops a personalized prescription and monitoring plan.",
                },
                {
                    title: "Preparation Sessions",
                    description:
                        "We align on the process and set intentions before your first dosing session.",
                },
                {
                    title: "KAP Dosing Session",
                    description:
                        "Lasting 1–2 hours via telehealth, you record vitals and self-administer a ketamine lozenge while reclining with an eye mask and calming music. Your therapist stays present, with an on-site chaperone for added support.",
                },
                {
                    title: "Integration Sessions",
                    description:
                        "Follow-up therapy sessions help you review insights and prepare for subsequent journeys.",
                },
                {
                    title: "Follow-up Medical Consultations",
                    description:
                        "Quarterly check-ins, at minimum, monitor outcomes and handle prescription refills.",
                },
            ],
        },
        lists: [
            {
                heading: "Conditions it treats",
                items: [
                    "Severe depression",
                    "Anxiety and panic disorders",
                    "Post-traumatic stress disorder (PTSD)",
                    "Chronic pain",
                    "Addiction",
                ],
            },
            {
                heading: "Key benefits",
                items: [
                    "Rapid relief — effects can be felt within a single session",
                    "Non-addictive when medically supervised",
                    "Effective for treatment-resistant conditions",
                    "Sustained healing through neural pathway reset",
                ],
            },
        ],
        note: "Ketamine is legal in all 50 states. All dosing takes place under medical supervision in a monitored clinical setting.",
    },
    {
        slug: "group-kap",
        title: "Group KAP",
        tagline:
            "Collective healing: transformative journeys with group ketamine therapy.",
        category: "Psychedelic-Assisted",
        heroHeading: "Group Ketamine-Assisted Psychotherapy",
        intro: [
            "Group ketamine-assisted therapy offers a powerful, community-driven approach to emotional healing — blending the transformative effects of ketamine with the support of a therapeutic group setting.",
        ],
        whatIs: {
            heading: "What is Group KAP?",
            body: [
                "Group KAP combines ketamine's neurochemical effects with structured group therapy. Sessions include at least four participants and up to two therapists in a controlled environment designed for safe introspection and emotional work.",
            ],
        },
        steps: {
            heading: "How it works",
            items: [
                {
                    title: "Pre-session Screening",
                    description:
                        "A medical intake and psychological screening confirm that group work is right for you.",
                },
                {
                    title: "Guided Administration",
                    description:
                        "Ketamine is administered in a controlled setting, held by trained therapists.",
                },
                {
                    title: "Integration Therapy",
                    description:
                        "Group members engage in therapist-led discussions to reflect on insights, process emotions, and develop strategies.",
                },
            ],
        },
        lists: [
            {
                heading: "Key benefits",
                items: [
                    "Connect with others — find support, validation, and shared understanding",
                    "Gain diverse perspectives from others navigating similar challenges",
                    "Enhance self-awareness with group feedback",
                    "Build resilience and interpersonal strength",
                ],
            },
        ],
        whoFor: {
            heading: "Who it's for",
            items: [
                "Individuals experiencing depression, anxiety, trauma, or PTSD",
                "Those struggling with loneliness or disconnection",
                "Anyone seeking personal growth or feeling stuck in their healing",
            ],
        },
    },
    {
        slug: "medication-management",
        title: "Medication Management",
        tagline:
            "Precision care: tailored medication management for your mental wellness.",
        category: "Psychiatric Care",
        heroHeading:
            "Medication Management for Mental Health: Personalized Support for Your Well-Being",
        intro: [
            "Managing mental health symptoms can feel overwhelming, but the right medication — paired with therapy and holistic care — can provide the relief and balance you need. We offer expert guidance, ongoing monitoring, and personalized adjustments, partnering with Journey Clinical for safe and effective care.",
        ],
        whatIs: {
            heading: "What is medication management?",
            body: [
                "Medication management is a collaborative process in which a licensed psychiatric provider evaluates your symptoms, prescribes and adjusts medications, monitors side effects and effectiveness, and provides ongoing support to optimize your treatment plan.",
            ],
        },
        steps: {
            heading: "How it works",
            items: [
                {
                    title: "Evaluation",
                    description:
                        "Your provider reviews your symptoms and medical history in depth.",
                },
                {
                    title: "Prescribe & Adjust",
                    description:
                        "Psychiatric medications are prescribed and fine-tuned as your needs change.",
                },
                {
                    title: "Monitor",
                    description:
                        "Side effects and effectiveness are tracked closely over time.",
                },
                {
                    title: "Ongoing Support",
                    description:
                        "Regular check-ins keep your treatment plan aligned with your goals.",
                },
            ],
        },
        lists: [
            {
                heading: "What we address",
                items: [
                    "Anxiety and panic disorders",
                    "Depression and mood disorders",
                    "ADHD and focus challenges",
                    "PTSD and trauma",
                    "Obsessive-compulsive disorder",
                    "Sleep disorders",
                ],
            },
        ],
        whoFor: {
            heading: "Who it's for",
            items: [
                "Anyone struggling with persistent mental health challenges",
                "Those seeking a medication consultation to determine the best course of action",
                "Clients who want medication paired with therapy and holistic care",
            ],
        },
    },
    {
        slug: "mdma",
        title: "MDMA Therapy",
        tagline:
            "Discover connection: MDMA-assisted therapy for profound healing.",
        category: "Psychedelic-Assisted",
        heroHeading:
            "MDMA-Assisted Therapy: A Breakthrough Approach for Healing & Transformation",
        intro: [
            "Unlock deep emotional healing with psychedelic-assisted therapy. MDMA-assisted therapy is a breakthrough approach to treating PTSD, trauma, anxiety, depression, and relationship issues through carefully guided sessions.",
        ],
        whatIs: {
            heading: "What is MDMA-assisted therapy?",
            body: [
                "MDMA is a psychoactive compound known for enhancing emotional openness, reducing fear, and promoting deep psychological healing.",
                "In a therapeutic container, it helps individuals process traumatic memories without overwhelming distress, reduce fear-based responses, foster self-acceptance and compassion, enhance trust and communication in relationships, and break through treatment-resistant PTSD and anxiety.",
            ],
        },
        lists: [
            {
                heading: "What it helps with",
                items: [
                    "PTSD and trauma recovery",
                    "Anxiety and depression",
                    "Relationship and attachment issues",
                    "Existential and emotional struggles",
                ],
            },
            {
                heading: "The evidence",
                items: [
                    "In clinical trials, 67% of participants with severe PTSD experienced significant symptom reduction after three MDMA-assisted therapy sessions.",
                ],
            },
        ],
        note: "The FDA declined commercial authorization in August 2024 and requested additional trials. MDMA-assisted therapy is not available until at least 90 days after FDA approval is achieved.",
    },
    {
        slug: "psilocybin",
        title: "Psilocybin Therapy",
        tagline:
            "A groundbreaking avenue for treatment-resistant depression and growth.",
        category: "Psychedelic-Assisted",
        heroHeading:
            "Psilocybin Therapy: A Transformational Path to Healing & Growth",
        intro: [
            "Discover the power of psychedelic-assisted therapy for mental health and well-being. Psilocybin therapy is revolutionizing mental health treatment, offering profound healing for depression, anxiety, PTSD, trauma, and personal growth.",
        ],
        whatIs: {
            heading: "What is psilocybin therapy?",
            body: [
                "Psilocybin-assisted therapy is a structured, guided experience in which individuals take psilocybin under the supervision of trained professionals to explore the subconscious, heal past wounds, and gain powerful insights.",
            ],
        },
        lists: [
            {
                heading: "Benefits",
                items: [
                    "Break free from depression and anxiety",
                    "Heal trauma and PTSD",
                    "Gain clarity and self-understanding",
                    "Reduce existential anxiety and fear of death",
                    "Enhance emotional connection and spiritual growth",
                ],
            },
            {
                heading: "The evidence",
                items: [
                    "Research from Johns Hopkins, NYU, and MAPS shows benefits for treatment-resistant depression, anxiety, end-of-life distress, PTSD, addiction, and overall mental well-being.",
                ],
            },
        ],
        note: "Psilocybin therapy is currently not approved by any regulatory agency in nearly all states and is only available through clinical trials.",
    },
    {
        slug: "psychotherapy",
        title: "Psychotherapy",
        tagline:
            "Empower your mind: transformative psychotherapy for a balanced life.",
        category: "Talk Therapy",
        heroHeading: "Psychotherapy for Healing, Growth & Emotional Well-Being",
        intro: [
            "Find clarity, overcome challenges, and reclaim your life. Psychotherapy offers a safe, supportive space to explore your emotions, gain self-awareness, and develop the tools to navigate life's challenges.",
        ],
        lists: [
            {
                heading: "What we address",
                items: [
                    "Persistent anxiety and stress",
                    "Depression and low self-worth",
                    "Relationship and family struggles",
                    "Grief and loss",
                    "Past trauma and PTSD",
                    "Feeling lost or stuck",
                ],
            },
            {
                heading: "Our approaches",
                items: [
                    "Somatic therapy",
                    "Mindfulness-based therapy",
                    "Trauma-informed therapy",
                    "Humanistic and holistic approaches",
                ],
            },
            {
                heading: "Benefits",
                items: [
                    "Gain emotional clarity",
                    "Rewire negative thought patterns",
                    "Strengthen relationships",
                    "Develop coping strategies",
                    "Heal from trauma and pain",
                ],
            },
        ],
        whoFor: {
            heading: "Our philosophy",
            items: [
                "A personalized, compassionate, and non-judgmental approach",
                "Sessions tailored to your individual needs and goals",
                "A collaborative, empathetic process that fosters growth and resilience",
            ],
        },
    },
    {
        slug: "relationship-family-kap",
        title: "Relationship/Family KAP",
        tagline:
            "Revitalize connections: ketamine-assisted psychotherapy for couples and families.",
        category: "Psychedelic-Assisted",
        heroHeading:
            "Heal & Strengthen Your Bonds with Ketamine-Assisted Therapy",
        intro: [
            "Transform conflict, deepen connections, and find healing together. Ketamine-assisted therapy combines the therapeutic benefits of ketamine with professional guidance to facilitate emotional breakthroughs, self-awareness, and healing within your closest relationships.",
        ],
        lists: [
            {
                heading: "What it helps you do",
                items: [
                    "Reduce emotional reactivity and defensiveness",
                    "Gain new perspectives on conflicts and relationship patterns",
                    "Process past trauma or deep-seated wounds affecting relationships",
                    "Enhance empathy, communication, and emotional connection",
                    "Let go of resentment, fear, and unresolved pain",
                ],
            },
        ],
        steps: {
            heading: "How it works",
            items: [
                {
                    title: "Assessment",
                    description:
                        "A medical intake and psychological assessment confirm fit; individual KAP sessions are recommended beforehand.",
                },
                {
                    title: "Guided Sessions",
                    description:
                        "Structured, professionally guided experiences combine ketamine therapy with relationship counseling techniques.",
                },
                {
                    title: "Integration",
                    description:
                        "Together you apply insights to couples dynamics, family patterns, and attachment wounds.",
                },
            ],
        },
        whoFor: {
            heading: "Who it's for",
            items: [
                "Couples navigating marital conflict",
                "Families experiencing tension",
                "Individuals addressing past trauma or emotional disconnection affecting their relationships",
            ],
        },
    },
    {
        slug: "sensorimotor",
        title: "Sensorimotor Psychotherapy",
        tagline:
            "Exploring Sensorimotor Psychotherapy for trauma healing through the body.",
        category: "Somatic & Trauma",
        heroHeading:
            "Sensorimotor Psychotherapy: Healing Trauma Through the Mind-Body Connection",
        intro: [
            "Trauma isn't just stored in the mind — it's held in the body. Sensorimotor Psychotherapy is a body-centered approach that helps individuals process unresolved trauma, anxiety, and emotional distress by integrating the mind and body in healing.",
        ],
        whatIs: {
            heading: "What is Sensorimotor Psychotherapy?",
            body: [
                "Sensorimotor Psychotherapy integrates body awareness, mindfulness, movement and posture work, and nervous-system regulation. It helps people break free from trauma responses and emotional dysregulation through somatic techniques rather than talk therapy alone.",
            ],
        },
        steps: {
            heading: "The three phases",
            items: [
                {
                    title: "Establishing Safety & Awareness",
                    description:
                        "You learn to observe and stay with body sensations from a place of safety.",
                },
                {
                    title: "Processing & Healing Trauma",
                    description:
                        "Together we identify and gently release patterns stuck in the body.",
                },
                {
                    title: "Integration & Growth",
                    description:
                        "You strengthen resilience and a renewed sense of empowerment.",
                },
            ],
        },
        lists: [
            {
                heading: "Conditions it treats",
                items: [
                    "Trauma and PTSD",
                    "Chronic anxiety and stress",
                    "Depression and emotional numbness",
                    "Dissociation and disconnection",
                    "Relationship and attachment issues",
                    "Unexplained physical tension and pain",
                ],
            },
            {
                heading: "Key benefits",
                items: [
                    "Body-based healing",
                    "Works beyond words",
                    "Regulates emotions",
                    "Trauma-informed and gentle",
                ],
            },
        ],
    },
    {
        slug: "trip",
        title: "TRIP™ Trauma Recovery Integration Pathway",
        tagline:
            "Heal from PTSD and trauma — find peace, strength, and freedom.",
        category: "Trauma Recovery",
        heroHeading:
            "TRIP™ — Trauma Recovery Integration Pathway: Find Peace, Strength, and Freedom",
        intro: [
            "Living with trauma can feel like being trapped in a cycle of fear, anxiety, and painful memories. The Trauma Recovery Integration Pathway (TRIP™) is our specialized, phased program for individuals experiencing PTSD and trauma-related symptoms.",
        ],
        whatIs: {
            heading: "What TRIP™ addresses",
            body: [
                "TRIP™ supports recovery from trauma rooted in experiences such as childhood abuse or neglect, combat or military-related trauma, sexual assault or domestic violence, and other distressing events — along with the flashbacks, nightmares, anxiety, hypervigilance, and emotional numbness that follow.",
            ],
        },
        steps: {
            heading: "How it works",
            items: [
                {
                    title: "EMDR Therapy",
                    description:
                        "Reprocess distressing memories so they lose their emotional charge.",
                },
                {
                    title: "Somatic Therapy",
                    description:
                        "Address trauma stored in the body, not just the mind.",
                },
                {
                    title: "Ketamine-Assisted Therapy",
                    description:
                        "Support deep trauma healing where other approaches have stalled.",
                },
                {
                    title: "Mindfulness & Holistic Approaches",
                    description:
                        "Use meditation and visualization to restore a sense of safety.",
                },
            ],
        },
        lists: [
            {
                heading: "What recovery looks like",
                items: [
                    "Regain control and feel safe again",
                    "Quiet flashbacks, nightmares, and hypervigilance",
                    "Rebuild your life with confidence",
                ],
            },
        ],
        whoFor: {
            heading: "Who it's for",
            items: [
                "Those living with PTSD or past trauma",
                "Anyone whose symptoms are interfering with daily life",
                "People ready to move from surviving to healing",
            ],
        },
    },
    {
        slug: "grip",
        title: "GRIP™ Group Recovery Integration Pathway",
        tagline:
            "Transform together: ketamine-assisted group retreats for deep healing and connection.",
        category: "Group Retreats",
        heroHeading:
            "GRIP™ — Group Recovery Integration Pathway: Ketamine-Assisted Retreats for Deep Healing and Connection",
        intro: [
            "The Group Recovery Integration Pathway (GRIP™) brings people together for immersive, ketamine-assisted therapy retreats — specialized programs where participants use ketamine in a controlled, guided setting as part of a broader therapeutic experience.",
        ],
        whatIs: {
            heading: "What GRIP™ retreats are",
            body: [
                "During a retreat, participants move through a series of ketamine sessions combined with supportive practices such as psychotherapy, meditation, and mindfulness, held in serene and supportive environments.",
                "The goal is a holistic approach to mental health, where the therapeutic use of ketamine is complemented by other forms of treatment and personal-growth practices.",
            ],
        },
        lists: [
            {
                heading: "What it supports",
                items: [
                    "Relief from depression",
                    "Relief from anxiety",
                    "Relief from PTSD",
                    "Personal growth and connection",
                ],
            },
        ],
        note: "GRIP™ retreats are coming soon to The Psyberspace Center for Psychedelic Therapy. Join our mailing list to hear when dates are announced.",
    },
]

export function getService(slug: string): Service | undefined {
    return SERVICES.find((service) => service.slug === slug)
}
