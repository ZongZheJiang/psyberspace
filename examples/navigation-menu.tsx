"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useActiveHash } from "@/lib/useActiveHash"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu"

import { Button } from "../components/ui/button"
import { ThemeSwitcher } from "../components/theme-switcher"
import Image from "next/image"

import { NAVBAR_ABOUT } from "@/data/navbarAbout"
import { NAVBAR_SERVICES } from "@/data/navbarServices"
import { NAVBAR_TREATMENTS } from "@/data/navbarTreatments"

export const NavigationMenuDemo = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const activeHash = useActiveHash()

  // Highlight the About dropdown item matching the section currently in view
  // (driven by the scrollspy on the /about page).
  const isAboutItemActive = (href: string) =>
    pathname === "/about" && href === `/about${activeHash}`

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/100 backdrop-blur-md border-b border-border"
          : "bg-background/100 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16">
        <NavigationMenu variant="dark">
          <NavigationMenuList variant="dark">
            <NavigationMenuItem className="mx-2">
              <Link href="/">
                <Image
                  src="/psyberspace_logo.png"
                  alt="Psyberspace Logo"
                  height={32}
                  width={128}
                />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild variant="dark" className={navigationMenuTriggerStyle({ variant: "dark" })}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger variant="dark">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-64">
                  {NAVBAR_ABOUT.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      variant="dark"
                      active={isAboutItemActive(component.href)}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger variant="dark">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-1 md:w-[640px] md:grid-cols-2">
                  {NAVBAR_SERVICES.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      variant="dark"
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger variant="dark">
                Treatments
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-64">
                  {NAVBAR_TREATMENTS.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      variant="dark"
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild variant="dark" className={navigationMenuTriggerStyle({ variant: "dark" })}>
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild variant="dark" className={navigationMenuTriggerStyle({ variant: "dark" })}>
                <Link href="/blog">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild variant="dark" className={navigationMenuTriggerStyle({ variant: "dark" })}>
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <Button className="mr-2">
            <Link href="https://psyberspacetherapy.janeapp.com/">
            Book a Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const listItemVariants = cva(
  "leading-none font-medium text-foreground/90",
  {
    variants: {
      variant: {
        light: "",
        dark: "",
      },
    },
  }
)

function ListItem({
  title,
  children,
  variant = "light",
  href,
  active = false,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; active?: boolean } & VariantProps<typeof listItemVariants>) {
  return (
    <li className={cn(active && "rounded-md bg-accent", className)} {...props}>
      <NavigationMenuLink asChild variant={variant} aria-current={active ? "true" : undefined}>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className={cn(listItemVariants({ variant }), active && "text-primary")}>{title}</div>
            {children ? (
              <div className="line-clamp-2 text-muted-foreground">{children}</div>
            ) : null}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}