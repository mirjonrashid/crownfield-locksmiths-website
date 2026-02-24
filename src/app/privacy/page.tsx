// src/app/privacy/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Crownfield Locksmiths",
  description:
    "Privacy policy for Crownfield Locksmiths — how we collect, use and protect your personal data.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-white/50 mt-3 text-sm">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-max max-w-3xl">
            <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-primary">
              <h2>Who We Are</h2>
              <p>
                Crownfield Locksmiths is a professional locksmith service
                operating across all 32 London boroughs. Our contact email is{" "}
                <a
                  href="mailto:info@crownfieldlocksmiths.co.uk"
                  className="text-primary hover:text-gold transition-colors"
                >
                  info@crownfieldlocksmiths.co.uk
                </a>
                .
              </p>

              <h2>What Data We Collect</h2>
              <p>When you use our contact form, we collect:</p>
              <ul>
                <li>Your name</li>
                <li>Your phone number</li>
                <li>Your postcode</li>
                <li>The service you require</li>
                <li>Any message you provide</li>
              </ul>
              <p>
                We do not collect payment information through our website.
                Payments are handled in person at the time of service.
              </p>

              <h2>How We Use Your Data</h2>
              <p>We use the information you provide solely to:</p>
              <ul>
                <li>Respond to your enquiry</li>
                <li>Arrange and confirm service appointments</li>
                <li>Contact you about the specific job requested</li>
              </ul>
              <p>
                We do not use your data for marketing without your explicit
                consent, and we do not sell or share your data with third
                parties.
              </p>

              <h2>How Long We Keep Your Data</h2>
              <p>
                Enquiry data is retained for up to 12 months for operational
                purposes and then deleted. If you would like your data removed
                sooner, contact us at{" "}
                <a
                  href="mailto:info@crownfieldlocksmiths.co.uk"
                  className="text-primary hover:text-gold transition-colors"
                >
                  info@crownfieldlocksmiths.co.uk
                </a>
                .
              </p>

              <h2>Third-Party Services</h2>
              <p>
                Our contact form is processed by <strong>Web3Forms</strong>, a
                secure form submission service. Your submission data is
                transmitted to our email via their platform. We also use{" "}
                <strong>Google Analytics</strong> to understand how visitors use
                our website. This collects anonymised usage data (pages visited,
                time on site) and does not identify you personally.
              </p>

              <h2>Cookies</h2>
              <p>
                We use essential cookies for site functionality and Google
                Analytics cookies to understand site usage. You can disable
                cookies in your browser settings, though this may affect site
                performance.
              </p>

              <h2>Your Rights (GDPR)</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:info@crownfieldlocksmiths.co.uk"
                  className="text-primary hover:text-gold transition-colors"
                >
                  info@crownfieldlocksmiths.co.uk
                </a>
                .
              </p>

              <h2>Contact</h2>
              <p>
                For any privacy-related questions, contact us at{" "}
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
