// examples/use-case-summary-card.tsx

import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
  CardTitle,
} from "../components/ui/card"

import { BlogPost } from "../types/blogPost"

import { Badge } from "@/components/ui/badge"
import { Button } from "../components/ui/button"
import Link from "next/link"
import { useCaseSummary } from "@/types/useCardSummary"



function UseCaseSummaryCard({cardProps}: {cardProps: useCaseSummary}) {
    if (!cardProps) {
        console.error("No cardProps provided to UseCaseSummaryCard component.");
        return null; 
    }

    return (
        <div className="flex w-[80%] justify-between items-start gap-8 my-8 mx-[10%]">
            <div className="w-[50%]">
                <Card variant="borderless_transparent">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold mb-8">
                            {cardProps.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                            {cardProps.description}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter variant="borderless_transparent">
                    </CardFooter>
                </Card>
            </div>
            <Button className="w-full sm:w-auto px-6">
                <Link href={cardProps.href}>
                    Try Fobia Now
                </Link>
            </Button>
        </div>
    )
}

export default UseCaseSummaryCard