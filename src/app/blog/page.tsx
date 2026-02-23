// ============================================
// FILE LOCATION: src/app/blog/page.tsx
// PURPOSE: Blog listing page - shows all posts
// URL: /blog
// ============================================

import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, BookOpen, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHeaderFix from "@/components/BlogHeaderFix";

export const metadata: Metadata = {
  title:
    "Locksmith Blog | Security Tips & Expert Advice | Crownfield Locksmiths",
  description:
    "Expert locksmith advice, security tips, and guides for London homeowners. Learn about locks, UPVC mechanisms, smart security, and home protection.",
  keywords:
    "locksmith blog, security tips, lock advice, UPVC maintenance, smart locks, home security London",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <BlogHeaderFix />
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-[#001a3d] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="container-max relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6">
                <BookOpen className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold">Expert Insights</span>
              </div>

              <h1 className="heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Locksmith Blog
              </h1>
              <p className="text-xl text-white/80">
                Security tips, lock maintenance guides, and expert advice for
                protecting your London property.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-max">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group card overflow-hidden hover:shadow-gold transition-all duration-300"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full bg-gold text-primary text-xs font-bold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.id}`}>
                      <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-gold transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
