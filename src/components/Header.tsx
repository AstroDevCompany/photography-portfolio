"use client";
import "../app/headerResponsive.css"
import img_logo from "../../public/logo.jpg";
import ThemeToggle from "./ThemeToggle";
import * as React from "react"
import { Instagram, Mail, Send } from "lucide-react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/#hero"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Overview
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      An amateur photographer looking to share his passion for
                      capturing moments.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#about" title="Who I am">
                Some info about me.
              </ListItem>
              <ListItem href="/#wic" title="Shots">
                What I capture.
              </ListItem>
              <ListItem href="/#work" title="Recent work">
                My recent posts.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>My Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="https://instagram.com/lucashotedits">
                    <div className="font-medium">IG Feed</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/workinprogress">
                    <div className="font-medium">Best of - Showcase</div>
                    <div className="text-muted-foreground">
                      View some of my best shots.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/#work">
                    <div className="font-medium">Recent shots</div>
                    <div className="text-muted-foreground">
                      View my latest photography posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/workinprogress">About me</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Reach out</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="mailto:luca@lucashots.com" className="flex-row items-center gap-2"><Mail />Mail</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://wa.me/393311384552?countryName=IT&countryCode=39&phoneNumber=3311384552" className="flex-row items-center gap-2"><Send />WhatsApp</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild >
                  <Link href="https://instagram.com/lucashotedits" className="flex-row items-center gap-2"><Instagram />Instagram</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          mx-auto max-w-6xl
          bg-white/70 dark:bg-white/10 backdrop-blur-sm shadow-md
          rounded-b-3xl
          px-6 py-4
          flex items-center justify-between">

        <div className="flex items-center">
          <a href="https://instagram.com/lucashotedits" target="_blank" rel="noopener noreferrer" className="relative">
            <div className="flex items-center space-x-3">
              <img id="responsive-small" src={img_logo.src} draggable={false} alt="Logo" className="h-10 w-10 object-contain rounded-3xl" />
              <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()} />
              <p id="responsive-heading" className="text-xl font-bold text-gray-800 dark:text-white transition-all">@lucashotedits</p>
            </div>
          </a>
        </div>

        {/* Navigation */}

        <div className="flex items-center space-x-3">
          <NavigationMenuDemo />

          <div id="responsive-small" className="px-2 text-gray-800 dark:text-white text-lg">
            |
          </div>

          <div id="responsive-small"><ThemeToggle /></div></div>
      </div>
    </header>
  );
}
