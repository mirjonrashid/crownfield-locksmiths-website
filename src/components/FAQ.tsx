"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { faqs } from "@/data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#F8F7F4] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,59,122,0.04),transparent_50%)]" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left: sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-5">
              <HelpCircle className="w-4 h-4 text-gold" />
              <span className="text-gold font-bold text-sm">FAQs</span>
            </div>

            <h2 className="heading text-4xl md:text-5xl text-primary mb-5 leading-tight">
              Questions
              <br />
              <span className="text-gradient-gold">Answered.</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Clear answers before you call. No confusion, no surprises.
            </p>

            {/* CTA card */}
            <motion.a
              href="tel:+447346010278"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white/70 text-xs mb-0.5">
                  Still have questions?
                </p>
                <p className="font-bold text-lg leading-tight">Call Us Now</p>
                <p className="text-white/60 text-xs">Available 24/7</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  openIndex === index
                    ? "border-gold/30 bg-white shadow-md"
                    : "border-gray-200/60 bg-white/60 hover:bg-white hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-base md:text-lg font-bold pr-4 transition-colors ${
                      openIndex === index
                        ? "text-gold"
                        : "text-primary group-hover:text-gold"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index ? "bg-gold/15" : "bg-gray-100"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 ${openIndex === index ? "text-gold" : "text-gray-500"}`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
