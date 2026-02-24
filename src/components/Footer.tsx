"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { companyInfo, services } from "@/data/content";
import MotionSection from "@/components/MotionSection";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#areas", label: "Coverage" },
    { href: "/#testimonials", label: "Reviews" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
  ];

  // Curated high-value blog posts only — not all posts
  const featuredPosts = [
    {
      href: "/blog/locked-out-london-what-to-do",
      label: "Locked Out in London? A Calm Step-by-Step Plan",
    },
    {
      href: "/blog/how-to-choose-a-locksmith-london",
      label: "How to Choose a Locksmith Without Stress",
    },
    {
      href: "/blog/moving-into-new-home-lock-security",
      label: "Moving In? Do This on Day One",
    },
    {
      href: "/blog/insurance-lock-requirements",
      label: "Lock Requirements Your Insurer Expects",
    },
  ];

  const social = [
    { Icon: Facebook, href: companyInfo.social.facebook, label: "Facebook" },
    { Icon: Instagram, href: companyInfo.social.instagram, label: "Instagram" },
    { Icon: Twitter, href: companyInfo.social.twitter, label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      {/* Main footer grid */}
      <div className="container-max py-14">
        <MotionSection className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col — spans 2 on large */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo_light.png"
              alt="Crownfield Locksmiths"
              width={180}
              height={50}
              className="h-10 w-auto mb-5"
            />
            <p className="text-white/60 mb-6 leading-relaxed text-sm max-w-xs">
              Professional locksmith services across London — 24/7 emergency
              response, upfront pricing, non-destructive entry first.
            </p>
            {/* NAP — matches Google Business Profile exactly */}
            <address className="not-italic space-y-2 text-sm mb-6">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                {companyInfo.email}
              </a>
              <span className="flex items-center gap-2 text-white/60">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                {companyInfo.address}
              </span>
              <span className="flex items-center gap-2 text-white/60">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                {companyInfo.hours}
              </span>
            </address>
            <div className="flex gap-2.5">
              {social.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-9 h-9 bg-white/8 rounded-xl flex items-center justify-center hover:bg-white/15 transition border border-white/10"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/65 hover:text-gold transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    href="/#services"
                    className="text-white/65 hover:text-gold transition-colors text-sm"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locksmiths"
                  className="text-white/65 hover:text-gold transition-colors text-sm"
                >
                  All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog + useful links */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-5">
              Guides & Advice
            </h3>
            <ul className="space-y-2.5 mb-6">
              {featuredPosts.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-white/65 hover:text-gold transition-colors text-sm leading-snug block"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-white/65 hover:text-gold transition-colors text-sm"
                >
                  All Articles →
                </Link>
              </li>
            </ul>
          </div>
        </MotionSection>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/35 text-xs">
            © {year} {companyInfo.name}. All rights reserved. Serving All of
            London 24/7.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link
              href="/about"
              className="text-white/35 hover:text-gold transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-white/35 hover:text-gold transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-white/35 hover:text-gold transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/locksmiths"
              className="text-white/35 hover:text-gold transition-colors"
            >
              All Areas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
