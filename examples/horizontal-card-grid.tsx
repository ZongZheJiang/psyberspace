import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Button } from "../components/ui/button"
import Image from "next/image"
import Link from "next/link"

import { BlogPost } from "../types/blogPost"
import { BLOGPOSTS } from "@/data/blogPosts"
import { categoryBadgeClass } from "@/lib/blog-categories"

/**
 * Renders a responsive grid of blog cards. By default it shows every post,
 * but callers (such as the category filter) can pass a narrowed `posts` list.
 * Each card stacks vertically: cover image, badge + title, description, then a
 * full-width call-to-action button.
 */
function HorizontalCardGrid({ posts = BLOGPOSTS }: { posts?: BlogPost[] }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Grid container: 1 column on mobile, up to 3 on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            {/* Cover image sits inside the card, spanning its full width */}
            <Image
              src={item.mediaUrl}
              width={640}
              height={360}
              alt=""
              className="w-full h-48 object-cover"
            />

            <CardHeader>
              <CardTitle className="text-lg leading-snug">
                {item.title}
              </CardTitle>
              <CardAction>
                <Badge variant="secondary" className={categoryBadgeClass(item.blogType)}>
                  {item.blogType}
                </Badge>
              </CardAction>
              <CardDescription className="line-clamp-3">
                {item.description}
              </CardDescription>
            </CardHeader>

            <CardFooter variant="borderless" className="mt-auto">
              <Button asChild className="w-full font-semibold">
                <Link href={item.href}>View Blog Post</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCardGrid
