// app/services/residential-locksmith-london/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Home, Key, Shield, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Residential Locksmith London | Lock Changes, UPVC & Security",
  description:
    "Expert residential locksmith in London. Lock changes, UPVC repairs, multipoint systems, key cutting and security upgrades. All boroughs covered. Call Crownfield Locksmiths.",
  alternates: {
    canonical:
      "https://www.crownfieldlocksmiths.co.uk/services/residential-locksmith-london",
  },
  openGraph: {
    title: "Residential Locksmith London | Lock Changes & UPVC Specialists",
    description:
      "Lock changes, UPVC repairs, multipoint systems and security upgrades for London homes. All 32 boroughs. Upfront pricing.",
    url: "https://www.crownfieldlocksmiths.co.uk/services/residential-locksmith-london",
  },
};

const residentialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Locksmith London",
  serviceType: "Residential Locksmith",
  provider: {
    "@type": "Locksmith",
    name: "Crownfield Locksmiths",
    telephone: "+447346010278",
    url: "https://www.crownfieldlocksmiths.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  description:
    "Professional residential locksmith services across London. Lock changes, UPVC door repairs, multipoint lock systems, key cutting, and home security upgrades.",
};

const services = [
  {
    icon: Key,
    title: "Lock Changes & Replacement",
    desc: "Euro cylinder, mortice, rim locks — we supply and fit quality locks to suit your door type and insurance requirements.",
  },
  {
    icon: Home,
    title: "UPVC Door Specialists",
    desc: "Multipoint UPVC lock mechanisms repaired or replaced. Handles, gearboxes, and cylinder replacements for all major door brands.",
  },
  {
    icon: Shield,
    title: "Security Upgrades",
    desc: "Upgrade to British Standard (BS 3621) locks that meet insurance requirements and provide genuine protection.",
  },
  {
    icon: Key,
    title: "Key Cutting",
    desc: "Spare keys cut on-site for all common lock types. Quick, precise, and cost-effective.",
  },
];

export default function ResidentialLocksmithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Home Security
              </p>
              <h1
                className="font-black text-5xl md:text-6xl text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Residential Locksmith
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg,#d4af37,#e5c158)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  London
                </span>
              </h1>
              <p className="text-white/70 text-xl mb-10 leading-relaxed">
                Lock changes, UPVC repairs, multipoint systems and security
                upgrades for London homes. All boroughs. Upfront pricing.
              </p>
              <a
                href="tel:+447346010278"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-primary shadow-lg"
                style={{
                  background: "linear-gradient(135deg,#d4af37,#e5c158)",
                }}
              >
                <Phone className="w-5 h-5" />
                Call Now — 07346 010278
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F8F7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-black text-3xl md:text-4xl text-primary mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Residential Services
            </h2>
            <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
              From a single lock change to a full home security assessment — we
              cover it all.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {services.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-5 p-7 rounded-3xl bg-white border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2
                className="font-black text-3xl text-primary mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Type of Lock Do You Need?
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-primary">
                    Euro Cylinder (most common):
                  </strong>{" "}
                  Used in UPVC and composite doors. We fit anti-snap, anti-pick
                  cylinders that meet BS 3621 for insurance compliance.
                </p>
                <p>
                  <strong className="text-primary">Mortice Locks:</strong>{" "}
                  Required for timber doors on many insurance policies. 5-lever
                  mortice locks meet British Standard requirements.
                </p>
                <p>
                  <strong className="text-primary">Multipoint Locks:</strong>{" "}
                  UPVC door mechanisms that lock at multiple points
                  simultaneously. We repair and replace all major brands.
                </p>
                <p>
                  <strong className="text-primary">
                    Night Latches (Yale):
                  </strong>{" "}
                  Surface-mounted, spring-operated locks. Often fitted alongside
                  mortice locks for added security.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="font-black text-3xl text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Need a lock changed today?
              </h2>
              <p className="text-white/60">
                We can usually be with you the same day.
              </p>
            </div>
            <a
              href="tel:+447346010278"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-primary"
              style={{ background: "linear-gradient(135deg,#d4af37,#e5c158)" }}
            >
              <Phone className="w-5 h-5" />
              07346 010278
            </a>
          </div>
        </section>

        <nav className="bg-[#F8F7F4] py-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol
              className="flex items-center gap-2 text-sm text-gray-400"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                <Link href="/" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <ArrowRight className="w-3 h-3" />
              <li
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                <span itemProp="name" className="text-primary font-medium">
                  Residential Locksmith London
                </span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>
      </main>
    </>
  );
}
