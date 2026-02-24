"use client";

import { useRef, useEffect, useState } from "react";
// Anton font loaded via <link> in layout.tsx — add if not already present:
// <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { Clock, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";

function CountUp({ to, duration = 1.2 }: { to: number; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const total = Math.round(duration * 60);
    const tick = () => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.floor(eased * to));
      if (frame < total) requestAnimationFrame(tick);
      else setDisplay(to);
    };
    requestAnimationFrame(tick);
  }, [isInView, to, duration]);

  return <span ref={ref}>{display}</span>;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[100px]" />
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
          className="mb-14 md:mb-16"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold font-bold text-xs uppercase tracking-[0.22em]">
              Pricing
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              variants={item}
              className="heading text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.08]"
            >
              Transparent,
              <br />
              <span className="text-gradient-gold">Upfront Pricing.</span>
            </motion.h2>
            <motion.p
              variants={item}
              className="text-gray-400 text-lg max-w-xs md:text-right leading-relaxed"
            >
              You know the cost before any work begins.
            </motion.p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-5"
        >
          {/* Left: price card */}
          <motion.div
            variants={item}
            className="relative rounded-3xl overflow-hidden bg-primary group"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-gold/16" />

            <div className="relative z-10 p-7 md:p-10 flex flex-col gap-6">
              {/* Label row */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                    Call-Out Fee
                  </p>
                  <p className="text-white/70 text-sm font-semibold mt-0.5">
                    Confirmed before we start
                  </p>
                </div>
              </motion.div>

              {/* Price */}
              <div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                  style={{ originX: 0 }}
                  className="h-px w-16 mb-4 bg-gradient-to-r from-gold to-transparent"
                />
                <div className="flex items-start gap-1">
                  <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.38 }}
                    className="text-white/40 font-black text-2xl md:text-3xl mt-2"
                    style={{ fontFamily: "inherit" }}
                  >
                    £
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, y: 24 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.42, ease: "easeOut" }}
                    className="text-gradient-gold leading-none font-black"
                    style={{
                      fontSize: "clamp(5rem, 18vw, 7.5rem)",
                      fontFamily: "'Anton', 'Impact', sans-serif",
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <CountUp to={99} duration={0.8} />
                  </motion.span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
                  style={{ originX: 0 }}
                  className="h-[2px] w-12 mt-3 rounded-full bg-gradient-to-r from-gold via-gold-light to-transparent"
                />
              </div>

              {/* Trust pills */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  "Non-destructive entry",
                  "Parts quoted separately",
                  "Cash & card accepted",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold text-white/50 bg-white/6 border border-white/8 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.a
                href="tel:+447346010278"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.58 }}
                style={{ x: springX, y: springY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center gap-3 w-full py-4 px-6 rounded-2xl font-bold text-base bg-gradient-to-r from-gold to-gold-light text-primary overflow-hidden group/btn shadow-gold"
              >
                <span className="absolute inset-0 -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700 bg-white/20" />
                <Phone className="w-5 h-5 relative z-10 flex-shrink-0" />
                <span className="relative z-10 flex-1">Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 flex-shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <motion.div
              variants={item}
              className="flex-1 rounded-3xl border border-gray-100 bg-[#F8F7F4] p-8 md:p-10"
            >
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.22em] mb-5">
                How It Works
              </p>
              <p className="text-gray-600 text-base leading-[1.8]">
                We always attempt non-destructive entry first. If drilling or
                destructive methods are required, the price increases based on
                the job. Parts are priced separately. Exact cost confirmed
                before any work begins.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#002060] to-[#001540]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex items-center gap-5 p-7">
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.65,
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                  }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0 shadow-gold"
                >
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="font-bold text-white text-base leading-tight">
                    Quote agreed before any work begins
                  </p>
                  <p className="text-white/45 text-sm mt-1">
                    Cash &amp; card accepted on-site
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
