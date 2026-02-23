"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Clock, Users, Shield, Star } from "lucide-react";

const stats = [
  {
    number: 5000,
    suffix: "+",
    label: "Customers Helped",
    sublabel: "Across London",
    icon: Users,
  },
  {
    number: 30,
    suffix: " min",
    label: "Avg Arrival Time",
    sublabel: "Urgent jobs first",
    icon: Clock,
  },
  {
    number: 24,
    suffix: "/7",
    label: "Always Available",
    sublabel: "365 days a year",
    icon: Shield,
  },
  {
    number: 100,
    suffix: "%",
    label: "Satisfaction",
    sublabel: "Guaranteed",
    icon: Star,
  },
];

function Counter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!active) return;
    // Initialise to 0 the moment we start (not before)
    setCount(0);
    let frame = 0;
    const total = 60;
    const tick = () => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (frame < total) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [active, value]);

  // Render nothing (invisible placeholder) until counting starts
  if (count === null) return <span className="opacity-0">0{suffix}</span>;

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  // amount: 0.1 ensures it fires even on small mobile screens
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-primary relative overflow-hidden"
    >
      {/* Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max px-4 md:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mb-14"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold font-bold text-xs uppercase tracking-[0.22em]">
              By The Numbers
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="heading text-4xl md:text-5xl text-white leading-[1.08]"
          >
            Trusted Across
            <br />
            <span className="text-gradient-gold">London.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map(({ number, suffix, label, sublabel, icon: Icon }) => (
            <motion.div
              key={label}
              variants={item}
              className="relative rounded-3xl bg-white/6 border border-white/8 p-6 md:p-8 text-center overflow-hidden group hover:bg-white/10 transition-colors duration-300"
            >
              {/* Subtle gold glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/8 to-transparent" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div className="heading text-4xl md:text-5xl text-white font-black mb-1 leading-none">
                  <Counter value={number} suffix={suffix} active={isInView} />
                </div>
                <div className="text-white font-semibold text-sm md:text-base mt-2">
                  {label}
                </div>
                <div className="text-white/40 text-xs mt-1">{sublabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
