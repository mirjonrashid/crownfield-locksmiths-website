// ============================================
// FILE LOCATION: src/app/blog/page.tsx
// PURPOSE: Blog listing page
// URL: /blog
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Phone } from "lucide-react";
import { getAllBlogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://crownfieldlocksmiths.co.uk";
const PHONE_DISPLAY = "020 3051 8388";
const PHONE_TEL = "+442030518388";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Locksmith Blog | Security Tips & Expert Advice | Crownfield Locksmiths",
  description:
    "Expert locksmith advice, security tips, UPVC guides, smart lock advice and home security insights across London.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Locksmith Blog | Crownfield Locksmiths",
    description:
      "Security tips, UPVC guides, smart locks and practical locksmith advice across London.",
    url: "/blog",
    siteName: "Crownfield Locksmiths",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locksmith Blog | Crownfield Locksmiths",
    description:
      "Security tips, UPVC guides, smart locks and practical locksmith advice across London.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts()
    // Defensive sort: newest first
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
                smart security and insurance considerations — written for London
                homeowners and businesses.
              </p>

              {/* Hero CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-primary shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#d4af37,#e5c158)",
                  }}
                  aria-label={`Call Crownfield Locksmiths on ${PHONE_DISPLAY}`}
                >
                  <Phone className="w-5 h-5" />
                  Call {PHONE_DISPLAY}
                </a>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-primary border-2 border-primary/15 hover:border-gold/40 transition-colors bg-white/70 backdrop-blur"
                >
                  Send a Message
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-24">
          <div className="container-max px-4 md:px-8">
            {/* Optional: subtle header row */}
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
                  Latest articles
                </p>
                <h2 className="heading text-2xl md:text-3xl text-primary mt-2">
                  Learn how to protect your home and business.
                </h2>
              </div>

              <a
                href={`tel:${PHONE_TEL}`}
                className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-white bg-primary hover:bg-primary/90 transition-colors"
                aria-label={`Call Crownfield Locksmiths on ${PHONE_DISPLAY}`}
              >
                <Phone className="w-4 h-4 text-gold" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, idx) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-primary/15 hover:shadow-xl transition-all duration-500 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority={idx < 3}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />

                    {/* Optional category badge if you have it */}
                    {"category" in post && (post as any).category ? (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-white/90 text-primary px-3 py-1 text-[11px] font-extrabold tracking-wide">
                          {(post as any).category}
                        </span>
                      </div>
                    ) : null}
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

            {/* Bottom CTA */}
            <div className="mt-14 rounded-3xl border border-primary/10 bg-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-[0.22em]">
                  Need help now?
                </p>
                <h3 className="heading text-2xl text-primary mt-2">
                  Locked out or need urgent lock changes?
                </h3>
                <p className="text-gray-500 mt-2 max-w-xl">
                  Call for the fastest response. For non-urgent enquiries, use
                  the contact form.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-primary shadow-lg w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(135deg,#d4af37,#e5c158)",
                  }}
                  aria-label={`Call Crownfield Locksmiths on ${PHONE_DISPLAY}`}
                >
                  <Phone className="w-5 h-5" />
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-primary border-2 border-primary/15 hover:border-gold/40 transition-colors w-full sm:w-auto"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
