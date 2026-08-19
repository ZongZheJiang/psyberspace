// examples/blogs/trauma-education-10-signs.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "Trauma Education: 10 Signs" article, scraped from
 * psyberspacetherapy.com. Reads the copy from
 * `data/blogs/trauma-education-10-signs.md` at build time.
 */
async function TraumaEducation10SignsBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "trauma-education-10-signs.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default TraumaEducation10SignsBlogPost
