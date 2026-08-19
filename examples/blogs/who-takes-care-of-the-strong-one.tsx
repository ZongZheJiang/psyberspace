// examples/blogs/who-takes-care-of-the-strong-one.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "Who Takes Care of the Strong One?" article, scraped from
 * psyberspacetherapy.com. Reads the copy from
 * `data/blogs/who-takes-care-of-the-strong-one.md` at build time.
 */
async function WhoTakesCareOfTheStrongOneBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "who-takes-care-of-the-strong-one.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default WhoTakesCareOfTheStrongOneBlogPost
