// src/app/services/emergency-locksmith-london/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Locksmith London | 24/7 Fast Response",
  description:
    "Locked out in London? Crownfield Locksmiths dispatch immediately across all 32 boroughs. Non-destructive entry, upfront pricing. Call now: 07346 010278.",
  alternates: {
    canonical:
      "https://www.crownfieldlocksmiths.co.uk/services/emergency-locksmith-london",
  },
  openGraph: {
    title: "Emergency Locksmith London | 24/7 | Crownfield Locksmiths",
    description:
      "Locked out in London? We arrive fast across all 32 boroughs. Non-destructive entry. Upfront price before we start.",
    url: "https://www.crownfieldlocksmiths.co.uk/services/emergency-locksmith-london",
  },
};

const emergencySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Locksmith London",
  serviceType: "Emergency Lockout",
  provider: {
    "@type": "Locksmith",
    name: "Crownfield Locksmiths",
    telephone: "+447346010278",
    url: "https://www.crownfieldlocksmiths.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  description:
    "24/7 emergency locksmith in London. We respond immediately to lockouts across all 32 boroughs. Non-destructive entry where possible. Upfront pricing confirmed before work begins.",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      description: "Fixed call-out fee confirmed before work begins",
    },
    availability: "https://schema.org/InStock",
    availabilityStarts: "00:00",
  },
};

import { BOROUGHS } from "@/app/locksmiths/data";

export default function EmergencyLocksmithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Emergency Service
              </p>
              <h1
                className="font-black text-5xl md:text-6xl text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Emergency Locksmith
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
                Locked out? We dispatch immediately across all 32 London
                boroughs. Non-destructive entry wherever possible. Price
                confirmed before we start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+447346010278"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-primary shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#d4af37,#e5c158)",
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now — 07346 010278
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white border-2 border-white/20 hover:border-gold/50 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 bg-[#F8F7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="font-black text-4xl text-primary mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Locked Out in London?
                  <br />
                  We Respond Fast.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Whether you&apos;re locked out of your home, flat, or office
                  at 2am or 2pm, Crownfield Locksmiths arrives quickly and gets
                  you back in without unnecessary damage.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We always attempt non-destructive entry first. You receive a
                  fixed quote before any work begins. No surprises on the
                  invoice.
                </p>
                <ul className="space-y-4">
                  {[
                    "30-minute average response time across London",
                    "Non-destructive entry wherever possible",
                    "Price confirmed before work starts",
                    "Available 24/7 including bank holidays",
                    "All 32 London boroughs covered",
                    "Fully insured — residential and commercial",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "Immediate Dispatch",
                    desc: "We pick up 24/7 and dispatch immediately. No call centres, no queues.",
                  },
                  {
                    icon: Shield,
                    title: "Non-Destructive Entry",
                    desc: "We use specialist tools to open your lock without drilling wherever the lock permits.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Upfront Pricing",
                    desc: "Your quote is agreed before any work begins. No hidden additions at the end.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">
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
          </div>
        </section>

        {/* Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-black text-3xl md:text-4xl text-primary mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We Cover All of London
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
              Select your borough for local service details and direct contact.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
              {BOROUGHS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/locksmiths/${area.slug}`}
                  className="px-3 py-2 rounded-xl bg-[#F8F7F4] border border-gray-100 text-gray-700 text-sm text-center font-semibold hover:border-gold/40 hover:text-primary transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/locksmiths"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                View all areas we cover <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-black text-4xl text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Need a Locksmith Right Now?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
              Call us directly. We answer 24/7 and can often be with you in
              under 30 minutes.
            </p>
            <a
              href="tel:+447346010278"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-primary text-lg shadow-lg"
              style={{ background: "linear-gradient(135deg,#d4af37,#e5c158)" }}
            >
              <Phone className="w-6 h-6" />
              07346 010278
            </a>
          </div>
        </section>

        {/* Breadcrumb */}
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
                <Link
                  href="/"
                  itemProp="item"
                  className="hover:text-primary transition-colors"
                >
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
                  Emergency Locksmith London
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
