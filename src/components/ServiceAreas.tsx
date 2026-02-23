"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin, Phone, Clock, Zap } from "lucide-react";

const stats = [
  { value: "All", label: "Postcodes Covered", icon: MapPin },
  { value: "30 min", label: "Avg Arrival Time", icon: Zap },
  { value: "24/7", label: "Always Available", icon: Clock },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceAreas() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-[#F8F7F4]"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
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
          className="mb-12 md:mb-14"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold font-bold text-xs uppercase tracking-[0.22em]">
              Service Coverage
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <motion.h2
              variants={item}
              className="heading text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.06]"
            >
              Every Area.
              <br />
              <span className="text-gradient-gold">Every Postcode.</span>
            </motion.h2>
            <motion.p
              variants={item}
              className="text-gray-400 text-lg max-w-sm md:text-right leading-relaxed"
            >
              Across London — residential and commercial.
            </motion.p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-4"
        >
          {/* Left: stats */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex flex-col gap-3 p-4 md:p-5 rounded-3xl bg-white border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-black text-primary text-2xl leading-none">
                    {value}
                  </p>
                  <p className="text-gray-400 text-xs">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Info card */}
            <motion.div
              variants={item}
              className="flex-1 rounded-3xl border border-gray-100 bg-white p-7 md:p-8"
            >
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.22em] mb-4">
                Coverage
              </p>
              <p className="text-gray-600 text-base leading-[1.8]">
                We dispatch directly to you across London. Residential and
                commercial properties. Same response standard across all areas.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            variants={item}
            className="relative rounded-3xl overflow-hidden bg-primary group"
            style={{ minHeight: 380 }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-gold/16" />

            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="flex items-center gap-3 mb-auto"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                    Service Coverage
                  </p>
                  <p className="text-white/70 text-sm font-semibold mt-0.5">
                    London and Greater London
                  </p>
                </div>
              </motion.div>

              <div className="py-8 md:py-10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                  style={{ originX: 0 }}
                  className="h-px w-20 mb-6 bg-gradient-to-r from-gold to-transparent"
                />
                <h3 className="heading text-3xl md:text-4xl text-white leading-snug mb-3">
                  Not sure we
                  <br />
                  cover your area?
                </h3>
                <p className="text-white/50 text-base leading-relaxed">
                  Call us — we&apos;ll confirm in seconds.
                </p>
              </div>

              <motion.a
                href="tel:+447346010278"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.58, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center gap-3 w-full py-4 px-6 rounded-2xl font-bold text-base bg-gradient-to-r from-gold to-gold-light text-primary overflow-hidden group/btn shadow-gold"
              >
                <span className="absolute inset-0 -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700 bg-white/20" />
                <Phone className="w-5 h-5 relative z-10 flex-shrink-0" />
                <span className="relative z-10 flex-1">Call to Confirm</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
