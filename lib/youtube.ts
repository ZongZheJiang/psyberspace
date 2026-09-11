// YouTube URL helpers shared by the scroll-pinned VideoDemo and the plain
// `video` page section, so both understand the same set of link shapes.

/** Pulls the 11-character video id out of any common YouTube URL shape. */
export function getYouTubeId(url: string): string | null {
    const match = url.match(
        /(?:youtube\.com\/(?:shorts\/|embed\/|live\/|v\/)|youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/
    )
    return match ? match[1] : null
}

/** Shorts are portrait; everything else is treated as widescreen. */
export function isShort(url: string): boolean {
    return /youtube\.com\/shorts\//.test(url)
}

/**
 * The embeddable form of `url`. YouTube links become `/embed/<id>`; anything
 * else is assumed to be directly embeddable and passed through untouched.
 * `rel=0` keeps the end-card suggestions on our own channel.
 */
export function toEmbedSrc(url: string): string {
    const id = getYouTubeId(url)
    return id ? `https://www.youtube.com/embed/${id}?rel=0` : url
}
