"use client"

import Image from "next/image"

const ICONS = [
  { src: "/icons/agentzero-icon.png", label: "Agent Zero" },
  { src: "/icons/anything-llm-icon.png", label: "Anything LLM" },
  { src: "/icons/chatbot-ui-icon.png", label: "Chatbot UI" },
  { src: "/icons/chatbot-ui.png", label: "Chatbot UI" },
  { src: "/icons/dify-icon.png", label: "Dify" },
  { src: "/icons/flowise-icon.png", label: "Flowise" },
  { src: "/icons/hermes-icon.png", label: "Hermes" },
  { src: "/icons/jan-banner.png", label: "Jan" },
  { src: "/icons/librechat-logo.svg", label: "LibreChat" },
  { src: "/icons/lobehub-icon.png", label: "LobeHub" },
  { src: "/icons/n8n-icon.png", label: "n8n" },
  { src: "/icons/nanoclaw-icon.png", label: "NanoClaw" },
  { src: "/icons/open-webui-icon.png", label: "Open WebUI" },
  { src: "/icons/openclaw-icon.png", label: "OpenClaw" },
  { src: "/icons/voicebox-logo.png", label: "Voicebox" },
  { src: "/icons/zeroclaw-icon.png", label: "ZeroClaw" },
  { src: "/icons/cadam-icon.png", label: "Cadam" },
  { src: "/icons/harper-icon.svg", label: "Harper" },
  { src: "/icons/jscad-icon.png", label: "JSCAD" },
  { src: "/icons/stack-icon.svg", label: "Stack" },
  { src: "/icons/voicebox-icon.webp", label: "Voicebox" },
]

function IconStrip() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {ICONS.map(({ src, label }, i) => (
        <div key={i} className="flex flex-col items-center gap-2 min-w-[88px]">
          <div className="h-14 w-14 rounded-2xl border border-border flex items-center justify-center bg-foreground/5 p-2">
            <Image src={src} alt={label} width={40} height={40} className="object-contain" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function IconCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-background/50 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-0 will-change-transform">
        <IconStrip />
        <IconStrip />
      </div>
    </div>
  )
}