import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ABOUT_FAQS } from "@/data/aboutFaqs"

export default function AboutFaqs() {
  return (
    <section id="faqs" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="mt-8 w-full">
          {ABOUT_FAQS.map((faq) => (
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
      </div>
    </section>
  )
}
