import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { Button } from "../components/ui/button"
import Link from "next/link"
import Image from "next/image"

import { BLOGPOSTS } from "@/data/blogPosts"

function CarouselBlog() {
  return (
    <div className="mx-[10%]">
        <div className="text-left mt-20">
            <h2 className="text-3xl font-bold">Blog Posts</h2>
        </div>
        <div className="container mx-auto mt-20 flex items-center justify-center">
            <Carousel 
            className="w-full  max-w-6xl flex justify-center"
            opts={{
                align: "start",
                loop: true,
                slidesToScroll: 3,
            }}
            >
                <CarouselContent className="w-full">
                    {BLOGPOSTS.map((post) => (
                        <CarouselItem key={post.id} className="md:basis-1/3">
                            <div className="p-1">
                            <Card className="overflow-hidden">
                                <CardContent className="flex aspect-video items-center justify-center p-0 relative bg-muted">
                                {post.mediaType === "video" ? (
                                    <video
                                    src={post.mediaUrl}
                                    className="h-full w-full object-cover"
                                    controls
                                    preload="metadata"
                                    playsInline
                                    muted
                                    />
                                ) : (
                                    <Image
                                    src={post.mediaUrl}
                                    alt={post.title}
                                    fill={true}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                    />
                                )}
                                </CardContent>
                            </Card>

                            <div className="mt-4 space-y-2">
                                <h3 className="text-lg font-bold line-clamp-1">{post.title}</h3>
                                <p className="text-sm text-neutral-500 line-clamp-2 min-h-[40px]">
                                {post.description}
                                </p>
                                <Button className="w-full" variant="secondary">
                                    <Link href={post.href}>Go to Blogpost</Link>
                                </Button>
                            </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>

  )
}

export default CarouselBlog
