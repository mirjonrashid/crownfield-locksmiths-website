"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { getAllBlogPosts, type BlogPost } from "@/data/blogPosts";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const categoryColors: Record<string, string> = {
  "Security Guide": "bg-primary/10 text-primary",
  "Home Security": "bg-primary/10 text-primary",
  Insurance: "bg-gold/15 text-[#8a6d00]",
  Maintenance: "bg-gray-100 text-gray-600",
};

export default function Blog() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const posts = getAllBlogPosts().slice(0, 3);
  const [featured, ...rest] = posts;

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[#F8F7F4] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[100px]" />
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
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold font-bold text-xs uppercase tracking-[0.22em]">
                Locksmith Insights
              </span>
            </motion.div>
            <motion.h2
              variants={item}
              className="heading text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.08]"
            >
              Security Tips
              <br />
              <span className="text-gradient-gold">&amp; Advice.</span>
            </motion.h2>
          </div>
          <motion.div variants={item}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-gray-200 bg-white text-primary font-semibold text-sm hover:border-primary/30 hover:shadow-md transition-all"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid: featured left + 2 stacked right */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid lg:grid-cols-[1.4fr_1fr] gap-5"
        >
          {/* Featured post */}
          <motion.article variants={item} className="group">
            <Link href={`/blog/${featured.id}`} className="block h-full">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 h-full flex flex-col hover:border-primary/15 hover:shadow-xl transition-all duration-500">
                {/* Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold ${categoryColors[featured.category] ?? "bg-gold/15 text-primary"}`}
                    >
                      {featured.category}
                    </span>
                  </div>

                  {/* Featured label */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold">
                      Start Here
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featured.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>

                  <h3 className="heading text-2xl md:text-3xl text-primary mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                    {featured.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* 2 smaller posts stacked */}
          <div className="flex flex-col gap-5">
            {rest.map((post: BlogPost) => (
              <motion.article
                key={post.id}
                variants={item}
                className="group flex-1"
              >
                <Link href={`/blog/${post.id}`} className="block h-full">
                  <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 h-full flex hover:border-primary/15 hover:shadow-xl transition-all duration-500">
                    {/* Image — left strip */}
                    <div className="relative w-28 flex-shrink-0 overflow-hidden hidden sm:block">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="112px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${categoryColors[post.category] ?? "bg-gold/15 text-primary"}`}
                        >
                          {post.category}
                        </span>
                        <span className="text-gray-300 text-xs">•</span>
                        <span className="text-gray-400 text-xs">
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="heading text-lg text-primary mb-2 leading-snug line-clamp-2 group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-1.5 text-primary font-semibold text-xs">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
