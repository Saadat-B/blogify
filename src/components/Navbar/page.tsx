"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Latest Posts",
    href: "/blog/latest",
    description: "Read the newest articles from our writers.",
  },
  {
    title: "Popular Posts",
    href: "/blog/popular",
    description: "Discover trending and most-read blog entries.",
  },
  {
    title: "Authors",
    href: "/blog/authors",
    description: "Meet our contributors and explore their work.",
  },
  {
    title: "Archive",
    href: "/blog/archive",
    description: "Browse older posts by month and year.",
  },
  {
    title: "Write for Us",
    href: "/blog/write",
    description: "Submit your own articles and join our community.",
  },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex items-center p-6 bg-black shadow-lg">
      <p className="text-3xl">BLOGIFY</p>
      <NavigationMenu
        viewport={false}
        className="w-full max-w-full items-center"
      >
        <NavigationMenuList className="gap-20">
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="text-xl">
              Home
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        Blogify
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Discover articles, stories, and resources from our
                        community.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/blog" title="Latest Posts">
                  Explore recent articles and updates from our authors.
                </ListItem>
                <ListItem href="/categories" title="Categories">
                  Browse posts by topics and interests.
                </ListItem>
                <ListItem href="/about" title="About Us">
                  Learn more about our mission and team.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              Blogs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/about" className="text-xl">
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/categories/tech">
                      <div className="font-medium">Tech</div>
                      <div className="text-muted-foreground">
                        Gadgets, software, and technology news.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/categories/lifestyle">
                      <div className="font-medium">Lifestyle</div>
                      <div className="text-muted-foreground">
                        Wellness, travel, and daily inspiration.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/categories/business">
                      <div className="font-medium">Business</div>
                      <div className="text-muted-foreground">
                        Entrepreneurship, finance, and career tips.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/categories/design">
                      <div className="font-medium">Design</div>
                      <div className="text-muted-foreground">
                        Creativity, UI/UX, and visual inspiration.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              FAQ
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/faq/general">
                      <div className="font-medium">General Questions</div>
                      <div className="text-muted-foreground">
                        Answers to common questions about Blogify.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/faq/account">
                      <div className="font-medium">Account & Membership</div>
                      <div className="text-muted-foreground">
                        Info about registration, login, and user accounts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/faq/writing">
                      <div className="font-medium">Writing & Submissions</div>
                      <div className="text-muted-foreground">
                        How to contribute articles and our editorial process.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              Account
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/login">
                      <div className="font-medium">Sign In</div>
                      <div className="text-muted-foreground">
                        Access your account and manage your profile.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/register">
                      <div className="font-medium">Sign Up</div>
                      <div className="text-muted-foreground">
                        Create a new account to join Blogify.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
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
  );
}
