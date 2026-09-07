import StepsSection from "@/examples/service-sections/steps"
import type { PageSteps } from "@/types/pageSection"

export default function StepsBlock({ section }: { section: PageSteps }) {
  return <StepsSection items={section.steps} />
}
