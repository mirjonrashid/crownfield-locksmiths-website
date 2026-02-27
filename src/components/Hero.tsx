"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, Shield, ArrowDown } from "lucide-react";
import { companyInfo } from "@/data/company";

function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const phoneHref = `tel:${companyInfo.phone}`;
  const phoneDisplay = companyInfo.phoneDisplay ?? companyInfo.phone;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-dark/92 to-primary-dark/95" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/8 rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container-max min-h-screen flex items-center py-32"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-white/90 text-sm font-semibold tracking-wide">
              Licensed & Insured • London
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
          >
            Emergency Locksmith
            <br />
            <span className="text-gradient-gold">London</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12"
          >
            24/7 locksmith service. Residential, commercial, and automotive.
            Upfront pricing — confirmed before work starts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href={phoneHref}
              className="btn-telegram"
              onClick={() =>
                trackEvent("phone_click", {
                  location: "hero",
                  label: "Call Now",
                  phone: companyInfo.phone,
                })
              }
              aria-label={`Call ${phoneDisplay}`}
            >
              <Phone className="w-6 h-6" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/message/G3O7NWQOK6OJO1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              onClick={() =>
                trackEvent("whatsapp_click", {
                  location: "hero",
                  label: "WhatsApp",
                })
              }
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Emergency Callouts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Lock Repairs & Replacement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>UPVC Specialists</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll to Explore
          </span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
