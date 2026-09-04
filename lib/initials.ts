/** "Coley C. Woodward II, LMHC" -> "CW". Used for avatar fallbacks. */
export function initials(name: string) {
    return name
        .split(" ")
        .filter((part) => /^[A-Za-z]/.test(part))
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join("")
}
