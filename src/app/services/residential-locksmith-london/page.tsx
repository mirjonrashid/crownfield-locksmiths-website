// app/services/residential-locksmith-london/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Home,
  Key,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Residential Locksmith London | Lock Changes, UPVC & Home Security",
  description: `Expert residential locksmith in London. Lock changes, UPVC repairs, multipoint systems, key cutting and security upgrades. All boroughs covered. Call ${companyInfo.name}: ${companyInfo.phoneDisplay}.`,
  alternates: {
    canonical:
      "https://crownfieldlocksmiths.co.uk/services/residential-locksmith-london",
  },
  openGraph: {
    title: "Residential Locksmith London | Crownfield Locksmiths",
    description:
      "Lock changes, UPVC repairs, multipoint systems and practical home security upgrades across London. Upfront pricing confirmed before work starts.",
    url: "https://crownfieldlocksmiths.co.uk/services/residential-locksmith-london",
  },
};

export default function ResidentialLocksmithPage() {
  const residentialSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Locksmith London",
    serviceType: "Residential Locksmith",
    provider: {
      "@type": "Locksmith",
      name: companyInfo.name,
      telephone: companyInfo.phone,
      url: "https://crownfieldlocksmiths.co.uk",
    },
    areaServed: { "@type": "City", name: "London" },
    description:
      "Professional residential locksmith services across London. Lock changes, UPVC door repairs, multipoint lock systems, key cutting, and home security upgrades.",
  };

  const services = [
    {
      icon: Key,
      title: "Lock Changes & Replacement",
      desc: "Euro cylinders, mortice locks, rim locks — supplied and fitted to suit your door type and insurance requirements.",
    },
    {
      icon: Home,
      title: "UPVC Door Specialists",
      desc: "Multipoint mechanisms repaired or replaced. Handles, gearboxes and cylinders for all major UPVC and composite door brands.",
    },
    {
      icon: Shield,
      title: "Security Upgrades",
      desc: "Practical upgrades like anti-snap cylinders and British Standard locks, fitted properly and explained clearly.",
    },
    {
      icon: Key,
      title: "Key Cutting",
      desc: "Spare keys cut for common lock types when possible — quick, precise, and cost-effective.",
    },
  ];

  const bullets = [
    "Upfront pricing confirmed before work starts",
    "Non-destructive entry where appropriate",
    "UPVC alignment and multipoint issues resolved",
    "Insurance-friendly lock upgrades (where required)",
    "Same-day visits available across London",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
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

              <p className="text-white/70 text-xl mb-8 leading-relaxed">
                Lock changes, UPVC repairs, multipoint systems and practical
                home security upgrades for London homes. All boroughs covered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-primary shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#d4af37,#e5c158)",
                  }}
                  aria-label={`Call ${companyInfo.name} on ${companyInfo.phoneDisplay}`}
                >
                  <Phone className="w-5 h-5" />
                  Call Now — {companyInfo.phoneDisplay}
                </a>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white border-2 border-white/20 hover:border-gold/50 transition-colors"
                >
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
                {bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
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
              keep it clear, tidy, and professional.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {services.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-5 p-7 rounded-3xl bg-white border border-gray-100 hover:border-primary/10 hover:shadow-lg transition-all duration-300"
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

        {/* Lock types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <h2
                  className="font-black text-3xl text-primary mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  What type of lock do you need?
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-primary">
                      Euro Cylinder (most common):
                    </strong>{" "}
                    Used in UPVC and composite doors. We can fit higher-security
                    cylinders (anti-snap / anti-pick options) and ensure the
                    cylinder sits correctly to reduce exposed projection.
                  </p>

                  <p>
                    <strong className="text-primary">Mortice Locks:</strong>{" "}
                    Common on timber doors. Many policies specify a British
                    Standard 5-lever deadlock — we can advise based on your door
                    and your insurer’s wording.
                  </p>

                  <p>
                    <strong className="text-primary">Multipoint Locks:</strong>{" "}
                    The internal mechanism in UPVC/composite doors. If the
                    handle is stiff, drooping, or you need to “lift” the door to
                    lock, the mechanism or alignment may need attention.
                  </p>

                  <p>
                    <strong className="text-primary">
                      Night Latches (Yale type):
                    </strong>{" "}
                    Surface-mounted and spring-operated. Often used alongside a
                    mortice deadlock for stronger day-to-day security.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-black text-primary shadow-lg"
                    style={{
                      background: "linear-gradient(135deg,#d4af37,#e5c158)",
                    }}
                  >
                    <Phone className="w-5 h-5" />
                    Call — {companyInfo.phoneDisplay}
                  </a>
                  <Link
                    href="/blog/lock-types-explained-uk"
                    className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-primary border-2 border-primary/15 hover:border-gold/40 transition-colors"
                  >
                    Read: Lock Types Explained{" "}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <aside className="lg:col-span-5">
                <div className="rounded-3xl border border-gray-100 bg-[#F8F7F4] p-8">
                  <p className="text-gold text-xs font-bold uppercase tracking-[0.22em] mb-3">
                    Typical jobs
                  </p>
                  <h3 className="text-2xl font-black text-primary mb-4">
                    Common residential call-outs
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {[
                      "Home / flat lockouts",
                      "Euro cylinder replacements",
                      "UPVC multipoint mechanism repairs",
                      "Broken keys removed from cylinders",
                      "After-break-in lock changes",
                      "Door alignment adjustments",
                    ].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA strip */}
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
                Call and we’ll tell you the likely options and pricing before we
                set off.
              </p>
            </div>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-primary"
              style={{ background: "linear-gradient(135deg,#d4af37,#e5c158)" }}
              aria-label={`Call ${companyInfo.name} on ${companyInfo.phoneDisplay}`}
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phoneDisplay}
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
                  Residential Locksmith London
                </span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
