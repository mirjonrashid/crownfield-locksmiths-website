// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Home, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header forceDark />
      <main className="min-h-screen bg-[#F8F7F4] flex flex-col">
        <div className="flex-1 flex items-center justify-center relative overflow-hidden py-32">
          {/* Fine grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,59,122,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,59,122,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* Ambient glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/6 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Decorative lock SVG — contained, no overflow */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <svg
              viewBox="0 0 200 200"
              className="w-[min(60vw,460px)] h-[min(60vw,460px)] opacity-[0.04]"
              fill="none"
            >
              <rect
                x="30"
                y="90"
                width="140"
                height="100"
                rx="16"
                fill="#003b7a"
              />
              <path
                d="M60 90V68a40 40 0 0 1 80 0v22"
                stroke="#003b7a"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="100" cy="138" r="14" fill="#d4af37" />
              <rect
                x="94"
                y="138"
                width="12"
                height="22"
                rx="6"
                fill="#d4af37"
              />
            </svg>
          </div>

          <div className="container-max relative z-10 max-w-2xl text-center px-4">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.28em]">
                Error 404
              </span>
              <div className="h-px w-8 bg-gold" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black text-primary leading-[1.05] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
              }}
            >
              Wrong key,
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#d4af37,#e5c158)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                wrong door.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-sm mx-auto mb-10 leading-relaxed"
            >
              This page doesn&apos;t exist or has been moved. Let us help you
              find the right door.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-black text-primary shadow-lg text-sm"
                style={{
                  background: "linear-gradient(135deg,#d4af37,#e5c158)",
                }}
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              <a
                href="tel:+447346010278"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-primary bg-white border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Us — 24/7
              </a>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />
              <p className="text-gray-400 text-xs uppercase tracking-[0.18em] font-semibold mb-4">
                Popular pages
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { href: "/#services", label: "Services" },
                  {
                    href: "/services/emergency-locksmith-london",
                    label: "Emergency Lockout",
                  },
                  {
                    href: "/services/residential-locksmith-london",
                    label: "Residential",
                  },
                  { href: "/locksmiths", label: "All Areas" },
                  { href: "/blog", label: "Blog" },
                  { href: "/#contact", label: "Contact" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-100 text-xs font-semibold text-gray-500 hover:border-gold/30 hover:text-primary hover:shadow-sm transition-all"
                  >
                    {l.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
