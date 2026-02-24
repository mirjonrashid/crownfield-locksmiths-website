// src/data/hyperlocal.ts
// Hyperlocal area data for /locksmiths/[area] pages
// These are specific neighbourhoods within London boroughs

export type HyperlocalArea = {
  slug: string;
  name: string;
  borough: string; // parent borough name
  boroughSlug: string; // links back to borough page
  postcode: string; // primary postcode(s) for the area
  description: string; // unique 1-2 sentence description
  landmarks: string[]; // 3-4 local landmarks for relevance
  propertyTypes: string[]; // types of properties common in area
  nearbyAreas: string[]; // slugs of nearby areas (cross-links)
};

export const HYPERLOCAL_AREAS: HyperlocalArea[] = [
  {
    slug: "chelsea",
    name: "Chelsea",
    borough: "Kensington & Chelsea",
    boroughSlug: "kensington-and-chelsea",
    postcode: "SW3, SW10",
    description:
      "Chelsea is one of London's most prestigious residential areas, home to period townhouses, mansion flats, and modern luxury apartments along the King's Road and Chelsea Embankment.",
    landmarks: [
      "King's Road",
      "Chelsea Harbour",
      "Sloane Square",
      "Chelsea FC",
    ],
    propertyTypes: [
      "Period townhouses",
      "Mansion flats",
      "Luxury apartments",
      "Mews houses",
    ],
    nearbyAreas: ["kensington", "fulham", "battersea", "sloane-square"],
  },
  {
    slug: "kensington",
    name: "Kensington",
    borough: "Kensington & Chelsea",
    boroughSlug: "kensington-and-chelsea",
    postcode: "W8, W14",
    description:
      "Kensington is an affluent area known for its grand Victorian terraces, embassies, and proximity to Hyde Park, with a mix of high-end residential properties and period conversions.",
    landmarks: [
      "Kensington Palace",
      "Hyde Park",
      "Kensington High Street",
      "Natural History Museum",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Embassy conversions",
      "Period flats",
      "Garden apartments",
    ],
    nearbyAreas: ["chelsea", "notting-hill", "earls-court", "knightsbridge"],
  },
  {
    slug: "notting-hill",
    name: "Notting Hill",
    borough: "Kensington & Chelsea",
    boroughSlug: "kensington-and-chelsea",
    postcode: "W11",
    description:
      "Notting Hill is famous for its colourful stucco townhouses, the Portobello Road market, and a vibrant mix of period conversions and garden flat properties.",
    landmarks: [
      "Portobello Road Market",
      "Notting Hill Gate",
      "Ladbroke Grove",
      "The Electric Cinema",
    ],
    propertyTypes: [
      "Stucco townhouses",
      "Garden flats",
      "Period conversions",
      "Maisonettes",
    ],
    nearbyAreas: [
      "kensington",
      "bayswater",
      "ladbroke-grove",
      "westbourne-grove",
    ],
  },
  {
    slug: "canary-wharf",
    name: "Canary Wharf",
    borough: "Tower Hamlets",
    boroughSlug: "tower-hamlets",
    postcode: "E14",
    description:
      "Canary Wharf is London's financial hub, dominated by high-rise apartment blocks, modern developments, and a dense residential population of professionals in secure buildings.",
    landmarks: [
      "One Canada Square",
      "Jubilee Park",
      "Crossrail Place",
      "West India Quays",
    ],
    propertyTypes: [
      "High-rise apartments",
      "Riverside developments",
      "Modern flats",
      "Secure gated buildings",
    ],
    nearbyAreas: ["isle-of-dogs", "limehouse", "poplar", "greenwich"],
  },
  {
    slug: "shoreditch",
    name: "Shoreditch",
    borough: "Hackney",
    boroughSlug: "hackney",
    postcode: "E1, EC2A",
    description:
      "Shoreditch is a creative and tech hub with a dense mix of converted warehouses, new-build apartments, and Victorian terraces popular with young professionals.",
    landmarks: [
      "Boxpark",
      "Spitalfields Market",
      "Old Street Roundabout",
      "Brick Lane",
    ],
    propertyTypes: [
      "Warehouse conversions",
      "Modern apartments",
      "Victorian terraces",
      "Live-work units",
    ],
    nearbyAreas: ["hoxton", "bethnal-green", "dalston", "whitechapel"],
  },
  {
    slug: "hoxton",
    name: "Hoxton",
    borough: "Hackney",
    boroughSlug: "hackney",
    postcode: "N1, EC2A",
    description:
      "Hoxton borders Shoreditch and Islington, known for its independent character, Victorian terraces, and a growing number of residential conversions above commercial spaces.",
    landmarks: [
      "Hoxton Square",
      "Geffrye Museum",
      "Regent's Canal",
      "Hoxton Overground",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Commercial conversions",
      "Modern flats",
      "Period houses",
    ],
    nearbyAreas: ["shoreditch", "dalston", "islington", "old-street"],
  },
  {
    slug: "brixton",
    name: "Brixton",
    borough: "Lambeth",
    boroughSlug: "lambeth",
    postcode: "SW2, SW9",
    description:
      "Brixton is a vibrant, culturally diverse area with a mix of Victorian terraces, mansion blocks, and new residential developments around the famous market and tube station.",
    landmarks: [
      "Brixton Market",
      "Brixton Academy",
      "Windrush Square",
      "Pop Brixton",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Mansion blocks",
      "New-build flats",
      "HMOs",
    ],
    nearbyAreas: ["clapham", "stockwell", "herne-hill", "streatham"],
  },
  {
    slug: "clapham",
    name: "Clapham",
    borough: "Lambeth",
    boroughSlug: "lambeth",
    postcode: "SW4, SW11",
    description:
      "Clapham is one of South London's most popular residential areas, with wide tree-lined streets, period terraces, and easy access to Clapham Common.",
    landmarks: [
      "Clapham Common",
      "Clapham High Street",
      "The Pavement",
      "Clapham South tube",
    ],
    propertyTypes: [
      "Period terraces",
      "Victorian semis",
      "Conversion flats",
      "Garden flats",
    ],
    nearbyAreas: ["brixton", "battersea", "balham", "streatham"],
  },
  {
    slug: "battersea",
    name: "Battersea",
    borough: "Wandsworth",
    boroughSlug: "wandsworth",
    postcode: "SW8, SW11",
    description:
      "Battersea has transformed dramatically with the regeneration around the Power Station, alongside established Victorian streets and riverside apartments along the Thames.",
    landmarks: [
      "Battersea Power Station",
      "Battersea Park",
      "Nine Elms",
      "Queenstown Road",
    ],
    propertyTypes: [
      "Riverside apartments",
      "Victorian terraces",
      "New-build developments",
      "Warehouse conversions",
    ],
    nearbyAreas: ["chelsea", "clapham", "vauxhall", "wandsworth"],
  },
  {
    slug: "islington",
    name: "Islington",
    borough: "Islington",
    boroughSlug: "islington",
    postcode: "N1, EC1V",
    description:
      "Islington is an affluent inner-London borough with beautiful Georgian and Victorian terraces on streets like Upper Street, popular with families and young professionals.",
    landmarks: [
      "Upper Street",
      "Angel tube",
      "Emirates Stadium",
      "Chapel Market",
    ],
    propertyTypes: [
      "Georgian terraces",
      "Victorian townhouses",
      "Conversion flats",
      "New-build apartments",
    ],
    nearbyAreas: ["hoxton", "highbury", "canonbury", "clerkenwell"],
  },
  {
    slug: "highbury",
    name: "Highbury",
    borough: "Islington",
    boroughSlug: "islington",
    postcode: "N5",
    description:
      "Highbury is a quiet, leafy neighbourhood bordering Islington and Hackney, known for its large Victorian villas, period conversions, and Highbury Fields.",
    landmarks: [
      "Highbury Fields",
      "Highbury & Islington tube",
      "Arsenal Stadium",
      "Highbury Barn",
    ],
    propertyTypes: [
      "Victorian villas",
      "Period conversions",
      "Mansion blocks",
      "Family homes",
    ],
    nearbyAreas: ["islington", "canonbury", "finsbury-park", "stoke-newington"],
  },
  {
    slug: "peckham",
    name: "Peckham",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE15",
    description:
      "Peckham has become one of South London's most exciting areas, with a mix of Victorian terraces, council estates, and an emerging creative scene around Rye Lane.",
    landmarks: [
      "Peckham Rye Park",
      "Rye Lane",
      "Bussey Building",
      "Peckham Levels",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Council conversions",
      "New-build flats",
      "Period houses",
    ],
    nearbyAreas: ["brixton", "camberwell", "new-cross", "bermondsey"],
  },
  {
    slug: "bermondsey",
    name: "Bermondsey",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE1, SE16",
    description:
      "Bermondsey sits between London Bridge and Rotherhithe, known for its Victorian warehouse conversions, new riverside developments, and the popular Bermondsey Street.",
    landmarks: [
      "Bermondsey Street",
      "Borough Market",
      "The Shard",
      "Tower Bridge",
    ],
    propertyTypes: [
      "Warehouse conversions",
      "Riverside apartments",
      "Victorian terraces",
      "New-build flats",
    ],
    nearbyAreas: [
      "london-bridge",
      "rotherhithe",
      "peckham",
      "elephant-and-castle",
    ],
  },
  {
    slug: "fulham",
    name: "Fulham",
    borough: "Hammersmith & Fulham",
    boroughSlug: "hammersmith-and-fulham",
    postcode: "SW6",
    description:
      "Fulham is an upmarket residential area with wide streets of Victorian terraces and period conversions, popular with families and professionals in South West London.",
    landmarks: [
      "Fulham Broadway",
      "Bishops Park",
      "Fulham Palace",
      "Stamford Bridge",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period conversions",
      "Garden flats",
      "Mews houses",
    ],
    nearbyAreas: ["chelsea", "putney", "hammersmith", "parsons-green"],
  },
  {
    slug: "hammersmith",
    name: "Hammersmith",
    borough: "Hammersmith & Fulham",
    boroughSlug: "hammersmith-and-fulham",
    postcode: "W6",
    description:
      "Hammersmith is a busy West London hub with excellent transport links, a mix of mansion blocks, Victorian terraces, and riverside properties along the Thames.",
    landmarks: [
      "Hammersmith Bridge",
      "Lyric Theatre",
      "Hammersmith Apollo",
      "King Street",
    ],
    propertyTypes: [
      "Mansion blocks",
      "Victorian terraces",
      "Riverside flats",
      "Modern apartments",
    ],
    nearbyAreas: ["fulham", "chiswick", "shepherds-bush", "brook-green"],
  },
  {
    slug: "putney",
    name: "Putney",
    borough: "Wandsworth",
    boroughSlug: "wandsworth",
    postcode: "SW15",
    description:
      "Putney is a leafy riverside suburb popular with families and sporty professionals, with Victorian and Edwardian semis, mansion blocks, and excellent schools.",
    landmarks: [
      "Putney Bridge",
      "Putney Heath",
      "Putney High Street",
      "Barn Elms",
    ],
    propertyTypes: [
      "Victorian semis",
      "Edwardian homes",
      "Mansion blocks",
      "Riverside apartments",
    ],
    nearbyAreas: ["fulham", "wandsworth", "barnes", "wimbledon"],
  },
  {
    slug: "wimbledon",
    name: "Wimbledon",
    borough: "Merton",
    boroughSlug: "merton",
    postcode: "SW19",
    description:
      "Wimbledon combines a charming village feel with excellent transport links, offering detached houses, Victorian terraces, and modern apartments near the famous tennis grounds.",
    landmarks: [
      "Wimbledon Tennis",
      "Wimbledon Common",
      "Wimbledon Village",
      "Centre Court",
    ],
    propertyTypes: [
      "Detached houses",
      "Victorian terraces",
      "Modern apartments",
      "Cottages",
    ],
    nearbyAreas: ["putney", "raynes-park", "morden", "tooting"],
  },
  {
    slug: "stoke-newington",
    name: "Stoke Newington",
    borough: "Hackney",
    boroughSlug: "hackney",
    postcode: "N16",
    description:
      "Stoke Newington is a bohemian neighbourhood with a village-like feel, Victorian terraces on Church Street, and a strong community atmosphere popular with young families.",
    landmarks: [
      "Church Street",
      "Clissold Park",
      "Abney Park Cemetery",
      "Stoke Newington High Street",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Edwardian semis",
      "Period conversions",
      "Garden flats",
    ],
    nearbyAreas: ["dalston", "highbury", "stamford-hill", "finsbury-park"],
  },
  {
    slug: "dalston",
    name: "Dalston",
    borough: "Hackney",
    boroughSlug: "hackney",
    postcode: "E8",
    description:
      "Dalston is a fast-changing East London neighbourhood with a vibrant nightlife scene, Victorian terraces, and a growing number of new-build residential developments.",
    landmarks: [
      "Ridley Road Market",
      "Dalston Kingsland Overground",
      "Arcola Theatre",
      "Gillett Square",
    ],
    propertyTypes: [
      "Victorian terraces",
      "New-build apartments",
      "Period conversions",
      "HMOs",
    ],
    nearbyAreas: [
      "stoke-newington",
      "hoxton",
      "hackney-central",
      "bethnal-green",
    ],
  },
  {
    slug: "greenwich",
    name: "Greenwich",
    borough: "Greenwich",
    boroughSlug: "greenwich",
    postcode: "SE10",
    description:
      "Greenwich is a historic riverside area with a UNESCO World Heritage site, elegant Georgian townhouses, modern riverside developments, and strong transport links via the DLR.",
    landmarks: [
      "Royal Observatory",
      "Cutty Sark",
      "Greenwich Park",
      "National Maritime Museum",
    ],
    propertyTypes: [
      "Georgian townhouses",
      "Victorian terraces",
      "Riverside apartments",
      "Period conversions",
    ],
    nearbyAreas: ["canary-wharf", "blackheath", "deptford", "woolwich"],
  },

  // Westminster
  {
    slug: "mayfair",
    name: "Mayfair",
    borough: "Westminster",
    boroughSlug: "westminster",
    postcode: "W1J, W1K",
    description:
      "Mayfair is one of London's most exclusive addresses, home to luxury hotels, private members clubs, and high-end residential properties ranging from Georgian townhouses to modern serviced apartments.",
    landmarks: [
      "Berkeley Square",
      "Bond Street",
      "Grosvenor Square",
      "Mount Street",
    ],
    propertyTypes: [
      "Georgian townhouses",
      "Luxury apartments",
      "Serviced apartments",
      "Period conversions",
    ],
    nearbyAreas: ["marylebone", "soho", "knightsbridge", "belgravia"],
  },
  {
    slug: "marylebone",
    name: "Marylebone",
    borough: "Westminster",
    boroughSlug: "westminster",
    postcode: "W1G, W1U",
    description:
      "Marylebone is a refined village-within-a-city, known for its independent boutiques on Marylebone High Street and elegant Georgian and Victorian mansion blocks popular with professionals.",
    landmarks: [
      "Marylebone High Street",
      "Regent's Park",
      "Harley Street",
      "Baker Street",
    ],
    propertyTypes: [
      "Georgian mansion blocks",
      "Period flats",
      "Victorian conversions",
      "Luxury apartments",
    ],
    nearbyAreas: ["mayfair", "fitzrovia", "paddington", "notting-hill"],
  },
  {
    slug: "soho",
    name: "Soho",
    borough: "Westminster",
    boroughSlug: "westminster",
    postcode: "W1D, W1F",
    description:
      "Soho is a dense, vibrant district in central London with a mix of above-commercial flats, period conversions, and modern residential buildings popular with creative professionals.",
    landmarks: [
      "Carnaby Street",
      "Soho Square",
      "Old Compton Street",
      "Berwick Street Market",
    ],
    propertyTypes: [
      "Above-commercial flats",
      "Period conversions",
      "Modern apartments",
      "Warehouse-style lofts",
    ],
    nearbyAreas: ["mayfair", "fitzrovia", "covent-garden", "fitzrovia"],
  },
  {
    slug: "pimlico",
    name: "Pimlico",
    borough: "Westminster",
    boroughSlug: "westminster",
    postcode: "SW1V, SW1P",
    description:
      "Pimlico is a quiet residential grid of Regency stucco terraces and garden squares just south of Victoria, popular with young professionals and families seeking central London living.",
    landmarks: [
      "Tate Britain",
      "Pimlico tube",
      "Dolphin Square",
      "Churchill Gardens",
    ],
    propertyTypes: [
      "Regency stucco terraces",
      "Period flats",
      "Garden square houses",
      "Mansion blocks",
    ],
    nearbyAreas: ["belgravia", "battersea", "westminster-bridge", "victoria"],
  },
  {
    slug: "belgravia",
    name: "Belgravia",
    borough: "Westminster",
    boroughSlug: "westminster",
    postcode: "SW1X, SW1W",
    description:
      "Belgravia is one of London's wealthiest districts, characterised by grand white stucco townhouses, private garden squares, and embassies along Eaton Square and Chester Square.",
    landmarks: [
      "Eaton Square",
      "Sloane Street",
      "Chester Square",
      "Eccleston Square",
    ],
    propertyTypes: [
      "Stucco townhouses",
      "Embassy residences",
      "Luxury flats",
      "Garden square houses",
    ],
    nearbyAreas: ["mayfair", "pimlico", "chelsea", "knightsbridge"],
  },
  {
    slug: "paddington",
    name: "Paddington",
    borough: "Westminster",
    boroughSlug: "westminster",
    postcode: "W2, W9",
    description:
      "Paddington combines a major transport hub with residential areas of Victorian terraces and modern Paddington Basin developments, popular with commuters and young professionals.",
    landmarks: [
      "Paddington Station",
      "Paddington Basin",
      "Hyde Park",
      "Little Venice",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Modern canal-side apartments",
      "Period conversions",
      "Mansion blocks",
    ],
    nearbyAreas: ["marylebone", "bayswater", "notting-hill", "maida-vale"],
  },
  // Camden
  {
    slug: "camden-town",
    name: "Camden Town",
    borough: "Camden",
    boroughSlug: "camden",
    postcode: "NW1",
    description:
      "Camden Town is a vibrant, eclectic neighbourhood famous for its markets and music scene, with a mix of Victorian terraces, canal-side properties, and converted industrial buildings.",
    landmarks: ["Camden Market", "Regent's Canal", "Roundhouse", "Camden Lock"],
    propertyTypes: [
      "Victorian terraces",
      "Canal-side apartments",
      "Industrial conversions",
      "Period flats",
    ],
    nearbyAreas: ["kentish-town", "primrose-hill", "islington", "holloway"],
  },
  {
    slug: "primrose-hill",
    name: "Primrose Hill",
    borough: "Camden",
    boroughSlug: "camden",
    postcode: "NW1, NW3",
    description:
      "Primrose Hill is a sought-after village neighbourhood with stunning park views, charming Victorian terraces, and a high-street feel with independent shops and cafés.",
    landmarks: [
      "Primrose Hill Park",
      "Regent's Park Zoo",
      "Chalcot Square",
      "Primrose Hill Road",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period houses",
      "Garden flats",
      "Edwardian semis",
    ],
    nearbyAreas: ["camden-town", "hampstead", "chalk-farm", "st-johns-wood"],
  },
  {
    slug: "hampstead",
    name: "Hampstead",
    borough: "Camden",
    boroughSlug: "camden",
    postcode: "NW3",
    description:
      "Hampstead is one of London's most desirable villages, with Georgian and Victorian houses, the famous Heath, and a strong community of professionals and families.",
    landmarks: [
      "Hampstead Heath",
      "Kenwood House",
      "Flask Walk",
      "Hampstead tube",
    ],
    propertyTypes: [
      "Georgian houses",
      "Victorian villas",
      "Detached houses",
      "Period conversions",
    ],
    nearbyAreas: ["primrose-hill", "highgate", "golders-green", "belsize-park"],
  },
  // Tower Hamlets
  {
    slug: "bethnal-green",
    name: "Bethnal Green",
    borough: "Tower Hamlets",
    boroughSlug: "tower-hamlets",
    postcode: "E2",
    description:
      "Bethnal Green is a diverse, fast-changing East London neighbourhood with Victorian terraces, new-build developments, and a thriving creative community around the V&A Museum of Childhood.",
    landmarks: [
      "V&A Museum of Childhood",
      "Bethnal Green tube",
      "Columbia Road",
      "Museum Gardens",
    ],
    propertyTypes: [
      "Victorian terraces",
      "New-build flats",
      "Period conversions",
      "Council blocks",
    ],
    nearbyAreas: ["shoreditch", "dalston", "mile-end", "whitechapel"],
  },
  {
    slug: "whitechapel",
    name: "Whitechapel",
    borough: "Tower Hamlets",
    boroughSlug: "tower-hamlets",
    postcode: "E1",
    description:
      "Whitechapel is a densely populated area in East London undergoing significant regeneration, with a mix of modern apartment blocks, Victorian terraces, and proximity to the City.",
    landmarks: [
      "Whitechapel Gallery",
      "Royal London Hospital",
      "Whitechapel Market",
      "Aldgate East tube",
    ],
    propertyTypes: [
      "Modern apartments",
      "Victorian terraces",
      "New-build developments",
      "Commercial conversions",
    ],
    nearbyAreas: ["shoreditch", "bethnal-green", "stepney", "canary-wharf"],
  },
  // Southwark
  {
    slug: "london-bridge",
    name: "London Bridge",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE1",
    description:
      "London Bridge is a busy riverside area combining major tourist attractions with a growing residential population in converted warehouses and new apartment buildings.",
    landmarks: [
      "The Shard",
      "Borough Market",
      "Tate Modern",
      "London Bridge Station",
    ],
    propertyTypes: [
      "Warehouse conversions",
      "New-build apartments",
      "Riverside developments",
      "Modern flats",
    ],
    nearbyAreas: [
      "bermondsey",
      "elephant-and-castle",
      "bankside",
      "tower-bridge",
    ],
  },
  // Lambeth
  {
    slug: "streatham",
    name: "Streatham",
    borough: "Lambeth",
    boroughSlug: "lambeth",
    postcode: "SW16",
    description:
      "Streatham is a large South London suburb popular with families, offering good value Victorian terraces and Edwardian semis with easy access to Streatham Common.",
    landmarks: [
      "Streatham Common",
      "Streatham High Road",
      "Streatham Ice Rink",
      "Tooting Bec Lido",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Edwardian semis",
      "Period conversions",
      "New-build flats",
    ],
    nearbyAreas: ["brixton", "clapham", "tooting", "norbury"],
  },
  // Wandsworth
  {
    slug: "tooting",
    name: "Tooting",
    borough: "Wandsworth",
    boroughSlug: "wandsworth",
    postcode: "SW17",
    description:
      "Tooting is a vibrant, multicultural South London neighbourhood with a famous market, excellent restaurants, and affordable Victorian terraces popular with young professionals.",
    landmarks: [
      "Tooting Bec Lido",
      "Tooting Market",
      "Tooting Broadway tube",
      "Tooting Common",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Edwardian semis",
      "Period conversions",
      "Garden flats",
    ],
    nearbyAreas: ["balham", "streatham", "wimbledon", "colliers-wood"],
  },
  {
    slug: "balham",
    name: "Balham",
    borough: "Wandsworth",
    boroughSlug: "wandsworth",
    postcode: "SW12",
    description:
      "Balham has earned a reputation as one of South London's most desirable areas, with wide tree-lined streets, Victorian and Edwardian houses, and a lively high street.",
    landmarks: [
      "Balham tube",
      "Balham High Road",
      "Tooting Bec Common",
      "Nightingale Lane",
    ],
    propertyTypes: [
      "Victorian houses",
      "Edwardian semis",
      "Period conversions",
      "Garden flats",
    ],
    nearbyAreas: ["tooting", "clapham", "streatham", "wandsworth"],
  },

  // ── SOUTHWARK (expanded) ──────────────────────────────────────────
  {
    slug: "rotherhithe",
    name: "Rotherhithe",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE16",
    description:
      "Rotherhithe is a historic riverside peninsula with a strong maritime heritage, known for its converted warehouses, new-build waterfront apartments, and quiet residential streets around Russia Dock Woodland.",
    landmarks: [
      "Surrey Quays Shopping Centre",
      "Russia Dock Woodland",
      "Brunel Museum",
      "Surrey Quays Overground",
    ],
    propertyTypes: [
      "Warehouse conversions",
      "Waterfront apartments",
      "New-build developments",
      "Victorian terraces",
    ],
    nearbyAreas: ["bermondsey", "canary-wharf", "deptford", "london-bridge"],
  },
  {
    slug: "elephant-and-castle",
    name: "Elephant & Castle",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE1, SE17",
    description:
      "Elephant & Castle is undergoing one of London's largest regeneration projects, with new towers and public spaces replacing older estates, attracting young professionals priced out of central London.",
    landmarks: [
      "Elephant & Castle tube",
      "Strata Tower",
      "Elephant Park",
      "Ministry of Sound",
    ],
    propertyTypes: [
      "New-build towers",
      "Council conversions",
      "Modern flats",
      "Regeneration developments",
    ],
    nearbyAreas: ["bermondsey", "london-bridge", "camberwell", "kennington"],
  },
  {
    slug: "camberwell",
    name: "Camberwell",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE5",
    description:
      "Camberwell is an unpretentious South London neighbourhood with grand Victorian houses, independent cafés, and a strong arts community around the Camberwell College of Arts.",
    landmarks: [
      "Camberwell Green",
      "Camberwell College of Arts",
      "Denmark Hill station",
      "Burgess Park",
    ],
    propertyTypes: [
      "Victorian houses",
      "Period conversions",
      "Grand terraces",
      "Garden flats",
    ],
    nearbyAreas: ["peckham", "brixton", "elephant-and-castle", "new-cross"],
  },
  {
    slug: "dulwich",
    name: "Dulwich",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE21, SE22",
    description:
      "Dulwich is one of South London's most desirable family areas, with leafy streets, large Victorian and Edwardian houses, excellent schools, and the famous Dulwich Picture Gallery.",
    landmarks: [
      "Dulwich Picture Gallery",
      "Dulwich Park",
      "Dulwich Village",
      "East Dulwich Overground",
    ],
    propertyTypes: [
      "Large Victorian houses",
      "Edwardian family homes",
      "Detached houses",
      "Period conversions",
    ],
    nearbyAreas: ["peckham", "herne-hill", "forest-hill", "sydenham"],
  },
  {
    slug: "herne-hill",
    name: "Herne Hill",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE24",
    description:
      "Herne Hill sits between Brixton and Dulwich, with a village-like character, Victorian terraces, a popular Sunday market, and strong cycling culture around Brockwell Park.",
    landmarks: [
      "Brockwell Park",
      "Herne Hill Velodrome",
      "Herne Hill station",
      "Half Moon pub",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Edwardian semis",
      "Garden flats",
      "Period conversions",
    ],
    nearbyAreas: ["brixton", "dulwich", "camberwell", "streatham"],
  },
  {
    slug: "new-cross",
    name: "New Cross",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE14",
    description:
      "New Cross is a lively area popular with students and creatives, home to Goldsmiths University, affordable Victorian terraces, and a thriving arts and music scene.",
    landmarks: [
      "Goldsmiths University",
      "New Cross Gate Overground",
      "New Cross Inn",
      "Hatcham Liberal Club",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period conversions",
      "HMOs",
      "Affordable flats",
    ],
    nearbyAreas: ["peckham", "deptford", "lewisham", "camberwell"],
  },
  {
    slug: "deptford",
    name: "Deptford",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE8",
    description:
      "Deptford is an up-and-coming riverside area with a rich maritime history, thriving street market, warehouse conversions, and growing creative community spilling over from New Cross.",
    landmarks: [
      "Deptford Market Yard",
      "Deptford DLR",
      "Pepys Estate",
      "Laban Theatre",
    ],
    propertyTypes: [
      "Warehouse conversions",
      "Victorian terraces",
      "New-build flats",
      "Artist studios",
    ],
    nearbyAreas: ["greenwich", "new-cross", "rotherhithe", "lewisham"],
  },

  // ── GREENWICH (expanded) ──────────────────────────────────────────
  {
    slug: "blackheath",
    name: "Blackheath",
    borough: "Greenwich",
    boroughSlug: "greenwich",
    postcode: "SE3",
    description:
      "Blackheath is a well-heeled village overlooking a wide heath, with elegant Georgian and Victorian houses, a strong community feel, and excellent transport links into central London.",
    landmarks: [
      "Blackheath Common",
      "All Saints Church",
      "Blackheath station",
      "The Princess of Wales pub",
    ],
    propertyTypes: [
      "Georgian houses",
      "Victorian semis",
      "Detached houses",
      "Period conversions",
    ],
    nearbyAreas: ["greenwich", "lewisham", "eltham", "kidbrooke"],
  },
  {
    slug: "woolwich",
    name: "Woolwich",
    borough: "Greenwich",
    boroughSlug: "greenwich",
    postcode: "SE18",
    description:
      "Woolwich is a rapidly regenerating area on the south bank of the Thames, with the new Crossrail station driving investment in new residential developments alongside its historic arsenal.",
    landmarks: [
      "Woolwich Arsenal Crossrail",
      "Royal Arsenal",
      "Thames Path",
      "Woolwich Ferry",
    ],
    propertyTypes: [
      "New-build apartments",
      "Arsenal conversions",
      "Victorian terraces",
      "Modern developments",
    ],
    nearbyAreas: ["greenwich", "plumstead", "thamesmead", "abbey-wood"],
  },

  // ── TOWER HAMLETS (expanded) ──────────────────────────────────────
  {
    slug: "isle-of-dogs",
    name: "Isle of Dogs",
    borough: "Tower Hamlets",
    boroughSlug: "tower-hamlets",
    postcode: "E14",
    description:
      "The Isle of Dogs is a Thames peninsula dominated by Canary Wharf's towers, with a mix of high-rise residential blocks, riverside apartments, and older terraces in areas like Millwall and Cubitt Town.",
    landmarks: [
      "Canary Wharf",
      "Mudchute Farm",
      "Island Gardens DLR",
      "Millwall Dock",
    ],
    propertyTypes: [
      "High-rise apartments",
      "Riverside flats",
      "Modern developments",
      "Victorian terraces",
    ],
    nearbyAreas: ["canary-wharf", "limehouse", "greenwich", "rotherhithe"],
  },
  {
    slug: "limehouse",
    name: "Limehouse",
    borough: "Tower Hamlets",
    boroughSlug: "tower-hamlets",
    postcode: "E14",
    description:
      "Limehouse is a historic riverside neighbourhood with a mix of Victorian terraces, canal-side warehouses converted to apartments, and a quiet residential feel close to the City.",
    landmarks: [
      "Limehouse Basin",
      "Regent's Canal",
      "Limehouse DLR",
      "St Anne's Limehouse",
    ],
    propertyTypes: [
      "Canal-side conversions",
      "Victorian terraces",
      "Marina apartments",
      "Period houses",
    ],
    nearbyAreas: ["canary-wharf", "whitechapel", "isle-of-dogs", "stepney"],
  },
  {
    slug: "poplar",
    name: "Poplar",
    borough: "Tower Hamlets",
    boroughSlug: "tower-hamlets",
    postcode: "E14",
    description:
      "Poplar is a largely residential area adjacent to Canary Wharf with a mix of post-war housing estates, Victorian terraces, and new-build developments benefiting from the Canary Wharf overflow.",
    landmarks: [
      "All Saints DLR",
      "Chrisp Street Market",
      "Bartlett Park",
      "Poplar Baths",
    ],
    propertyTypes: [
      "Post-war estates",
      "Victorian terraces",
      "New-build flats",
      "Housing association homes",
    ],
    nearbyAreas: ["canary-wharf", "isle-of-dogs", "limehouse", "bow"],
  },

  // ── LEWISHAM ──────────────────────────────────────────────────────
  {
    slug: "lewisham",
    name: "Lewisham",
    borough: "Lewisham",
    boroughSlug: "lewisham",
    postcode: "SE13",
    description:
      "Lewisham is a busy South East London centre undergoing significant regeneration, with good transport links, affordable Victorian terraces, and a diverse community.",
    landmarks: [
      "Lewisham Shopping Centre",
      "Lewisham DLR",
      "Ladywell Fields",
      "Catford Bridge",
    ],
    propertyTypes: [
      "Victorian terraces",
      "New-build flats",
      "Period conversions",
      "Council homes",
    ],
    nearbyAreas: ["deptford", "new-cross", "blackheath", "forest-hill"],
  },
  {
    slug: "forest-hill",
    name: "Forest Hill",
    borough: "Lewisham",
    boroughSlug: "lewisham",
    postcode: "SE23",
    description:
      "Forest Hill is a hilly, leafy neighbourhood popular with families priced out of Dulwich, known for the Horniman Museum, Victorian houses, and easy Overground connections.",
    landmarks: [
      "Horniman Museum",
      "Forest Hill Overground",
      "Sydenham Hill Wood",
      "Honor Oak Park",
    ],
    propertyTypes: [
      "Victorian houses",
      "Edwardian semis",
      "Period conversions",
      "Garden flats",
    ],
    nearbyAreas: ["dulwich", "sydenham", "lewisham", "honor-oak"],
  },

  // ── LAMBETH (expanded) ────────────────────────────────────────────
  {
    slug: "vauxhall",
    name: "Vauxhall",
    borough: "Lambeth",
    boroughSlug: "lambeth",
    postcode: "SW8",
    description:
      "Vauxhall is a rapidly changing area on the south bank of the Thames, with a cluster of new residential towers around the tube station and established Victorian streets nearby.",
    landmarks: [
      "Vauxhall tube",
      "MI6 Building",
      "Vauxhall Pleasure Gardens",
      "Nine Elms Lane",
    ],
    propertyTypes: [
      "New-build towers",
      "Victorian terraces",
      "Modern flats",
      "Riverside developments",
    ],
    nearbyAreas: ["battersea", "brixton", "kennington", "stockwell"],
  },
  {
    slug: "stockwell",
    name: "Stockwell",
    borough: "Lambeth",
    boroughSlug: "lambeth",
    postcode: "SW9",
    description:
      "Stockwell is a lively, diverse neighbourhood between Brixton and Vauxhall, known for its large Portuguese community, Victorian mansion blocks, and good Victoria line connections.",
    landmarks: [
      "Stockwell tube",
      "Stockwell Park",
      "Larkhall Park",
      "Stockwell Road",
    ],
    propertyTypes: [
      "Victorian mansion blocks",
      "Period terraces",
      "Council conversions",
      "Garden flats",
    ],
    nearbyAreas: ["brixton", "vauxhall", "clapham", "kennington"],
  },

  // ── ISLINGTON (expanded) ──────────────────────────────────────────
  {
    slug: "canonbury",
    name: "Canonbury",
    borough: "Islington",
    boroughSlug: "islington",
    postcode: "N1",
    description:
      "Canonbury is one of Islington's most sought-after pockets, with handsome Georgian and Victorian squares, large houses, and a quiet, almost rural feel close to central London.",
    landmarks: [
      "Canonbury Square",
      "Canonbury Tower",
      "New River Walk",
      "Highbury & Islington station",
    ],
    propertyTypes: [
      "Georgian townhouses",
      "Victorian villas",
      "Large period houses",
      "Garden flats",
    ],
    nearbyAreas: ["islington", "highbury", "stoke-newington", "dalston"],
  },
  {
    slug: "finsbury-park",
    name: "Finsbury Park",
    borough: "Islington",
    boroughSlug: "islington",
    postcode: "N4",
    description:
      "Finsbury Park is a well-connected North London neighbourhood with a large park at its heart, Victorian terraces, and a diverse community popular with young renters and first-time buyers.",
    landmarks: [
      "Finsbury Park",
      "Finsbury Park tube",
      "Arsenal Stadium",
      "Manor House",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Edwardian semis",
      "Period conversions",
      "HMOs",
    ],
    nearbyAreas: ["highbury", "stoke-newington", "hornsey", "haringey"],
  },

  // ── HACKNEY (expanded) ────────────────────────────────────────────
  {
    slug: "hackney-central",
    name: "Hackney Central",
    borough: "Hackney",
    boroughSlug: "hackney",
    postcode: "E8, E9",
    description:
      "Hackney Central is the civic heart of the borough with a mix of Victorian terraces, post-war estates, and new-build developments, well served by the Overground and local markets.",
    landmarks: [
      "Hackney Central Overground",
      "Hackney Town Hall",
      "London Fields",
      "Broadway Market",
    ],
    propertyTypes: [
      "Victorian terraces",
      "New-build flats",
      "Post-war estates",
      "Period conversions",
    ],
    nearbyAreas: ["dalston", "shoreditch", "london-fields", "homerton"],
  },
  {
    slug: "london-fields",
    name: "London Fields",
    borough: "Hackney",
    boroughSlug: "hackney",
    postcode: "E8",
    description:
      "London Fields is one of East London's most fashionable neighbourhoods, centred on the park and lido, with Victorian terraces, independent coffee shops, and a young professional demographic.",
    landmarks: [
      "London Fields Park",
      "London Fields Lido",
      "Broadway Market",
      "Cat & Mutton Bridge",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period conversions",
      "Garden flats",
      "Warehouse-style flats",
    ],
    nearbyAreas: [
      "hackney-central",
      "bethnal-green",
      "dalston",
      "cambridge-heath",
    ],
  },

  // ── KENSINGTON (expanded) ─────────────────────────────────────────
  {
    slug: "earls-court",
    name: "Earl's Court",
    borough: "Kensington & Chelsea",
    boroughSlug: "kensington-and-chelsea",
    postcode: "SW5",
    description:
      "Earl's Court is a cosmopolitan area with grand Victorian mansion blocks, period conversions, and a historically transient but increasingly settled residential population.",
    landmarks: [
      "Earl's Court tube",
      "Warwick Road",
      "Brompton Cemetery",
      "Pemberton Gardens",
    ],
    propertyTypes: [
      "Victorian mansion blocks",
      "Period conversions",
      "Large flats",
      "Garden apartments",
    ],
    nearbyAreas: ["kensington", "fulham", "chelsea", "west-kensington"],
  },
  {
    slug: "knightsbridge",
    name: "Knightsbridge",
    borough: "Kensington & Chelsea",
    boroughSlug: "kensington-and-chelsea",
    postcode: "SW1X, SW7",
    description:
      "Knightsbridge is one of London's most exclusive addresses, home to Harrods, luxury embassies, and some of the city's most valuable residential properties.",
    landmarks: ["Harrods", "Hyde Park", "Harvey Nichols", "Knightsbridge tube"],
    propertyTypes: [
      "Luxury townhouses",
      "High-end apartments",
      "Embassy residences",
      "Mansion flats",
    ],
    nearbyAreas: ["belgravia", "kensington", "chelsea", "mayfair"],
  },

  // ── HAMMERSMITH & FULHAM (expanded) ───────────────────────────────
  {
    slug: "shepherds-bush",
    name: "Shepherd's Bush",
    borough: "Hammersmith & Fulham",
    boroughSlug: "hammersmith-and-fulham",
    postcode: "W12",
    description:
      "Shepherd's Bush is a bustling West London hub with the large Westfield shopping centre, Victorian terraces on the residential streets, and excellent tube connections.",
    landmarks: [
      "Westfield London",
      "Bush Theatre",
      "Shepherd's Bush Green",
      "Shepherd's Bush tube",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period conversions",
      "Modern apartments",
      "Garden flats",
    ],
    nearbyAreas: ["hammersmith", "notting-hill", "chiswick", "acton"],
  },
  {
    slug: "parsons-green",
    name: "Parsons Green",
    borough: "Hammersmith & Fulham",
    boroughSlug: "hammersmith-and-fulham",
    postcode: "SW6",
    description:
      "Parsons Green is a smart residential neighbourhood popular with young professionals and families, with a picturesque village green surrounded by Victorian terraces and period houses.",
    landmarks: [
      "Parsons Green tube",
      "Parsons Green Park",
      "The White Horse pub",
      "Eel Brook Common",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period houses",
      "Garden flats",
      "Mews houses",
    ],
    nearbyAreas: ["fulham", "chelsea", "putney", "hammersmith"],
  },

  // ── WANDSWORTH (expanded) ─────────────────────────────────────────
  {
    slug: "wandsworth-town",
    name: "Wandsworth Town",
    borough: "Wandsworth",
    boroughSlug: "wandsworth",
    postcode: "SW18",
    description:
      "Wandsworth Town is a prosperous riverside area with excellent schools, Victorian and Edwardian family houses, and a busy high street that's become increasingly popular with upsizing families.",
    landmarks: [
      "Wandsworth Town station",
      "Young's Brewery",
      "Wandsworth Common",
      "Ram Quarter",
    ],
    propertyTypes: [
      "Victorian family houses",
      "Edwardian semis",
      "New-build conversions",
      "Period flats",
    ],
    nearbyAreas: ["battersea", "putney", "tooting", "balham"],
  },

  // ── CAMDEN (expanded) ─────────────────────────────────────────────
  {
    slug: "kentish-town",
    name: "Kentish Town",
    borough: "Camden",
    boroughSlug: "camden",
    postcode: "NW5",
    description:
      "Kentish Town is a well-established North London neighbourhood with Victorian terraces, a lively high street, and a relaxed residential feel popular with families and professionals.",
    landmarks: [
      "Kentish Town tube",
      "Forum music venue",
      "Parliament Hill",
      "Highgate Road",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period conversions",
      "Garden flats",
      "Edwardian semis",
    ],
    nearbyAreas: ["camden-town", "hampstead", "tufnell-park", "archway"],
  },

  // ── BARNET ────────────────────────────────────────────────────────
  {
    slug: "finchley",
    name: "Finchley",
    borough: "Barnet",
    boroughSlug: "barnet",
    postcode: "N3, N12",
    description:
      "Finchley is a large North London suburb with a strong community feel, wide streets of Edwardian and interwar semis, and excellent schools making it popular with families.",
    landmarks: [
      "Finchley Central tube",
      "North Finchley High Road",
      "Victoria Park",
      "Artsdepot",
    ],
    propertyTypes: [
      "Edwardian semis",
      "Interwar houses",
      "Detached houses",
      "Period conversions",
    ],
    nearbyAreas: ["hampstead", "barnet", "whetstone", "east-finchley"],
  },
  {
    slug: "highgate",
    name: "Highgate",
    borough: "Camden",
    boroughSlug: "camden",
    postcode: "N6",
    description:
      "Highgate is a picturesque North London village perched on a hill, with Georgian and Victorian houses, the famous cemetery, and sweeping views across London from Parliament Hill.",
    landmarks: [
      "Highgate Cemetery",
      "Highgate Village",
      "Parliament Hill",
      "Highgate tube",
    ],
    propertyTypes: [
      "Georgian houses",
      "Victorian villas",
      "Large detached houses",
      "Period conversions",
    ],
    nearbyAreas: ["hampstead", "archway", "finchley", "muswell-hill"],
  },

  // ── EALING ────────────────────────────────────────────────────────
  {
    slug: "chiswick",
    name: "Chiswick",
    borough: "Hounslow",
    boroughSlug: "hounslow",
    postcode: "W4",
    description:
      "Chiswick is a prosperous West London suburb with a charming high road, Victorian and Edwardian terraces, excellent schools, and a riverside walk along the Thames.",
    landmarks: [
      "Chiswick House",
      "Strand on the Green",
      "Turnham Green tube",
      "Hogarth's House",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Edwardian semis",
      "Detached houses",
      "Period conversions",
    ],
    nearbyAreas: ["hammersmith", "shepherds-bush", "richmond", "kew"],
  },
  {
    slug: "acton",
    name: "Acton",
    borough: "Ealing",
    boroughSlug: "ealing",
    postcode: "W3",
    description:
      "Acton is a large West London suburb undergoing rapid change, with Crossrail transforming its appeal, affordable Victorian and Edwardian terraces, and a diverse population.",
    landmarks: [
      "Acton Central Overground",
      "Elizabeth line Acton Main Line",
      "Churchfield Road",
      "Acton Park",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Edwardian semis",
      "New-build flats",
      "Period conversions",
    ],
    nearbyAreas: ["shepherds-bush", "chiswick", "ealing", "hammersmith"],
  },

  // ── ROTHERHITHE & SURREY QUAYS HYPERLOCAL ────────────────────────

  {
    slug: "greenland-dock",
    name: "Greenland Dock",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE16",
    description:
      "Greenland Dock is a quiet pocket within Rotherhithe surrounding the largest surviving wet dock in the area, lined with marina apartments and converted warehouse lofts with direct water views.",
    landmarks: [
      "Greenland Dock Marina",
      "South Dock Marina",
      "Dock Offices",
      "Russia Dock Woodland",
    ],
    propertyTypes: [
      "Marina apartments",
      "Warehouse conversions",
      "Dock-facing flats",
      "Waterfront houses",
    ],
    nearbyAreas: ["surrey-quays", "rotherhithe", "canada-water", "deptford"],
  },

  {
    slug: "se1",
    name: "SE1 / Bankside",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE1",
    description:
      "Bankside is the cultural and riverside heart of Southwark, stretching from London Bridge to Blackfriars along the South Bank, with high-end warehouse conversions and modern residential towers.",
    landmarks: [
      "Tate Modern",
      "Shakespeare's Globe",
      "Southwark Cathedral",
      "Borough Market",
    ],
    propertyTypes: [
      "Warehouse conversions",
      "Riverside penthouses",
      "Modern towers",
      "Period loft apartments",
    ],
    nearbyAreas: [
      "london-bridge",
      "bermondsey",
      "elephant-and-castle",
      "waterloo",
    ],
  },

  {
    slug: "old-kent-road",
    name: "Old Kent Road",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE1, SE15",
    description:
      "The Old Kent Road corridor is one of London's largest regeneration zones, with planning permission for thousands of new homes and a proposed Bakerloo line extension that is driving new residential investment.",
    landmarks: [
      "Old Kent Road",
      "Burgess Park",
      "Cantium Retail Park",
      "Bakerloo line proposed stations",
    ],
    propertyTypes: [
      "New-build developments",
      "Regeneration flats",
      "Victorian terraces",
      "Council homes",
    ],
    nearbyAreas: [
      "bermondsey-spa",
      "elephant-and-castle",
      "peckham",
      "camberwell",
    ],
  },
  {
    slug: "borough",
    name: "Borough",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE1",
    description:
      "Borough is one of London's oldest and most central neighbourhoods, immediately south of London Bridge with iconic market, Victorian railway arches, and increasingly premium residential conversions.",
    landmarks: [
      "Borough Market",
      "Borough tube",
      "The Shard",
      "Southwark Cathedral",
    ],
    propertyTypes: [
      "Railway arch conversions",
      "Victorian warehouse flats",
      "Modern apartments",
      "Period buildings",
    ],
    nearbyAreas: ["london-bridge", "bermondsey", "elephant-and-castle", "se1"],
  },

  // ── ROTHERHITHE & SURREY QUAYS SURROUNDINGS ───────────────────────
  {
    slug: "surrey-quays",
    name: "Surrey Quays",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE16",
    description:
      "Surrey Quays is a waterside residential area built around the former Surrey Commercial Docks, now home to a large shopping centre, modern apartment developments, and the Overground station connecting to the city.",
    landmarks: [
      "Surrey Quays Shopping Centre",
      "Surrey Quays Overground",
      "Decathlon",
      "Russia Dock Woodland",
    ],
    propertyTypes: [
      "Dock conversions",
      "New-build apartments",
      "Waterside developments",
      "Modern flats",
    ],
    nearbyAreas: ["rotherhithe", "bermondsey", "canary-wharf", "deptford"],
  },
  {
    slug: "canada-water",
    name: "Canada Water",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE16",
    description:
      "Canada Water is a fast-transforming area around the Jubilee line station, with one of London's largest regeneration projects underway, bringing thousands of new homes, shops, and a new town centre to the former docklands.",
    landmarks: [
      "Canada Water tube",
      "Canada Water Library",
      "Printworks",
      "Canada Water Masterplan site",
    ],
    propertyTypes: [
      "New-build apartments",
      "Regeneration developments",
      "Modern flats",
      "Waterside homes",
    ],
    nearbyAreas: ["surrey-quays", "rotherhithe", "bermondsey", "canary-wharf"],
  },
  {
    slug: "bermondsey-spa",
    name: "Bermondsey Spa",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE1, SE16",
    description:
      "Bermondsey Spa is the residential neighbourhood between Bermondsey Street and the Old Kent Road, with new-build estates, Victorian terraces, and regeneration projects transforming former industrial land.",
    landmarks: [
      "Spa Road",
      "Bermondsey Spa Gardens",
      "Old Kent Road",
      "South Bermondsey Overground",
    ],
    propertyTypes: [
      "New-build estates",
      "Victorian terraces",
      "Council conversions",
      "Modern flats",
    ],
    nearbyAreas: [
      "bermondsey",
      "peckham",
      "elephant-and-castle",
      "rotherhithe",
    ],
  },
  {
    slug: "south-bermondsey",
    name: "South Bermondsey",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE16",
    description:
      "South Bermondsey is a largely residential area between the Old Kent Road and the rail lines, with established Victorian terraces, newer housing estates, and Millwall FC's Den stadium.",
    landmarks: [
      "The Den (Millwall FC)",
      "South Bermondsey station",
      "Ilderton Road",
      "Millwall Park",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Council estates",
      "Housing association homes",
      "New-build flats",
    ],
    nearbyAreas: ["rotherhithe", "bermondsey", "new-cross", "deptford"],
  },
  {
    slug: "peckham-rye",
    name: "Peckham Rye",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE15, SE22",
    description:
      "Peckham Rye straddles the boundary between Peckham and East Dulwich, centred on the large Peckham Rye Park and Common, with Victorian terraces and period flats popular with young families.",
    landmarks: [
      "Peckham Rye Park",
      "Peckham Rye station",
      "Bellenden Road",
      "East Dulwich Overground",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period conversions",
      "Garden flats",
      "Edwardian houses",
    ],
    nearbyAreas: ["peckham", "dulwich", "herne-hill", "east-dulwich"],
  },
  {
    slug: "east-dulwich",
    name: "East Dulwich",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE22",
    description:
      "East Dulwich is a popular residential neighbourhood known for its village-like Lordship Lane with independent shops and cafés, wide streets of Victorian terraces, and a strong family community.",
    landmarks: [
      "Lordship Lane",
      "East Dulwich Overground",
      "Goose Green",
      "North Cross Road Market",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Edwardian semis",
      "Period conversions",
      "Garden flats",
    ],
    nearbyAreas: ["dulwich", "peckham-rye", "herne-hill", "forest-hill"],
  },
  {
    slug: "nunhead",
    name: "Nunhead",
    borough: "Southwark",
    boroughSlug: "southwark",
    postcode: "SE15",
    description:
      "Nunhead is a quiet, up-and-coming neighbourhood between Peckham and Brockley, with affordable Victorian terraces, the famous cemetery, and a growing reputation as an alternative to pricier neighbours.",
    landmarks: [
      "Nunhead Cemetery",
      "Nunhead Overground",
      "Linden Grove",
      "One Tree Hill",
    ],
    propertyTypes: [
      "Victorian terraces",
      "Period semis",
      "Garden flats",
      "Affordable conversions",
    ],
    nearbyAreas: ["peckham", "new-cross", "brockley", "honor-oak"],
  },
  {
    slug: "brockley",
    name: "Brockley",
    borough: "Lewisham",
    boroughSlug: "lewisham",
    postcode: "SE4",
    description:
      "Brockley is a characterful neighbourhood popular with artists and young professionals, with some of South London's finest Victorian and Edwardian architecture, good Overground links, and a strong community spirit.",
    landmarks: [
      "Brockley Overground",
      "Hilly Fields",
      "Brockley Market",
      "Brockley Jack Theatre",
    ],
    propertyTypes: [
      "Victorian houses",
      "Edwardian terraces",
      "Period conversions",
      "Garden flats",
    ],
    nearbyAreas: ["nunhead", "new-cross", "lewisham", "honor-oak"],
  },
  {
    slug: "honor-oak",
    name: "Honor Oak",
    borough: "Lewisham",
    boroughSlug: "lewisham",
    postcode: "SE23",
    description:
      "Honor Oak Park is a leafy, sought-after neighbourhood between Forest Hill and Brockley, with Victorian and Edwardian houses, a popular Overground station, and a relaxed village atmosphere.",
    landmarks: [
      "Honor Oak Park Overground",
      "One Tree Hill",
      "Brenchley Gardens",
      "Honor Oak Park",
    ],
    propertyTypes: [
      "Victorian houses",
      "Edwardian semis",
      "Period conversions",
      "Garden flats",
    ],
    nearbyAreas: ["brockley", "forest-hill", "nunhead", "sydenham"],
  },
  {
    slug: "sydenham",
    name: "Sydenham",
    borough: "Lewisham",
    boroughSlug: "lewisham",
    postcode: "SE26",
    description:
      "Sydenham is a well-connected South East London suburb with large Victorian and Edwardian houses, green spaces including Sydenham Hill Wood, and an Overground station serving London Bridge and Crystal Palace.",
    landmarks: [
      "Sydenham Overground",
      "Sydenham Hill Wood",
      "Wells Park",
      "Crystal Palace Park",
    ],
    propertyTypes: [
      "Victorian houses",
      "Edwardian semis",
      "Period conversions",
      "Detached houses",
    ],
    nearbyAreas: ["forest-hill", "honor-oak", "crystal-palace", "penge"],
  },
];

export const HYPERLOCAL_BY_SLUG = Object.fromEntries(
  HYPERLOCAL_AREAS.map((a) => [a.slug, a]),
) as Record<string, HyperlocalArea>;
