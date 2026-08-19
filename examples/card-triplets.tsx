import { Button } from "../components/ui/button"
import Image from 'next/image'
import Link from "next/link"
import { DOWNLOAD_CARDS } from "@/data/downloadCards"

import { UseCaseCard } from "@/types/useCaseCard"

function CardTriplets({useCaseCardsProps}: { useCaseCardsProps: UseCaseCard[] }) {
  return (
    <div className="flex justify-center w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-6xl w-full">
        {useCaseCardsProps.map((card) => {
          return (
            <div
              key={card.id}
              className={`relative flex flex-col items-center text-center gap-4 p-6 rounded-xl transition-all`}
            >
              <div className="flex flex-col items-center gap-3 min-h-[140px] justify-start pt-4">
                <Image src={card.imageUrl} alt={`${card.title} logo`} width={64} height={64} className="object-contain dark:brightness-0 dark:invert" />
                <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardTriplets