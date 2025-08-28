"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Example blog data (replace with your own or fetch from API)
const blogs = [
  {
    id: 1,
    title: "How to Start a Blog in 2025",
    excerpt:
      "A step-by-step guide to launching your own blog and building an audience.",
    image: "/public/blog1.jpg",
    href: "/blog/1",
  },
  {
    id: 2,
    title: "Design Trends for Modern Blogs",
    excerpt: "Explore the latest design ideas to make your blog stand out.",
    image: "/public/blog2.jpg",
    href: "/blog/2",
  },
  {
    id: 3,
    title: "Writing Content That Connects",
    excerpt: "Tips for creating engaging posts that your readers will love.",
    image: "/public/blog3.jpg",
    href: "/blog/3",
  },
];

export default function Hero() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-black via-slate-900 to-slate-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Welcome to Blogify
        </h1>
        <p className="text-xl text-slate-200 mb-6">
          Discover stories, resources, and inspiration from our community.
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-slate-100 font-semibold shadow"
        >
          Get Started
        </Button>
      </div>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link href={blog.href} key={blog.id} className="group">
            <Card className="overflow-hidden bg-slate-900 border-slate-700 shadow-lg transition-transform group-hover:-translate-y-1 group-hover:shadow-2xl h-[470px] flex flex-col">
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-black">
                <span className="text-white text-xl font-semibold opacity-80 text-center">
                  Image Placeholder
                </span>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col justify-between min-h-0">
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-slate-300 mb-4 flex-shrink-0 line-clamp-2">
                  {blog.excerpt}
                </p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors mt-auto"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
