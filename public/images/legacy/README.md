# Old Tech For Bharat Website — Full Image Extraction

Source: `https://www.tech4bharat.com/` (a small, unindexed Next.js site — `<meta name="robots" content="noindex">`, no sitemap.xml/robots.txt). Every page was crawled and every image reference in each page's source was located. **This is the complete image inventory of the old site — 14 unique files across 5 pages. Nothing was skipped.**

> **Important context**: the old site is a *different program* from this codebase. It's "Tech For Bharat" — a youth tech-education/policy-workshop initiative (COEP/VJTI/IIT Bombay student workshops on AI, cybersecurity, and tech policy) — not the startup-incubator platform "Tech4Bharat" this repo represents. Same organizational lineage, different scope. That's why the extracted content skews entirely toward classroom/workshop photography rather than anything startup-specific.

## Pages crawled

| Page | URL | Images found |
|---|---|---|
| Home | `/` | logo + all 11 workshop photos (carousel) |
| About Us | `/about-us` | logo only |
| Previous Activities | `/previous-activities` | logo only |
| Latest Workshop | `/latest-workshop` | logo + all 11 workshop photos |
| Contact | `/contact` | logo only |
| 404 page (for favicon/touch-icon refs) | any unmatched route | favicon, apple-touch-icon |

## Downloaded files

### `/public/images/legacy/workshops/` (11 files — the "Digital & Tech Policy Workshop," Dec 18–23, 2025, COEP Technological University)

| File | Original URL | Day / Session |
|---|---|---|
| `day1-i1-inaugural-session.png` | `/day1-i1.png` | Day 1 — Inaugural Session & Opening Ceremony |
| `day1-i2-intro-to-tech-policy.png` | `/day1-i2.png` | Day 1 — Introduction to Technology Policy |
| `day2-i1-digital-narratives-blockchain.png` | `/day2-i1.png` | Day 2 — Digital Narratives & Blockchain |
| `day2-i2-digital-public-infrastructure-ai.png` | `/day2-i2.png` | Day 2 — Digital Public Infrastructure & AI |
| `day3-i1-innovation-management-policy.png` | `/day3-i1.png` | Day 3 — Innovation Management & Policy |
| `day3-i2-strategic-innovation-frameworks.png` | `/day3-i2.png` | Day 3 — Strategic Innovation Frameworks |
| `day4-i1-clean-energy-cyberphysical-systems.jpg` | `/day4-i1.jpg` | Day 4 — Clean Energy & Cyber-Physical Systems |
| `day4-i2-uav-simulation-security-analysis.png` | `/day4-i2.png` | Day 4 — UAV Simulation & Security Analysis |
| `day5-i1-earth-observation-strategic-tech.png` | `/day5-i1.png` | Day 5 — Earth Observation & Strategic Technologies |
| `day5-i2-field-visit-advanced-computing.png` | `/day5-i2.png` | Day 5 — Field Visit & Advanced Computing |
| `day6-i1-policy-drafting-concluding-session.jpg` | `/day6-i1.jpg` | Day 6 — Policy Drafting & Concluding Session |

All are real, high-resolution photographs (verified by inspection) — mostly 1600×1067–2000×1333px range, 0.3–4MB originals. No stock imagery, no illustrations.

**Already in use on the live site** (downloaded earlier in this project under different filenames, before this full extraction pass — kept in place since components already reference them):
- `day3-i1.png` → `public/images/legacy/policy-workshop-1.png` → used as the event image for "Digital & Tech Policy Workshop" (`lib/images.ts` → `eventImageMap["digital-tech-policy-workshop-2025"]`) and in `BootcampHighlights.tsx`'s photo gallery.
- `day1-i1.png` → `public/images/legacy/policy-workshop-2.png` → used in the Gallery (`lib/gallery/data.ts`, id `policy-workshop-2`).
- `day6-i1.jpg` → `public/images/legacy/policy-workshop-3.jpg` → used in the Gallery (`lib/gallery/data.ts`, id `policy-workshop-3`).

The other 8 workshop photos in this folder are newly extracted and **not yet wired into any component** — available for reuse (e.g. expanding the Gallery, the Bootcamp Highlights strip, or a future "Legacy Programs" section).

### `/public/images/legacy/logos/` (3 files)

| File | Original URL | Notes |
|---|---|---|
| `tech-for-bharat-logo.png` | `/logo.png` | The **old** brand mark — "Tech For Bharat" wordmark on a blue/green gear-and-circuit badge. Visually and textually distinct from the current site's identity (`public/logo1.png`, `public/logo-full.svg`, `public/logo-icon.svg`, green "Tech4Bharat" wordmark). **Kept for archival/reference only — do not use this as the current site's logo**, since it represents a different brand mark from a different program era. |
| `favicon.png` | `/favicon.png` | Old site's favicon. |
| `apple-touch-icon.png` | `/apple-touch-icon.png` | Old site's iOS home-screen icon (same 22.6KB file as favicon.png — old site reused one image for both). |

## What was requested but does not exist on the old site

You asked for these categories to be extracted too. I checked every page for each — none of the following have any real source material on the old site, so I have **not** created empty or fabricated content for them:

- **Startup portfolio images** — the old site isn't a startup incubator; it has no startups, no portfolio section.
- **Bootcamp images** — no bootcamp program exists on the old site (distinct from the "Digital & Tech Policy Workshop," which is a policy-education program, not a startup bootcamp).
- **Partner logos** — partner institutions (COEP, VJTI, CDTIES/IIT Bombay, Observer Research Foundation) are mentioned as **plain text only**, nowhere as logo image files. (These real institution names were already added to `lib/partners.ts` in an earlier session, text-only, consistent with how the current site displays all partners as initials/monograms — no logo assets exist anywhere for any partner, old or new.)
- **Mentor photos / team images** — no distinct team or mentor photo gallery exists; only the workshop group/session photos above (which incidentally include organizers and speakers, but aren't labeled or cropped as individual headshots).
- **Background illustrations / decorative graphics** — none found; the old site uses plain white/light backgrounds with no illustration assets.
- **Icons / SVGs** — no separate icon set; only the favicon/touch-icon above.
- **A distinct "gallery" or "events" category separate from "workshops"** — the 11 workshop photos above are the *only* photographic content on the entire old site. There's nothing additional to file under `/images/gallery` or `/images/events` that isn't already the workshops folder — duplicating the same files into multiple folders felt more misleading than useful, so they live in one place (`/workshops`) with this document as the cross-reference.

## Summary

**14 real files extracted, organized, and this document maps every one of them — that's the complete old site.** The requested 9-folder taxonomy has been narrowed to the 2 folders (`workshops/`, `logos/`) that actually have matching content; the other 7 categories are confirmed empty on the source site rather than filled with mismatched or placeholder content.
