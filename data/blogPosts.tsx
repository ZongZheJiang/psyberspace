import { BlogPost } from "../types/blogPost"

// Ten blog posts scraped from https://psyberspacetherapy.com/blog/ and stored as
// markdown in `data/blogs/`. Each `href` maps to a route under `app/blog/<slug>/`
// that renders the matching `examples/blogs/<slug>.tsx` wrapper. Images reuse
// existing thematically-related assets from `public/`.
export const BLOGPOSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Cost of Being Strong: Overcoming Systemic Burnout in BIPOC Communities",
    blogType: "Mental Health & Burnout Recovery",
    description:
      "How systemic burnout affects BIPOC communities, and culturally responsive ways to reclaim rest, boundaries, and healing.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/psychotherapy.jpg",
    href: "/blog/cost-of-being-strong",
  },
  {
    id: 2,
    title: "Always Feeling Numb or Flat? Signs of a Burned-Out Nervous System",
    blogType: "Trauma-Informed Therapy",
    description:
      "Emotional flatness and disconnection from prolonged stress — and how the nervous system can recover.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/sensorimotor_psychotherapy.jpg",
    href: "/blog/burned-out-nervous-system",
  },
  {
    id: 3,
    title: "Why Bubble Baths Aren't Enough: Healing Deep Trauma at the Root",
    blogType: "Trauma Recovery",
    description:
      "Why surface-level self-care can't reach stored trauma, and how bottom-up therapies like EMDR heal it.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/emdr.jpg",
    href: "/blog/bubble-baths-arent-enough",
  },
  {
    id: 4,
    title: "When Survival Mode Becomes Your Personality",
    blogType: "BIPOC Mental Health",
    description:
      "How chronic stress patterns quietly become identity — and the hidden signs of high-functioning burnout.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/anxiety.jpg",
    href: "/blog/survival-mode-personality",
  },
  {
    id: 5,
    title: "Who Takes Care of the Strong One?",
    blogType: "Therapy",
    description:
      "Why cultural expectations around strength make it so hard to ask for help — and what healing can look like.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/family_based_therapy.jpg",
    href: "/blog/who-takes-care-of-the-strong-one",
  },
  {
    id: 6,
    title: "BIPOC Mental Health Awareness: Breaking the Silence, Healing Generational Trauma",
    blogType: "Mental Health Awareness",
    description:
      "Systemic inequality, cultural stigma, and generational trauma — and pathways toward community healing.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/group_kap.jpg",
    href: "/blog/bipoc-mental-health-awareness",
  },
  {
    id: 7,
    title: "Trauma Education: 10 Signs You May Have Unresolved Trauma",
    blogType: "Trauma-Informed Therapy",
    description:
      "Common indicators of unprocessed trauma, the fight/flight/freeze/fawn responses, and why willpower isn't enough.",
    mediaType: "image",
    mediaUrl: "/assets/mind.png",
    href: "/blog/trauma-education-10-signs",
  },
  {
    id: 8,
    title: "Emotional Freedom Month: What Are You Ready to Free Yourself From?",
    blogType: "Mental Health",
    description:
      "Releasing trauma, shame, anxiety, and perfectionism — and the difference between healing and avoidance.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/palliative_care.jpg",
    href: "/blog/emotional-freedom-month",
  },
  {
    id: 9,
    title: "Redefining Strength: Why Asking for Help Is a Sign of Strength, Not Weakness",
    blogType: "Men's Mental Health",
    description:
      "Challenging the masculine conditioning that equates vulnerability with weakness, and the cost of isolation.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/medication_management.jpg",
    href: "/blog/redefining-strength",
  },
  {
    id: 10,
    title: "Financial Stress and Men's Mental Health: Why Money Worries Hit Men Hard",
    blogType: "Men's Mental Health",
    description:
      "How economic pressure drives anxiety, depression, and exhaustion in men — and healthier ways to cope.",
    mediaType: "image",
    mediaUrl: "/productSummaryCards/kap_retreat.jpg",
    href: "/blog/financial-stress-mens-mental-health",
  },
]
