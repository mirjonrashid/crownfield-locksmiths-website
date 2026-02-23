// src/app/areas/data.ts

export type Borough = {
  slug: string;
  name: string;
};

export const BOROUGHS: Borough[] = [
  { name: "Westminster", slug: "westminster" },
  { name: "Kensington & Chelsea", slug: "kensington-and-chelsea" },
  { name: "Hammersmith & Fulham", slug: "hammersmith-and-fulham" },
  { name: "Wandsworth", slug: "wandsworth" },
  { name: "Lambeth", slug: "lambeth" },
  { name: "Southwark", slug: "southwark" },
  { name: "Tower Hamlets", slug: "tower-hamlets" },
  { name: "Hackney", slug: "hackney" },
  { name: "Islington", slug: "islington" },
  { name: "Camden", slug: "camden" },
  { name: "Haringey", slug: "haringey" },
  { name: "Enfield", slug: "enfield" },
  { name: "Barnet", slug: "barnet" },
  { name: "Brent", slug: "brent" },
  { name: "Ealing", slug: "ealing" },
  { name: "Hounslow", slug: "hounslow" },
  { name: "Richmond", slug: "richmond-upon-thames" },
  { name: "Kingston", slug: "kingston-upon-thames" },
  { name: "Merton", slug: "merton" },
  { name: "Sutton", slug: "sutton" },
  { name: "Croydon", slug: "croydon" },
  { name: "Bromley", slug: "bromley" },
  { name: "Lewisham", slug: "lewisham" },
  { name: "Greenwich", slug: "greenwich" },
  { name: "Bexley", slug: "bexley" },
  { name: "Havering", slug: "havering" },
  { name: "Barking & Dagenham", slug: "barking-and-dagenham" },
  { name: "Redbridge", slug: "redbridge" },
  { name: "Waltham Forest", slug: "waltham-forest" },
  { name: "Newham", slug: "newham" },
  { name: "Hillingdon", slug: "hillingdon" },
  { name: "Harrow", slug: "harrow" },
];

export const BOROUGH_BY_SLUG = Object.fromEntries(
  BOROUGHS.map((b) => [b.slug, b]),
) as Record<string, Borough>;
