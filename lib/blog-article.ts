import { promises as fs } from "fs"
import path from "path"

import { BlogArticle } from "@/types/blogArticle"

const BLOGS_DIR = path.join(process.cwd(), "data", "blogs")

/** Slugs are lowercase kebab-case; anything else cannot name a blog file. */
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/**
 * Read the raw markdown for a post. Returns null rather than throwing when the
 * slug is malformed or the file is missing, so callers can render a 404 instead
 * of a 500. Callers should still resolve the slug against BLOGPOSTS first — the
 * checks here are defence in depth against a slug that came from a URL.
 */
export async function readBlogArticleFile(slug: string): Promise<string | null> {
    if (!SLUG_PATTERN.test(slug)) return null

    const filePath = path.join(BLOGS_DIR, `${slug}.md`)
    if (!filePath.startsWith(BLOGS_DIR + path.sep)) return null

    try {
        return await fs.readFile(filePath, "utf-8")
    } catch {
        return null
    }
}

/**
 * Parse a raw blog `.md` file (from `data/blogs/`) into a structured
 * BlogArticle. The file starts with a YAML-style `key: value` frontmatter
 * block fenced by `---` lines; everything after it is the markdown body.
 */
export function parseBlogArticle(content: string): BlogArticle {
    const normalized = content.replace(/\r\n/g, "\n")
    const frontmatterMatch = normalized.match(/^---\n([\s\S]*?)\n---\n?/)

    const meta: Record<string, string> = {}
    let body = normalized

    if (frontmatterMatch) {
        for (const line of frontmatterMatch[1].split("\n")) {
            const match = line.match(/^([^:]+):\s*(.*)$/)
            if (match) {
                meta[match[1].trim()] = match[2].trim()
            }
        }
        body = normalized.slice(frontmatterMatch[0].length)
    }

    return {
        category: meta.category ?? "",
        date: meta.date ?? "",
        dateTime: meta.dateTime ?? "",
        readTime: meta.readTime ?? "",
        title: meta.title ?? "",
        author: meta.author ?? "",
        tags: meta.tags
            ? meta.tags
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter(Boolean)
            : [],
        articleUrl: meta.articleUrl ?? "",
        body: body.trim(),
    }
}
