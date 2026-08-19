import { CommunityChannel } from "@/types/communityChannel"

export const COMMUNITY_CHANNELS: CommunityChannel[] = [
    {
        id: 1,
        name: "Discord",
        description: "Join our Discord server to chat with the team and other Fobia users in real time.",
        icon: "/discord.svg",
        href: "https://discord.gg/fobia",
        cta: "Join Server",
    },
    {
        id: 2,
        name: "LinkedIn",
        description: "Follow us on LinkedIn for product updates, announcements, and company news.",
        icon: "/linkedin.svg",
        href: "https://www.linkedin.com/company/fobia-ai/",
        cta: "Follow Us",
    },
    {
        id: 3,
        name: "X / Twitter",
        description: "Stay up to date with the latest from Fobia on X.",
        icon: "/x-twitter.svg",
        href: "https://x.com/fobia_ai",
        cta: "Follow on X",
    },
]
