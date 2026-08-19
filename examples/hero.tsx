"use client"

import { useTheme } from "../components/theme-provider"
import PixelBlast from "@/components/pixelblast"
import TextGenerateEffect from "../components/text-generation"
import { Button } from "../components/ui/button"
import Link from "next/link"
import IconCarousel from "./icon-carousel"

function Hero() {
  const { theme } = useTheme()
  const pixelColor = theme === "dark" ? "#ffffff" : "#000000"

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        >
          <source src="/HomepageVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start px-6 pt-32 md:pt-44">

        <TextGenerateEffect
          className="mt-4 text-4xl/12 md:text-6xl/16 text-center text-foreground text-white max-w-3xl font-[family-name:var(--font-playfair-display)] tracking-tight"
          words="Heal at the Root of your Trauma"
          filter={true}
          duration={0.5}
          staggerDelay={0.2}
        />
        <h2
        className="mt-4 text-lg/12 md:text-2xl/16 text-center text-foreground text-white max-w-3xl font-[family-name:var(--font-playfair-display)] tracking-tight"
        >
            There is a path to deep healing -- and you don't have to walk it alone. With powerful evidence-based therapies, you can transform from the inside out.
        </h2>

        <div className="mt-8">
          <Button
            variant="modern"
            className="bg-foreground text-background hover:bg-foreground/90 text-lg px-10 py-7 rounded-full"
          >
            <Link href="/download">Book a free 20 minute consultation now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero