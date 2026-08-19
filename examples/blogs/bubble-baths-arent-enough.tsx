// examples/blogs/bubble-baths-arent-enough.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "Why Bubble Baths Aren't Enough" article, scraped from
 * psyberspacetherapy.com. Reads the copy from
 * `data/blogs/bubble-baths-arent-enough.md` at build time.
 */
async function BubbleBathsArentEnoughBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "bubble-baths-arent-enough.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default BubbleBathsArentEnoughBlogPost
