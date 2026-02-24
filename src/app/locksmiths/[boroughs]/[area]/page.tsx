// ============================================
// FILE LOCATION: src/app/locksmiths/[boroughs]/[area]/page.tsx
// PURPOSE: Hyperlocal area pages e.g. /locksmiths/tower-hamlets/canary-wharf
// ============================================

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HYPERLOCAL_AREAS, HYPERLOCAL_BY_SLUG } from "@/data/hyperlocal";
import { companyInfo } from "@/data/content";

interface Props {
  params: Promise<{ boroughs: string; area: string }>;
}

export async function generateStaticParams() {
  return HYPERLOCAL_AREAS.map((area) => ({
    boroughs: area.boroughSlug,
    area: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = HYPERLOCAL_BY_SLUG[areaSlug];
  if (!area) return { title: "Not Found" };

  return {
    title: `Locksmith ${area.name} | 24/7 Emergency | Crownfield Locksmiths`,
    description: `Emergency locksmith in ${area.name}, ${area.postcode}. Locked out? We cover ${area.name} and surrounding streets 24/7. Upfront pricing, fast response. Call now.`,
    keywords: [
      `locksmith ${area.name}`,
      `emergency locksmith ${area.name}`,
      `locked out ${area.name}`,
      `locksmith ${area.postcode}`,
      `${area.name} locksmith 24/7`,
      `lock change ${area.name}`,
    ],
    openGraph: {
      title: `24/7 Locksmith in ${area.name} | Crownfield Locksmiths`,
      description: `Fast, professional locksmith service covering ${area.name} (${area.postcode}). Emergency lockouts, lock changes, UPVC specialists.`,
      type: "website",
    },
  };
}

const SERVICES = [
  {
    label: "Emergency Lockout",
    desc: "Locked out of your home or flat? We aim to be with you within 30 minutes.",
  },
  {
    label: "Lock Replacement",
    desc: "Upgrade to BS3621 insurance-approved locks. Fitted same day.",
  },
  {
    label: "UPVC Door Repair",
    desc: "Multipoint lock failures, dropped doors, and handle replacements.",
  },
  {
    label: "Lock Repair",
    desc: "Stiff, jammed, or damaged locks repaired on the spot where possible.",
  },
  {
    label: "Security Upgrade",
    desc: "Advice and installation of higher-security locks for your property type.",
  },
  {
    label: "Key Cutting",
    desc: "Spare keys cut on-site. All key types including restricted profiles.",
  },
];

export default async function HyperlocalPage({ params }: Props) {
  const { area: areaSlug } = await params;
  const area = HYPERLOCAL_BY_SLUG[areaSlug];

  if (!area) notFound();

  // Find nearby area objects that exist in our data
  const nearbyAreaObjects = area.nearbyAreas
    .map((s) => HYPERLOCAL_BY_SLUG[s])
    .filter(Boolean)
    .slice(0, 4);

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://crownfieldlocksmiths.co.uk/locksmiths/${area.boroughSlug}/${area.slug}`,
    name: "Crownfield Locksmiths",
    description: `Emergency locksmith service covering ${area.name}, ${area.postcode}`,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    url: `https://crownfieldlocksmiths.co.uk/locksmiths/${area.boroughSlug}/${area.slug}`,
    areaServed: {
      "@type": "Place",
      name: `${area.name}, London`,
      address: {
        "@type": "PostalAddress",
        postalCode: area.postcode,
        addressLocality: area.name,
        addressCountry: "GB",
      },
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "££",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Header forceDark />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-[#001a3d] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold/8 blur-[120px] rounded-full pointer-events-none" />

          <div className="container-max relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-8 flex-wrap">
              <Link href="/" className="hover:text-white/70 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/locksmiths"
                className="hover:text-white/70 transition-colors"
              >
                Locksmiths
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href={`/locksmiths/${area.boroughSlug}`}
                className="hover:text-white/70 transition-colors"
              >
                {area.borough}
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/70">{area.name}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
                    {area.postcode} · {area.borough}
                  </span>
                </div>
                <h1
                  className="font-black text-white leading-[1.05] mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  }}
                >
                  Locksmith in
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(135deg,#d4af37,#e5c158)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {area.name}
                  </span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-xl">
                  {area.description}
                </p>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>
                    Available 24/7 — including weekends and bank holidays
                  </span>
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-white/8 border border-white/12 backdrop-blur-sm rounded-3xl p-7 min-w-[280px]">
                <p className="text-white/50 text-xs uppercase tracking-[0.18em] font-semibold mb-2">
                  Call-out from
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-white/40 font-black text-2xl">£</span>
                  <span
                    className="font-black text-white leading-none"
                    style={{
                      fontSize: "clamp(3.5rem,10vw,5rem)",
                      fontFamily: "'Playfair Display',serif",
                    }}
                  >
                    99
                  </span>
                </div>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl font-black text-primary text-sm mb-3"
                  style={{
                    background: "linear-gradient(135deg,#d4af37,#e5c158)",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now — {area.name}
                </a>
                <p className="text-white/30 text-xs text-center">
                  Quote confirmed before work begins
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <div className="bg-white border-b border-gray-100">
          <div className="container-max py-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {[
                "Upfront fixed pricing",
                "Non-destructive entry first",
                "Fully insured",
                "All work guaranteed",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services in this area */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-max">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
                What We Do
              </span>
            </div>
            <h2
              className="font-black text-primary mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}
            >
              Locksmith Services in {area.name}
            </h2>
            <p className="text-gray-400 mb-12 max-w-xl">
              All services available across {area.name} ({area.postcode}) and
              surrounding streets.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <div
                  key={s.label}
                  className="group p-6 rounded-2xl border border-gray-100 bg-[#F8F7F4] hover:border-gold/30 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{s.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About this area */}
        <section className="py-16 md:py-20 bg-[#F8F7F4]">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
                    Local Knowledge
                  </span>
                </div>
                <h2
                  className="font-black text-primary mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  }}
                >
                  Serving {area.name} &amp; Surrounding Streets
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We cover all streets and postcodes within {area.name} (
                  {area.postcode}), including properties in adjacent roads and
                  neighbouring areas. Our locksmiths are familiar with the
                  property types common in {area.name} — from{" "}
                  {area.propertyTypes[0].toLowerCase()} to{" "}
                  {area.propertyTypes[
                    area.propertyTypes.length - 1
                  ].toLowerCase()}
                  .
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you&apos;re locked out near {area.landmarks[0]} or
                  need a lock change on a {area.propertyTypes[1].toLowerCase()},
                  we can be with you quickly and sort the job on the same visit
                  wherever possible.
                </p>

                {/* Property types */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.18em] mb-3">
                    Property types we work on
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.propertyTypes.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-xl bg-white border border-gray-100 text-sm font-semibold text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Landmarks + postcode card */}
              <div className="space-y-4">
                <div className="bg-primary rounded-3xl p-7 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="relative z-10">
                    <p className="text-white/40 text-xs uppercase tracking-[0.18em] font-semibold mb-4">
                      Coverage area
                    </p>
                    <div className="flex items-center gap-3 mb-5">
                      <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                      <div>
                        <p className="font-bold text-white">{area.name}</p>
                        <p className="text-white/50 text-sm">{area.postcode}</p>
                      </div>
                    </div>
                    <div className="h-px bg-white/10 mb-5" />
                    <p className="text-white/40 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                      Key landmarks nearby
                    </p>
                    <ul className="space-y-2">
                      {area.landmarks.map((l) => (
                        <li
                          key={l}
                          className="flex items-center gap-2 text-white/70 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-white rounded-3xl border border-gray-100 p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-primary text-sm">
                      Need a locksmith in {area.name}?
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      We&apos;re available right now
                    </p>
                  </div>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-primary text-sm flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg,#d4af37,#e5c158)",
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        {nearbyAreaObjects.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container-max">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
                  Also Nearby
                </span>
              </div>
              <h2
                className="font-black text-primary mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                }}
              >
                We Also Cover These Areas
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {nearbyAreaObjects.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/locksmiths/${nearby.boroughSlug}/${nearby.slug}`}
                    className="group p-5 rounded-2xl border border-gray-100 bg-[#F8F7F4] hover:border-primary/20 hover:bg-white hover:shadow-md transition-all"
                  >
                    <p className="font-bold text-primary mb-1 group-hover:text-gold transition-colors">
                      {nearby.name}
                    </p>
                    <p className="text-gray-400 text-xs">{nearby.postcode}</p>
                    <div className="flex items-center gap-1 text-primary/50 text-xs mt-3 font-semibold group-hover:text-primary transition-colors">
                      <span>View area</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="bg-[#F8F7F4] py-8 border-t border-gray-100">
          <div className="container-max flex items-center justify-between flex-wrap gap-4">
            <Link
              href={`/locksmiths/${area.boroughSlug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {area.borough}
            </Link>
            <Link
              href="/locksmiths"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
            >
              All London Areas
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
