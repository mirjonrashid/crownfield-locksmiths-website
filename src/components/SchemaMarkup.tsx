// Place this in your page.tsx or layout.tsx
// This renders all critical schema markup for Google

const SITE_URL = "https://www.crownfieldlocksmiths.co.uk";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": `${SITE_URL}/#business`,
  name: "Crownfield Locksmiths",
  description:
    "24/7 emergency locksmith service across all 32 London boroughs. Residential, commercial, and automotive locksmith services. Upfront pricing, non-destructive entry.",
  url: SITE_URL,
  telephone: "+447346010278",
  email: "info@crownfieldlocksmiths.co.uk",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo_dark.png`,
  },
  image: `${SITE_URL}/og-image.jpg`,
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Mitchell" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Arrived quickly and got me back in without damage. Clear pricing, calm and professional throughout. Highly recommend.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James Patterson" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "We needed urgent lock changes for our office. Fast, clean work and very reliable communication. Will use again.",
    },
  ],
  sameAs: [
    "https://facebook.com/crownfieldlocksmiths",
    "https://instagram.com/crownfieldlocksmiths",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide upfront quotes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We explain pricing clearly and confirm your quote before starting any work. No hidden fees or surprise charges.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you arrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We aim to arrive within 30 minutes across London. Response times depend on your location and current demand.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We operate 24 hours a day, 7 days a week, 365 days a year including bank holidays.",
      },
    },
    {
      "@type": "Question",
      name: "Will you damage my door or lock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We always attempt non-destructive entry first. Drilling is only used as a last resort when no other method is possible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge a call-out fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, there is a fixed call-out fee. The exact cost is confirmed before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Are you insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Crownfield Locksmiths is fully insured for all residential and commercial locksmith work across London.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Locksmith London",
  provider: {
    "@type": "Locksmith",
    name: "Crownfield Locksmiths",
    telephone: "+447346010278",
    url: SITE_URL,
  },
  areaServed: { "@type": "City", name: "London" },
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: { "@type": "ContactPoint", telephone: "+447346010278" },
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

export default function SchemaMarkup() {
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
