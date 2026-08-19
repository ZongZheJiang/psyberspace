// types/blogArticle.ts

export interface BlogArticle {
  category: string
  date: string
  dateTime: string
  readTime: string
  title: string
  author: string
  tags: string[]
  articleUrl: string
  /** Raw markdown for the article body (everything after the frontmatter). */
  body: string
}
