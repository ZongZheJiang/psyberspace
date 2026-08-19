import { CardData } from "@/types/cardData";

export const CARD_ITEMS: CardData[] = [
  {
    id: 1,
    tag: "Featured",
    title: "Design systems meetup",
    description: "A practical talk on component APIs, accessibility, and shipping faster.",
    buttonText: "View Event",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    imageAlt: "People collaborating around a table",
  },
  {
    id: 2,
    tag: "Workshop",
    title: "Tailwind CSS Deep Dive",
    description: "Master modern utilities, responsive design patterns, and performance optimization.",
    buttonText: "Register Now",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Computer monitor displaying code",
  },
  {
    id: 3,
    tag: "Conference",
    title: "Next.js Architecture v15",
    description: "A deep dive into Server Actions, Partial Prerendering, and client cache layers.",
    buttonText: "Get Tickets",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Conference stage with stage lights",
  },
]