// examples/blogs/financial-stress-mens-mental-health.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "Financial Stress and Men's Mental Health" article, scraped from
 * psyberspacetherapy.com. Reads the copy from
 * `data/blogs/financial-stress-mens-mental-health.md` at build time.
 */
async function FinancialStressMensMentalHealthBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "financial-stress-mens-mental-health.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default FinancialStressMensMentalHealthBlogPost
