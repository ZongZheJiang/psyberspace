import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { PageFaq } from "@/types/pageSection"

// Question-and-answer accordion, following the pattern in
// @/examples/about-faqs — that one is bound to ABOUT_FAQS, while this takes
// its items from the section so any page can carry its own set.
export default function FaqBlock({ section }: { section: PageFaq }) {
  return (
    <Accordion type="single" collapsible className="mt-8 w-full">
      {section.items.map((faq) => (
        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
          <AccordionTrigger className="text-left text-base font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
