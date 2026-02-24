// ============================================
// FILE LOCATION: src/app/blog/page.tsx
// PURPOSE: Blog listing page
// URL: /blog
// ============================================

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Locksmith Blog | Security Tips & Expert Advice | Crownfield Locksmiths",
  description:
    "Expert locksmith advice, security tips, UPVC guides, smart lock advice and home security insights across London.",
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header forceDark />
      <main className="min-h-screen pt-20 bg-[#F8F7F4]">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #003b7a 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="container-max px-4 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-bold text-xs uppercase tracking-[0.22em]">
                  Locksmith Insights
                </span>
              </div>

              <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.08]">
                Security Tips
                <br />
                <span className="text-gradient-gold">&amp; Expert Advice.</span>
              </h1>

              <p className="mt-6 text-gray-600 text-lg max-w-2xl">
                Practical guidance on locks, home protection, UPVC mechanisms,
                smart security and insurance considerations — written by
                professional locksmiths.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-24">
          <div className="container-max px-4 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-primary/15 hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="heading text-xl text-primary leading-snug line-clamp-2 group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-gray-500 text-sm mt-3 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
