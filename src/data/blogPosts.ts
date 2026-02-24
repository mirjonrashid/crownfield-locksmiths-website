export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const blogPosts: BlogPost[] = [
  // ── 1. Lock types first ──────────────────────────────────────────────────
  {
    id: "lock-types-explained-uk",
    title: "Lock Types Explained: Mortice, Yale, Euro Cylinder & Multi-Point",
    excerpt:
      "Most homeowners don't know what lock they have — only that it locks. Here's a clear UK guide to every common lock type, where each is used, and which actually protects you.",
    image: "/blog/locktypes.png",
    category: "Security Guide",
    date: "Feb 12, 2026",
    readTime: "7 min read",
    author: "Crownfield Locksmiths",
    content: `
# Lock Types Explained (UK Guide)

Most homeowners don't actually know what type of lock they have.

They just know: "It locks."

But different locks serve different purposes — and not all offer the same level of protection.

Here's a simple breakdown of the most common lock types in the UK.

---

## 1) Mortice Lock (Common on Wooden Doors)

A mortice lock is fitted **inside the door**.

You normally see it on traditional wooden front doors.

There are two main types:

### 5-Lever Mortice Deadlock (BS 3621)
- Insurance compliant
- Key operated from both sides
- Strong bolt that goes deep into frame
- Very secure when fitted correctly

If your insurer requires BS 3621, this is usually what they mean.

---

## 2) Yale Lock (Nightlatch)

Often called a "Yale lock" (brand name).

You see these on wooden front doors, usually above a mortice lock.

Features:
- Automatically locks when door closes
- Opened from inside with a handle
- Key entry from outside

On its own, it's not enough for insurance in most cases. Best used **with** a mortice deadlock.

---

## 3) Euro Cylinder Lock (UPVC & Composite Doors)

If you have a UPVC or composite door, you likely have a euro cylinder.

Security level depends entirely on the cylinder quality.

Basic cylinder — no anti-snap protection, easier to attack.

Upgraded cylinder:
- Anti-snap
- Anti-drill
- Anti-pick
- Often TS007 3-star rated

This is one of the most common upgrades we recommend.

---

## 4) Multi-Point Locking System

This is not a cylinder — it's the mechanism inside UPVC/composite doors.

When you lift the handle, hooks, rollers and deadbolts all engage into the frame.

If your handle feels loose or stiff, the mechanism may need adjustment.

---

## 5) Thumbturn Cylinder

Common in flats and apartments. Allows key entry from outside, thumb turn from inside. Often required for fire safety. Make sure it's anti-snap if on a UPVC door.

---

## Which Lock Is "Best"?

It depends on your door material, property type, insurance requirements, and frame condition.

Quick reference:

- Wooden front door → 5-lever BS 3621 mortice  
- UPVC door → Anti-snap TS007 3-star cylinder  
- Flat → Thumbturn cylinder + compliant main lock  

---

## The Biggest Security Mistake

People upgrade the lock but ignore door alignment, a weak frame, worn hinges, and a cylinder that sticks out too far. Security is about the whole system.

**Not sure what you have? Call: +447346010278**
    `,
    seo: {
      metaTitle: "UK Lock Types Explained | Mortice, Yale, Euro Cylinder Guide",
      metaDescription:
        "Confused by mortice, Yale, euro cylinder and multi-point locks? Simple UK guide explaining each lock type and which is best for your door.",
      keywords: [
        "lock types UK",
        "mortice lock explained",
        "Yale lock vs mortice",
        "euro cylinder guide",
        "multi point lock explained",
        "London locksmith advice",
      ],
    },
  },

  // ── 2. Best front door lock ──────────────────────────────────────────────
  {
    id: "best-front-door-lock-2026",
    title: "Which Lock Is Actually Right for Your Front Door in 2026?",
    excerpt:
      "Mortice, cylinder, multi-point or smart lock? A practical guide to choosing the right lock based on your door type, property, and insurance requirements.",
    image: "/blog/best-front-door-lock-2026.png",
    category: "Security Guide",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    author: "Crownfield Locksmiths",
    content: `
# Which Lock Is Actually Right for Your Front Door in 2026?

Most people only think about locks after something goes wrong.

This guide helps you pick the right lock before you get stuck outside or fail an insurance claim.

---

## 1) Wooden Doors (Traditional Front Doors)

**BS 3621 5-Lever Mortice Deadlock**

Why it's recommended:
- Often required by insurers
- Strong bolt throw into the frame
- Reliable and proven on UK doors

Look for the "BS 3621" marking or kite mark on the faceplate.

---

## 2) UPVC / Composite Doors (Euro Cylinder + Multi-Point)

Your door likely has a lift handle that engages multi-point, plus a key turn that locks it in place.

**Recommended upgrade: TS007 3-star anti-snap cylinder**

Why:
- Anti-snap protection (one of the most common attack methods)
- Anti-drill + anti-pick improvements
- Inexpensive upgrade for a significant security gain

Important: if the cylinder projects too far from the door face, it's easier to attack. Aim for flush or minimal projection.

---

## 3) Flats & Apartments

Common requirements:
- Thumbturn on the inside (for fire escape)
- Certain lock types required by building management

Recommended approach: anti-snap cylinder, door viewer, and good door alignment so the multi-point engages cleanly.

---

## 4) Smart Locks

Smart locks offer convenience, not superior security.

Pros: no physical key, temporary access codes, remote control.  
Cons: battery reliance, some aren't insurance-friendly, installation quality matters significantly.

Use smart locks for convenience, but maintain a strong mechanical lock as the primary solution.

---

## The Most Important Factor: Fit

A premium lock fitted badly is weaker than an average lock fitted properly.

A proper security check covers door alignment, strike plates, frame strength, hinge play, and cylinder projection.

**Need help choosing? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Best Front Door Locks in London (2026 Guide)",
      metaDescription:
        "Mortice vs euro cylinder vs multi-point vs smart locks — a practical guide to choosing the right front door lock in 2026.",
      keywords: [
        "best front door lock UK",
        "BS 3621 lock",
        "anti snap cylinder",
        "TS007 3 star",
        "London door security",
      ],
    },
  },

  // ── 3. Insurance requirements ────────────────────────────────────────────
  {
    id: "insurance-lock-requirements",
    title: "The Lock Requirements Your Home Insurance Actually Expects",
    excerpt:
      "Most home insurance policies require specific locks. If yours don't comply, a claim can be refused — even after a break-in. Here's exactly what you need to know.",
    image: "/blog/insurance-requirements.png",
    category: "Insurance",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    author: "Crownfield Locksmiths",
    content: `
# Your Home Insurance Won't Pay Without These Locks

A customer had £8,000 of belongings stolen. Insurance refused to pay because their lock didn't meet policy requirements. The lock was a perfectly functional 3-lever mortice — not enough. Policy required 5-lever BS 3621.

## What Insurance Companies Actually Require

Most policies have a "Security Requirements" section in the small print.

### Front Door
- **BS 3621 5-lever mortice deadlock** (common for wooden doors), or
- **High-security euro cylinder** (for UPVC/composite doors)

### Windows
"Window locks" in policy language usually means **key-operated**, not twist latches.

### UPVC / Composite Doors
Look for TS007 star rating (ideally 3-star) or equivalent.

## How to Check Your Current Locks

**Mortice lock (wooden door):** look at the faceplate on the door edge. You want a BS 3621 marking or kite mark.

**Euro cylinder (UPVC door):** check the cylinder body for a TS007 star rating.

## Why This Matters at Claim Time

Assessors can check and photograph your locks during a claim investigation. If you don't meet policy requirements, claims can be reduced or refused entirely.

## Bottom Line

Insurance-compliant locks are not just a formality — they're the condition under which your policy pays out.

**Need compliant locks fitted? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Home Insurance Lock Requirements | BS 3621 Explained",
      metaDescription:
        "Home insurance can refuse claims if locks don't meet requirements. Learn what BS 3621 is and what your insurer actually expects.",
      keywords: [
        "BS 3621 lock",
        "insurance lock requirements",
        "5 lever mortice lock",
        "home insurance security",
        "TS007 cylinder",
      ],
    },
  },

  // ── 4. UPVC winter ───────────────────────────────────────────────────────
  {
    id: "why-upvc-locks-fail-winter",
    title: "Why Your UPVC Lock Stops Working in Winter",
    excerpt:
      "Cold weather causes specific mechanical failures in UPVC doors. Here's what actually happens, which quick fixes work, and when it's time to call someone.",
    image: "/blog/upvc-winter.png",
    category: "Maintenance",
    date: "Feb 5, 2026",
    readTime: "4 min read",
    author: "Crownfield Locksmiths",
    content: `
# Why Your UPVC Lock Stops Working in Winter

Every January we get dozens of calls: "My door was fine yesterday, now the key won't turn." It's not your imagination — cold weather puts real stress on UPVC locks.

## The Root Cause: Thermal Contraction

When temperature drops below 5°C, three things happen:

1. The PVC frame contracts by 2–3mm on a standard door
2. Metal mechanisms shrink at different rates
3. Any existing misalignment gets significantly worse

Parts that worked at 15°C can jam solid at 2°C.

## "Key Won't Turn"

Your euro cylinder has 5–6 pins that need to align precisely. Cold metal contracts, making tight cylinders impossible to turn.

**Quick fix:** warm the key with a lighter for 5 seconds, insert gently, turn carefully. Works in about 80% of cases.

**Don't force it** — you'll snap the key inside the cylinder.

If warming the key stops working, the cylinder is worn and needs replacing.

## "Handle Lifts But Won't Lock"

The door has contracted away from the frame. The multi-point hooks now miss their keeps by 1–2mm.

**Immediate fix:** push the door firmly into the frame while lifting the handle. It should click into position.

**Permanent fix:** hinge adjustment. A locksmith can do this in around 15 minutes.

## Prevention

Lubrication works only if done correctly:
- Use graphite powder, not WD-40
- Apply in October or November, before cold weather arrives
- Cover the cylinder and all moving parts
- Repeat every 6 months

## When to Call Someone

- Key has snapped in the lock
- Handle has completely detached
- Door won't close at all
- You've forced it and made things worse

**Need urgent help? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Why UPVC Locks Fail in Winter | Cold Weather Lock Problems",
      metaDescription:
        "Your UPVC lock stops working in cold weather? Here's exactly why it happens, which fixes work, and when to call a locksmith.",
      keywords: [
        "UPVC lock winter",
        "cold weather lock problems",
        "key won't turn",
        "UPVC door won't lock winter",
        "frozen lock fix",
      ],
    },
  },

  // ── 5. Small security upgrades ───────────────────────────────────────────
  {
    id: "small-security-upgrades",
    title: "5 Security Upgrades That Make Your Home a Less Attractive Target",
    excerpt:
      "Most break-ins are opportunistic decisions made in seconds. These upgrades change that calculation without turning your home into a fortress.",
    image: "/blog/small-security-upgrades.png",
    category: "Home Security",
    date: "Feb 8, 2026",
    readTime: "4 min read",
    author: "Crownfield Locksmiths",
    content: `
# 5 Security Upgrades That Make Your Home a Less Attractive Target

Most break-ins are quick decisions. If your home looks harder than the next one, opportunistic intruders move on.

---

## 1) Anti-Snap Cylinder (UPVC & Composite Doors)

Snapping is one of the most common attack methods on UPVC doors. An anti-snap cylinder breaks at a sacrificial point before the mechanism is exposed. Inexpensive and one of the most effective single upgrades available.

---

## 2) Door Frame Reinforcement (Wooden Doors)

If the frame splits, the lock is irrelevant. A reinforcement plate with properly positioned keep hardware can prevent forced entry even on older wooden frames.

---

## 3) Key Locks on Ground Floor Windows

Twist latches are not secure. Ground floor windows and any easily accessible windows should have key-operated locks. This is also commonly required by home insurance policies.

---

## 4) Motion-Activated Lighting

Simple, inexpensive, and effective. Sudden illumination removes the cover of darkness that opportunistic entry depends on. Fit at the front door, side access points, and any rear garden doors.

---

## 5) Visible Security Indicators

A visible alarm box, camera, or security signage signals that your property is monitored. Opportunistic targets are chosen because they appear easy — visible deterrents change that assessment.

---

## The Underlying Logic

Security isn't about making your home impenetrable. It's about making it not worth the effort compared to the next property.

**Want a quick security assessment? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Simple Home Security Upgrades That Reduce Break-In Risk",
      metaDescription:
        "Five low-cost upgrades that meaningfully reduce burglary risk in London homes and flats.",
      keywords: [
        "home security tips",
        "anti snap cylinder",
        "door reinforcement",
        "window locks",
        "motion sensor lights",
      ],
    },
  },
  // NEW BLOG POSTS — append these to the blogPosts array in src/data/blogPosts.ts
  // Add these entries inside the blogPosts array, after the last existing post
  // ── 6. Locked out guide (neutral + practical) ─────────────────────────────
  {
    id: "locked-out-london-what-to-do",
    title: "Locked Out in London? A Calm Step-by-Step Plan",
    excerpt:
      "Locked out happens fast. This guide shows what to check first, what to avoid, and how to get back in safely with minimal damage and cost surprises.",
    image: "/blog/locked-out-london.png",
    category: "Security Guide",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    author: "Crownfield Locksmiths",
    content: `
# Locked Out in London? A Calm Step-by-Step Plan

Being locked out is stressful — especially in the evening, with kids, or in bad weather. The goal is simple: **get back in safely without making the situation more expensive.**

---

## Step 1) Pause for 30 seconds (seriously)

Most lockout damage happens in the first minute — when people rush, force the handle, or try random “hacks”.

If you keep the door and lock intact, solutions stay cheaper.

---

## Step 2) Check the obvious entry points

Take 2–3 minutes and check calmly:

- Back door / side door  
- Any accessible windows (only if safe and legal for your property)  
- Do you have a spare key with a neighbour/friend?  
- If you rent: landlord / letting agent emergency contact

This often solves it without tools.

---

## Step 3) Don’t force the lock or the door

Avoid:
- kicking the door
- forcing the handle up repeatedly
- “credit card” tricks (often damage seals and frames)
- putting anything inside the keyway (snaps keys and jams cylinders)

If your door is UPVC/composite with multi-point locking, forcing can break the mechanism and turn a simple lockout into a repair.

---

## Step 4) If you’re calling a locksmith, ask these 3 questions first

Before anyone travels, ask:

1. **What is the total price range for this type of job?** (callout + labour, and parts if needed)  
2. **Will you try non-destructive entry first?** (where appropriate)  
3. **Do you provide a receipt/invoice?**

A professional locksmith won’t be offended by these questions.

---

## Step 5) While you wait

- Stay somewhere safe (neighbour, lobby, café)  
- If you have home insurance, check whether you have emergency cover  
- If it’s late, let someone know where you are

---

## Step 6) After you’re back in

Do a quick prevention checklist:

- Cut a spare key and store it with someone you trust  
- If your cylinder is stiff, consider servicing or replacing it  
- If the door needs “lifting” to lock, the alignment likely needs adjustment (common on UPVC)

**Need urgent help? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Locked Out in London? What to Do (Step-by-Step Guide)",
      metaDescription:
        "Locked out of your London home? A calm step-by-step plan: what to check first, what to avoid, and how to get back in with minimal damage.",
      keywords: [
        "locked out London",
        "lockout advice",
        "emergency locksmith London",
        "UPVC door locked out",
        "what to do locked out",
      ],
    },
  },

  // ── 7. Choosing a locksmith (no “scammer” language, legally safer) ───────
  {
    id: "how-to-choose-a-locksmith-london",
    title: "How to Choose a Locksmith in London (Without Stress)",
    excerpt:
      "When you're locked out, you have to decide fast. Use this checklist to choose a reputable locksmith and avoid cost surprises.",
    image: "/blog/choose-locksmith.png",
    category: "Security Guide",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    author: "Crownfield Locksmiths",
    content: `
# How to Choose a Locksmith in London (Without Stress)

In a lockout, speed matters — but **clarity matters more**. A quick decision with no checks often leads to unexpected costs or unnecessary work.

Here’s a simple checklist to help you choose a reputable locksmith.

---

## 1) Look for a real business identity

Prefer locksmiths who clearly show:
- Business name (consistent across website + Google listing)
- A service area (London, specific areas)
- Contact details that match the business name
- Clear terms about pricing or how pricing is calculated

---

## 2) Ask for an upfront price range

Lockouts vary by door and lock type, so exact pricing isn’t always possible before inspection — but a reputable locksmith should still give:

- an expected **range**
- what factors increase cost (e.g., replacement parts, damaged locks, high-security cylinders)
- whether the quote includes callout + labour

---

## 3) Ask what method they’ll attempt first

A professional approach is usually:
- assessment
- non-destructive entry where appropriate
- replacement only when necessary

(There are cases where replacement is the correct option — the point is that it should be **explained**, not rushed.)

---

## 4) Prefer card payments + receipts

A receipt/invoice is normal business practice and protects both sides.

---

## 5) Do a quick review check the smart way

- Check Google reviews for **detail** (not only “great service”)
- Look for consistency over time (not just a burst of new reviews)
- Check if the business has photos, service listings, and a clear profile

---

## The bottom line

In London, you can usually find a reputable locksmith quickly — even out of hours — if you use a simple checklist before confirming.

**Need help now? Call: +447346010278**
    `,
    seo: {
      metaTitle: "How to Choose a Locksmith in London | Simple Checklist",
      metaDescription:
        "A simple checklist to choose a reputable locksmith in London during a lockout — pricing clarity, entry methods, receipts, and fast checks.",
      keywords: [
        "choose a locksmith London",
        "reputable locksmith London",
        "locksmith checklist",
        "lockout locksmith London",
        "avoid cost surprises locksmith",
      ],
    },
  },

  // ── 8. Snapped key (no fixed success rates, safer language) ──────────────
  {
    id: "key-snapped-in-lock",
    title: "Key Snapped in the Lock? What to Do Next",
    excerpt:
      "A snapped key can sometimes be removed without drilling or replacing the lock. Here are safe steps to try, and clear signs it’s time to call a professional.",
    image: "/blog/snapped-key.png",
    category: "Maintenance",
    date: "Feb 22, 2026",
    readTime: "5 min read",
    author: "Crownfield Locksmiths",
    content: `
# Key Snapped in the Lock? What to Do Next

A snapped key is common with worn keys and stiff cylinders — especially in cold weather. The goal is to remove the broken piece **without pushing it deeper** or damaging the lock.

---

## Step 1) Check how the key snapped

- If the key broke while turning, the lock may be under tension.
- If it broke while inserting/removing, it’s usually easier to extract.

If the lock is mid-turn, avoid forcing it further.

---

## Step 2) If the key is sticking out at all

Try **needle-nose pliers**:
- grip firmly
- pull straight out (don’t twist)

If you can see 2–3mm, extraction is often straightforward.

---

## Step 3) If it’s flush inside the keyway

Safer options:
- a **broken key extractor tool** (inexpensive, designed for this)
- a thin **hooked pick** (carefully)

Avoid thick objects that will push the fragment deeper.

---

## Step 4) What not to do

Avoid:
- screwdrivers, knives, or anything bulky  
- pouring oil inside the cylinder (can attract dirt and worsen sticking)  
- drilling (last resort, and usually avoidable with proper tools)

---

## When you should call a locksmith

- the fragment is fully recessed and won’t hook
- the lock is stiff and the key keeps binding
- the door is your only entry and you can’t risk damage
- your cylinder is old and you want a clean replacement

Sometimes the most cost-effective solution is simply replacing the cylinder with a new set of keys.

**Need help? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Key Snapped in Lock? Safe Steps & When to Call a Locksmith",
      metaDescription:
        "Key snapped in your lock? Safe, practical steps to remove it without damage, plus clear signs it’s time for a locksmith or cylinder replacement.",
      keywords: [
        "key snapped in lock",
        "broken key extraction",
        "key stuck in lock",
        "remove broken key",
        "lock cylinder replacement",
      ],
    },
  },

  // ── 9. Burglary deterrence (keep, but tighten claims) ────────────────────
  {
    id: "how-burglars-choose-targets-london",
    title: "What Makes a Home Look Like an Easy Target (And How to Fix It)",
    excerpt:
      "Most break-ins are opportunistic. This guide explains what makes a property look easy — and the practical changes that make intruders move on.",
    image: "/blog/burglary-deterrents.png",
    category: "Home Security",
    date: "Feb 16, 2026",
    readTime: "6 min read",
    author: "Crownfield Locksmiths",
    content: `
# What Makes a Home Look Like an Easy Target (And How to Fix It)

Many residential break-ins are opportunistic. Intruders often choose properties that look quick, quiet, and low-risk.

The good news: small changes can shift that “risk calculation”.

---

## What can make a home look easier

### 1) Weak or outdated cylinders on UPVC/composite doors
If a euro cylinder is low-grade or sticks out significantly, it can be more vulnerable to attack.

**Fix:** upgrade to a high-security, anti-snap cylinder and ensure it sits close to flush.

### 2) Poor lighting and concealment
Dark front paths, hidden side access, or tall hedges near entry points can reduce visibility.

**Fix:** motion lighting + tidy sightlines around doors and windows.

### 3) Windows that are easy to open
Ground floor windows with simple latches may be easier to force.

**Fix:** key-operated window locks where appropriate, and ensure frames are in good condition.

### 4) Signs the home is unoccupied
Uncollected post, no evening lights, or obvious patterns can signal absence.

**Fix:** timer lights, neighbour collecting post, and basic routines when away.

---

## The simple principle

You don’t need a “fortress”. You need:
- stronger entry resistance
- better visibility
- fewer signals of absence

**Want a quick security assessment? Call: +447346010278**
    `,
    seo: {
      metaTitle: "How to Make Your Home Less of an Easy Target | London Guide",
      metaDescription:
        "A practical London home security guide: what makes a property look easy to target and the real-world upgrades that reduce risk.",
      keywords: [
        "home security London",
        "burglary deterrents",
        "anti snap cylinder",
        "window locks",
        "motion sensor lights",
      ],
    },
  },

  // ── 10. Move-in locks (neutral: no legal claims, practical) ──────────────
  {
    id: "moving-into-new-home-lock-security",
    title: "Moving Into a New Home? Do This on Day One",
    excerpt:
      "When you move in, you can’t know who still has copies of old keys. Here’s a practical checklist for day one security — especially in London rentals and purchases.",
    image: "/blog/moving-home-lock-change.png",
    category: "Home Security",
    date: "Feb 14, 2026",
    readTime: "4 min read",
    author: "Crownfield Locksmiths",
    content: `
# Moving Into a New Home? Do This on Day One

The most practical first security step when moving into a property is simple:

**make sure you control access.**

That usually means changing or rekeying locks — especially on the main entrance.

---

## Why it matters

You can’t easily know:
- how many key copies exist
- who received keys over time (family, contractors, cleaners, previous tenants)
- whether keys were copied without record

This is about control and certainty.

---

## What to check on move-in day

### 1) Identify the lock type
- Wooden door: usually mortice lock + nightlatch
- UPVC/composite: euro cylinder + multi-point mechanism

### 2) Decide your approach
- **Cylinder replacement** (common on UPVC/composite): fast, often the simplest option
- **Rekey / lock replacement** (depends on lock type): your locksmith can advise based on the hardware

### 3) Check the door alignment
If you need to lift/push to lock, the multi-point may not be engaging cleanly. Fixing alignment reduces both lockouts and wear.

---

## Good upgrades to do at the same time

- upgrade to an anti-snap cylinder on UPVC/composite doors
- ensure strike plates/keeps are solid
- confirm window locks on accessible windows

**Moving in soon? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Moving Into a New Home? Day One Security Checklist (London)",
      metaDescription:
        "A practical day-one checklist for new homeowners and renters: lock types, cylinder replacement, alignment checks, and simple upgrades.",
      keywords: [
        "change locks moving house",
        "new home security",
        "lock change London",
        "cylinder replacement",
        "UPVC lock change",
      ],
    },
  },

  // ── 11. Composite vs UPVC (keep, but make images local + tighter) ─────────
  {
    id: "composite-vs-upvc-doors-security",
    title: "Composite vs UPVC Doors: What Actually Matters for Security",
    excerpt:
      "Choosing a front door? Material matters, but not as much as the lock spec, fitting, and frame quality. Here’s a straight comparison for UK homes.",
    image: "/blog/composite-vs-upvc.png",
    category: "Security Guide",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    author: "Crownfield Locksmiths",
    content: `
# Composite vs UPVC Doors: What Actually Matters for Security

Door material is important — but most real-world security outcomes come down to:
- the lock cylinder quality
- correct installation
- frame strength
- door alignment (especially multi-point systems)

---

## Composite doors (general strengths)
- usually heavier and more rigid
- better resistance to general impact
- often more stable over time

## UPVC doors (general strengths)
- widely used and cost-effective
- strong when the multi-point locks engage correctly
- easy to upgrade via cylinder replacement

---

## The key point: the cylinder matters most

For UPVC/composite doors, the euro cylinder is a common upgrade point.

A higher-security cylinder (anti-snap, anti-drill, anti-pick) combined with good fitting is often a bigger gain than changing door material alone.

---

## What to look for when buying
- strong frame + solid keeps/strike plates
- correct alignment so the mechanism engages cleanly
- reputable installation
- cylinder that sits close to flush (minimal projection)

**Questions about your current door setup? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Composite vs UPVC Door Security | What Matters Most (UK)",
      metaDescription:
        "Composite vs UPVC doors: the honest security comparison. Learn what matters most—lock cylinder grade, fitting quality, frame strength, and alignment.",
      keywords: [
        "composite vs UPVC security",
        "front door security UK",
        "anti snap cylinder",
        "UPVC door security",
        "composite door security",
      ],
    },
  },

  // ── 12. Smart locks (neutral, no marketing claims, no insurer promises) ───
  {
    id: "smart-locks-honest-review-london",
    title: "Smart Locks in London: Convenience vs Practical Security",
    excerpt:
      "Smart locks can be brilliant for access control, but they don’t automatically make a door more secure. Here’s a balanced, real-world guide for London homes.",
    image: "/blog/smart-locks-london.png",
    category: "Security Guide",
    date: "Feb 24, 2026",
    readTime: "6 min read",
    author: "Crownfield Locksmiths",
    content: `
# Smart Locks in London: Convenience vs Practical Security

Smart locks are mainly about **access control** — who can enter, when, and how easily you manage it.

Security depends on the whole system: door, frame, lock type, and installation.

---

## Where smart locks make sense
- households with multiple users (family, cleaners, carers)
- short-lets and rentals (temporary access codes, easy access control)
- people who frequently lose keys
- properties where you want entry logs

---

## Real-world limitations to consider
- batteries (you need a backup plan)
- compatibility with your current lock/door
- installation quality matters a lot
- your insurance may have specific requirements (check your policy wording)

---

## A practical recommendation
If you want smart convenience, keep the underlying mechanical security strong:
- quality cylinder where applicable
- correct alignment for multi-point locks
- solid frame and keeps

Smart locks can be a great **layer** — but they shouldn’t be used to compensate for a weak door setup.

**Want advice for your specific door type? Call: +447346010278**
    `,
    seo: {
      metaTitle: "Smart Locks in London | Practical Pros, Cons & What to Check",
      metaDescription:
        "Smart locks are convenient, but security depends on the whole door system. A balanced guide for London homes: benefits, limitations, and what to check.",
      keywords: [
        "smart locks London",
        "smart lock UK",
        "keypad lock London",
        "smart lock installation",
        "smart lock vs traditional lock",
      ],
    },
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
