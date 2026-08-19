"use client"

import * as React from "react"
import { PlayIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoAutoplayProps {
  className?: string
  youtubeId: string
  previewVideoUrl: string // Path to your short, looping .mp4 file
}

function VideoAutoplay({ className, youtubeId, previewVideoUrl }: VideoAutoplayProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <div className={cn("relative w-full aspect-video overflow-hidden rounded-lg bg-black", className)}>
      {!isPlaying ? (
        // Preview Screen (Short looping video + Play button overlay)
        <button
          onClick={() => setIsPlaying(true)}
          className="relative block h-full w-full text-left focus:outline-none group"
          aria-label="Play video"
        >
          {/* Looping preview clip */}
          <video
            className="h-full w-full object-cover"
            src={previewVideoUrl}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Dark overlay that softens on hover */}
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />

          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition duration-300 transform group-hover:scale-110 group-hover:bg-white">
              <PlayIcon className="ml-1 size-7 fill-current" />
            </div>
          </div>
        </button>
      ) : (
        // Active YouTube Video Screen
        <div className="relative h-full w-full">
          {/* Close / Return to Preview Button */}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 transition shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Return to preview"
          >
            <XIcon className="size-5" />
          </button>

          {/* YouTube IFrame */}
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}

export default VideoAutoplay