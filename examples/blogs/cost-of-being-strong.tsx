// examples/blogs/cost-of-being-strong.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "The Cost of Being Strong" article, scraped from
 * psyberspacetherapy.com. Reads the copy from
 * `data/blogs/cost-of-being-strong.md` at build time and hands the raw
 * markdown to the reusable BlogPost renderer.
 */
async function CostOfBeingStrongBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "cost-of-being-strong.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default CostOfBeingStrongBlogPost
