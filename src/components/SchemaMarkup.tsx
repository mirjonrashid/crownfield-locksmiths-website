// src/components/SchemaMarkup.tsx
// Put <SchemaMarkup /> in app/layout.tsx (recommended) or a specific page.
// Uses your central data from "@/data/company" (single source of truth).

import { companyInfo } from "@/data/company";

const SITE_URL = "https://crownfieldlocksmiths.co.uk";

function toAbsUrl(pathOrUrl: string) {
  if (!pathOrUrl) return SITE_URL;
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export default function SchemaMarkup() {
  // Prefer E.164 for schema, but keep display elsewhere.
  const tel = companyInfo.phone; // should be like "+44..."
  const email = companyInfo.email;
  const name = companyInfo.name;

  // If you have these in companyInfo, great. If not, defaults are fine.
  const logoUrl = toAbsUrl("/images/logo_dark.png");
  const imageUrl = toAbsUrl("/og-image.jpg");

  // IMPORTANT:
  // - Do NOT add AggregateRating/Review unless they are REAL and visible on your site/GBP.
  // - Fake reviews/rating can trigger rich result penalties.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${SITE_URL}/#business`,
    name,
    description:
      "24/7 emergency locksmith service across London. Residential, commercial, and automotive locksmith services. Upfront pricing, non-destructive entry first.",
    url: SITE_URL,
    telephone: tel,
    email,
    logo: { "@type": "ImageObject", url: logoUrl },
    image: imageUrl,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "AdministrativeArea", name: "Greater London" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Lockout Service",
            description:
              "24/7 emergency lockout service across London. Non-destructive entry, fast response.",
            url: `${SITE_URL}/services/emergency-locksmith-london`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Locksmith",
            description:
              "Lock changes, UPVC repairs, multipoint systems and security upgrades for London homes.",
            url: `${SITE_URL}/services/residential-locksmith-london`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Locksmith",
            description:
              "Master key systems, access control, commercial lock upgrades for London businesses.",
            url: `${SITE_URL}/services/commercial-locksmith-london`,
          },
        },
      ],
    },
    sameAs: [
      companyInfo.social?.facebook,
      companyInfo.social?.instagram,
      companyInfo.social?.twitter,
    ].filter(Boolean),
  };

  // If you already have faqs in data, use them.
  const faqs = [
    {
      q: "Do you provide upfront quotes?",
      a: "Yes. We explain pricing clearly and confirm your quote before starting any work. No hidden fees or surprise charges.",
    },
    {
      q: "How quickly can you arrive?",
      a: "We dispatch as fast as possible. Typical arrival is around 30 minutes across London, depending on traffic and location.",
    },
    {
      q: "Are you available 24/7?",
      a: "Yes. We operate 24 hours a day, 7 days a week, 365 days a year including bank holidays.",
    },
    {
      q: "Will you damage my door or lock?",
      a: "We always attempt non-destructive entry first. Drilling is only used as a last resort when no other method is possible.",
    },
    {
      q: "Do you charge a call-out fee?",
      a: "Yes, there is a call-out fee. The exact cost is confirmed before any work begins.",
    },
    {
      q: "Are you insured?",
      a: "Yes. We are fully insured for residential and commercial locksmith work across London.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f: { q: string; a: string }) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // General “service” schema (fine site-wide), but don’t overstuff.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Emergency Locksmith London",
    provider: {
      "@type": "Locksmith",
      name,
      telephone: tel,
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: "London" },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: tel },
      availableLanguage: "English",
      serviceUrl: SITE_URL,
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
