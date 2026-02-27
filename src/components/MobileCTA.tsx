"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquareText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "@/data/company";

function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("services");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const phoneHref = `tel:${companyInfo.phone}`;
  const phoneDisplay = companyInfo.phoneDisplay ?? companyInfo.phone;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white/98 backdrop-blur-xl border-t border-gray-100 px-4 py-3 shadow-[0_-8px_32px_rgba(0,59,122,0.12)]">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={phoneHref}
                aria-label={`Call ${phoneDisplay}`}
                onClick={() =>
                  trackEvent("phone_click", {
                    location: "mobile_cta",
                    label: "Call 24/7",
                    phone: companyInfo.phone,
                  })
                }
                className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl font-black text-sm bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg active:scale-95 transition-transform"
              >
                <Phone className="w-5 h-5" />
                <span>Call 24/7</span>
              </a>

              <a
                href="#contact"
                onClick={() =>
                  trackEvent("quote_click", {
                    location: "mobile_cta",
                    label: "Get Quote",
                  })
                }
                className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-gold to-gold-light text-primary shadow-lg active:scale-95 transition-transform"
              >
                <MessageSquareText className="w-5 h-5" />
                <span>Get Quote</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
