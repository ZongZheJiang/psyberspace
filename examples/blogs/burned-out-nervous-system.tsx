// examples/blogs/burned-out-nervous-system.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "Always Feeling Numb or Flat?" article, scraped from
 * psyberspacetherapy.com. Reads the copy from
 * `data/blogs/burned-out-nervous-system.md` at build time.
 */
async function BurnedOutNervousSystemBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "burned-out-nervous-system.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default BurnedOutNervousSystemBlogPost
