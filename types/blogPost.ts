export interface BlogPost {
  id: number
  title: string
  blogType: string
  description: string
  mediaType: "image" | "video"
  mediaUrl: string
  /** URL slug — this post lives at /blog/<slug> and its copy at data/blogs/<slug>.md. */
  slug: string
}
