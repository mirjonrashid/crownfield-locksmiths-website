// app/services/commercial-locksmith-london/page.tsx

import type { Metadata } from "next";
import Header from "@/components/Header";
import Link from "next/link";
import {
  Phone,
  Building2,
  Key,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Locksmith London | Master Keys, Access Control & Security",
  description:
    "Commercial locksmith services across London. Master key systems, access control, office lock upgrades and emergency business entry. Call Crownfield Locksmiths 24/7.",
  alternates: {
    canonical:
      "https://www.crownfieldlocksmiths.co.uk/services/commercial-locksmith-london",
  },
  openGraph: {
    title: "Commercial Locksmith London | Crownfield Locksmiths",
    description:
      "Master key systems, access control, commercial lock upgrades and emergency business entry across London.",
    url: "https://www.crownfieldlocksmiths.co.uk/services/commercial-locksmith-london",
  },
};

const commercialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Locksmith London",
  serviceType: "Commercial Locksmith",
  provider: {
    "@type": "Locksmith",
    name: "Crownfield Locksmiths",
    telephone: "+447346010278",
    url: "https://www.crownfieldlocksmiths.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  description:
    "Professional commercial locksmith services for London businesses. Master key systems, access control installation, commercial lock upgrades, and 24/7 emergency business entry.",
};

const services = [
  {
    icon: Key,
    title: "Master Key Systems",
    desc: "A properly designed master key system lets you control access across your building — individual keys open only the doors they should.",
  },
  {
    icon: Shield,
    title: "Access Control",
    desc: "Electronic access control — key fob, card, or keypad entry systems — for offices, warehouses, and multi-occupancy buildings.",
  },
  {
    icon: Building2,
    title: "Commercial Lock Upgrades",
    desc: "Upgrade to commercial-grade deadbolts, electromagnetic locks, and high-security cylinders to meet insurance requirements.",
  },
  {
    icon: CheckCircle,
    title: "Emergency Business Entry",
    desc: "Locked out of your office or premises? We respond 24/7. Fast, professional, minimising business disruption.",
  },
];

export default function CommercialLocksmithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Business Security
              </p>
              <h1
                className="font-black text-5xl md:text-6xl text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Commercial Locksmith
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
                Master key systems, access control, commercial lock upgrades,
                and 24/7 emergency business entry across London.
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
              Commercial Locksmith Services
            </h2>
            <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
              Security solutions for offices, retail, hospitality, and
              industrial premises across London.
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

        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="font-black text-3xl text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Need a commercial locksmith today?
              </h2>
              <p className="text-white/60">
                We work around your business hours.
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
                  Commercial Locksmith London
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
