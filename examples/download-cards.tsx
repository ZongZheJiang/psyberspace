"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import Image from 'next/image'
import Link from "next/link"
import { DOWNLOAD_CARDS } from "@/data/downloadCards"
import { Check } from "lucide-react"

function detectOS(): string {
  if (typeof navigator === "undefined") return ""
  const ua = navigator.userAgent
  if (/Mac/i.test(ua)) return "macOS"
  if (/Win/i.test(ua)) return "Windows"
  if (/Linux/i.test(ua)) return "Linux"
  return ""
}

function DownloadCards() {
  const [currentOS, setCurrentOS] = useState("")

  useEffect(() => {
    setCurrentOS(detectOS())
  }, [])

  return (
    <div className="flex justify-center w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-6xl w-full">
        {DOWNLOAD_CARDS.map((card) => {
          const isDetected = card.title === currentOS
          return (
            <div
              key={card.id}
              className={`relative flex flex-col items-center text-center gap-4 p-6 rounded-xl transition-all ${
                isDetected
                  ? "bg-card border-2 border-primary/30 shadow-lg shadow-primary/10"
                  : ""
              }`}
            >
              {isDetected && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-0.5 rounded-full">
                  <Check className="h-3 w-3" />
                  Detected
                </div>
              )}
              <div className="flex flex-col items-center gap-3 min-h-[140px] justify-start pt-4">
                <Image src={card.imageUrl} alt={`${card.title} logo`} width={64} height={64} className="object-contain dark:brightness-0 dark:invert" />
                <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
              <div className="flex flex-col gap-2 w-full mt-auto">
                <Button>
                  <Link href={card.downloadLink1} target="_blank" rel="noopener noreferrer">
                    {card.downloadLink1Text}
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link href={card.downloadLink2} target="_blank" rel="noopener noreferrer">
                    {card.downloadLink2Text}
                  </Link>
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DownloadCards