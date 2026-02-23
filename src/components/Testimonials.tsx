"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Kensington",
    initials: "SM",
    rating: 5,
    text: "Arrived quickly and got me back in without damage. Clear pricing, calm and professional throughout. Highly recommend.",
    service: "Emergency Lockout",
  },
  {
    name: "James Patterson",
    location: "Canary Wharf",
    initials: "JP",
    rating: 5,
    text: "We needed urgent lock changes for our office. Fast, clean work and very reliable communication. Will use again.",
    service: "Commercial Locksmith",
  },
  {
    name: "Emma Thompson",
    location: "Richmond",
    initials: "ET",
    rating: 5,
    text: "Had my UPVC lock mechanism replaced. Quick response, explained the issue clearly, and finished the job properly. Good experience overall.",
    service: "Residential Locksmith",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#0a0e1a] text-white relative overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

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
                Social Proof
              </span>
            </motion.div>
            <motion.h2
              variants={item}
              className="heading text-4xl md:text-5xl lg:text-6xl leading-[1.08]"
            >
              What London
              <br />
              <span className="text-gradient-gold">Says About Us.</span>
            </motion.h2>
          </div>

          {/* Rating badge */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/8 self-start md:self-end"
          >
            <div className="text-center">
              <div className="heading text-4xl font-black text-white leading-none">
                5.0
              </div>
              <div className="flex gap-0.5 mt-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <div className="pl-4 border-l border-white/10">
              <div className="text-white/50 text-xs">Google Rating</div>
              <div className="text-white font-bold text-sm mt-0.5">
                100+ Reviews
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="group relative rounded-3xl bg-white/5 border border-white/8 p-7 flex flex-col hover:bg-white/8 hover:border-white/14 transition-all duration-400"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/6 to-transparent" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-gold/15 border border-gold/25 text-gold text-[10px] font-bold tracking-wide">
                    {t.service}
                  </span>
                  <Quote className="w-7 h-7 text-white/8" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-white/75 leading-relaxed flex-1 mb-6 text-sm md:text-[0.95rem]">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author — initials avatar, no stock photo */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-black text-sm">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="flex items-center gap-1 text-white/40 text-xs mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
