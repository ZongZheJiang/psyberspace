"use client"

import * as React from "react"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

// Use the same dataset structure
import { AUDIENCEPOSTS } from "@/data/audiencePosts"
import { type CarouselApi } from "../components/ui/carousel"

function CarouselBlog() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = React.useState(0)

  // Track the active slide index whenever the carousel shifts
  React.useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    handleSelect() // Get initial active index
    api.on("select", handleSelect)
    api.on("reInit", handleSelect)

    return () => {
      api.off("select", handleSelect)
      api.off("reInit", handleSelect)
    }
  }, [api])

  return (
    <div className="w-full overflow-hidden py-10">
      {/* Container is full width to allow peeking slides to stretch to the edges */}
      <div className="w-full px-6 md:px-20">
        <Carousel
          setApi={setApi}
          className="w-full mb-8"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-ml-6">
            {AUDIENCEPOSTS.map((post, index) => {
              const isActive = index === activeIndex

              return (
                <CarouselItem
                  key={post.id}
                  // basis-[75%] allows the next card to peek in on the right side
                  className="pl-6 basis-[75%] md:basis-[70%] transition-all duration-500 ease-in-out"
                >
                  {/* Large Rounded Media Card */}
                  <Card className="relative aspect-[16/9] pt-0">
                    <CardContent className="flex aspect-[16/9] p-0 relative bg-neutral-100">
                      {post.mediaType === "video" ? (
                        <video
                          src={post.mediaUrl}
                          className="h-full w-full object-cover"
                          controls
                          playsInline
                          muted
                        />
                      ) : (
                        <Image
                          src={post.mediaUrl}
                          alt="Picture of Audience"
                          fill={true}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </CardContent>
                  </Card>

                  {/* Active-only Description Container */}
                  <div
                    className={`mt-8 flex justify-between items-start transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    {/* Text Details */}
                    <div className="space-y-2 max-w-xl text-left">
                      <h4>{post.audienceName}</h4>
                      <h6>{post.description}</h6>
                      <a
                        href={`${post.useCaseUrl}`}
                        className="inline-flex items-center text-sm font-semibold text-neutral-900 mt-4 hover:underline"
                      >
                        View case <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
            {/* Trailing spacer so the last real slide can reach a left-aligned snap */}
            <div className="shrink-0 basis-[25%] md:basis-[30%] pl-6" />
          </CarouselContent>
            {/* Navigation Buttons placed inside the active layout */}
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselBlog