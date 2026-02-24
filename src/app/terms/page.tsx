// src/app/terms/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Crownfield Locksmiths",
  description:
    "Terms and conditions for Crownfield Locksmiths services across London.",
};

export default function TermsPage() {
  return (
    <>
      <Header forceDark />
      <main className="min-h-screen bg-white pt-20">
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="container-max relative z-10 max-w-3xl">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.22em] mb-3">
              Legal
            </p>
            <h1
              className="font-black text-4xl md:text-5xl text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Terms & Conditions
            </h1>
            <p className="text-white/50 mt-3 text-sm">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-max max-w-3xl">
            <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-primary">
              <h2>1. Service Provider</h2>
              <p>
                These terms govern the use of locksmith services provided by
                Crownfield Locksmiths, operating across all 32 London boroughs.
                By requesting our services, you agree to these terms.
              </p>

              <h2>2. Pricing & Quotes</h2>
              <p>
                All prices are quoted before work begins. The quoted price is
                the price you pay unless:
              </p>
              <ul>
                <li>
                  Additional work is required beyond the original scope, in
                  which case you will be informed and must agree before work
                  proceeds
                </li>
                <li>
                  Parts are required — these are quoted separately and require
                  your approval
                </li>
                <li>
                  Destructive entry is necessary — this will be discussed and
                  agreed before proceeding
                </li>
              </ul>
              <p>
                We do not charge hidden fees. The call-out fee covers attendance
                and assessment. Any additional charges require your explicit
                approval.
              </p>

              <h2>3. Payment</h2>
              <p>
                Payment is due upon completion of work. We accept cash and card
                payments on-site. We do not offer credit or deferred payment
                terms.
              </p>

              <h2>4. Cancellation</h2>
              <p>
                You may cancel a booking at any time before our engineer
                departs. Once an engineer is en route, a call-out fee may apply
                to cover travel costs. We will inform you of any applicable
                charges at the time of cancellation.
              </p>

              <h2>5. Guarantee & Liability</h2>
              <p>
                All work is carried out by qualified locksmiths and is
                guaranteed against defects in workmanship. Parts supplied carry
                the manufacturer&rsquo;s warranty. Our liability is limited to
                the value of the work carried out.
              </p>
              <p>
                We are not liable for pre-existing damage to locks, doors, or
                frames. We will always inform you of any pre-existing damage
                before commencing work.
              </p>

              <h2>6. Non-Destructive Entry</h2>
              <p>
                We always attempt non-destructive entry first. However, some
                locks or situations may require destructive methods. This will
                always be discussed and agreed with you before proceeding, and
                any additional costs confirmed in advance.
              </p>

              <h2>7. Proof of Ownership / Authorisation</h2>
              <p>
                For residential and commercial lockout services, we may ask for
                proof that you are authorised to access the property. This is
                for the protection of both parties. We reserve the right to
                refuse service if we cannot reasonably verify authorisation.
              </p>

              <h2>8. Complaints</h2>
              <p>
                If you are unsatisfied with our service, please contact us at{" "}
                <a
                  href="mailto:info@crownfieldlocksmiths.co.uk"
                  className="text-primary hover:text-gold transition-colors"
                >
                  info@crownfieldlocksmiths.co.uk
                </a>{" "}
                within 14 days of the work being carried out. We aim to resolve
                all complaints within 5 business days.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any
                disputes shall be subject to the exclusive jurisdiction of the
                courts of England and Wales.
              </p>

              <h2>10. Contact</h2>
              <p>
                For any questions regarding these terms, contact us at{" "}
                <a
                  href="mailto:info@crownfieldlocksmiths.co.uk"
                  className="text-primary hover:text-gold transition-colors"
                >
                  info@crownfieldlocksmiths.co.uk
                </a>
                .
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                href="/"
                className="text-primary font-semibold hover:text-gold transition-colors text-sm"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
