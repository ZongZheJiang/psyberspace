// examples/blogs/survival-mode-personality.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Renders the "When Survival Mode Becomes Your Personality" article, scraped
 * from psyberspacetherapy.com. Reads the copy from
 * `data/blogs/survival-mode-personality.md` at build time.
 */
async function SurvivalModePersonalityBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "survival-mode-personality.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default SurvivalModePersonalityBlogPost
