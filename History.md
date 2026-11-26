# Portfolio Upgrade & Release History

## 2026-11-26 — Mobile Responsive Navbar, Hero Spacing & Trust Strip Fix
- **Compact Mobile Navbar (`<= 768px`):**
  - Simplified left brand lockup on mobile screens to show only the free-floating transparent Arbour emblem (`32x32`) + `Kaffie` title (hiding the secondary `Arbour OS` pill on narrow viewports to prevent navbar crowding).
  - Grouped the `EN | ID` language switcher and hamburger drawer toggle cleanly on the right with compact `gap: 0.5rem` (`gap-2`) and tight padding so controls never wrap or collide on `360px–412px` portrait phones.
- **Hero Top Clearance & Typography Refinement:**
  - Enforced explicit Hero top clearance (`padding-top: 6.25rem` / `pt-24` on mobile and `7rem` / `sm:pt-28` on small tablets) so the `INDEPENDENT SYSTEM BUILDER • FOUNDER OF ARBOUR` eyebrow pill never touches or clips under the fixed navbar.
  - Updated `.hero-title` scaling to `clamp(2rem, 8vw, 4.25rem)` with `line-height: 1.12` and enhanced mobile scrim contrast for effortless reading in both `EN` and `ID`.
- **Mobile Trust Strip & Overflow Protection:**
  - Stacked the 3 Hero bottom trust items cleanly on narrow screens with generous bottom padding (`padding-bottom: 4rem` / `pb-16` on mobile, `3rem` / `sm:pb-12` on `sm+`) so they never clip against screen edges.
  - Enforced `overflow-x: hidden` on both `html` and `body` to guarantee zero horizontal scroll at `375x812` across `EN` and `ID`.

## 2026-11-26 — Arbour OS 60/30/10 Editorial Luxury Upgrade & Cloudflare Workers Setup
- Upgraded portfolio to the 60/30/10 Editorial Luxury design system (`#FAFAF9` reading canvas, `#1E352F` Deep Forest Emerald, `#8C7046` Dawn Gold).
- Compressed `Baground Arbour.png` (`2.30 MB`) to `assets/arbour-hero-bg.webp` (`162.3 KB`) and generated true-transparent `assets/arbour-logo.png` (`97.4 KB`).
- Implemented complete `EN | ID` bilingual storytelling (`251` translated nodes), filterable 11-project showcase (Arbour 10-UMKM Showcase, Arbour WMS & Mini-ERP for UD Khansa, Arbour AMS for RPK & Kembang Cikarang, Kantor AI, and all 6 preserved archive projects), 4-certificate lightbox gallery, and Cloudflare Workers static deployment config (`wrangler.jsonc`, `.assetsignore`).
