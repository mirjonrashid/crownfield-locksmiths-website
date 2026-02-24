"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const brands = [
  {
    name: "Ultion",
    logo: "/brands/ultion.png",
    href: "https://www.ultion-lock.co.uk",
  },
  {
    name: "Avocet ABS",
    logo: "/brands/abs.png",
    href: "https://www.avocetsecurity.com",
  },
  {
    name: "ASSA Abloy",
    logo: "/brands/assa-abloy.png",
    href: "https://www.assaabloy.com/en",
  },
  {
    name: "Mul-T-Lock",
    logo: "/brands/mul-t-lock.png",
    href: "https://www.mul-t-lock.com/global/en/products",
  },
  {
    name: "ERA Products",
    logo: "/brands/era.png",
    href: "https://www.erahomesecurity.com",
  },
  {
    name: "Yale",
    logo: "/brands/yale.png",
    href: "https://yalehome.co.uk/door-locks/",
  },
  {
    name: "ABUS",
    logo: "/brands/abus.png",
    href: "https://www.abus.com/eng/Home-Security",
  },
  {
    name: "Duffells",
    logo: "/brands/duffells.png",
    href: "https://www.duffells.com",
  },
];

const track = [...brands, ...brands, ...brands];

export default function TrustedBrands() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const paused = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const start = requestAnimationFrame(() => {
      const oneThird = el.scrollWidth / 3;

      const step = () => {
        if (!paused.current) {
          posRef.current += 0.5; // speed
          if (posRef.current >= oneThird) posRef.current = 0;
          el.style.transform = `translateX(-${posRef.current}px)`;
        }
        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    });

    return () => {
      cancelAnimationFrame(start);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="py-16 md:py-20 bg-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 10% 90%,rgba(212,175,55,0.05),transparent 40%),radial-gradient(circle at 90% 10%,rgba(0,59,122,0.04),transparent 40%),#fff",
      }}
    >
      <div className="container-max mb-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
            Brands we trust &amp; install
          </span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)",
        }}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        onTouchEnd={() => setTimeout(() => (paused.current = false), 1500)}
      >
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{
            width: "max-content",
            gap: "clamp(34px,5vw,70px)",
            paddingInline: "clamp(18px,4vw,60px)",
          }}
        >
          {track.map((brand, i) => (
            <a
              key={`${brand.name}-${i}`}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={brand.name}
              className="flex-shrink-0"
            >
              {/* uniform visual height so all logos feel same size */}
              <div
                className="flex items-center"
                style={{ height: "clamp(38px,5vw,54px)" }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={320}
                  height={120}
                  className="
                    object-contain
                    opacity-60 grayscale
                    transition-all duration-300
                    hover:opacity-85 hover:grayscale-0
                  "
                  style={{
                    height: "100%",
                    width: "auto",
                    // hides pixel edges a bit without looking “blurred”
                    filter: "contrast(1.05) saturate(0.9)",
                    transform: "translateZ(0)",
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="container-max mt-10">
        <p className="text-center text-gray-300 text-[9px] uppercase tracking-[0.22em]">
          Not affiliated or sponsored — recommended on merit alone
        </p>
      </div>
    </section>
  );
}
