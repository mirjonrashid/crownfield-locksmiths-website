// ============================================
// FILE LOCATION: src/app/blog/[slug]/page.tsx
// PURPOSE: Individual blog post page
// URL: /blog/article-slug-name
// NOTE: [slug] folder name includes brackets!
// ============================================

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords.join(", "),
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <>
      <Header forceDark />
      <main className="min-h-screen pt-20">
        {/* Article Header */}
        <article>
          <header className="py-16 bg-gradient-to-br from-primary via-primary-dark to-[#001a3d] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="container-max max-w-4xl relative z-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>

              <div className="mb-4">
                <span className="px-3 py-1.5 rounded-full bg-gold text-primary text-sm font-bold">
                  {post.category}
                </span>
              </div>

              <h1 className="heading text-3xl md:text-4xl lg:text-5xl mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <div>
                  By <span className="text-gold">{post.author}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-[400px] md:h-[500px] relative">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${post.image})` }}
            />
          </div>

          {/* Article Content */}
          <div className="py-16 bg-white">
            <div className="container-max max-w-4xl">
              <div
                className="prose prose-lg prose-primary max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-primary
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-li:text-gray-700
                prose-strong:text-primary prose-strong:font-bold
                prose-a:text-primary prose-a:no-underline hover:prose-a:text-gold
              "
              >
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* CTA Box */}
              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-gold/5 border-2 border-gold/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Need Professional Locksmith Help?
                    </h3>
                    <p className="text-gray-700">
                      Our expert locksmiths are available 24/7 across London.
                    </p>
                  </div>
                  <a
                    href="tel:+442030518388"
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-black text-primary shadow-lg whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg,#d4af37,#e5c158)",
                    }}
                    aria-label="Call Crownfield Locksmiths on 020 3051 8388"
                  >
                    <Phone className="w-5 h-5" />
                    Call 020 3051 8388
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container-max max-w-4xl">
              <h2 className="heading text-3xl text-primary mb-8">
                Related Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group card overflow-hidden hover:shadow-gold transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${relatedPost.image})` }}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-gold">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold text-primary mt-2 mb-2 group-hover:text-gold transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
