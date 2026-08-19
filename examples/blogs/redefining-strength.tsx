// examples/blogs/redefining-strength.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "Redefining Strength" article, scraped from
 * psyberspacetherapy.com. Reads the copy from
 * `data/blogs/redefining-strength.md` at build time.
 */
async function RedefiningStrengthBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "redefining-strength.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default RedefiningStrengthBlogPost
