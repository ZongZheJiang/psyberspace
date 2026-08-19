import Image from "next/image"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

import { SUBPRODUCT_CARDS } from "@/data/subproductCards"

function CarouselSubproducts() {
  return (
    <div className="mx-[10%]">
      <div className="text-left mt-20">
        <h2 className="text-3xl font-bold">Our Treatments &amp; Services</h2>
      </div>
      <div className="container mx-auto mt-12 my-24 flex items-center justify-center">
        <Carousel
          className="w-full max-w-6xl flex justify-center"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="w-full">
            {SUBPRODUCT_CARDS.map((card) => (
              <CarouselItem
                key={card.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="relative flex aspect-video items-center justify-center bg-muted p-0">
                      <Image
                        src={card.photoSrc}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>

                  <div className="mt-4 space-y-2">
                    <h3 className="line-clamp-1 text-lg font-bold">
                      {card.title}
                    </h3>
                    <p className="line-clamp-3 min-h-[60px] text-sm text-neutral-500">
                      {card.caption}
                    </p>
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

export default CarouselSubproducts
