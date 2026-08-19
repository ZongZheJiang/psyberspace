// examples/blogs/emotional-freedom-month.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "Emotional Freedom Month" article, scraped from
 * psyberspacetherapy.com. Reads the copy from
 * `data/blogs/emotional-freedom-month.md` at build time.
 */
async function EmotionalFreedomMonthBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "emotional-freedom-month.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default EmotionalFreedomMonthBlogPost
