import { MetadataRoute } from "next";

const baseUrl = "https://www.crownfieldlocksmiths.co.uk";

const boroughSlugs = [
  "westminster",
  "kensington-and-chelsea",
  "hammersmith-and-fulham",
  "wandsworth",
  "lambeth",
  "southwark",
  "tower-hamlets",
  "hackney",
  "islington",
  "camden",
  "haringey",
  "enfield",
  "barnet",
  "brent",
  "ealing",
  "hounslow",
  "richmond-upon-thames",
  "kingston-upon-thames",
  "merton",
  "sutton",
  "croydon",
  "bromley",
  "lewisham",
  "greenwich",
  "bexley",
  "havering",
  "barking-and-dagenham",
  "redbridge",
  "waltham-forest",
  "newham",
  "hillingdon",
  "harrow",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const boroughPages: MetadataRoute.Sitemap = boroughSlugs.map((slug) => ({
    url: `${baseUrl}/locksmiths/${slug}`,
    lastModified: new Date("2026-02-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Locksmiths index
    {
      url: `${baseUrl}/locksmiths`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Core Services
    {
      url: `${baseUrl}/services/emergency-locksmith-london`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/residential-locksmith-london`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/commercial-locksmith-london`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/lock-types-explained-uk`,
      lastModified: new Date("2026-01-10"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/best-front-door-lock-2026`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/insurance-lock-requirements`,
      lastModified: new Date("2026-01-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/why-upvc-locks-fail-winter`,
      lastModified: new Date("2026-01-25"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog/security-upgrades`,
      lastModified: new Date("2026-01-30"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Legal
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    // 32 London borough pages
    ...boroughPages,
  ];
}
