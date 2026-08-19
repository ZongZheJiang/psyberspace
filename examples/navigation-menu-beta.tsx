"use client"

import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"

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
import AnimatedGpuFanIcon from "../components/animated-gpu-fan-icon"

import { NAVBAR_RESOURCES } from "@/data/navbarResources"
import { NAVBAR_USECASES } from "@/data/navbarUsecases"

export const NavigationMenuDemo = () => {
  const [scrolled, setScrolled] = React.useState(false)

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
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16">
        <NavigationMenu variant="dark">
          <NavigationMenuList variant="dark">
            <NavigationMenuItem>
              <Link href="/">
                <AnimatedGpuFanIcon size={32} color="var(--foreground)" animate speed={2} />
              </Link>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <NavigationMenuTrigger variant="dark">
                Use Cases
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-96">
                  {NAVBAR_USECASES.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      variant="dark"
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            {/* <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger variant="dark">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {NAVBAR_RESOURCES.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      variant="dark"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle({ variant: "dark" })}>
                <Link href="/documentation">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
             */}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
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
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string } & VariantProps<typeof listItemVariants>) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild variant={variant}>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className={listItemVariants({ variant })}>{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
