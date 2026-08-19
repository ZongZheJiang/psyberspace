// Import from components 
import { Footer } from "../components/footer"

// Import from examples
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import Hero from "@/examples/hero"
import ProductSummary from "@/examples/product-summary"
import CarouselAudiences from "@/examples/carousel-audiences"
import CarouselBlog from "@/examples/carousel-blog"
import CarouselSubproducts from "@/examples/carousel-subproducts"
import HeroDownload from "@/examples/hero-download"
import Partnership from "@/examples/partnership"
import FeatureChecklist from "@/examples/feature-checklist"
import VideoDemo from "@/examples/video-demo"

export function Home () {
  return (
    <main className="w-full items-center gap-8">
      <NavigationMenuDemo />
      <Hero />
      {/* <div id="smooth-wrapper">
        <div id="smooth-content">
          <header className="h-[40vh]"></header>
          <VideoDemo />
          <footer className="h-[80vh]"></footer>
        </div>
      </div> */}
      <ProductSummary />
      <FeatureChecklist />
      <CarouselSubproducts />
      <HeroDownload />
      <CarouselBlog />
      <Partnership />
      <Footer />
    </main>
  )
}

export default Home