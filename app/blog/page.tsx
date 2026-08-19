//app/blog/page.tsx

import { NavigationMenuDemo } from "@/examples/navigation-menu"
import HorizontalCard from "../../examples/horizontal-card"
import BlogFilter from "../../examples/blog-filter"
import { Footer } from "@/components/footer"
import { BLOGPOSTS } from "@/data/blogPosts"

function Blog() {
    // Feature the most recent scraped post; the grid below lists all ten.
    const featuredBlogPost = BLOGPOSTS[0]

    return (
        <div>
            <NavigationMenuDemo />
            <h2 className="text-4xl/16 md:text-6xl/20 ml-[10%] my-16">Featured</h2>
            <HorizontalCard cardProps={featuredBlogPost} />
            <h2 className="text-4xl/16 md:text-6xl/20 ml-[10%] mt-16 mb-8">All Posts</h2>
            <BlogFilter />
            <Footer />
        </div>
    )
}

export default Blog
