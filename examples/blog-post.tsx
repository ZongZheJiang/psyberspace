// examples/blog-post.tsx

import { promises as fs } from "fs"
import path from "path"
import BlogPost from "@/components/blog-post"

/**
 * Example instantiation of the BlogPost component for the "Introducing Fobia"
 * article. Reads the copy from `data/blogs/introducing-fobia.md` at build
 * time and hands the raw markdown to the reusable renderer.
 */
async function IntroducingFobiaBlogPost() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "blogs",
    "introducing-fobia.md"
  )
  const content = await fs.readFile(filePath, "utf-8")

  return <BlogPost content={content} />
}

export default IntroducingFobiaBlogPost
