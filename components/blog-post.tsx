// components/blog-post.tsx

import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { BlogArticle } from "@/types/blogArticle"

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

/**
 * Maps markdown elements to the article's design system so the rendered body
 * keeps the same look regardless of which markdown features an author uses.
 */
const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold pt-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-bold pt-2">{children}</h3>
  ),
  p: ({ children }) => <p>{children}</p>,
  a: ({ href, children }) => (
    <a href={href} className="text-primary underline underline-offset-4">
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-foreground pl-4 italic my-6">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-3">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-3">{children}</ol>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
}

function BlogArticleBody({ body }: { body: string }) {
  return (
    <div className="space-y-8 leading-relaxed text-lg">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {body}
      </ReactMarkdown>
    </div>
  )
}

/**
 * Renders a full blog post article from the raw text of a `data/blogs/*.md`
 * file. All copy — header meta, body, tags and the external article link —
 * comes from the parsed file, so pages stay free of hardcoded blog content.
 */
function BlogPost({ content }: { content: string }) {
  const article = parseBlogArticle(content)

  return (
    <main className="min-h-screen">
      <NavigationMenuDemo />

      {/* Article Container */}
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <span>← Back to Home</span>
            </a>
          </Button>
        </div>

        {/* Blog Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="font-semibold text-primary uppercase tracking-wider">
              {article.category}
            </span>
            <span>•</span>
            <time dateTime={article.dateTime}>{article.date}</time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 border-t border-b border-border py-4">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-foreground">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold">{article.author}</p>
              <p className="text-xs"></p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <BlogArticleBody body={article.body} />

        {/* Footer Section of Article */}
        <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted text-muted-foreground text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="sm:self-auto self-start">
              <a href="/blog">Back to Blog</a>
            </Button>
            {article.articleUrl && (
              <Button variant="outline" className="sm:self-auto self-start">
                <a href={article.articleUrl}>Link to full article</a>
              </Button>
            )}
          </div>
        </footer>
      </article>

      <Footer />
    </main>
  )
}

export default BlogPost
