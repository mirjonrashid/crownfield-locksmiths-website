// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Shield,
  Clock,
  Star,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Crownfield Locksmiths | London's Trusted Locksmith",
  description:
    "Crownfield Locksmiths — straightforward locksmith service across London. Learn who we are, how we work, and what to expect when you call.",
  alternates: { canonical: "https://crownfieldlocksmiths.co.uk/about" },
};

const values = [
  {
    icon: Shield,
    title: "Clear Pricing",
    body: "We provide pricing upfront based on what you tell us. If anything changes once we assess the door or lock, we explain the options and confirm the price before starting.",
  },
  {
    icon: Clock,
    title: "Reliable Updates",
    body: "If you are locked out, time matters. We share a realistic ETA and keep you updated if traffic or access affects arrival time.",
  },
  {
    icon: CheckCircle2,
    title: "Non-Destructive First",
    body: "Where possible, we start with non-destructive entry methods before considering drilling. This can help avoid unnecessary replacement costs.",
  },
  {
    icon: Star,
    title: "Tidy Finish",
    body: "We work carefully and leave the area clean. Before we go, we check the lock and door operation and answer any questions.",
  },
];

const stats = [
  { value: "24/7", label: "Available" },
  { value: "London", label: "Coverage" },
  { value: "£99", label: "Call-out from" },
  { value: "Upfront", label: "Pricing" },
];

export default function AboutPage() {
  return (
    <>
      <Header forceDark />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-[#001a3d] py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-gold/6 blur-[140px] rounded-full pointer-events-none" />

          <div className="container-max relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.28em]">
                About Us
              </span>
            </div>
            <h1
              className="font-black text-white leading-[1.05] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              }}
            >
              London&rsquo;s locksmith
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#d4af37,#e5c158)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                you can rely on.
              </span>
            </h1>
            <p className="text-white/65 text-xl leading-relaxed max-w-2xl">
              Crownfield Locksmiths provides locksmith services across London.
              We focus on clear communication, careful work, and practical
              solutions&mdash;especially when you need help quickly.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <div className="bg-white border-b border-gray-100">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {stats.map((s) => (
                <div key={s.label} className="py-8 px-6 text-center">
                  <p
                    className="font-black text-primary leading-none mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-xs uppercase tracking-[0.18em] font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story */}
        <section className="py-20 md:py-28 bg-[#F8F7F4]">
          <div className="container-max max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-gold text-xs font-bold uppercase tracking-[0.22em]">
                    Our Story
                  </span>
                </div>
                <h2
                  className="font-black text-primary leading-[1.08] mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  }}
                >
                  Built around calm, capable help.
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Crownfield Locksmiths was created to offer a straightforward
                    service: clear pricing, professional workmanship, and a
                    consistent experience from first call to completion.
                  </p>
                  <p>
                    We aim to keep things simple. We listen to what has
                    happened, explain the likely options, and arrive prepared.
                    On site, we assess the lock, confirm the approach, and
                    proceed once you are happy with the plan.
                  </p>
                  <p>
                    From a standard lockout to upgrades for home or business
                    doors, we apply the same attention to detail and finish. If
                    replacement parts are needed, we talk you through the
                    choices and costs before fitting anything.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="space-y-4">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gold/25 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">
                            {v.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {v.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-20 bg-white">
          <div className="container-max max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.22em]">
                How It Works
              </span>
            </div>
            <h2
              className="font-black text-primary mb-12"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              What to expect when you call.
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Call & Get a Quote",
                  body: "Tell us your location and what has happened. We give an upfront price based on the details provided, and we confirm the final price on arrival before work starts.",
                },
                {
                  step: "02",
                  title: "We Arrive & Assess",
                  body: "We share a realistic ETA and assess the lock on site. We explain the approach, confirm any options, and only proceed once you are comfortable.",
                },
                {
                  step: "03",
                  title: "Job Done, Carefully",
                  body: "We complete the work, test the door and lock function, and leave the area tidy. If a replacement is fitted, we explain what was installed and why.",
                },
              ].map((s) => (
                <div key={s.step} className="relative">
                  <div
                    className="text-[5rem] font-black leading-none text-primary/[0.06] mb-2 select-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    aria-hidden
                  >
                    {s.step}
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2 -mt-4">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute right-0 top-0 bottom-0 w-[400px] bg-gold/5 blur-[100px] pointer-events-none" />
          <div className="container-max relative z-10 max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs font-bold uppercase tracking-[0.22em]">
                    Coverage
                  </span>
                </div>
                <h2
                  className="font-black text-white leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  }}
                >
                  Across London.
                  <br />
                  <span
                    className="text-white/50 font-normal text-lg"
                    style={{ fontFamily: "inherit" }}
                  >
                    Day or night.
                  </span>
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/locksmiths"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-primary text-sm"
                  style={{
                    background: "linear-gradient(135deg,#d4af37,#e5c158)",
                  }}
                >
                  View All Areas
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+447346010278"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white border border-white/20 hover:border-gold/40 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container-max max-w-2xl text-center">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.22em] mb-4">
              Get in Touch
            </p>
            <h2
              className="font-black text-primary mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Need a locksmith today?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Call for the fastest response. For non-urgent enquiries, use the
              contact form on the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+447346010278"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-primary shadow-lg"
                style={{
                  background: "linear-gradient(135deg,#d4af37,#e5c158)",
                }}
              >
                <Phone className="w-5 h-5" />
                Call +44 7346 010278
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-primary border-2 border-primary/15 hover:border-gold/40 transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
