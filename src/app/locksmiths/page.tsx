// app/locksmiths/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { BOROUGHS } from "./data";

export const metadata: Metadata = {
  title: "Locksmith London — All Boroughs | Crownfield Locksmiths",
  description:
    "Crownfield Locksmiths covers all 32 London boroughs. Select your area for local 24/7 emergency locksmith service, lock changes and repairs.",
  alternates: {
    canonical: "https://www.crownfieldlocksmiths.co.uk/locksmiths",
  },
};

export default function LocksmithsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-gold text-xs font-bold uppercase tracking-[0.22em] mb-4">
          Coverage
        </p>
        <h1
          className="text-4xl md:text-5xl font-black text-primary mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Locksmith Services
          <br />
          Across London
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-xl">
          We cover all 32 London boroughs. Select your borough for local service
          details and to call us directly.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {BOROUGHS.map((b) => (
            <Link
              key={b.slug}
              href={`/locksmiths/${b.slug}`}
              className="px-4 py-3 rounded-xl bg-[#F8F7F4] border border-gray-100 text-gray-700 text-sm font-semibold hover:border-gold/40 hover:text-primary transition-colors text-center"
            >
              {b.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
