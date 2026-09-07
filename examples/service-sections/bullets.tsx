import BulletList from "@/components/bullet-list"

// Plain bulleted list at body-copy size ("Who it's for").
export default function BulletsSection({ items }: { items: string[] }) {
  return <BulletList items={items} size="lg" className="mt-6 text-muted-foreground" />
}
