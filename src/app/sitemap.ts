export const dynamic = "force-static";
import { MetadataRoute } from "next";

const baseUrl = "https://crownfieldlocksmiths.co.uk";
const SITE_LASTMOD = "2026-02-24"; // update only when you actually change core site pages

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
    lastModified: SITE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: SITE_LASTMOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/locksmiths`,
      lastModified: SITE_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/emergency-locksmith-london`,
      lastModified: SITE_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/residential-locksmith-london`,
      lastModified: SITE_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/commercial-locksmith-london`,
      lastModified: SITE_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: SITE_LASTMOD,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/lock-types-explained-uk`,
      lastModified: "2026-01-10",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/best-front-door-lock-2026`,
      lastModified: "2026-01-15",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/insurance-lock-requirements`,
      lastModified: "2026-01-20",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/why-upvc-locks-fail-winter`,
      lastModified: "2026-01-25",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog/security-upgrades`,
      lastModified: "2026-01-30",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: SITE_LASTMOD,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: SITE_LASTMOD,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...boroughPages,
  ];
}
