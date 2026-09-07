import type { Metadata } from "next"
import { notFound } from "next/navigation"

import BlogArticle from "@/examples/blog-article"
import { BLOGPOSTS, getBlogPost } from "@/data/blogPosts"
import { readBlogArticleFile } from "@/lib/blog-article"

// Prerender one static page per blog slug at build time.
export function generateStaticParams() {
  return BLOGPOSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return { title: "Blog post not found — Psyberspace" }
  }

  return {
    title: `${post.title} — Psyberspace`,
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Read using the slug from the data file, never the raw URL segment.
  const content = await readBlogArticleFile(post.slug)

  if (!content) {
    notFound()
  }

  // BlogArticle renders its own <main>, navigation and footer.
  return <BlogArticle content={content} />
}
