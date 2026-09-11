import type { Service } from "@/types/service"

// Every service page as an ordered list of sections. Array order is render
// order, so moving a section is a data edit rather than a component change.
//
// Copy is transcribed from the live subpages under
// psyberspacetherapy.com/services (TRIP™ and GRIP™ have their own top-level
// pages). The repeated mid-page "Book an Appointment" blocks are deliberately
// not carried over: the page template closes with a single CtaSection.
// Slugs mirror the tails in @/data/navbarServices so the navbar dropdown
// links resolve to /services/[slug].

export const SERVICES: Service[] = [
    {
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
    },
    {
        slug: "fbt",
        title: "Family Based Therapy (FBT)",
        tagline: "Healing together: a family-centered approach to overcoming anorexia.",
        category: "Family & Relationships",
        image: "/productSummaryCards/family_based_therapy.jpg",
        imageAlt: "A family sharing a meal together at a sunlit table",
        sections: [
            {
                kind: "hero",
                eyebrow: "Family & Relationships",
                heading: "Healing Together: A Family-Centered Approach to Overcoming Anorexia",
                intro: [
                    "Anorexia nervosa, the second deadliest mental health condition, can be a deeply distressing and complex disorder, affecting not just the individual but the entire family. Family-Based Therapy (FBT) is an evidence-based approach that empowers parents and caregivers to take an active role in their child’s recovery. With the right support, structure, and guidance, families can help their loved ones restore healthy eating patterns, rebuild trust, and regain emotional well-being.",
                ],
                image: "/productSummaryCards/family_based_therapy.jpg",
                imageAlt: "A family sharing a meal together at a sunlit table",
            },
            {
                kind: "bullets",
                heading: "What Is Family-Based Therapy (FBT)?",
                intro: ["Family-Based Therapy (FBT), also known as the Maudsley Method, is the gold standard treatment for adolescents with anorexia nervosa. Unlike traditional therapy, which focuses solely on the individual, FBT actively involves parents and caregivers in the recovery process."],
                items: [
                    "Empowers families to take control of nutritional rehabilitation",
                    "Provides structured meal support to help restore healthy eating habits",
                    "Reduces family conflict and guilt while fostering a supportive environment",
                    "Encourages open communication and emotional healing",
                    "Recognizes the crucial role families play in a child’s recovery from anorexia",
                    "Gradually returns independence to the individual as recovery progresses",
                ],
            },
            {
                kind: "prose",
                heading: "How Does Family-Based Therapy for Anorexia Work?",
                body: [
                    "FBT is typically structured into three key phases to guide families through recovery",
                ],
            },
            {
                kind: "lists",
                groups: [
                    {
                        heading: "Phase 1: Nutritional Restoration",
                        items: [
                            "Parents take charge of meal planning and supervision to ensure their child is getting adequate nutrition.",
                            "Therapy sessions provide guidance on managing mealtime challenges and emotional distress associated with eating.",
                            "The focus is on weight restoration and medical stabilization, while addressing fears around food.",
                        ],
                    },
                    {
                        heading: "Phase 2: Gradual Return to Independence",
                        items: [
                            "As the child’s health stabilizes, responsibility for eating decisions is gradually transferred back to them.",
                            "Families work on rebuilding self-trust, confidence, and emotional resilience.",
                            "Therapy continues to address underlying anxiety, perfectionism, and body image concerns.",
                        ],
                    },
                    {
                        heading: "Phase 3: Developing Healthy Autonomy",
                        items: [
                            "The individual regains full independence over their eating and self-care habits.",
                            "The focus shifts to preventing relapse and reinforcing a healthy relationship with food and body image.",
                            "Families continue to provide emotional support and open communication as the child transitions into long-term recovery.",
                        ],
                    },
                    {
                        heading: "Clinically Proven",
                        items: [
                            "Research shows FBT has the highest success rate for treating adolescent anorexia compared to other therapeutic approaches.",
                        ],
                    },
                    {
                        heading: "Strengthens Family Relationships",
                        items: [
                            "Parents and caregivers become key allies in recovery, fostering trust and support.",
                        ],
                    },
                    {
                        heading: "Reduces Hospitalization",
                        items: [
                            "Early intervention with FBT can prevent the need for inpatient treatment and keep recovery within the home environment.",
                        ],
                    },
                    {
                        heading: "Long-Term Success",
                        items: [
                            "By reshaping family dynamics and addressing disordered eating behaviors at their core, FBT helps ensure lasting recovery.",
                            "Recovery is possible, and families play a vital role in making it happen.",
                        ],
                    },
                ],
            },
            {
                kind: "bullets",
                heading: "Who Can Benefit from FBT?",
                intro: ["FBT is specifically designed for: If your loved one is struggling with anorexia, FBT offers a structured, compassionate, and effective path to healing."],
                items: [
                    "Adolescents and young adults diagnosed with anorexia nervosa",
                    "Families willing to take an active role in their child’s recovery",
                    "Individuals who need structured meal support to restore weight and health",
                    "Parents looking for guidance on how to navigate their child’s eating disorder",
                ],
            },
            {
                kind: "video",
                url: "https://www.youtube.com/watch?v=zPyiddgWlfE",
                title: "Explaining Family Based Treatment and its Evidence",
            },
            {
                kind: "prose",
                heading: "Take the First Step Toward Recovery",
                body: [
                    "Your family has the power to help your child heal from anorexia. Our compassionate team is here to provide expert guidance and support every step of the way.",
                    "Schedule a Consultation Today to learn how Family-Based Therapy can help.",
                ],
            },
        ],
    },
    {
        slug: "kap",
        title: "Ketamine Assisted Psychotherapy (KAP)",
        tagline: "A new path to overcome depression, anxiety, and trauma.",
        category: "Psychedelic Therapy",
        image: "/productSummaryCards/kap.png",
        imageAlt: "A clinician sitting with a client during a ketamine session",
        sections: [
            {
                kind: "hero",
                eyebrow: "Psychedelic Therapy",
                heading: "Ketamine Therapy for Healing: A New Path to Overcome Depression, Anxiety, and Trauma",
                intro: [
                    "At Psyberspace, we understand how challenging it can be to live with mental health struggles. Whether it’s depression, anxiety, PTSD, or chronic pain, the emotional weight can feel overwhelming. But you don’t have to face this alone. In partnership with various medical prescribers, we offer Ketamine-Assisted Psychotherapy (KAP), a revolutionary approach that can help you find relief and healing when other treatments haven’t worked. KAP is a holistic modality in which ketamine is used as an adjunct to psychotherapy to help clients experience more frequent breakthroughs and sustained improvement in symptoms. Psyberspace takes on the psychotherapy aspect of the experience while Journey Clinical addresses all of your medical needs. This includes determining eligibility, developing a custom treatment plan, prescribing medicine, and monitoring outcomes.",
                ],
                image: "/productSummaryCards/kap.png",
                imageAlt: "A clinician sitting with a client during a ketamine session",
            },
            {
                kind: "prose",
                heading: "What is Ketamine Therapy?",
                body: [
                    "Ketamine therapy is an innovative, transformative treatment for individuals struggling with mental health conditions such as depression, anxiety, PTSD, and chronic pain. It involves the use of low-dose ketamine, an anesthetic medication, to help rewire the brain and promote healing from mental health disorders. Unlike traditional antidepressants, ketamine works rapidly and effectively to provide relief when other treatments may have failed to alleviate symptoms of depression, anxiety, PTSD, and other conditions, offering hope for those who have struggled for years without relief.",
                ],
            },
            {
                kind: "prose",
                heading: "How Ketamine Therapy Can Help You",
                body: [
                    "Mental health struggles such as severe depression, anxiety, and PTSD can feel overwhelming and isolating. No matter how hard you try, it can be difficult to break free from the grip of negative emotions, intrusive thoughts, or debilitating pain. Ketamine therapy offers a breakthrough treatment that can help you reclaim your life from the clutches of mental health challenges. By stimulating brain function and promoting the growth of new neural connections, ketamine therapy can help reset the way your brain processes emotions, memories, and stress. This may look like breaking free from intrusive thoughts, self-sabotaging behaviors, emotional outbursts, and flashbacks.",
                ],
            },
            {
                kind: "bullets",
                heading: "Conditions Ketamine Therapy Can Treat",
                items: [
                    "Severe Depression: Find relief from the emotional numbness and hopelessness of depression.",
                    "Anxiety & Panic Disorders: Break free from the constant cycle of worry and fear.",
                    "Post-Traumatic Stress Disorder (PTSD): Heal from the emotional scars of trauma and regain control over your life.",
                    "Chronic Pain: Address the physical and emotional aspects of chronic pain conditions like fibromyalgia or CRPS.",
                    "Addiction: Support recovery and healing from substance use disorders.",
                ],
            },
            {
                kind: "prose",
                heading: "Why Choose Ketamine Therapy at Psyberspace?",
                body: [
                    "At Psyberspace, we are committed to providing a compassionate and safe environment for your healing journey. Our highly trained professionals use the latest research-backed protocols to ensure your treatment is effective, comfortable, and tailored to your individual needs.",
                    "Ketamine therapy offers a fast-acting solution when traditional treatments like antidepressants or talk therapy haven’t worked. With its ability to provide relief in just a few sessions, it’s especially beneficial for people who have struggled with treatment-resistant conditions.",
                ],
            },
            {
                kind: "card-grid",
                heading: "The Benefits of Ketamine Therapy",
                cards: [
                    {
                        title: "Rapid Relief",
                        description: "Ketamine’s effects can be felt rapidly, offering relief in as little as a single session.",
                    },
                    {
                        title: "Non-Addictive",
                        description: "Ketamine therapy has been shown to be safe and non-habit-forming when used under medical supervision.",
                    },
                    {
                        title: "Potency",
                        description: "Individuals experience significant improvement when other treatments (antidepressants, SSRIs, or therapy) have failed.",
                    },
                    {
                        title: "Sustained healing",
                        description: "Ketamine resets neural pathways and promotes healthier brain activity, leading to lasting improvements in mood and emotional states.",
                    },
                ],
            },
            {
                kind: "prose",
                heading: "How does Ketamine feel?",
                body: [
                    "The effects of ketamine, which most clients find pleasant, last for approximately 45 minutes. These effects can make you feel “far from” your body, and facilitate shifts in perception that can often feel expansive in nature. Your motor and verbal abilities will be reduced, so you’ll be lying down in a comfortable position during the experience. Once these effects subsided, we’ll spend the remainder of our session giving you space to process and discuss your experience. While it may feel hard to articulate what happened during the experience, clients feel like the insights gained are none-the-less clear. Studies have shown that the benefits to mood and neurological growth can last up to two weeks after the Ketamine experience.",
                ],
            },
            {
                kind: "video",
                url: "https://www.youtube.com/watch?v=SXHsUhncCNw",
                title: "What you need to know about ketamine therapy",
            },
            {
                kind: "video",
                url: "https://www.youtube.com/watch?v=nW21-AYY_fs",
                title: "How Ketamine Treats Depression - Yale Medicine Explains",
            },
            {
                kind: "lists",
                heading: "How Ketamine-Assisted Psychotherapy Works",
                groups: [
                    {
                        heading: "Initial medical consultation",
                        items: [
                            "You schedule an initial evaluation with a medical team provider. They will go over your medical and psychiatric history with you, provide education on the treatment, and determine if you are eligible for KAP.",
                            "If you are deemed eligible for KAP, they will develop a personalized Ketamine prescription and outcome monitoring plan for you.",
                            "Medical staff will write a ketamine prescription for you, and a small amount of oral ketamine will be sent to your home, enough for the first 2 KAP sessions. You will be taught to take your vitals and self-administer the ketamine lozenges by the medical team, if seeking telehealth, in advance of our KAP sessions.",
                        ],
                    },
                    {
                        heading: "Preparation sessions",
                        items: [
                            "Once you receive your ketamine lozenges, we will schedule time together for our KAP preparation, dosing and integration sessions. The goal of a preparation session(s) is to align on the process and set intentions for our KAP sessions together.",
                        ],
                    },
                    {
                        heading: "KAP Dosing Session",
                        items: [
                            "A typical ketamine dosing session lasts between 1-2 hours and can take place via telehealth in the comfort of your own home.",
                            "During a dosing session, you will record your vital signs and self-administer your ketamine lozenge. You will be in a comfortable, reclining position wearing an eye mask and listening to calming music. Although a KAP dosing session may be largely an internal experience, a therapist will be present with you the entire time to hold space and provide support as needed. You will also have a chaperone on site for any additional support.",
                        ],
                    },
                    {
                        heading: "Integration Sessions",
                        items: [
                            "After our KAP dosing session, we will meet for multiple integration therapy sessions to review the memories, thoughts & insights that arose during your dosing session, and to prepare for the next dosing session.",
                        ],
                    },
                    {
                        heading: "Follow-up medical consultations",
                        items: [
                            "After our first KAP session, our medical team schedules quarterly follow ups with you to monitor outcomes and prescribe ketamine lozenge refills, as appropriate. The frequency of follow ups depends on your unique treatment plan, at a minimum of once per quarter",
                        ],
                    },
                ],
            },
            {
                kind: "bullets",
                heading: "Helpful Resources",
                items: [
                    "Paradigms of Ketamine Treatment by Raquel Bennett, Psy.D. for MAPS",
                    "Ketamine Assisted Psychotherapy (KAP): Patient Demographics, Clinical Data and Outcomes in Three Large Practices Administering Ketamine with Psychotherapy – research study by Jennifer Dore et al, 2018",
                    "Ketamine for Depression and Mood Disorders by Erica Zelfand, ND for Townsend Letter",
                    "Ketamine-Facilitated Psychotherapy for Trauma, Anxiety, and Depression by Goop",
                ],
            },
            {
                kind: "prose",
                heading: "Start Your Healing Journey Today",
                body: [
                    "If you’ve been struggling with depression, anxiety, PTSD, or chronic pain and nothing seems to work, ketamine therapy could be the solution you’ve been searching for. Psyberspace is here to help you take the first step toward healing and reclaiming your mental health.",
                    "You don’t have to struggle alone. Our team is here to help you find the relief you deserve. Take the first step toward healing today and experience the transformative power of ketamine therapy at Psyberspace.",
                ],
            },
        ],
    },
    {
        slug: "group-kap",
        title: "Group KAP",
        tagline: "Heal in community with ketamine-assisted group therapy.",
        category: "Psychedelic Therapy",
        image: "/productSummaryCards/group_kap.jpg",
        imageAlt: "A small therapy group seated in a circle",
        sections: [
            {
                kind: "hero",
                eyebrow: "Psychedelic Therapy",
                heading: "Group KAP",
                intro: [
                    "Group ketamine-assisted therapy (KAP) offers a powerful, community-driven approach to emotional healing, blending the transformative effects of ketamine with the support of a therapeutic group setting. If you’re struggling with anxiety, depression, trauma, PTSD, or feelings of isolation, group KAP provides a unique opportunity to heal together, share insights, and grow alongside others who understand your journey.",
                ],
                image: "/productSummaryCards/group_kap.jpg",
                imageAlt: "A small therapy group seated in a circle",
            },
            {
                kind: "bullets",
                heading: "Why Choose Group Ketamine-Assisted Therapy?",
                intro: ["Many individuals feel alone in their struggles, but healing doesn’t have to be an isolated experience. Group KAP provides a safe and cohesive space where participants can Research suggests that ketamine therapy can rapidly alleviate symptoms of depression, anxiety, and PTSD, while group therapy enhances connection and personal growth, leading to profound emotional breakthroughs."],
                items: [
                    "Connect with Others – Find support, validation, and shared understanding.",
                    "Gain Diverse Perspectives – Learn from others navigating similar challenges.",
                    "Enhance Self-Awareness – Explore emotions and thought patterns with group feedback.",
                    "Build Resilience – Develop interpersonal skills and emotional strength.",
                    "Experience Deep Healing – Combine ketamine’s therapeutic benefits with guided integration work.",
                ],
            },
            {
                kind: "sequence",
                heading: "How Does Group KAP Work?",
                intro: [
                    "Each KAP group session includes at least four participants and up to two therapists, ensuring a safe, structured, and supportive environment.",
                ],
                steps: [
                    {
                        title: "Pre-Session Preparation",
                        description: "Participants undergo a medical intake and psychological assessment to ensure eligibility and readiness for ketamine therapy.",
                    },
                    {
                        title: "Ketamine Session",
                        description: "Guided by licensed therapists, participants experience ketamine in a safe, controlled setting that allows for deep introspection and emotional processing.",
                    },
                    {
                        title: "Integration Therapy",
                        description: "Following the session, group members engage in therapist-led discussions to reflect on insights, process emotions, and develop strategies for continued healing.",
                    },
                ],
            },
            {
                kind: "prose",
                body: [
                    "This structured approach balances individual needs with the collective wisdom of the group, fostering emotional breakthroughs and meaningful transformation.",
                ],
            },
            {
                kind: "bullets",
                heading: "Who Can Benefit from Group KAP?",
                intro: ["Group ketamine-assisted therapy is ideal for individuals struggling with"],
                items: [
                    "Depression & Mood Disorders – Find relief from persistent sadness, hopelessness, and emotional numbness.",
                    "Anxiety & Stress – Learn to navigate overwhelming thoughts and emotions with greater ease.",
                    "Trauma & PTSD – Safely process past wounds in a supportive group environment.",
                    "Loneliness & Disconnection – Build community, trust, and a sense of belonging.",
                    "Personal Growth & Self-Discovery – Gain insight, clarity, and a renewed sense of purpose.",
                ],
                outro: ["If you feel stuck in your healing journey, group KAP may provide the breakthrough you’ve been searching for."],
            },
            {
                kind: "prose",
                heading: "Why Group Therapy Enhances the Ketamine Experience",
                body: [
                    "Group work provides a unique space where individuals can connect and heal together in a supportive, collaborative, and cohesive community; share rich, diverse perspectives; and gain insight from others who face similar challenges. This collective process fosters a sense of belonging and validation, reducing feelings of isolation. Participants often find that mutual support and understanding help them develop new skills, improve self-awareness, and build resilience. By interacting with others in a similar situation, individuals can gain confidence, enhance interpersonal skills, and find renewed hope in their recovery journey. A trained therapist(s) facilitate(s) discussions, ensures a safe environment, and helps manage group dynamics.",
                    "The combination of ketamine’s neuroplastic effects and the shared healing experience of group therapy allows participants to process emotions more deeply, break negative thought patterns, and develop lasting emotional resilience.",
                ],
            },
            {
                kind: "prose",
                heading: "Take the First Step Toward Healing",
                body: [
                    "Schedule a Free Consultation to see if Group KAP is right for you.",
                ],
            },
        ],
    },
    {
        slug: "medication-management",
        title: "Medication Management",
        tagline: "Personalized medication support for your mental well-being.",
        category: "Psychiatry",
        image: "/productSummaryCards/medication_management.jpg",
        imageAlt: "A prescriber reviewing a treatment plan with a client",
        sections: [
            {
                kind: "hero",
                eyebrow: "Psychiatry",
                heading: "Medication Management for Mental Health: Personalized Support for Your Well-Being",
                subheading: "Safe, Effective, and Personalized Psychiatric Medication Management",
                intro: [
                    "Managing mental health symptoms can feel overwhelming, but the right medication—paired with therapy and holistic care—can provide the relief and balance you need. Our medication management services ensure that you receive expert guidance, ongoing monitoring, and personalized adjustments to support your mental health journey.",
                    "We partner with Journey Clinical, a trusted provider of psychiatric prescribing services, to ensure safe and effective medication management.",
                ],
                image: "/productSummaryCards/medication_management.jpg",
                imageAlt: "A prescriber reviewing a treatment plan with a client",
            },
            {
                kind: "bullets",
                heading: "What Is Medication Management?",
                intro: ["Medication management is a collaborative process where a licensed psychiatric provider: Whether you’re starting medication for the first time, adjusting your current prescription, or exploring new treatment options, our prescriber ensures a thoughtful, evidence-based approach tailored to your needs."],
                items: [
                    "Evaluates your symptoms and medical history",
                    "Prescribes and adjusts psychiatric medications as needed",
                    "Monitors side effects and effectiveness",
                    "Provides ongoing support to optimize your treatment plan",
                ],
            },
            {
                kind: "card-grid",
                heading: "Conditions We Help Manage",
                intro: [
                    "Our medication management services can help with",
                ],
                cards: [
                    {
                        title: "Anxiety & Panic Disorders",
                        description: "Reduce excessive worry, restlessness, and anxiety attacks.",
                    },
                    {
                        title: "Depression & Mood Disorders",
                        description: "Improve mood stability and decrease persistent sadness.",
                    },
                    {
                        title: "ADHD & Focus Challenges",
                        description: "Enhance concentration, organization, and daily functioning.",
                    },
                    {
                        title: "PTSD & Trauma",
                        description: "Manage distressing symptoms and improve emotional resilience.",
                    },
                    {
                        title: "Obsessive-Compulsive Disorder (OCD)",
                        description: "Alleviate compulsive behaviors and intrusive thoughts.",
                    },
                    {
                        title: "Sleep Disorders",
                        description: "Regulate sleep patterns for better rest and mental clarity.",
                    },
                ],
            },
            {
                kind: "prose",
                body: [
                    "Your mental health journey is unique, and we take the time to find the right medication and dosage for your individual needs.",
                ],
            },
            {
                kind: "bullets",
                heading: "Our Partnership with Journey Clinical",
                intro: ["To provide expert medication management, we work with Journey Clinical, a leading psychiatric provider specializing in evidence-based prescribing. Through this partnership, you receive"],
                items: [
                    "Comprehensive Psychiatric Evaluations – A detailed assessment to determine the most effective treatment.",
                    "Ongoing Medication Monitoring – Regular check-ins to track progress and make necessary adjustments.",
                    "Collaborative Care – Coordination with your therapist to ensure an integrated treatment plan.",
                    "Please Note: We do not offer independent ketamine evaluations for home use.",
                ],
            },
            {
                kind: "prose",
                heading: "Is Medication Right for You?",
                body: [
                    "Finding the right medication can be a life-changing step toward stability, clarity, and emotional well-being. If you’re struggling with persistent mental health challenges, a medication consultation can help determine the best course of action.",
                    "Schedule a Consultation Today to explore your options and take the first step toward relief.",
                ],
            },
        ],
    },
    {
        slug: "mdma",
        title: "MDMA Therapy",
        tagline: "A breakthrough approach for healing and transformation.",
        category: "Psychedelic Therapy",
        image: "/assets/Untitled-design-15-890x664.png",
        imageAlt: "A calm therapy room prepared for an MDMA-assisted session",
        sections: [
            {
                kind: "hero",
                eyebrow: "Psychedelic Therapy",
                heading: "MDMA-Assisted Therapy: A Breakthrough Approach for Healing & Transformation",
                subheading: "Unlock Deep Emotional Healing with Psychedelic-Assisted Therapy",
                intro: [
                    "MDMA-assisted therapy is revolutionizing mental health treatment, offering a powerful and scientifically backed approach to healing PTSD, trauma, anxiety, depression, and relationship challenges. Through guided sessions, MDMA therapy helps individuals process deep emotions, release fear, and rebuild trust in themselves and others.",
                ],
                image: "/assets/Untitled-design-15-890x664.png",
                imageAlt: "A calm therapy room prepared for an MDMA-assisted session",
            },
            {
                kind: "video",
                url: "https://www.youtube.com/watch?v=Dm9c9XiRl1A",
                title: "MDMA Therapy | Drugs, Inc.",
            },
            {
                kind: "bullets",
                heading: "What Is MDMA-Assisted Therapy?",
                intro: ["MDMA (3,4-methylenedioxymethamphetamine) is a psychoactive compound known for enhancing emotional openness, reducing fear, and promoting deep psychological healing. In a therapeutic setting, MDMA can help individuals: Backed by decades of clinical research and FDA-approved studies, MDMA therapy is paving the way for transformational healing in a safe, controlled environment."],
                items: [
                    "Process traumatic memories without overwhelming distress",
                    "Reduce fear-based responses and emotional reactivity",
                    "Foster self-acceptance, compassion, and emotional resilience",
                    "Enhance trust and communication in relationships",
                    "Break through treatment-resistant PTSD and anxiety",
                ],
            },
            {
                kind: "card-grid",
                heading: "Who Can Benefit from MDMA Therapy?",
                intro: [
                    "MDMA-assisted therapy has shown exceptional results for individuals struggling with",
                ],
                cards: [
                    {
                        title: "PTSD & Trauma Recovery",
                        description: "Process past traumas with reduced emotional distress.",
                    },
                    {
                        title: "Anxiety & Depression",
                        description: "Rewire negative thought patterns and regain emotional balance.",
                    },
                    {
                        title: "Relationship & Attachment Issues",
                        description: "Build trust, deepen emotional connection, and heal from relational wounds.",
                    },
                    {
                        title: "Existential & Emotional Struggles",
                        description: "Find clarity, purpose, and inner peace.",
                    },
                ],
            },
            {
                kind: "prose",
                heading: "The Science Behind MDMA Therapy",
                body: [
                    "Clinical research from institutions like MAPS (Multidisciplinary Association for Psychedelic Studies) has demonstrated that MDMA therapy can lead to significant and lasting improvementsin mental health conditions, particularly PTSD and trauma-related disorders.",
                    "In FDA-approved studies, 67% of participants with severe PTSD experienced significant symptom reduction after 3 MDMA therapy sessions, with many no longer meeting PTSD criteria after treatment.",
                    "By working with the brain’s fear-processing and emotional regulation centers, MDMA therapy helps individuals access and heal deep-rooted trauma in a safe and controlled way.",
                ],
            },
            {
                kind: "video",
                url: "https://www.youtube.com/watch?v=KR67rybMiwI",
                title: "Study: MDMA therapy for PTSD shows positive results",
            },
            {
                kind: "prose",
                heading: "What to Expect in an MDMA Therapy Session",
                body: [
                    "Although MDMA therapy demonstrated clinically significant data and posed minimal safety risks, in August 2024, the FDA declined the commercial authorization of MDMA-Assisted Therapy and requested additional clinical trials for further data collection. Once approved by the FDA, hopefully by no later than 2027, The Psyberspace Center for Psychedelic Therapy will be one of the pioneers to usher in this groundbreaking, transformational therapy. It has not yet been approved by any regulatory agency in the USA and is not available until at least 90 days after FDA approval is achieved. Please join our mailing list to stay posted on the development of MDMA therapy, including accessibility and pricing as they become available in the near future.",
                ],
            },
        ],
    },
    {
        slug: "psilocybin",
        title: "Psilocybin Therapy",
        tagline: "A transformational path to healing and growth.",
        category: "Psychedelic Therapy",
        image: "/assets/m1000x1000.jpeg",
        imageAlt: "Psilocybin mushrooms growing in soft natural light",
        sections: [
            {
                kind: "hero",
                eyebrow: "Psychedelic Therapy",
                heading: "Psilocybin Therapy: A Transformational Path to Healing & Growth",
                subheading: "Discover the Power of Psychedelic-Assisted Therapy for Mental Health & Well-Being",
                intro: [
                    "Psilocybin therapy is revolutionizing mental health treatment, offering profound healing for depression, anxiety, PTSD, trauma, and personal growth. Backed by scientific research, this guided psychedelic-assisted therapy helps individuals break free from limiting patterns, process deep emotions, and find clarity, peace, and renewed purpose.",
                ],
                image: "/assets/m1000x1000.jpeg",
                imageAlt: "Psilocybin mushrooms growing in soft natural light",
            },
            {
                kind: "video",
                url: "https://www.youtube.com/watch?v=TlIrMnocdH0",
                title: "Doctor tries Psilocybin to cure depression from cancer diagnosis | WebMD",
            },
            {
                kind: "prose",
                heading: "What Is Psilocybin Therapy?",
                body: [
                    "Psilocybin, the active compound in psychedelic mushrooms, has been used for centuries in spiritual and healing practices. Today, clinical research confirms its ability to facilitate deep emotional processing, neuroplasticity, and personal transformation when used in a therapeutic setting.",
                    "Psilocybin-assisted therapy is a structured, guided experience where individuals take psilocybin under the supervision of trained professionals to explore their subconscious, heal past wounds, and gain powerful insights into their lives.",
                ],
            },
            {
                kind: "card-grid",
                heading: "How Psilocybin Therapy Can Help",
                intro: [
                    "Our specialized OCD treatment programs use evidence-based, results-driven techniques to help you regain control",
                ],
                cards: [
                    {
                        title: "Break Free from Depression & Anxiety",
                        description: "Psilocybin helps rewire negative thought patterns and foster emotional resilience.",
                    },
                    {
                        title: "Heal Trauma & PTSD",
                        description: "Unlock and process unresolved trauma in a safe, supportive space.",
                    },
                    {
                        title: "Gain Clarity & Self-Understanding",
                        description: "Experience deep insights into personal struggles, relationships, and life purpose.",
                    },
                    {
                        title: "Reduce Existential Anxiety & Fear of Death",
                        description: "Find peace and acceptance in life transitions and end-of-life care.",
                    },
                    {
                        title: "Enhance Emotional Connection & Spiritual Growth",
                        description: "Strengthen relationships, self-compassion, and connection to the world.",
                    },
                ],
            },
            {
                kind: "bullets",
                intro: ["Clinical studies from leading institutions like Johns Hopkins, NYU, and MAPS show that psilocybin therapy can create lasting improvements in: By resetting neural pathways and promoting emotional openness, psilocybin therapy can help individuals move beyond suffering and into a state of growth, healing, and renewal."],
                items: [
                    "Treatment-resistant depression",
                    "Anxiety & end-of-life distress",
                    "PTSD & trauma-related disorders",
                    "Addiction & compulsive behaviors",
                    "Overall mental well-being & life satisfaction",
                ],
            },
            {
                kind: "video",
                url: "https://www.youtube.com/watch?v=QwV3qXeLfzM",
                title: "Psilocybin Mushrooms & The Path to Higher Consciousness",
            },
            {
                kind: "prose",
                heading: "What to Expect in a Psilocybin Therapy Session?",
                body: [
                    "Psilocybin Therapy is currently not approved by any regulatory agency in nearly all states and is currently only available in clinical trials. The safety and efficacy of psilocybin therapy have not yet been established for the treatment of treatment-resistant depression. Please join our mailing list to stay posted on the development of Psilocybin Therapy, including accessibility and pricing as they become available in the near future",
                ],
            },
        ],
    },
    {
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
    },
    {
        slug: "relationship-family-kap",
        title: "Relationship/Family KAP",
        tagline: "Heal and strengthen your bonds with ketamine-assisted therapy.",
        category: "Family & Relationships",
        image: "/assets/Untitled-design-28-890x664.png",
        imageAlt: "A couple sitting close together on a sofa",
        sections: [
            {
                kind: "hero",
                eyebrow: "Family & Relationships",
                heading: "Heal & Strengthen Your Bonds with Ketamine-Assisted Therapy",
                subheading: "Transform Conflict, Deepen Connections & Find Healing Together",
                intro: [
                    "Relationships and family dynamics can be complex, especially when faced with emotional wounds, communication struggles, or unresolved trauma. Ketamine-assisted therapy offers a groundbreaking approach to healing, helping couples and families break free from negative patterns, reconnect, and foster deeper understanding in a safe, supportive environment.",
                ],
                image: "/assets/Untitled-design-28-890x664.png",
                imageAlt: "A couple sitting close together on a sofa",
            },
            {
                kind: "bullets",
                heading: "What Is Ketamine-Assisted Therapy for Relationships & Families?",
                intro: ["Ketamine-assisted therapy (KAT) combines the therapeutic benefits of ketamine with professional guidance to facilitate emotional breakthroughs, self-awareness, and healing. In a structured, supportive setting, couples and families can"],
                items: [
                    "Reduce emotional reactivity and defensiveness",
                    "Gain new perspectives on conflicts and relationship patterns",
                    "Process past trauma or deep-seated wounds affecting relationships",
                    "Enhance empathy, communication, and emotional connection",
                    "Let go of resentment, fear, and unresolved pain",
                ],
            },
            {
                kind: "prose",
                heading: "How Ketamine-Assisted Therapy Supports Relationships & Families",
                body: [
                    "Whether you’re struggling with marital conflict, family tension, past trauma, or emotional disconnection, ketamine-assisted therapy can help create a pathway to healing and renewal.",
                ],
            },
            {
                kind: "lists",
                groups: [
                    {
                        heading: "Couples Therapy with Ketamine",
                        items: [
                            "Helps partners break cycles of conflict and defensiveness",
                            "Encourages vulnerability, trust, and deep emotional connection",
                            "Supports healing from past wounds, betrayals, or attachment issues",
                        ],
                    },
                    {
                        heading: "Family Therapy with Ketamine",
                        items: [
                            "Reduces emotional barriers and creates a space for honest communication",
                            "Helps family members understand and support each other more deeply",
                            "Facilitates healing from generational trauma, grief, and relationship wounds",
                        ],
                    },
                    {
                        heading: "Healing Attachment Trauma & Emotional Blocks",
                        items: [
                            "Many relationship struggles stem from past traumas, attachment wounds, and unconscious emotional barriers. Ketamine therapy helps release emotional blockages, allowing individuals to engage in relationships with more clarity, love, and authenticity.",
                        ],
                    },
                    {
                        heading: "Our Approach: Safe, Guided & Transformational",
                        items: [
                            "We provide a structured, supportive experience tailored to your unique relationship and family dynamics.",
                        ],
                    },
                    {
                        heading: "Medical & Psychological Safety",
                        items: [
                            "Sessions are overseen by licensed professionals. A separate medical intake and psychological assessment is required. It is highly recommended that participants engage in their own individual KAP session(s) prior to engaging in couples or family KAP to familiarize themselves with the medicine.",
                        ],
                    },
                    {
                        heading: "Therapeutic Integration",
                        items: [
                            "We combine ketamine therapy with relationship counseling techniques for lasting results.",
                        ],
                    },
                    {
                        heading: "Personalized Treatment Plans",
                        items: [
                            "Every couple and family is unique, and so is our approach.",
                        ],
                    },
                    {
                        heading: "Reconnect, Heal & Grow Together",
                        items: [
                            "If past trauma, conflict, or emotional barriers are holding your relationship or family back, ketamine-assisted therapy offers a powerful path toward healing, understanding, and deeper connection.",
                            "Schedule a Free Consultation today and take the first step toward transformation.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        slug: "sensorimotor",
        title: "Sensorimotor Psychotherapy",
        tagline: "Healing trauma through the mind-body connection.",
        category: "Trauma Recovery",
        image: "/productSummaryCards/sensorimotor_psychotherapy.jpg",
        imageAlt: "A woman resting a hand on her chest, grounding herself",
        sections: [
            {
                kind: "hero",
                eyebrow: "Trauma Recovery",
                heading: "Sensorimotor Psychotherapy: Healing Trauma Through Mind-Body Connection",
                subheading: "A Somatic Approach to Trauma, PTSD, and Emotional Healing",
                intro: [
                    "Trauma isn’t just stored in the mind—it’s held in the body. Sensorimotor Psychotherapy is a body-centered approach that helps individuals process unresolved trauma, anxiety, and emotional distress by integrating the mind and body in healing. Unlike traditional talk therapy, this bottom up method focuses on body awareness, movement, and nervous system regulation to address deeply rooted patterns that keep you stuck. If you feel like talk therapy alone hasn’t fully resolved your trauma, Sensorimotor Psychotherapy may help you access and heal what words cannot.",
                ],
                image: "/productSummaryCards/sensorimotor_psychotherapy.jpg",
                imageAlt: "A woman resting a hand on her chest, grounding herself",
            },
            {
                kind: "bullets",
                heading: "What Is Sensorimotor Psychotherapy?",
                intro: ["Sensorimotor Psychotherapy (SP) is an evidence-based, somatic therapy that helps individuals process and release trauma stored in the body. It integrates: By working with both thoughts and bodily sensations, SP helps individuals break free from trauma responses, emotional dysregulation, and deeply ingrained patterns that may not be accessible through talk therapy alone."],
                items: [
                    "Body Awareness – Learn to recognize how trauma manifests physically.",
                    "Mindfulness Practices – Stay present and engaged without being overwhelmed.",
                    "Movement & Posture Work – Shift habitual physical patterns tied to emotional distress.",
                    "Nervous System Regulation – Restore a sense of balance, safety, and calm.",
                ],
            },
            {
                kind: "video",
                url: "https://www.youtube.com/watch?v=7cben51_kEg",
                title: "Dr. Pat Ogden on the Sensorimotor Approach to Resolve Trauma",
            },
            {
                kind: "card-grid",
                heading: "Who Can Benefit from Sensorimotor Psychotherapy?",
                intro: [
                    "This therapy is effective for individuals experiencing",
                ],
                cards: [
                    {
                        title: "Trauma & PTSD",
                        description: "Heal deep emotional wounds stored in the body.",
                    },
                    {
                        title: "Chronic Anxiety & Stress",
                        description: "Regain control over fight-or-flight responses.",
                    },
                    {
                        title: "Depression & Emotional Numbness",
                        description: "Reconnect with feelings and increase vitality.",
                    },
                    {
                        title: "Dissociation & Disconnection",
                        description: "Restore the mind and body connection for greater presence.",
                    },
                    {
                        title: "Relationship & Attachment Issues",
                        description: "Understand and shift unconscious patterns.",
                    },
                    {
                        title: "Unexplained Physical Tension & Pain",
                        description: "Release trauma-related body tension and discomfort. SP is particularly beneficial for those who struggle to verbalize trauma, feel disconnected from their emotions, or experience lingering physical symptoms linked to past experiences.",
                    },
                ],
            },
            {
                kind: "prose",
                heading: "How Sensorimotor Psychotherapy Works",
                body: [
                    "Sensorimotor Psychotherapy is a gentle, non-invasive approach that unfolds in stages",
                ],
            },
            {
                kind: "lists",
                groups: [
                    {
                        heading: "Phase 1: Establishing Safety & Awareness",
                        items: [
                            "Learn to observe body sensations, postures, and impulses linked to emotions.",
                            "Develop self-regulation skills to feel more grounded and present.",
                            "Build a safe, supportive therapeutic relationship before addressing trauma.",
                        ],
                    },
                    {
                        heading: "Phase 2: Processing & Healing Trauma",
                        items: [
                            "Identify and release stuck patterns in the body.",
                            "Engage in gentle movements to shift trauma-related postures and reactions.",
                            "Work through trauma memories without overwhelm by focusing on bodily sensations rather than re-experiencing distressing events.",
                        ],
                    },
                    {
                        heading: "Phase 3: Integration & Growth",
                        items: [
                            "Strengthen new patterns of emotional resilience and self-awareness.",
                            "Reinforce a sense of safety and empowerment in daily life.",
                            "Cultivate healthier relationships and improved well-being.",
                        ],
                    },
                ],
            },
            {
                kind: "bullets",
                heading: "Why Choose Sensorimotor Psychotherapy?",
                intro: ["Sensorimotor Therapy is effective for individuals dealing with: By integrating mindfulness, movement, and nervous system regulation, Sensorimotor Psychotherapy offers a holistic path to deep, lasting healing."],
                items: [
                    "Body-Based Healing – Addresses trauma stored in the nervous system.",
                    "Works Beyond Words – Ideal for those who struggle with traditional talk therapy.",
                    "Regulates Emotions – Helps shift patterns of anxiety, hypervigilance, and dissociation.",
                    "Trauma-Informed & Gentle – Does not force re-experiencing trauma but works safely at your pace.",
                ],
            },
            {
                kind: "prose",
                heading: "Take the First Step Toward Healing",
                body: [
                    "You don’t have to stay trapped in trauma patterns—healing is possible when the mind and body work together. If you’re ready to experience a new way of processing emotions and restoring balance, we’re here to help. Let your body do the talking.",
                    "Schedule a Consultation Today and begin your healing journey.",
                ],
            },
        ],
    },
    {
        slug: "trip",
        title: "TRIP™ Trauma Recovery Integration Pathway",
        tagline: "Heal from PTSD and trauma — find peace, strength, and freedom.",
        category: "Trauma Recovery",
        image: "/assets/Untitled-design-20-1-890x664.png",
        imageAlt: "A client and a therapist facing each other in a one-on-one session",
        sections: [
            {
                kind: "hero",
                eyebrow: "Trauma Recovery",
                heading: "TRIP: Trauma Recovery Integration Pathway",
                subheading: "An 8-Week Psychedelic-Assisted EMDR Therapy Program for Deep Healing When Nothing Else Has Worked.",
                intro: [
                    "Get Unstuck. Reconnect. Finally Heal.",
                ],
                image: "/assets/Untitled-design-20-1-890x664.png",
                imageAlt: "A client and a therapist facing each other in a one-on-one session",
            },
            {
                kind: "prose",
                heading: "When You’ve Tried Everything, and Still Feel Stuck",
                body: [
                    "You’ve done the therapy. You’ve taken the meds. You’ve read the books, journaled, meditated, and even changed your diet.",
                    "And yet… the pain lingers.",
                    "Maybe it’s trauma that won’t quit, a heaviness you can’t name, or anxiety that flares out of nowhere. Maybe you’re so emotionally shut down that you feel like a ghost in your own life.",
                    "You’re not broken. You’re burnt out from treatments that never reached the root.",
                    "TRIP was designed for exactly this moment.",
                ],
            },
            {
                kind: "prose",
                heading: "A Different Kind of Therapy for a Different Kind of Pain",
                body: [
                    "Let’s be honest: traditional therapy can only go so far when you’re dealing with deep, entrenched emotional wounds, like the kind that come from complex trauma or severe depression.",
                    "This is healing from the inside out, backed by science, guided by experienced trauma therapists, and customized to your story.",
                    "Ready to feel like yourself again?",
                ],
            },
            {
                kind: "bullets",
                heading: "What TRIP Can Help With",
                intro: ["If you’ve been living with: …and you’ve tried everything else, TRIP may finally be the turning point that changes how you live."],
                items: [
                    "Treatment-resistant depression",
                    "Complex PTSD or childhood trauma",
                    "Anxiety or panic that won’t go away",
                    "Emotional numbness or disconnection",
                    "Grief, loss, or existential despair",
                    "OCD, chronic pain, or psychosomatic symptoms",
                    "Addiction, disordered eating, or compulsive behaviors",
                ],
            },
            {
                kind: "prose",
                heading: "Real Talk: Why TRIP Works When Other Therapies Don’t",
                body: [
                    "Psychedelic-assisted EMDR doesn’t just help you “talk about your trauma”; it helps you reprocess it on a core level.",
                    "For people living with complex trauma, emotional numbness, or patterns rooted in survival mode, traditional therapy often isn’t enough. The combination of trauma-informed care, somatic work, and carefully guided psychedelic treatment helps unlock healing that talk therapy alone can’t always reach—especially when trauma is stored in the body or the unconscious.",
                    "This isn’t woo. It’s neuroscience, supported by real clinical outcomes.",
                ],
            },
            {
                kind: "sequence",
                heading: "What to Expect For TRIP",
                intro: [
                    "Over 8 weeks, TRIP offers",
                ],
                steps: [
                    {
                        title: "1 Clinical Intake (90 mins)",
                        description: "A deep dive into your history, goals, and treatment plan.",
                    },
                    {
                        title: "3 Preparation Sessions (60-90 mins each)",
                        description: "Build trust, emotional safety, and a strong foundation for your journey.",
                    },
                    {
                        title: "4 Ketamine-Assisted Sessions (2-2.5 hours each)",
                        description: "Trauma reprocessing + ketamine support for accelerated healing.",
                    },
                    {
                        title: "4 Ketamine Assisted EMDR Sessions (90 mins each)",
                        description: "Turn insight into lasting change with ongoing therapeutic support.",
                    },
                ],
            },
            {
                kind: "sequence",
                heading: "How TRIP Works",
                intro: [
                    "TRIP follows a proven 3-phase process",
                ],
                steps: [
                    {
                        title: "1. Preparation",
                        description: "Emotional grounding, intention-setting, and trust-building.",
                    },
                    {
                        title: "2. Dosing + Processing",
                        description: "Guided EMDR sessions with ketamine support to unlock deeper healing.",
                    },
                    {
                        title: "3. Integration",
                        description: "Weekly therapy to help you make sense of breakthroughs and stay grounded.",
                    },
                ],
            },
            {
                kind: "prose",
                heading: "TRIP Psychedelic Assisted EMDR Therapy | NEW YORK, NY",
                body: [
                    "Each step is paced with care. You’re never rushed. You’re never alone.",
                ],
            },
            {
                kind: "prose",
                heading: "Common Questions About Psychedelic-Assisted EMDR Therapy",
                body: [
                    "TRIP Psychedelic Assisted EMDR Therapy | New York, NY",
                    "Psyberspace Center For Psychedelic Therapy",
                    "When nothing else has worked, this is where real healing begins.",
                    "Let TRIP guide you back to the version of yourself you thought was gone.",
                ],
            },
        ],
    },
    {
        slug: "grip",
        title: "GRIP™ Group Recovery Integration Pathway",
        tagline: "Transform together: ketamine-assisted group retreats for deep healing and connection.",
        category: "Group Retreats",
        image: "/productSummaryCards/kap_retreat.jpg",
        imageAlt: "A clinician preparing a ketamine infusion for a relaxed, smiling client",
        sections: [
            {
                kind: "hero",
                eyebrow: "Group Retreats",
                heading: "GRIP™: Group Recovery Integration Pathway",
                subheading: "An 8-Week Psychedelic-Assisted EMDR Group Therapy Program. Heal Together — Without Sharing Your Story. Trauma Recovery Rooted in Privacy and Safety.",
                intro: [
                ],
                image: "/productSummaryCards/kap_retreat.jpg",
                imageAlt: "A clinician preparing a ketamine infusion for a relaxed, smiling client",
            },
            {
                kind: "prose",
                heading: "When Traditional Therapy Isn’t Enough",
                body: [
                    "If you’ve lived with trauma, depression, anxiety, or PTSD, you already know the cruelest truth: sometimes nothing works. Medications sedate you, numbing the edges while leaving the wound wide open. Therapy sessions drag you through the same stories, circling endlessly without breaking through. Coping strategies keep you afloat for a moment, only to collapse when the weight comes crashing back. After years—maybe decades—of trying, it begins to feel like a slow death sentence. Not a life. Not healing. Just survival.",
                    "For first responders, veterans, survivors of violence, and countless others, the burden becomes unbearable. The nightmares, the panic, the hollow ache of depression—these are scars you can’t show. Traditional talk therapy often can’t touch them. Sometimes the memories are so violent, so overwhelming, you choke on the words before they ever leave your lips. Sometimes your body freezes, betraying you, going numb when you most need release. Sometimes you’ve already given every ounce of fight you had—years of sessions, prescriptions stacked on the nightstand, programs and promises that never delivered. And still…the darkness doesn’t lift.",
                    "This is treatment-resistant trauma. It’s the point where pain becomes a prison. Where every failed attempt convinces you a little more that you are broken beyond repair. Where the silence grows heavier because you’re ashamed of still hurting, ashamed of still being stuck. Days blur together in exhaustion. Nights stretch on forever. You start to believe the lie that this is all life has left to offer: endless struggle, hidden suffering, and no way out.",
                    "The truth is, trauma doesn’t just live in your thoughts. It embeds itself into your nervous system, hijacking your breath, your sleep, your ability to feel safe. Words alone can’t always reach it. Pills can mute the symptoms, but they don’t dissolve the root. That’s why so many people—after years of “doing everything right”—remain trapped in the same relentless cycle.",
                    "GRIP™ was created for this exact moment—for people who have been to hell and back, who are done with quick fixes and empty promises, and who refuse to give up even when hope feels like it’s gone. GRIP™ offers a way to finally unlock the pain, to heal deeply without having to relive the worst moments of your life out loud.",
                    "Because you don’t need another prescription. You don’t need another hour of talking in circles. You need transformation. And that’s what GRIP™ delivers.",
                ],
            },
            {
                kind: "prose",
                heading: "Introducing GRIP™",
                body: [
                    "GRIP™ is different. It’s not about numbing symptoms or forcing you to retell the stories that haunt you. Instead, it combines the power of ketamine-assisted therapy with evidence-based trauma reprocessing methods inspired by EMDR to calm the nervous system and unlock trauma where it lives—in the body, not just the mind. Safe. Structured. Transformative. GRIP™ was designed so you can finally heal without retraumatization, without shame, and without staying stuck in the endless cycle. This structured group therapy model helps you process trauma without having to retell your story. By calming the nervous system and using proven EMDR methods, GRIP™ allows healing to unfold safely, quickly, and deeply. Many participants experience breakthroughs within just 2–4 sessions.",
                ],
            },
            {
                kind: "sequence",
                heading: "What to Expect For GRIP™",
                intro: [
                    "Over 8 weeks, GRIP™ offers",
                ],
                steps: [
                    {
                        title: "1 Individual Clinical Intake- 60 mins",
                        description: "A deep dive into your history, goals, and treatment plan.",
                    },
                    {
                        title: "3 Group Preparation Therapy Sessions- 90 mins each",
                        description: "Build trust, emotional safety, and a strong foundation for your journey.",
                    },
                    {
                        title: "4 Group Ketamine (Lozenge or IM) Assisted Sessions-2 hours each",
                        description: "Trauma reprocessing + ketamine support for accelerated healing.",
                    },
                    {
                        title: "1 Post Follow up Individual Integration Session- 20 min",
                        description: "Turn insight into lasting change with ongoing therapeutic support.",
                    },
                ],
            },
            {
                kind: "prose",
                heading: "Kingdom Tier: The Ultimate GRIP™ Experience",
                body: [
                    "Premium Healing for Those Ready to Lead by Example",
                    "Step into the Kingdom Tier—our most immersive and transformative level of the GRIP™ (Group Recovery Integration Pathway) program. This tier is designed for individuals who value excellence, depth, and legacy. Experience trauma-informed healing that fuses ketamine-assisted EMDR, guided integration, and luxury-level care—crafted to help you heal deeply while empowering communities through our Tithing Through Transformation™ initiative.",
                    "The Kingdom Tier is more than therapy—it’s a declaration that your healing is sacred and world-changing.",
                ],
            },
            {
                kind: "prose",
                heading: "What You Receive with the Kingdom Experience",
                body: [
                    "Psychedelic Integration Guide: Kingdom Edition — Expanded with meditations, reflection prompts, and curated playlists on Spotify & Apple Music.",
                    "Psyberspace Tote Bag — A future-forward Psyberspace tote crafted for explorers of consciousness—utility meets aesthetic in one clean design.",
                    "Special Edition Kingdom Wristband — A wearable reminder of your inner sovereignty.",
                    "Aromatherapy Oil (Session + Take-Home) — The same scent used during your sessions to anchor calm wherever you go.",
                    "Psyberspace Putty — A tactile grounding tool for reflection and sensory regulation.",
                    "Tithing Through Transformation™ Acknowledgment — A portion of your investment supports community wellness initiatives through partnering ministries and nonprofits. Your healing fuels the healing of others.",
                ],
            },
            {
                kind: "card-grid",
                heading: "Why Choose the Kingdom Tier?",
                intro: [
                    "Deepest Transformation: Experience the highest level of therapeutic support and luxury-grade care.",
                    "Collective Impact: Your investment uplifts underserved communities through direct reinvestment in mental-health access programs.",
                ],
                cards: [
                    {
                        title: "1. Grounding the Nervous System",
                        description: "Ketamine, used in carefully supervised sessions, helps quiet the fear centers of the brain and soften the grip of hypervigilance. It allows the nervous system to shift out of survival mode and into a state where true healing is possible. Instead of being overwhelmed by traumatic memories, you remain present, grounded, and able to process with greater clarity.",
                    },
                    {
                        title: "2. Trauma Reprocessing Without Retelling",
                        description: "Using evidence-based EMDR methods, you’ll engage in structured, confidential trauma processing that requires no disclosure. With tapping, bilateral stimulation, guided visualizations, and structured worksheets, the body and mind release what’s been trapped — without needing to share details of your trauma. This means you don’t have to “spill your story” to find relief—you can heal without retraumatizing yourself.",
                    },
                    {
                        title: "3. Integrated Healing",
                        description: "The synergy of ketamine and EMDR allows trauma to finally move. Sessions are held in a safe, compassionate space, guided by trained clinicians who understand the weight you’ve been carrying. Over the course of the program, participants often experience breakthroughs that years of talk therapy or medication alone couldn’t achieve. Each session includes grounding, integration, and reflection. You’re supported not just as an individual but within a group, held in safety and privacy. The result: healing that restores emotional balance, deepens spiritual connection, and empowers you to move forward.",
                    },
                ],
            },
            {
                kind: "prose",
                heading: "Why Choose Psyberspace™?",
                body: [
                    "At Psyberspace™, we know how heavy treatment-resistant trauma can feel—and how discouraging it is to try everything, only to still feel stuck. That’s why we created GRIP™ (Group Recovery Integration Pathway): a program designed specifically for people who’ve been overlooked, underserved, and told to “just keep trying” when nothing has worked.",
                    "What sets us apart is more than just our methods—it’s our mission. GRIP™ is a Psyberspace™ exclusive, pioneered by an EMDR-certified, ketamine-trained clinician who specializes in trauma. You’re not stepping into an experiment or a trendy shortcut. You’re entering a carefully structured, clinically grounded process that was built with your safety, dignity, and transformation at the center.",
                    "We understand the stigma, the silence, and the shame that often surround trauma—especially in communities where vulnerability has been treated as weakness. GRIP™ was intentionally designed to remove those barriers. You don’t need to retell your story. You don’t need to justify your pain. You don’t need to fear judgment. You simply need a space and a process that finally works.",
                    "At Psyberspace™, we combine cutting-edge science with soul-centered care. Our approach is not just about symptom relief—it’s about unlocking freedom, resilience, and the ability to live fully again. When you join GRIP™, you’re not just another client in a system that failed you. You’re part of a movement redefining what trauma healing can be.",
                    "Because you deserve more than survival. You deserve transformation. Don’t just hang on. Get a GRIP™",
                ],
            },
            {
                kind: "prose",
                heading: "Healing Doesn’t Have to Take Years",
                body: [
                    "You’ve carried the weight long enough. You’ve tried the medications, the therapy, the coping strategies—and you deserve more than just survival. GRIP™ offers a safe, proven path to finally unlock trauma and experience real transformation, without having to relive the pain out loud. Spots are limited to keep groups small and supportive, so don’t wait.",
                    "Your healing doesn’t have to be delayed another day. Click below to schedule your free consultation and discover how GRIP™ can help you reclaim your life.",
                ],
            },
            {
                kind: "prose",
                heading: "Extending Healing Beyond Our Walls",
                body: [
                    "At Psyberspace, we believe healing should ripple outward — beyond the therapy room and into the community. That’s why we’ve partnered with Thank You Life, an independent 501(c)(3) nonprofit organization on a mission to revolutionize mental healthcare and help the world heal by eliminating the financial barriers to ketamine-assisted therapy.",
                    "TYL has created a fund for our practice to offset the cost of this life-changing treatment for our clients in need, helping bring ketamine-assisted therapy to those who cannot afford it on their own.",
                    "Important Note: Supporting Thank You Life is completely optional and separate from your Psyberspace program fees. 100% of donations go directly to the nonprofit.",
                    "If you’d like to extend the impact of your healing journey and help others access life-changing care, you can contribute directly below",
                ],
            },
        ],
    },
]

export function getService(slug: string): Service | undefined {
    return SERVICES.find((service) => service.slug === slug)
}
