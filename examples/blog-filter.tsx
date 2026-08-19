"use client"

// examples/blog-filter.tsx

import { useMemo, useState } from "react"

import HorizontalCardGrid from "./horizontal-card-grid"
import { BLOGPOSTS } from "@/data/blogPosts"
import { cn } from "@/lib/utils"

const ALL = "All"

/**
 * Category filter for the blog listing. Derives its tabs from the distinct
 * `blogType` badges on the posts, then renders only the posts matching the
 * selected badge (or every post when "All" is active).
 */
function BlogFilter() {
  const [selected, setSelected] = useState<string>(ALL)

  // Unique badge categories, in the order they first appear in the data.
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(BLOGPOSTS.map((post) => post.blogType)))],
    []
  )

  const filteredPosts = useMemo(
    () =>
      selected === ALL
        ? BLOGPOSTS
        : BLOGPOSTS.filter((post) => post.blogType === selected),
    [selected]
  )

  return (
    <div>
      {/* Filter tabs */}
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = category === selected
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              aria-pressed={isActive}
              className={cn(
                "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                isActive
                  ? "border-transparent bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-muted"
              )}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* Filtered grid of blog cards */}
      <HorizontalCardGrid posts={filteredPosts} />
    </div>
  )
}

export default BlogFilter
