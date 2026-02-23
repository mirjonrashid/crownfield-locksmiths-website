"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { companyInfo } from "@/data/content";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params || {});
}

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,59,122,0)", "rgba(255,255,255,0.98)"],
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 24px rgba(0,59,122,0.1)"],
  );

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 50));
  }, [scrollY]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#areas", label: "Coverage" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-50 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Image
                  src={
                    scrolled || mobileOpen
                      ? "/images/logo_dark.png"
                      : "/images/logo_light.png"
                  }
                  alt="Crownfield Locksmiths"
                  width={200}
                  height={60}
                  className="h-11 w-auto transition-all duration-300"
                  priority
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".logo-fallback")) {
                      const span = document.createElement("span");
                      span.className = `logo-fallback heading font-black text-xl ${
                        scrolled ? "text-primary" : "text-white"
                      }`;
                      span.textContent = "Crownfield";
                      parent.appendChild(span);
                    }
                  }}
                />
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      scrolled
                        ? "text-gray-600 hover:text-primary hover:bg-primary/5"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.a
              href={`tel:${companyInfo.phone}`}
              onClick={() =>
                trackEvent("phone_click", {
                  location: "header_desktop_cta",
                  label: "Call Now",
                })
              }
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-gold to-gold-light text-primary shadow-md hover:shadow-gold transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </motion.a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 p-2 rounded-xl"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-800" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu
                      className={`w-6 h-6 ${
                        scrolled ? "text-gray-800" : "text-white"
                      }`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-80 bg-white z-50 lg:hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-24 px-6 flex-1 overflow-y-auto">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center px-4 py-3.5 rounded-2xl font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-all"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.a
                  href={`tel:${companyInfo.phone}`}
                  onClick={() =>
                    trackEvent("phone_click", {
                      location: "header_mobile_drawer",
                      label: "Call Now — 24/7",
                    })
                  }
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center justify-center gap-2.5 mt-6 w-full px-6 py-4 rounded-2xl font-black bg-gradient-to-r from-gold to-gold-light text-primary shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now — 24/7
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
