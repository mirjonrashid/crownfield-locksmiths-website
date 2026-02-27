"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Shield,
  Home,
  Building2,
  Car,
  Cpu,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { companyInfo } from "@/data/company";

const services = [
  {
    icon: Shield,
    title: "Emergency Lockout",
    subtitle: "24/7 Response",
    description:
      "Locked out at any hour. We dispatch immediately and use non-destructive entry wherever possible. Price confirmed before we start.",
    features: [
      "30-Min Avg Response",
      "Upfront Price",
      "Non-Destructive Entry wherever possible",
    ],
    accent: true,
    serviceUrl: "/services/emergency-locksmith-london",
  },
  {
    icon: Home,
    title: "Residential",
    subtitle: "Home Security",
    description:
      "Lock changes, UPVC repairs, multipoint systems and security upgrades for houses and flats.",
    features: ["UPVC Specialists", "Key Cutting", "Multipoint Systems"],
    accent: false,
    serviceUrl: "/services/residential-locksmith-london",
  },
  {
    icon: Building2,
    title: "Commercial",
    subtitle: "Business Security",
    description:
      "Master key systems, access control, commercial lock upgrades, and emergency business entry.",
    features: ["Master Key Systems", "Access Control", "Emergency Entry"],
    accent: false,
    serviceUrl: "/services/commercial-locksmith-london",
  },
  {
    icon: Car,
    title: "Automotive",
    subtitle: "Vehicle Lockouts",
    description:
      "Car locked out, lost keys, or broken ignition. Professional on-site vehicle locksmith service.",
    features: ["Car Lockout", "Key Replacement", "Ignition Repair"],
    accent: false,
    serviceUrl: null,
  },
  {
    icon: Cpu,
    title: "Smart Locks",
    subtitle: "Modern Security",
    description:
      "Smart lock and keyless entry installation. Full setup, testing, and usage guidance included.",
    features: ["Smart Lock Setup", "Keyless Entry", "Usage Training"],
    accent: false,
    serviceUrl: null,
  },
  {
    icon: Search,
    title: "Security Assessment",
    subtitle: "Expert Advice",
    description:
      "Honest audit of your property's locks and vulnerabilities with practical upgrade recommendations.",
    features: ["Risk Assessment", "Upgrade Advice", "Property Audit"],
    accent: false,
    serviceUrl: null,
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#F8F7F4] relative overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
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
          className="mb-12 md:mb-16"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold font-bold text-xs uppercase tracking-[0.22em]">
              What We Do
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <motion.h2
              variants={item}
              className="heading text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.08]"
            >
              Every Lock
              <br />
              <span className="text-gradient-gold">Solved.</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-400 text-base md:text-lg max-w-xs md:text-right leading-relaxed"
            >
              Residential, commercial, automotive —
              <br className="hidden md:block" /> emergency or planned.
            </motion.p>
          </div>
        </motion.div>

        {/* Service grid — text-first, no images */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map(
            ({
              icon: Icon,
              title,
              subtitle,
              description,
              features,
              accent,
              serviceUrl,
            }) => (
              <motion.div
                key={title}
                variants={item}
                className={`group relative rounded-3xl p-7 md:p-8 flex flex-col border transition-all duration-300 ${
                  accent
                    ? "bg-primary border-primary text-white hover:border-gold/50"
                    : "bg-white border-gray-100 hover:border-primary/15 hover:shadow-lg"
                }`}
              >
                {/* Hover glow for accent card */}
                {accent && (
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/8 to-transparent" />
                )}
                {/* Grid texture for accent card */}
                {accent && (
                  <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon + subtitle row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                        accent
                          ? "bg-gold/20 border border-gold/30"
                          : "bg-primary/8 border border-primary/8"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${accent ? "text-gold" : "text-primary"}`}
                      />
                    </div>
                    {accent && (
                      <span className="px-2.5 py-1 rounded-full bg-gold text-primary text-[10px] font-black tracking-wide">
                        Most Requested
                      </span>
                    )}
                  </div>

                  {/* Subtitle */}
                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 ${
                      accent ? "text-gold/70" : "text-gray-400"
                    }`}
                  >
                    {subtitle}
                  </p>

                  {/* Title */}
                  <h3
                    className={`heading text-2xl leading-tight mb-3 ${
                      accent ? "text-white" : "text-primary"
                    }`}
                  >
                    {title}
                  </h3>

                  {/* Gold separator */}
                  <div
                    className={`h-px w-10 mb-4 ${accent ? "bg-gold/40" : "bg-gold/30"}`}
                  />

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-5 flex-1 ${
                      accent ? "text-white/65" : "text-gray-500"
                    }`}
                  >
                    {description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {features.map((f) => (
                      <span
                        key={f}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                          accent
                            ? "bg-white/8 border-white/12 text-white/70"
                            : "bg-[#F8F7F4] border-gray-200 text-gray-600"
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Learn more link — only for services with a dedicated page */}
                  {serviceUrl && (
                    <Link
                      href={serviceUrl}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200 group/link ${
                        accent
                          ? "text-gold/70 hover:text-gold"
                          : "text-primary/50 hover:text-primary"
                      }`}
                    >
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ),
          )}
        </motion.div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-3xl bg-white border border-gray-100"
        >
          <div>
            <p className="text-primary font-bold text-base">
              Not sure what you need?
            </p>
            <p className="text-gray-400 text-sm mt-0.5">
              Call us and we&apos;ll advise honestly — no pressure.
            </p>
          </div>

          <a
            href={`tel:${companyInfo.phone}`}
            className="flex-shrink-0 flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call for Free Advice</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
