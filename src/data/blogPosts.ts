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
    image: "/locktypes.jpg",
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
    image: "/cl.jpg",
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
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop",
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
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
