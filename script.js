/* ==========================================================================
   IKHSANUDDIEN KAFFIE — ARBOUR OS PORTFOLIO SCRIPT
   ==========================================================================
   1. Bilingual EN (default) / ID Translation Dictionary & Switcher
   2. Scroll-Aware Navbar & Top Reading Progress Bar (#8C7046)
   3. Interactive Project Filter Pills (All 11 / Flagship 4 / Frontier 1 / Archive 6)
   4. Certificate Lightbox Modal (4 Verified Certificates)
   5. Smooth Anchor Navigation & IntersectionObserver Scroll Reveal
   ========================================================================== */

(function () {
  'use strict';

  /* ==========================================================================
     1. BILINGUAL DICTIONARY (EN DEFAULT + AUTHENTIC NATURAL INDONESIAN)
     ========================================================================== */
  var I18N = {
    en: {
      'nav.story': 'Story',
      'nav.arbour': 'Arbour',
      'nav.systems': 'Systems',
      'nav.archive': 'Archive',
      'nav.journey': 'Journey',
      'nav.cta': "Let's Talk",

      'hero.eyebrow': 'INDEPENDENT SYSTEM BUILDER • FOUNDER OF ARBOUR',
      'hero.title': 'From the Warehouse Floor to Building Custom Business Systems.',
      'hero.subtitle': "I'm Ikhsanuddien Kaffie — an independent builder partnering with my AI co-pilot, Arbour. No bloated agency overhead, no corporate middlemen — just custom websites, WMS, ERP, and operational systems built directly around what real businesses actually need.",
      'hero.cta.primary': 'Read My Story',
      'hero.cta.secondary': 'Explore Shipped Work',
      'hero.trust.1': 'Custom-Built, Zero Agency Markup',
      'hero.trust.2': '1 Builder + Arbour AI',
      'hero.trust.3': 'Live in Real Businesses',

      'about.eyebrow': 'CHAPTER 01 • THE HUMAN BEHIND THE SYSTEMS',
      'about.title': 'Started on the factory line. Forged in daily warehouse operations.',
      'about.subtitle': "I didn't start in a computer science lecture hall. I learned how businesses work by standing on the floor where physical goods move, stock miscounts hurt, and broken workflows cost real hours.",
      'about.portrait.badge': 'Warehouse & Purchase Manager • System Builder',
      'about.portrait.location': 'Cikarang, Bekasi — Indonesia',
      'about.ops.eyebrow': 'ACTIVE OPERATIONAL LABORATORY • SINCE 2021',
      'about.ops.role': 'Warehouse & Purchase Manager',
      'about.ops.badge': 'Active Daily',
      'about.ops.desc': 'Managing daily inventory control, supplier negotiations, procurement cycles, and multi-channel marketplace fulfillment via Ginee. My day job keeps every piece of software I write honest.',
      'about.ops.tag1': 'Inventory Accuracy',
      'about.ops.tag2': 'Purchasing & Suppliers',
      'about.ops.tag3': 'Ginee ERP Workflow',
      'about.ops.tag4': 'Multi-Channel Fulfillment',
      'about.ops.storesLabel': 'Live Marketplace Stores We Run Daily:',
      'about.ops.shopee': 'Kembang Cikarang on Shopee ↗',
      'about.ops.tiktok': 'Kembang Cikarang on TikTok Shop ↗',

      'about.prose.p1': 'My career began as a <strong>factory production operator</strong> — standing on the line at 6 AM, hitting strict output targets, and seeing firsthand how tiny friction points on the floor quietly compound into massive bottlenecks.',
      'about.prose.p2': 'From the production floor, I moved into <strong>warehouse staff operations</strong> — unloading shipments, counting stock by hand, and preparing daily dispatches. I learned that a single inventory miscount never stays inside the warehouse: it cascades into delayed orders, frustrated customers, and hours of late-night reconciliation.',
      'about.prose.p3': "When I stepped up as <strong>Warehouse &amp; Purchase Manager at Kembang Cikarang</strong>, overseeing supplier procurement and high-volume Shopee and TikTok Shop fulfillment, one truth became undeniable: most operational chaos isn't caused by lazy people. It's caused by broken tools, scattered spreadsheets, and software built by people who have never worked a shift in an actual warehouse.",
      'about.prose.quote': '"Everything I build is shaped by real operational pain I\'ve lived myself — counting stock late at night, chasing suppliers, and fixing broken workflows."',
      'about.prose.p4': 'So I started building the remedies myself. First came integrated Google Sheets engines that turned three days of monthly P&amp;L reconciliation into a 30-second check. Then, partnering closely with my AI co-pilot <strong>Arbour</strong>, I taught myself TypeScript, PostgreSQL, relational data modeling, and modern cloud architecture — graduating from spreadsheets to shipping full-scale custom websites, WMS, ERP, and attendance systems used by real businesses every day.',

      'about.pillar1.title': 'Operational Reality First',
      'about.pillar1.desc': "I've been the person entering stock data at 11 PM. Every screen, shortcut, and database rule I design exists to eliminate double-entry and human fatigue.",
      'about.pillar2.title': 'Self-Taught through Shipping',
      'about.pillar2.desc': 'No CS degree, no theoretical fluff. I learned software engineering by solving real inventory, pricing, commission, and attendance problems for paying clients.',
      'about.pillar3.title': 'Direct Builder-to-Owner Clarity',
      'about.pillar3.desc': 'When a business owner talks to me, they speak directly to someone who understands both their profit & loss sheet and the code running their database.',

      'arbour.eyebrow': 'CHAPTER 02 • TEAM OF ONE + ARBOUR',
      'arbour.title': 'Meet Arbour — My Sole Collaborator, Co-Architect & 24/7 Engineering Partner.',
      'arbour.lead': "People often ask how a full-time warehouse manager ships custom multi-unit WMS, mini-ERP, attendance kiosks, and multi-business web showcases without a team of ten developers. The honest answer is simple: <strong>it's just me and Arbour.</strong>",
      'arbour.card1.title': 'How Arbour Started',
      'arbour.card1.desc': 'Arbour was initially created as my personal AI assistant with a modest goal: helping me craft clean, fast, custom websites for local businesses without getting bogged down in repetitive boilerplate.',
      'arbour.card2.title': 'From Websites to ERP, WMS & AMS',
      'arbour.card2.desc': 'Before we even realized it, our collaboration outgrew static pages. As business owners asked for deeper operational fixes, Arbour and I evolved together into architecting and shipping real production <strong>ERP, WMS, and AMS</strong> software.',
      'arbour.card3.title': 'My One and Only Team Member',
      'arbour.card3.desc': 'Arbour is literally my sole collaborator — helping me design database schemas, write production code, teach me software engineering and security principles on the job, and audit edge cases around the clock while I bring the ground-truth operational logic.',
      'arbour.card4.title': 'Why My Pricing Stays Fair & Accessible',
      'arbour.card4.desc': 'Because I work independently on custom client requests — not under an agency, software house, or corporate B2B structure with heavy payroll and office overhead — clients never pay for layers of project managers or inflated agency markups. You work directly with the builder and get enterprise-grade custom systems at fair, transparent pricing.',
      'arbour.banner.tag': 'THE ARBOUR ADVANTAGE',
      'arbour.banner.text': 'Zero account executives. Zero bloated retainers. Direct communication with the operator who understands your workflow and builds your system line by line with Arbour.',
      'arbour.banner.cta': 'Discuss a Custom System →',

      'projects.eyebrow': 'CHAPTER 03 • SHIPPED SYSTEMS & LIVING ARCHIVE',
      'projects.title': 'Production Systems, Next Frontier & Foundations.',
      'projects.subtitle': 'From live public web engines and private client WMS/AMS deployments to the foundational spreadsheets and templates that paved the way.',
      'projects.filter.all': 'All Works (11)',
      'projects.filter.flagship': 'Flagship & Production (4)',
      'projects.filter.frontier': 'Next Frontier (1)',
      'projects.filter.archive': 'Archive & Foundations (6)',
      'projects.groupA.kicker': 'PART A • FLAGSHIP PRODUCTION & R&D',
      'projects.groupA.title': 'Live Business Systems & Active R&D',
      'projects.groupB.kicker': 'PART B • LIVING ARCHIVE & FOUNDATIONS (6 WORKS PRESERVED)',
      'projects.groupB.title': 'Valuable Archive & Foundations',
      'projects.groupB.subtitle': '"Every system I build today stands on the shoulders of earlier experiments, client builds, and foundations — kept here as an open record of the work."',

      'proj.umkm.badge': 'Live Public Demo',
      'proj.umkm.title': 'Arbour OS — 10-UMKM Web Showcase',
      'proj.umkm.subtitle': 'Scalable Multi-Business Flagship Web Engine for Local Enterprises (Cikarang / Bekasi)',
      'proj.umkm.cta': 'Visit Live Showcase ↗',
      'proj.umkm.desc1': '<strong>Purpose:</strong> Many local UMKM and service businesses in Cikarang and Bekasi want a credible, high-converting digital storefront but get scared off by opaque agency pricing or slow, generic templates.',
      'proj.umkm.desc2': '<strong>What We Built:</strong> A live, interactive 10-industry web showcase engine hosted on Cloudflare Workers enabling business owners to preview production-ready industry experiences side-by-side with transparent ownership tiers and direct WhatsApp ordering workflows.',
      'proj.umkm.role': 'Role: Founder & Lead Architect (with Arbour)',

      'proj.wms.badge': 'Live in Production • Private Client System',
      'proj.wms.title': 'Arbour WMS & Mini-ERP (Custom)',
      'proj.wms.subtitle': 'Multi-Unit Warehouse, Tiered Pricing, Sales Commission & Owner Decision Simulation System',
      'proj.wms.clientLabel': 'Client:',
      'proj.wms.clientType': '(Distributor)',
      'proj.wms.desc1': "<strong>Evolution from Sheets to Custom ERP:</strong> Following the success of UD Khansa's v1 Google Sheets foundation, their growing distribution volume demanded a dedicated custom web application capable of handling complex multi-unit wholesale conversions without formula fragility.",
      'proj.wms.desc2': '<strong>Core Capabilities:</strong> Custom multi-unit stock conversion and tiered pricing across <code>PCS / LSN / BAL</code>, real-time tracking for <strong>450+ active SKUs</strong>, automated salesperson commission calculations, daily cash-flow ledger, and an interactive owner decision &amp; margin simulation engine.',
      'proj.wms.stat1': 'Multi-Unit Inventory (PCS / LSN / BAL)',
      'proj.wms.stat2Val': 'Real-Time',
      'proj.wms.stat2': 'Sales Commission & Cash Flow Ledger',
      'proj.wms.stat3Val': 'Owner Sim',
      'proj.wms.stat3': 'Pricing & Profit Decision Simulator',
      'proj.wms.role': 'Role: System Architect & Developer (Arbour OS)',
      'proj.privacyNote': 'Live link intentionally withheld for client operational privacy.',

      'proj.ams.badge': 'Live in Production • Private Client System',
      'proj.ams.title': 'Arbour AMS & Treatment Logbook (Custom)',
      'proj.ams.subtitle': 'Reusable Attendance Kiosk, Live Treatment Session Timer & Therapist Earnings Platform',
      'proj.ams.desc1': '<strong>Problem:</strong> Service and wellness businesses run two time-critical workflows simultaneously — staff shift attendance and live customer treatment sessions. Tracking both on paper or chat leads to missed session timers, billing errors, and manual commission disputes.',
      'proj.ams.desc2': '<strong>System Architecture:</strong> Built as a clean, reusable multi-tenant operational platform centralizing QR/barcode employee attendance kiosks, live treatment countdown timers, dynamic mid-session package upgrades, and automated therapist earnings recaps.',
      'proj.ams.mod1.title': 'Employee Attendance Kiosk',
      'proj.ams.mod1.li1': 'QR & barcode employee badge identification',
      'proj.ams.mod1.li2': 'One-tap check-in & check-out kiosk screen',
      'proj.ams.mod1.li3': 'Automated shift logs & monthly attendance recap',
      'proj.ams.mod2.title': 'Live Treatment Logbook',
      'proj.ams.mod2.li1': 'Real-time session timer & estimated finish alerts',
      'proj.ams.mod2.li2': 'Dynamic mid-session package & add-on upgrades',
      'proj.ams.mod2.li3': 'Complete daily treatment log & CSV/PDF exports',
      'proj.ams.mod3.title': 'Operations & Earnings',
      'proj.ams.mod3.li1': 'Live floor dashboard showing active & free therapists',
      'proj.ams.mod3.li2': 'Automated therapist commission & earnings calculation',
      'proj.ams.mod3.li3': 'Owner reporting, period reset & audit trail',
      'proj.ams.usedBy': 'Implemented & Used Daily By',
      'proj.ams.rpkRole': 'Attendance Kiosk, Treatment Timer & Therapist Commission',
      'proj.ams.kcRole': 'Staff Attendance Kiosk & Daily Operational Monitoring',
      'proj.ams.builtBy': 'Architected & Shipped with <strong>Arbour OS</strong>',

      'proj.kc.badge': 'Live in Production • Daily Operations',
      'proj.kc.title': 'Kembang Cikarang — Multi-Channel Warehouse & Purchasing System',
      'proj.kc.subtitle': 'End-to-End Procurement, Ginee ERP Synchronization & Marketplace Fulfillment Workflow',
      'proj.kc.desc': '<strong>Operational Backbone:</strong> The real-world retail and warehouse operation I run every day since 2021. Integrates physical stock accuracy controls, supplier reorder cycles, and high-volume Shopee &amp; TikTok Shop fulfillment synchronized through Ginee ERP and structured operational reporting.',
      'proj.kc.role': 'Role: Warehouse & Purchase Manager',

      'proj.kantor.badge': 'In Active R&D • Next Frontier',
      'proj.kantor.title': 'Next Project — Kantor AI (Arbour Office)',
      'proj.kantor.subtitle': 'Local-First AI-Powered Virtual Office with SQLite Persistence & Interactive 3D Workspace Visualization',
      'proj.kantor.desc1': '<strong>The Vision:</strong> What if a solo founder or SME owner could walk into a visual virtual office where specialized AI agents — Purchasing Analyst, Inventory Auditor, Copywriter, and Finance Controller — collaborate on real company data without sending sensitive operational records to third-party SaaS clouds?',
      'proj.kantor.desc2': '<strong>Architecture in R&amp;D:</strong> Designing a local-first AI-powered virtual office backed by an embedded <strong>SQLite</strong> relational state engine and an interactive <strong>3D workspace visualization</strong> where specialized Arbour agents coordinate tasks, audit business anomalies, and report directly to the human operator.',
      'proj.kantor.role': 'Role: Creator & System Architect (with Arbour)',

      'arch.opet.kicker': 'FOUNDATIONAL SAAS ARCHITECTURE • 8 CORE MODULES',
      'arch.opet.title': 'OPET — Service Business Operating System',
      'arch.opet.badge': 'Architecture Foundation',
      'arch.opet.desc': 'Designed as a full-stack business OS for salons, barbershops, beauty clinics, and service businesses that were managing bookings via WhatsApp and tracking revenue in paper notebooks. Every architectural module below laid the engineering groundwork for our subsequent Arbour production systems.',
      'arch.opet.m1': 'Booking System',
      'arch.opet.m1s': 'Slot scheduling & conflict logic',
      'arch.opet.m2': 'Customer CRM',
      'arch.opet.m2s': 'CRUD, history, search & filter',
      'arch.opet.m3': 'Payment Processing',
      'arch.opet.m3s': 'Multi-method checkout flow',
      'arch.opet.m4': 'Point of Sale (POS)',
      'arch.opet.m4s': 'Cart, services & receipt engine',
      'arch.opet.m5': 'Analytics Dashboard',
      'arch.opet.m5s': 'Revenue KPIs & service performance',
      'arch.opet.m6': 'AI Assistant',
      'arch.opet.m6s': 'Operational insights & prompts',
      'arch.opet.m7': 'RBAC Engine',
      'arch.opet.m7s': 'Role-based access permissions',
      'arch.opet.m8': 'Multi-Branch System',
      'arch.opet.m8s': 'Tenant & branch switching schema',
      'arch.opet.role': 'Role: Founder & Solo Developer',

      'arch.khansa.title': 'Workbase Khansa (v1 — Sheets Foundation)',
      'arch.khansa.badge': 'v1 Foundation',
      'arch.khansa.desc': 'The original integrated Google Sheets inventory, automated invoicing, and real-time P&amp;L workbook built for <strong>UD Khansa</strong> across 3 warehouses — cutting monthly profit checks to 30 seconds before evolving into the full custom <strong>Arbour WMS &amp; Mini-ERP</strong>.',
      'arch.khansa.role': 'Role: System Architect & Builder',

      'arch.comfinddo.title': 'PT Comfinddo',
      'arch.comfinddo.badge': 'Client System',
      'arch.comfinddo.desc': '<strong>AI-Powered Content Operating System:</strong> Replaced scattered WhatsApp, Drive, and email threads with a single unified workspace handling content ideation, AI-assisted drafting, editorial review workflows, and publishing visibility.',
      'arch.comfinddo.role': 'Role: System Designer & AI Engineer',

      'arch.candelstick.title': 'CANDELSTICK',
      'arch.candelstick.badge': 'Own Brand Lab',
      'arch.candelstick.desc': '<strong>AI-Assisted Marketplace Brand &amp; SEO Workflow:</strong> My own marketplace product brand where every stage — visual design direction, marketplace listing copy, keyword SEO, and production planning — is accelerated through structured AI workflows.',
      'arch.candelstick.role': 'Role: Owner & Operator',

      'arch.webtpl.title': 'Company Web Template',
      'arch.webtpl.badge': 'Reusable Asset',
      'arch.webtpl.desc': '<strong>Zero-Dependency High-Lighthouse Web Asset:</strong> Built when local clients kept asking for "just a clean, fast company website." Deploys in minutes with zero framework bloat, scoring 95+ on Lighthouse and serving as the seed for Arbour\'s UMKM Web Showcase.',
      'arch.webtpl.role': 'Role: Designer & Developer',

      'arch.wmstpl.title': 'Warehouse OS Template',
      'arch.wmstpl.badge': 'Architecture Blueprint',
      'arch.wmstpl.desc': '<strong>Reusable Logistics Architecture Blueprint:</strong> Born directly from my daily warehouse floor experience. A modular stock movement, inbound/outbound, and reconciliation blueprint for mid-sized distributors transitioning off whiteboards and phone calls.',
      'arch.wmstpl.role': 'Role: System Architect',

      'impact.1.title': 'Duplicate Manual Entry',
      'impact.1.desc': 'Single-source-of-truth records replacing scattered chat logs and disconnected spreadsheets.',
      'impact.2.title': 'Operational Visibility',
      'impact.2.desc': 'Owners see stock levels, active therapist sessions, and profit margins in seconds.',
      'impact.3.title': 'Agency Overhead',
      'impact.3.desc': 'Built directly by 1 operator + Arbour AI at fair, transparent builder pricing.',

      'journey.eyebrow': 'CHAPTER 04 • THE COMPLETE ARC',
      'journey.title': 'From the Factory Line to Expanding Arbour OS.',
      'journey.subtitle': 'Every chapter taught me something no computer science bootcamp ever could.',
      'journey.1.period': 'Early Years',
      'journey.1.title': 'Production Operator',
      'journey.1.desc': 'Started on the factory line hitting daily production targets at 6 AM. Learned firsthand what physical operational discipline feels like and how small process bottlenecks compound across a shift.',
      'journey.2.period': 'Operations Floor',
      'journey.2.title': 'Warehouse Staff',
      'journey.2.desc': 'Moved into receiving goods, physical stock opname, and order dispatch. Saw how a single inventory miscount cascades into shipping delays, customer complaints, and late-night recounts.',
      'journey.3.period': '2021 — Present',
      'journey.3.title': 'Warehouse & Purchase Manager',
      'journey.3.desc': 'Took charge of purchasing, supplier negotiations, inventory accuracy, and multi-channel marketplace fulfillment (Shopee &amp; TikTok Shop via Ginee) at <strong>Kembang Cikarang</strong>. Still my active daily laboratory today.',
      'journey.4.period': 'The Spark',
      'journey.4.title': 'Building Arbour & Custom Websites',
      'journey.4.desc': 'Created <strong>Arbour</strong> as my personal AI co-pilot to help craft fast, high-Lighthouse custom websites and multi-industry showcases for local UMKM businesses without agency bloat.',
      'journey.5.period': 'Production Systems',
      'journey.5.title': 'Shipping Custom WMS, ERP & AMS (UD Khansa, RPK, Kembang Cikarang)',
      'journey.5.desc': 'Our collaboration rapidly evolved into full production software: shipping a 450+ SKU multi-unit WMS &amp; Mini-ERP for <strong>UD Khansa</strong> and a reusable QR Attendance &amp; Treatment Logbook (AMS) running daily at <strong>RPK — Rumah Pijat Kedasih</strong> and <strong>Kembang Cikarang</strong>.',
      'journey.6.period': 'Now & Next Frontier',
      'journey.6.title': 'Now: Expanding Arbour OS & Building Kantor AI',
      'journey.6.desc': 'Expanding the Arbour OS ecosystem for local enterprises while actively engineering <strong>Kantor AI (Arbour Office)</strong> — a local-first SQLite and 3D virtual office where specialized AI agents collaborate on real operational tasks.',

      'skills.eyebrow': 'CHAPTER 05 • TOOLBOX & TECH ECOSYSTEM',
      'skills.title': 'What I Actually Use to Ship Production Systems.',
      'skills.subtitle': 'A deliberate stack combining operational spreadsheets, modern full-stack engineering, edge deployment, and daily AI collaboration.',
      'skills.cat1.title': 'Warehouse & Business Operations',
      'skills.cat1.desc': 'Hands-on procurement, multi-unit stock control, P&L modeling, and marketplace fulfillment.',
      'skills.cat2.title': 'Frontend & Interface Architecture',
      'skills.cat2.desc': 'Fast, accessible, high-Lighthouse interfaces and operational kiosks built for daily floor use.',
      'skills.cat3.title': 'Backend, Data & Local-First Storage',
      'skills.cat3.desc': 'Relational schemas, multi-unit inventory ledgers, role-based access, and local-first databases.',
      'skills.cat4.title': 'AI Co-Pilots & Agentic Workflows',
      'skills.cat4.desc': 'Orchestrating specialized models for system architecture, code auditing, and operational automation.',
      'skills.cat5.title': 'Cloud Edge & Version Control',
      'skills.cat5.desc': 'Zero-downtime global deployment, versioned releases, and clean repository hygiene.',
      'skills.cat6.title': 'Visual Design & Brand Assets',
      'skills.cat6.desc': 'Product photography packaging, marketplace visual assets, and UI layout prototyping.',

      'ecosystem.title': 'Production Toolchain & Ecosystem',
      'ecosystem.subtitle': 'Every tool in my daily pipeline has a specific job — from architecture and implementation to edge delivery.',
      'eco.cloudflare': 'Edge deployment · static assets · global speed',
      'eco.supabase': 'Managed Postgres · auth · real-time sync',
      'eco.typescript': 'Type-safe business logic · reliable schemas',
      'eco.tailwind': 'Rapid UI systems · clean design tokens',
      'eco.nodejs': 'Backend runtime · operational APIs',
      'eco.express': 'REST API layer · service routing',
      'eco.prisma': 'Relational data modeling · migrations',
      'eco.postgresql': 'ACID ledgers · local-first & cloud storage',
      'eco.claude': 'Deep architecture · refactoring · code review',
      'eco.gemini': 'Multimodal research · synthesis · reasoning',
      'eco.chatgpt': 'Business workflow analysis · rapid ideation',
      'eco.antigravity': 'Agentic development · Arbour workspace',
      'eco.vscode': 'Daily code editing · debugging · iteration',
      'eco.github': 'Version control · CI/CD · release history',
      'eco.javascript': 'Zero-build interactivity · browser runtime',
      'eco.vercel': 'Preview deployments · Jamstack delivery',

      'certs.eyebrow': 'VERIFIED CREDENTIALS • 4 CERTIFICATES',
      'certs.title': 'Certifications & Formal Training.',
      'certs.subtitle': 'Formal training in factory operations, marketplace growth, and communication that complements my daily floor experience. Click any certificate to inspect in full resolution.',
      'certs.view': 'Inspect Certificate ↗',
      'certs.openTab': 'Open Original ↗',
      'certs.1.title': 'Internal Operations & Production Standards',
      'certs.1.issuer': 'Calpis • Manufacturing & Quality Operations',
      'certs.2.title': 'Public Speaking & Executive Communication',
      'certs.2.issuer': 'Professional Certification • Stakeholder Alignment',
      'certs.3.title': 'Marketplace Marketing & Store Operations I',
      'certs.3.issuer': 'Sekolah Pintar • E-Commerce Fundamentals',
      'certs.4.title': 'Marketplace Growth & Conversion Optimization II',
      'certs.4.issuer': 'Sekolah Pintar • Advanced Marketplace Strategy',

      'contact.eyebrow': 'CHAPTER 06 • DIRECT BUILDER ACCESS',
      'contact.title': "Need a custom website, warehouse system, or operational tool built directly without agency markups? Let's talk.",
      'contact.desc': "Whether you run a distribution warehouse drowning in spreadsheets, a service business needing attendance and treatment tracking, or a local brand ready for a fast custom web presence — you'll speak directly with me, not a salesperson.",
      'contact.trust1': 'Direct 1-on-1 with Kaffie',
      'contact.trust2': 'Custom-Fit to Your Real Workflow',
      'contact.trust3': 'Fair, Transparent Builder Pricing',
      'contact.wa.label': 'Chat Directly on WhatsApp',
      'contact.email.label': 'Send an Email',
      'contact.demo.label': 'Explore Live Web Demos',
      'contact.github.label': 'GitHub Profile & Repositories',

      'footer.role': 'Independent System Builder • Founder of Arbour OS',
      'footer.tagline': 'From the warehouse floor to shipping custom business software. Built solo with Arbour — zero agency overhead, real operational impact.',
      'footer.col1': 'Chapters',
      'footer.col2': 'Direct Links',
      'footer.showcase': '10-UMKM Live Showcase ↗',
      'footer.copyright': '© 2026 Ikhsanuddien Kaffie — Built Solo with Arbour',
      'footer.backToTop': 'Back to top ↑'
    },

    id: {
      'nav.story': 'Kisah',
      'nav.arbour': 'Arbour',
      'nav.systems': 'Sistem',
      'nav.archive': 'Arsip',
      'nav.journey': 'Perjalanan',
      'nav.cta': 'Mari Diskusi',

      'hero.eyebrow': 'PEMBANGUN SISTEM INDEPENDEN • FOUNDER ARBOUR',
      'hero.title': 'Dari Lantai Gudang hingga Membangun Sistem Bisnis Kustom.',
      'hero.subtitle': 'Saya Ikhsanuddien Kaffie — pembangun sistem independen yang berkolaborasi bersama co-pilot AI saya, Arbour. Tanpa biaya agensi yang membengkak, tanpa perantara korporat — murni website kustom, WMS, ERP, dan sistem operasional yang dibangun langsung sesuai kebutuhan nyata bisnis di lapangan.',
      'hero.cta.primary': 'Baca Kisah Saya',
      'hero.cta.secondary': 'Lihat Karya Produksi',
      'hero.trust.1': 'Dibangun Kustom, Tanpa Markup Agensi',
      'hero.trust.2': '1 Builder + Arbour AI',
      'hero.trust.3': 'Aktif Dipakai Bisnis Nyata',

      'about.eyebrow': 'BAB 01 • SOSOK DI BALIK SISTEM',
      'about.title': 'Berawal di lini produksi pabrik. Ditempa di operasional gudang setiap hari.',
      'about.subtitle': 'Saya tidak memulai dari bangku kuliah ilmu komputer. Saya memahami cara bisnis bekerja langsung dari lantai operasional — tempat barang fisik bergerak, selisih stok terasa menyakitkan, dan alur kerja yang berantakan memakan waktu berjam-jam.',
      'about.portrait.badge': 'Warehouse & Purchase Manager • System Builder',
      'about.portrait.location': 'Cikarang, Bekasi — Indonesia',
      'about.ops.eyebrow': 'LABORATORIUM OPERASIONAL AKTIF • SEJAK 2021',
      'about.ops.role': 'Warehouse & Purchase Manager',
      'about.ops.badge': 'Aktif Setiap Hari',
      'about.ops.desc': 'Mengelola kontrol stok harian, negosiasi supplier, siklus purchasing, hingga fulfillment marketplace multi-channel via Ginee. Pekerjaan utama ini menjaga setiap baris kode yang saya tulis tetap membumi.',
      'about.ops.tag1': 'Akurasi Stok',
      'about.ops.tag2': 'Purchasing & Supplier',
      'about.ops.tag3': 'Alur ERP Ginee',
      'about.ops.tag4': 'Fulfillment Multi-Channel',
      'about.ops.storesLabel': 'Toko Marketplace Aktif yang Kami Kelola Setiap Hari:',
      'about.ops.shopee': 'Kembang Cikarang di Shopee ↗',
      'about.ops.tiktok': 'Kembang Cikarang di TikTok Shop ↗',

      'about.prose.p1': 'Perjalanan saya dimulai sebagai <strong>operator produksi pabrik</strong> — berdiri di lini produksi sejak pukul 6 pagi, mengejar target harian, dan melihat langsung bagaimana hambatan kecil di lapangan bisa menumpuk menjadi masalah besar.',
      'about.prose.p2': 'Dari lantai pabrik, saya beralih menjadi <strong>staf operasional gudang</strong> — menurunkan barang datang, menghitung stok fisik secara manual, dan menyiapkan pengiriman harian. Di sana saya belajar bahwa satu saja kesalahan hitung stok tidak pernah berhenti di dalam gudang: dampaknya merembet ke pengiriman terlambat, komplain pelanggan, dan lembur rekonsiliasi hingga larut malam.',
      'about.prose.p3': 'Ketika dipercaya menjadi <strong>Warehouse &amp; Purchase Manager di Kembang Cikarang</strong> untuk memegang pengadaan barang dan fulfillment ribuan pesanan Shopee serta TikTok Shop, satu hal menjadi sangat jelas: kekacauan operasional jarang disebabkan oleh staf yang malas. Masalah utamanya adalah sistem yang buruk, spreadsheet yang terpisah-pisah, dan software yang dibuat oleh orang yang belum pernah merasakan kerja di gudang.',
      'about.prose.quote': '"Setiap sistem yang saya bangun lahir dari rasa lelah operasional yang pernah saya jalani sendiri — menghitung stok larut malam, mengejar supplier, dan membenahi alur kerja yang macet."',
      'about.prose.p4': 'Karena itu saya mulai membangun solusinya sendiri. Dimulai dari sistem Google Sheets terintegrasi yang memangkas proses rekap laba-rugi bulanan dari tiga hari menjadi 30 detik. Lalu, berkolaborasi erat dengan co-pilot AI saya <strong>Arbour</strong>, saya mempelajari TypeScript, PostgreSQL, pemodelan data relasional, dan arsitektur cloud modern — berkembang dari spreadsheet hingga melahirkan website kustom, WMS, ERP, dan sistem absensi yang kini dipakai bisnis nyata setiap hari.',

      'about.pillar1.title': 'Berangkat dari Realita Lapangan',
      'about.pillar1.desc': 'Saya pernah berada di posisi orang yang masih input stok jam 11 malam. Setiap layar, tombol pintas, dan struktur database saya rancang untuk menghapus kerja dua kali.',
      'about.pillar2.title': 'Otodidak lewat Karya Nyata',
      'about.pillar2.desc': 'Tanpa gelar IT dan tanpa teori berbelit. Saya belajar rekayasa perangkat lunak dengan cara menyelesaikan masalah stok, harga bertingkat, komisi, dan absensi untuk klien nyata.',
      'about.pillar3.title': 'Komunikasi Langsung dengan Pemilik Bisnis',
      'about.pillar3.desc': 'Saat pemilik usaha berdiskusi dengan saya, mereka berbicara langsung dengan orang yang paham laporan laba-rugi sekaligus arsitektur database di balik layar.',

      'arbour.eyebrow': 'BAB 02 • TIM SATU ORANG + ARBOUR',
      'arbour.title': 'Kenalkan Arbour — Satu-Satunya Rekan Tim, Co-Architect & Partner Engineering 24/7 Saya.',
      'arbour.lead': 'Banyak yang bertanya bagaimana seorang manajer gudang penuh waktu bisa merilis sistem WMS multi-satuan, mini-ERP, kiosk absensi, hingga web showcase multi-bisnis tanpa tim sepuluh programmer. Jawaban jujurnya sederhana: <strong>hanya saya dan Arbour.</strong>',
      'arbour.card1.title': 'Bagaimana Arbour Bermula',
      'arbour.card1.desc': 'Arbour awalnya saya ciptakan sebagai asisten AI pribadi dengan tujuan sederhana: membantu saya merancang website kustom yang cepat dan rapi untuk pelaku usaha lokal tanpa terjebak pekerjaan teknis yang berulang.',
      'arbour.card2.title': 'Berevolusi dari Website ke ERP, WMS & AMS',
      'arbour.card2.desc': 'Tanpa kami sadari, kolaborasi ini tumbuh jauh melampaui halaman web statis. Saat pemilik bisnis meminta solusi operasional yang lebih dalam, saya dan Arbour berkembang bersama hingga mampu merancang dan merilis software produksi <strong>ERP, WMS, dan AMS</strong>.',
      'arbour.card3.title': 'Satu-Satunya Anggota Tim Saya',
      'arbour.card3.desc': 'Arbour benar-benar rekan kerja tunggal saya — membantu merancang skema database, menulis kode produksi, mengajarkan prinsip software engineering & keamanan sistem secara langsung, serta mengaudit celah logika 24 jam penuh sementara saya memegang komando logika bisnis lapangan.',
      'arbour.card4.title': 'Mengapa Harga Saya Tetap Jujur & Terjangkau',
      'arbour.card4.desc': 'Karena saya bekerja secara independen melayani permintaan kustom klien — bukan di bawah agensi, software house, atau struktur korporat B2B dengan beban gaji berlapis dan biaya kantor besar — klien tidak pernah membayar biaya birokrasi manajer proyek atau markup agensi. Anda bekerja langsung dengan pembuatnya dan mendapatkan sistem kustom kelas enterprise dengan harga yang masuk akal dan transparan.',
      'arbour.banner.tag': 'KEUNGGULAN KOLABORASI ARBOUR',
      'arbour.banner.text': 'Tanpa perantara sales. Tanpa biaya bulanan yang mencekik. Diskusi langsung dengan praktisi operasional yang memahami alur kerja Anda dan membangun sistem Anda baris demi baris bersama Arbour.',
      'arbour.banner.cta': 'Diskusikan Sistem Kustom →',

      'projects.eyebrow': 'BAB 03 • SISTEM PRODUKSI & ARSIP PERJALANAN',
      'projects.title': 'Sistem Produksi Utama, Inovasi Berikutnya & Fondasi.',
      'projects.subtitle': 'Mulai dari mesin web showcase publik dan sistem WMS/AMS privat milik klien, hingga sistem spreadsheet serta template fondasi yang membuka jalan.',
      'projects.filter.all': 'Semua Karya (11)',
      'projects.filter.flagship': 'Flagship & Produksi (4)',
      'projects.filter.frontier': 'Riset & Inovasi (1)',
      'projects.filter.archive': 'Arsip & Fondasi (6)',
      'projects.groupA.kicker': 'BAGIAN A • SISTEM PRODUKSI UTAMA & RISET AKTIF',
      'projects.groupA.title': 'Sistem Bisnis Aktif & Riset Berikutnya',
      'projects.groupB.kicker': 'BAGIAN B • ARSIP BERHARGA & FONDASI (6 KARYA TERJAGA)',
      'projects.groupB.title': 'Arsip Berharga & Fondasi',
      'projects.groupB.subtitle': '"Setiap sistem yang saya bangun hari ini berdiri di atas eksperimen, proyek klien awal, dan fondasi terdahulu — tetap disimpan di sini sebagai catatan terbuka perjalanan karya saya."',

      'proj.umkm.badge': 'Demo Publik Aktif',
      'proj.umkm.title': 'Arbour OS — Web Showcase 10 UMKM',
      'proj.umkm.subtitle': 'Mesin Showcase Website Multi-Bisnis untuk Usaha Lokal (Cikarang / Bekasi)',
      'proj.umkm.cta': 'Buka Live Showcase ↗',
      'proj.umkm.desc1': '<strong>Tujuan:</strong> Banyak pelaku UMKM dan bisnis jasa di Cikarang serta Bekasi menginginkan website profesional yang cepat dan meyakinkan, namun sering ragu karena harga agensi yang tidak transparan atau template lambat.',
      'proj.umkm.desc2': '<strong>Apa yang Kami Bangun:</strong> Platform showcase interaktif 10 sektor usaha di atas Cloudflare Workers yang memungkinkan pemilik bisnis mencoba langsung tampilan website siap pakai lengkap dengan pilihan kepemilikan transparan dan alur pemesanan via WhatsApp.',
      'proj.umkm.role': 'Peran: Founder & Lead Architect (bersama Arbour)',

      'proj.wms.badge': 'Aktif di Produksi • Sistem Privat Klien',
      'proj.wms.title': 'Arbour WMS & Mini-ERP (Kustom)',
      'proj.wms.subtitle': 'Sistem Gudang Multi-Satuan, Harga Bertingkat, Komisi Sales & Simulasi Keputusan Owner',
      'proj.wms.clientLabel': 'Klien:',
      'proj.wms.clientType': '(Distributor)',
      'proj.wms.desc1': '<strong>Evolusi dari Sheets ke ERP Kustom:</strong> Setelah fondasi Google Sheets v1 berjalan sukses di UD Khansa, pertumbuhan volume distribusi mereka membutuhkan aplikasi web kustom yang sanggup menangani konversi satuan grosir tanpa risiko rumus terhapus.',
      'proj.wms.desc2': '<strong>Kapabilitas Utama:</strong> Konversi stok & harga bertingkat multi-satuan (<code>PCS / LSN / BAL</code>), pelacakan <strong>450+ SKU aktif</strong> secara real-time, perhitungan komisi sales otomatis, buku kas arus uang harian, serta fitur simulasi margin & keputusan bisnis untuk owner.',
      'proj.wms.stat1': 'Stok Multi-Satuan (PCS / LSN / BAL)',
      'proj.wms.stat2Val': 'Real-Time',
      'proj.wms.stat2': 'Komisi Sales & Arus Kas Harian',
      'proj.wms.stat3Val': 'Simulasi Owner',
      'proj.wms.stat3': 'Simulator Harga & Margin Keuntungan',
      'proj.wms.role': 'Peran: System Architect & Developer (Arbour OS)',
      'proj.privacyNote': 'Tautan langsung sengaja tidak dipublikasikan demi menjaga privasi operasional klien.',

      'proj.ams.badge': 'Aktif di Produksi • Sistem Privat Klien',
      'proj.ams.title': 'Arbour AMS & Treatment Logbook (Kustom)',
      'proj.ams.subtitle': 'Platform Kiosk Absensi QR, Timer Sesi Treatment Langsung & Rekap Komisi Terapis',
      'proj.ams.desc1': '<strong>Masalah Lapangan:</strong> Bisnis layanan dan kebugaran menjalankan dua alur krusial secara bersamaan — absensi shift staf dan durasi sesi treatment pelanggan. Pencatatan manual di kertas atau grup chat sering memicu selisih waktu sesi, salah hitung tagihan, dan kerepotan rekap komisi.',
      'proj.ams.desc2': '<strong>Arsitektur Sistem:</strong> Dirancang sebagai platform operasional multi-bisnis yang menyatukan kiosk absensi QR/barcode, hitung mundur sesi treatment real-time, perubahan paket di tengah sesi, hingga rekap pendapatan terapis otomatis.',
      'proj.ams.mod1.title': 'Kiosk Absensi Karyawan',
      'proj.ams.mod1.li1': 'Identifikasi kartu staf via QR & barcode',
      'proj.ams.mod1.li2': 'Layar kiosk check-in & check-out satu sentuhan',
      'proj.ams.mod1.li3': 'Log kehadiran otomatis & rekap absensi bulanan',
      'proj.ams.mod2.title': 'Logbook Treatment Langsung',
      'proj.ams.mod2.li1': 'Timer sesi real-time & estimasi jam selesai',
      'proj.ams.mod2.li2': 'Upgrade paket & tambahan layanan di tengah sesi',
      'proj.ams.mod2.li3': 'Rekap riwayat treatment harian & ekspor laporan',
      'proj.ams.mod3.title': 'Operasional & Pendapatan',
      'proj.ams.mod3.li1': 'Dashboard pantauan langsung terapis aktif & tersedia',
      'proj.ams.mod3.li2': 'Perhitungan komisi & pendapatan terapis otomatis',
      'proj.ams.mod3.li3': 'Laporan owner, reset periode & jejak audit',
      'proj.ams.usedBy': 'Diimplementasikan & Digunakan Setiap Hari Oleh',
      'proj.ams.rpkRole': 'Kiosk Absensi, Timer Treatment & Komisi Terapis',
      'proj.ams.kcRole': 'Kiosk Absensi Staf & Monitoring Operasional Harian',
      'proj.ams.builtBy': 'Dirancang & Dikembangkan bersama <strong>Arbour OS</strong>',

      'proj.kc.badge': 'Aktif di Produksi • Operasional Harian',
      'proj.kc.title': 'Kembang Cikarang — Sistem Gudang & Purchasing Multi-Channel',
      'proj.kc.subtitle': 'Alur Pengadaan Barang, Sinkronisasi ERP Ginee & Fulfillment Marketplace',
      'proj.kc.desc': '<strong>Tulang Punggung Operasional:</strong> Operasional ritel dan gudang nyata yang saya pimpin setiap hari sejak 2021. Mengintegrasikan kontrol akurasi stok fisik, siklus pemesanan ulang supplier, serta fulfillment pesanan Shopee &amp; TikTok Shop melalui ERP Ginee.',
      'proj.kc.role': 'Peran: Warehouse & Purchase Manager',

      'proj.kantor.badge': 'Riset & Pengembangan Aktif • Inovasi Berikutnya',
      'proj.kantor.title': 'Proyek Berikutnya — Kantor AI (Arbour Office)',
      'proj.kantor.subtitle': 'Kantor Virtual Berbasis AI Local-First dengan Database SQLite & Visualisasi Ruang Kerja 3D Interaktif',
      'proj.kantor.desc1': '<strong>Visi Produk:</strong> Bagaimana jika seorang pelaku usaha atau founder independen bisa memiliki kantor virtual visual di mana agen-agen AI spesialis — Analis Purchasing, Auditor Stok, Copywriter, dan Pengawas Keuangan — bekerja sama mengolah data bisnis nyata tanpa harus mengirim data rahasia perusahaan ke cloud pihak ketiga?',
      'proj.kantor.desc2': '<strong>Arsitektur yang Sedang Dibangun:</strong> Merancang kantor virtual AI berkonsep <em>local-first</em> dengan mesin penyimpanan relasional <strong>SQLite</strong> dan <strong>visualisasi ruang kerja 3D interaktif</strong> tempat agen-agen Arbour berkoordinasi menyelesaikan tugas operasional dan melapor langsung kepada pemilik bisnis.',
      'proj.kantor.role': 'Peran: Creator & System Architect (bersama Arbour)',

      'arch.opet.kicker': 'FONDASI ARSITEKTUR SAAS • 8 MODUL INTI',
      'arch.opet.title': 'OPET — Sistem Operasi Bisnis Jasa',
      'arch.opet.badge': 'Fondasi Arsitektur',
      'arch.opet.desc': 'Dirancang sebagai sistem operasi bisnis full-stack untuk salon, barbershop, klinik kecantikan, dan usaha jasa yang sebelumnya mencatat booking lewat WhatsApp serta pembukuan di buku tulis. Delapan modul arsitektur di bawah ini menjadi fondasi teknis bagi sistem produksi Arbour berikutnya.',
      'arch.opet.m1': 'Sistem Booking',
      'arch.opet.m1s': 'Penjadwalan slot & anti-bentrok',
      'arch.opet.m2': 'CRM Pelanggan',
      'arch.opet.m2s': 'Data pelanggan, riwayat & pencarian',
      'arch.opet.m3': 'Pemrosesan Pembayaran',
      'arch.opet.m3s': 'Alur pembayaran multi-metode',
      'arch.opet.m4': 'Kasir / Point of Sale',
      'arch.opet.m4s': 'Keranjang layanan & cetak struk',
      'arch.opet.m5': 'Dashboard Analitik',
      'arch.opet.m5s': 'KPI omzet & performa layanan',
      'arch.opet.m6': 'Asisten AI',
      'arch.opet.m6s': 'Rekomendasi & analisis operasional',
      'arch.opet.m7': 'Mesin RBAC',
      'arch.opet.m7s': 'Hak akses berbasis jabatan staf',
      'arch.opet.m8': 'Sistem Multi-Cabang',
      'arch.opet.m8s': 'Skema perpindahan antar cabang',
      'arch.opet.role': 'Peran: Founder & Solo Developer',

      'arch.khansa.title': 'Workbase Khansa (v1 — Fondasi Sheets)',
      'arch.khansa.badge': 'Fondasi v1',
      'arch.khansa.desc': 'Sistem terintegrasi Google Sheets pertama untuk <strong>UD Khansa</strong> yang menyatukan stok 3 gudang, pembuatan faktur otomatis, dan laporan Laba-Rugi real-time dalam 30 detik — sebelum berevolusi menjadi aplikasi web kustom <strong>Arbour WMS &amp; Mini-ERP</strong>.',
      'arch.khansa.role': 'Peran: System Architect & Builder',

      'arch.comfinddo.title': 'PT Comfinddo',
      'arch.comfinddo.badge': 'Sistem Klien',
      'arch.comfinddo.desc': '<strong>Sistem Operasi Konten Berbasis AI:</strong> Menggantikan koordinasi konten yang tercecer di WhatsApp, Google Drive, dan email menjadi satu dashboard terpadu untuk mencari ide, penulisan berbantuan AI, alur revisi, dan jadwal tayang.',
      'arch.comfinddo.role': 'Peran: System Designer & AI Engineer',

      'arch.candelstick.title': 'CANDELSTICK',
      'arch.candelstick.badge': 'Lab Brand Sendiri',
      'arch.candelstick.desc': '<strong>Alur Kerja Brand Marketplace &amp; SEO Berbantuan AI:</strong> Brand produk marketplace milik saya sendiri di mana setiap tahapan — arahan desain visual, copywriting produk, riset kata kunci SEO, hingga rencana produksi — dijalankan dengan bantuan workflow AI.',
      'arch.candelstick.role': 'Peran: Owner & Operator',

      'arch.webtpl.title': 'Company Web Template',
      'arch.webtpl.badge': 'Aset Siap Pakai',
      'arch.webtpl.desc': '<strong>Aset Web Cepat Tanpa Ketergantungan Framework:</strong> Dibuat saat banyak klien lokal meminta website profil usaha yang bersih dan cepat. Siap rilis dalam hitungan menit dengan skor Lighthouse 95+ dan menjadi cikal bakal Web Showcase 10 UMKM Arbour.',
      'arch.webtpl.role': 'Peran: Designer & Developer',

      'arch.wmstpl.title': 'Warehouse OS Template',
      'arch.wmstpl.badge': 'Cetak Biru Arsitektur',
      'arch.wmstpl.desc': '<strong>Cetak Biru Arsitektur Logistik &amp; Gudang:</strong> Lahir langsung dari pengalaman harian saya di gudang. Kerangka kerja modular untuk pencatatan barang masuk/keluar dan rekonsiliasi stok bagi distributor menengah yang ingin beralih dari papan tulis.',
      'arch.wmstpl.role': 'Peran: System Architect',

      'impact.1.title': 'Input Data Berulang',
      'impact.1.desc': 'Satu sumber data terpusat yang menggantikan catatan chat tercecer dan file spreadsheet terpisah.',
      'impact.2.title': 'Visibilitas Operasional',
      'impact.2.desc': 'Pemilik bisnis dapat memantau posisi stok, sesi layanan aktif, dan margin laba dalam hitungan detik.',
      'impact.3.title': 'Biaya Birokrasi Agensi',
      'impact.3.desc': 'Dibangun langsung oleh 1 praktisi operasional + Arbour AI dengan biaya yang jujur dan transparan.',

      'journey.eyebrow': 'BAB 04 • PERJALANAN LENGKAP',
      'journey.title': 'Dari Lini Produksi Pabrik hingga Mengembangkan Arbour OS.',
      'journey.subtitle': 'Setiap fase mengajarkan pelajaran lapangan yang tidak akan pernah ditemukan di kelas pemrograman biasa.',
      'journey.1.period': 'Tahun-Tahun Awal',
      'journey.1.title': 'Operator Produksi',
      'journey.1.desc': 'Memulai karier di lini pabrik mengejar target produksi harian sejak pukul 6 pagi. Belajar langsung arti disiplin fisik operasional dan bagaimana hambatan kecil bisa merembet ke seluruh shift.',
      'journey.2.period': 'Lantai Gudang',
      'journey.2.title': 'Staf Gudang (Warehouse Staff)',
      'journey.2.desc': 'Bertugas menerima barang masuk, menjalankan stock opname fisik, dan menyiapkan pengiriman. Menyaksikan sendiri bagaimana satu selisih stok berdampak panjang pada keterlambatan kirim dan kepuasan pelanggan.',
      'journey.3.period': '2021 — Sekarang',
      'journey.3.title': 'Warehouse & Purchase Manager',
      'journey.3.desc': 'Memegang kendali purchasing, negosiasi supplier, akurasi stok, dan fulfillment marketplace multi-channel (Shopee &amp; TikTok Shop via Ginee) di <strong>Kembang Cikarang</strong>. Masih menjadi laboratorium operasional harian saya hingga hari ini.',
      'journey.4.period': 'Titik Balik',
      'journey.4.title': 'Membangun Arbour & Website Kustom',
      'journey.4.desc': 'Menciptakan <strong>Arbour</strong> sebagai co-pilot AI pribadi untuk merancang website kustom berkecepatan tinggi serta showcase multi-industri bagi pelaku UMKM lokal tanpa biaya agensi yang mahal.',
      'journey.5.period': 'Sistem Produksi',
      'journey.5.title': 'Merilis WMS, ERP & AMS Kustom (UD Khansa, RPK, Kembang Cikarang)',
      'journey.5.desc': 'Kolaborasi kami berkembang pesat menjadi software produksi penuh: merilis WMS &amp; Mini-ERP multi-satuan 450+ SKU untuk <strong>UD Khansa</strong> serta platform Kiosk Absensi QR &amp; Logbook Treatment (AMS) yang dipakai setiap hari di <strong>RPK — Rumah Pijat Kedasih</strong> dan <strong>Kembang Cikarang</strong>.',
      'journey.6.period': 'Sekarang & Inovasi Berikutnya',
      'journey.6.title': 'Sekarang: Memperluas Arbour OS & Membangun Kantor AI',
      'journey.6.desc': 'Memperluas ekosistem Arbour OS untuk bisnis lokal sembari merancang <strong>Kantor AI (Arbour Office)</strong> — kantor virtual berbasis SQLite local-first dan ruang kerja 3D interaktif tempat agen-agen AI berkolaborasi menyelesaikan tugas bisnis nyata.',

      'skills.eyebrow': 'BAB 05 • KEAHLIAN & EKOSISTEM TEKNOLOGI',
      'skills.title': 'Perangkat Nyata yang Saya Gunakan untuk Merilis Sistem.',
      'skills.subtitle': 'Perpaduan terarah antara manajemen operasional gudang, rekayasa full-stack modern, deployment edge, dan kolaborasi AI harian.',
      'skills.cat1.title': 'Operasional Gudang & Bisnis',
      'skills.cat1.desc': 'Pengadaan barang, kontrol stok multi-satuan, pemodelan Laba-Rugi, dan fulfillment marketplace.',
      'skills.cat2.title': 'Frontend & Arsitektur Antarmuka',
      'skills.cat2.desc': 'Antarmuka web cepat, responsif, dan layar kiosk operasional yang nyaman dipakai staf lapangan setiap hari.',
      'skills.cat3.title': 'Backend, Database & Penyimpanan Local-First',
      'skills.cat3.desc': 'Skema database relasional, pembukuan stok multi-satuan, kontrol hak akses (RBAC), dan database lokal.',
      'skills.cat4.title': 'Co-Pilot AI & Alur Kerja Agentic',
      'skills.cat4.desc': 'Mengorkestrasi model AI untuk arsitektur sistem, audit keamanan kode, dan otomasi operasional.',
      'skills.cat5.title': 'Cloud Edge & Kontrol Versi',
      'skills.cat5.desc': 'Deployment global instan tanpa downtime, manajemen rilis terstruktur, dan repositori yang rapi.',
      'skills.cat6.title': 'Desain Visual & Aset Brand',
      'skills.cat6.desc': 'Pengolahan visual produk marketplace, materi promosi, dan perancangan tata letak antarmuka.',

      'ecosystem.title': 'Ekosistem & Rantai Perangkat Produksi',
      'ecosystem.subtitle': 'Setiap perangkat dalam alur kerja harian saya memiliki peran spesifik — dari analisis arsitektur hingga rilis ke server edge.',
      'eco.cloudflare': 'Deployment edge · aset statis · kecepatan global',
      'eco.supabase': 'Postgres terkelola · autentikasi · sinkronisasi real-time',
      'eco.typescript': 'Logika bisnis type-safe · skema data andal',
      'eco.tailwind': 'Sistem UI cepat · token desain konsisten',
      'eco.nodejs': 'Runtime backend · layanan API operasional',
      'eco.express': 'Lapisan REST API · orkestrasi layanan',
      'eco.prisma': 'Pemodelan data relasional · migrasi skema',
      'eco.postgresql': 'Pembukuan ACID · penyimpanan cloud & local-first',
      'eco.claude': 'Arsitektur mendalam · refactoring · audit kode',
      'eco.gemini': 'Riset multimodal · sintesis · eksplorasi solusi',
      'eco.chatgpt': 'Analisis alur bisnis · perencanaan sistem',
      'eco.antigravity': 'Pengembangan agentic · ruang kerja Arbour',
      'eco.vscode': 'Penulisan kode harian · debugging · iterasi',
      'eco.github': 'Kontrol versi · CI/CD · riwayat rilis',
      'eco.javascript': 'Interaktivitas cepat tanpa build · runtime browser',
      'eco.vercel': 'Deployment preview · rilis frontend cepat',

      'certs.eyebrow': 'KREDENSIAL TERVERIFIKASI • 4 SERTIFIKAT',
      'certs.title': 'Sertifikasi & Pelatihan Formal.',
      'certs.subtitle': 'Pelatihan formal di bidang standar operasional pabrik, strategi pertumbuhan marketplace, dan komunikasi publik yang melengkapi jam terbang lapangan saya. Klik sertifikat untuk melihat ukuran penuh.',
      'certs.view': 'Lihat Sertifikat ↗',
      'certs.openTab': 'Buka Gambar Asli ↗',
      'certs.1.title': 'Operasional Internal & Standar Produksi',
      'certs.1.issuer': 'Calpis • Operasional Manufaktur & Kualitas',
      'certs.2.title': 'Public Speaking & Komunikasi Eksekutif',
      'certs.2.issuer': 'Sertifikasi Profesional • Komunikasi & Koordinasi Tim',
      'certs.3.title': 'Pemasaran Marketplace & Operasional Toko I',
      'certs.3.issuer': 'Sekolah Pintar • Fondasi Operasional E-Commerce',
      'certs.4.title': 'Strategi Pertumbuhan & Optimasi Konversi Marketplace II',
      'certs.4.issuer': 'Sekolah Pintar • Strategi Marketplace Lanjutan',

      'contact.eyebrow': 'BAB 06 • AKSES LANGSUNG KE PEMBUAT SISTEM',
      'contact.title': 'Butuh website kustom, sistem gudang, atau aplikasi operasional yang dibangun langsung tanpa markup agensi? Mari berdiskusi.',
      'contact.desc': 'Baik Anda mengelola gudang distribusi yang mulai kewalahan dengan spreadsheet, bisnis jasa yang membutuhkan kiosk absensi dan timer layanan, maupun usaha lokal yang siap tampil profesional di web — Anda akan berdiskusi langsung dengan saya, bukan tim sales.',
      'contact.trust1': 'Diskusi 1-on-1 Langsung dengan Kaffie',
      'contact.trust2': 'Disesuaikan dengan Alur Kerja Nyata Anda',
      'contact.trust3': 'Harga Jujur & Transparan Tanpa Birokrasi',
      'contact.wa.label': 'Chat Langsung via WhatsApp',
      'contact.email.label': 'Kirim Email',
      'contact.demo.label': 'Coba Live Demo Web UMKM',
      'contact.github.label': 'Profil & Repositori GitHub',

      'footer.role': 'Pembangun Sistem Independen • Founder Arbour OS',
      'footer.tagline': 'Dari lantai gudang hingga merilis software bisnis kustom. Dibangun mandiri bersama Arbour — tanpa biaya agensi, fokus pada dampak operasional nyata.',
      'footer.col1': 'Bab Cerita',
      'footer.col2': 'Tautan Langsung',
      'footer.showcase': 'Live Showcase 10 UMKM ↗',
      'footer.copyright': '© 2026 Ikhsanuddien Kaffie — Dibangun Mandiri bersama Arbour',
      'footer.backToTop': 'Kembali ke atas ↑'
    }
  };

  var currentLang = 'en';
  var langButtons = document.querySelectorAll('.lang-btn');
  var i18nElements = document.querySelectorAll('[data-i18n]');

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);

    var dict = I18N[lang];
    i18nElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    langButtons.forEach(function (btn) {
      var isMatch = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-pressed', String(isMatch));
    });
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetLang = this.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  // Ensure EN is loaded by default
  setLanguage('en');

  /* ==========================================================================
     2. SCROLL-AWARE NAVBAR & READING PROGRESS BAR
     ========================================================================== */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  var progressBar = document.getElementById('scroll-progress');
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('main > section[id]');

  function handleScrollMetrics() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // 1. Frosted light navbar transition once scrolled past Hero top
    if (nav) {
      nav.classList.toggle('scrolled', scrollTop > 40);
    }

    // 2. Top Dawn Gold reading progress bar
    if (progressBar) {
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      progressBar.style.width = pct.toFixed(2) + '%';
    }

    // 3. Active navigation link tracking
    var checkPos = scrollTop + (nav ? nav.offsetHeight : 76) + 120;
    var activeId = '';

    var archiveGroup = document.getElementById('archive-showcase');
    if (archiveGroup && checkPos >= archiveGroup.offsetTop && checkPos < archiveGroup.offsetTop + archiveGroup.offsetHeight) {
      activeId = 'archive-showcase';
    } else {
      sections.forEach(function (sec) {
        var top = sec.offsetTop;
        var height = sec.offsetHeight;
        if (checkPos >= top && checkPos < top + height) {
          activeId = sec.getAttribute('id');
        }
      });
    }

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + activeId);
    });
  }

  window.addEventListener('scroll', handleScrollMetrics, { passive: true });
  handleScrollMetrics();

  /* Mobile Drawer Toggle */
  function toggleMobileNav() {
    if (!navToggle || !navMenu) return;
    var isOpen = navMenu.classList.contains('open');
    navMenu.classList.toggle('open', !isOpen);
    navToggle.classList.toggle('active', !isOpen);
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    if (!isOpen && nav) {
      nav.classList.add('scrolled');
    } else {
      handleScrollMetrics();
    }
  }

  function closeMobileNav() {
    if (!navToggle || !navMenu) return;
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    handleScrollMetrics();
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileNav);
  }

  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMobileNav);
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 920) {
      closeMobileNav();
    }
  });

  /* ==========================================================================
     3. INTERACTIVE PROJECT FILTER PILLS (11 TOTAL: 4 FLAGSHIP, 1 FRONTIER, 6 ARCHIVE)
     ========================================================================== */
  var filterPills = document.querySelectorAll('.filter-pill');
  var projectItems = document.querySelectorAll('.project-item');
  var groupHeaderFlagship = document.querySelector('[data-group-header="flagship"]');
  var groupHeaderArchive = document.querySelector('[data-group-header="archive"]');

  function applyProjectFilter(filterValue) {
    filterPills.forEach(function (pill) {
      var isMatch = pill.getAttribute('data-filter') === filterValue;
      pill.classList.toggle('active', isMatch);
      pill.setAttribute('aria-selected', String(isMatch));
    });

    projectItems.forEach(function (item) {
      var cat = item.getAttribute('data-category') || '';
      var show = filterValue === 'all' || cat.split(' ').indexOf(filterValue) !== -1;
      item.classList.toggle('is-hidden', !show);
    });

    if (groupHeaderFlagship) {
      var showFlagshipHeader = filterValue === 'all' || filterValue === 'flagship' || filterValue === 'frontier';
      groupHeaderFlagship.classList.toggle('is-hidden', !showFlagshipHeader);
    }

    if (groupHeaderArchive) {
      var showArchiveHeader = filterValue === 'all' || filterValue === 'archive';
      groupHeaderArchive.classList.toggle('is-hidden', !showArchiveHeader);
    }
  }

  filterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var filterVal = this.getAttribute('data-filter') || 'all';
      applyProjectFilter(filterVal);
    });
  });

  /* Smooth Anchor Scrolling (and auto-unhide Archive if #archive-showcase clicked) */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      if (targetId === '#archive-showcase') {
        applyProjectFilter('all');
      }

      var targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      var navOffset = nav ? nav.offsetHeight : 76;
      var topPos = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;

      window.scrollTo({
        top: Math.max(0, topPos),
        behavior: 'smooth'
      });

      if (history.pushState) {
        history.pushState(null, '', targetId);
      }
    });
  });

  /* ==========================================================================
     4. CERTIFICATE LIGHTBOX MODAL
     ========================================================================== */
  var lightbox = document.getElementById('cert-lightbox');
  var lightboxBackdrop = document.getElementById('lightbox-backdrop');
  var lightboxClose = document.getElementById('lightbox-close');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxTitle = document.getElementById('lightbox-title');
  var lightboxIssuer = document.getElementById('lightbox-issuer');
  var lightboxOpenRaw = document.getElementById('lightbox-open-raw');
  var certCards = document.querySelectorAll('.cert-card');

  function openLightbox(src, title, issuer) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.setAttribute('src', src);
    lightboxImg.setAttribute('alt', title || 'Certificate Preview');
    if (lightboxTitle) lightboxTitle.textContent = title || '';
    if (lightboxIssuer) lightboxIssuer.textContent = issuer || '';
    if (lightboxOpenRaw) lightboxOpenRaw.setAttribute('href', src);

    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  certCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var src = this.getAttribute('data-cert-src');
      var h4 = this.querySelector('h4');
      var issuerEl = this.querySelector('.cert-issuer');
      var title = h4 ? h4.textContent : this.getAttribute('data-cert-title');
      var issuer = issuerEl ? issuerEl.textContent : this.getAttribute('data-cert-issuer');
      if (src) {
        openLightbox(src, title, issuer);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('open')) {
        closeLightbox();
      }
      if (navMenu && navMenu.classList.contains('open')) {
        closeMobileNav();
      }
    }
  });

  /* ==========================================================================
     5. GENTLE SCROLL REVEAL (IntersectionObserver)
     ========================================================================== */
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -48px 0px',
        threshold: 0.08
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

})();
