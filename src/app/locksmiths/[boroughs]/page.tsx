// src/app/locksmiths/[borough]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BOROUGH_BY_SLUG, BOROUGHS, type Borough } from "../data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HYPERLOCAL_AREAS } from "@/data/hyperlocal";

type Props = { params: Promise<{ boroughs: string }> };

export function generateStaticParams(): { boroughs: string }[] {
  return BOROUGHS.map((b: Borough) => ({ boroughs: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { boroughs } = await params;
  const b = BOROUGH_BY_SLUG[boroughs];
  if (!b) return {};

  const baseUrl = "https://crownfieldlocksmiths.co.uk";
  const url = `${baseUrl}/locksmiths/${b.slug}`;

  return {
    title: `Locksmith ${b.name} | 24/7 Emergency | Crownfield Locksmiths`,
    description: `Need a locksmith in ${b.name}? 24/7 emergency response, lockouts, lock changes and repairs. Call now: 07346 010278.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Locksmith ${b.name} | 24/7 Emergency | Crownfield Locksmiths`,
      description: `Fast locksmith service in ${b.name}. Non-destructive entry where possible. Upfront pricing confirmed before work starts.`,
      url,
    },
  };
}

export default async function BoroughPage({ params }: Props) {
  const { boroughs } = await params;
  const b = BOROUGH_BY_SLUG[boroughs];

  if (!b) {
    return (
      <>
        <Header forceDark />
        <main className="min-h-screen bg-white pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl font-black text-primary mb-3">
              Area not found
            </h1>
            <p className="text-gray-600 mb-6">
              Please choose a borough from our coverage list.
            </p>
            <Link
              className="text-primary font-bold underline"
              href="/locksmiths"
            >
              View areas we cover
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const boroughSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Locksmith ${b.name}`,
    serviceType: "Locksmith",
    provider: {
      "@type": "Locksmith",
      name: "Crownfield Locksmiths",
      telephone: "+447346010278",
      url: "https://crownfieldlocksmiths.co.uk",
    },
    areaServed: { "@type": "AdministrativeArea", name: b.name },
    description: `24/7 emergency locksmith in ${b.name}. Lockouts, lock changes, UPVC repairs. Non-destructive entry where possible. Price confirmed before work starts.`,
  };

  // Find hyperlocal areas within this borough
  const hyperlocalAreas = HYPERLOCAL_AREAS.filter(
    (a) => a.boroughSlug === boroughs,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(boroughSchema) }}
      />
      <Header forceDark />
      <main className="min-h-screen bg-white">
        <section className="bg-primary py-20 pt-28">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Local Service Area
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-5">
              Locksmith {b.name}
            </h1>
            <p className="text-white/70 text-lg mb-8">
              24/7 emergency locksmith in {b.name}. Lockouts, lock changes, UPVC
              repairs. Non-destructive entry where possible. Price confirmed
              before we start.
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
                href="/services/emergency-locksmith-london"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white border-2 border-white/20 hover:border-gold/50 transition-colors"
              >
                Emergency Service Details
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8F7F4]">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-black text-primary mb-4">
                Fast locksmith response in {b.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you&apos;re locked out or need a lock changed urgently in{" "}
                {b.name}, we dispatch quickly and aim to get you secure again
                with minimal disruption.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 emergency callouts",
                  "Non-destructive entry where possible",
                  "UPVC and multipoint lock issues",
                  "Lock changes and repairs",
                  "Upfront pricing before work starts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-xl font-black text-primary mb-3">
                Common jobs in {b.name}
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Home / flat lockouts</li>
                <li>• Nightlatch and deadbolt replacements</li>
                <li>• Euro cylinder changes</li>
                <li>• Jammed UPVC door mechanisms</li>
                <li>• After-break-in lock upgrades</li>
              </ul>
              <div className="mt-6">
                <Link
                  className="text-primary font-bold underline"
                  href="/locksmiths"
                >
                  View all areas we cover
                </Link>
              </div>
            </div>
          </div>
        </section>

        {hyperlocalAreas.length > 0 && (
          <section className="py-14 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4">
              <p className="text-gold text-xs font-bold uppercase tracking-[0.22em] mb-3">
                Specific Areas
              </p>
              <h2 className="text-2xl font-black text-primary mb-2">
                Neighbourhoods in {b.name}
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                We cover these specific areas within {b.name} with dedicated
                local pages.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {hyperlocalAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/locksmiths/${area.boroughSlug}/${area.slug}`}
                    className="group px-4 py-3 rounded-xl bg-[#F8F7F4] border border-gray-100 hover:border-gold/40 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <p className="font-semibold text-gray-700 group-hover:text-primary text-sm transition-colors">
                      {area.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      {area.postcode}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <nav className="bg-[#F8F7F4] py-4 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4">
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
                <Link
                  href="/locksmiths"
                  itemProp="item"
                  className="hover:text-primary transition-colors"
                >
                  <span itemProp="name">Locksmiths</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <ArrowRight className="w-3 h-3" />
              <li
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                <span itemProp="name" className="text-primary font-medium">
                  {b.name}
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
