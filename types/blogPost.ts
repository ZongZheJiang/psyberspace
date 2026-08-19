export interface BlogPost {
  id: number
  title: string
  blogType: string
  description: string
  mediaType: "image" | "video"
  mediaUrl: string
  href: string
}