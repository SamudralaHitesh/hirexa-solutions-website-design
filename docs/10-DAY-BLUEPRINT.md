# Hirexa Solutions — 10-Day Website Redesign Blueprint

A structured, day-by-day architectural blueprint to solve all 15 identified issues across Information Architecture, UX/UI design, lead generation funnels, career portal experience, and content consolidation for **Hirexa Solutions**.

---

## 🎯 Executive Summary & Issue Mapping Matrix

| # | Identified Issue | Root Cause | Proposed Solution in Blueprint | Targeted Day |
|---|---|---|---|:---:|
| **1** | Too many services (10+ listed) | Service catalog overwhelm; lack of categorization | Consolidate into 3 Core Pillars + Interactive Service Selector | **Day 1** (✅ Solved) |
| **2** | Service navigation unclear | Fragmentation across siloed pages | "Which Service Do You Need?" Guided Flow + Mega-Menu | **Day 1** (✅ Solved) |
| **3** | Weak CTA / conversion journey | Generic "Contact Us" forms without intent | Persona-specific high-intent CTAs (Hire Talent / RFP / Consult) | **Day 3** |
| **4** | Careers page basic search | Plain text search without faceted filters | Modern filterable job board (Tech stack, location, work model) | **Day 6** |
| **5** | Job application form too sparse | Basic name/email form misses crucial qualification | Multi-step candidate application (Resume drop, skills, CTC, notice) | **Day 7** |
| **6** | Software Services info-heavy | Monolithic text walls for 7+ sub-domains | Modular Bento-grid cards, domain clusters & tabbed capabilities | **Day 2** |
| **7** | Repeated "NetCraft" entries | Portfolio placeholder duplication | Replace with distinct enterprise case study cards | **Day 5** |
| **8** | Weak case-study structure | Services listed without business results | STAR framework: Problem → Solution → Tech Stack → Verified ROI | **Day 5** |
| **9** | Audience paths not separated | Hirers, candidates & software clients mixed | 3-way Top Navigation & Hero Audience Switcher | **Day 1** (✅ Solved) |
| **10** | Generic contact form | No lead qualification or routing | Dynamic multi-step RFP form with conditional logic | **Day 8** |
| **11** | Cluttered global office list (8+ countries) | Long unstructured list of global addresses | Interactive SVG World Map + Regional Selector (US, EU, India) | **Day 8** |
| **12** | Heavy textual explanations | Low visual scannability on Staffing/RPO | Infographics, Comparison Tables (RPO vs Staffing vs GCC), FAQs | **Day 4** |
| **13** | Proof points detached from services | Homepage stats not backed by evidence | Contextual stat callouts linked to verified client stories | **Day 3** |
| **14** | Legacy/duplicate content | Unmaintained pages & unstructured URLs | Content consolidation matrix + 301 redirect map | **Day 9** |
| **15** | No visible end-to-end lead tracking | No funnel stages or CRM attribution | Multi-funnel event tracking architecture (GA4, GTM, CRM webhook) | **Day 9** |

---

## 🗺️ High-Level Information Architecture (IA) Redesign

### Current State (Fragmented)
```
Home -> Staffing | RPO | GCC | FTE | Contract | Exec Research | Software | Market Research | Payroll | Mobility | Careers | Contact
```

### Proposed Redesigned IA (Streamlined & Persona-Driven)
```
Hirexa Solutions
├── 1. For Employers (Talent Solutions)
│   ├── Contract & Contingent Staffing
│   ├── Full-Time Equivalent (FTE) & Direct Hire
│   ├── Executive Search & Leadership
│   ├── Talent Market Intelligence & Benchmarking
│   └── ⚡ "Compare Hiring Models" Matrix
├── 2. Enterprise Scaling & Global Operations
│   ├── Recruitment Process Outsourcing (RPO)
│   ├── Global Capability Centers (GCC Setup & BOT)
│   ├── Global Mobility & Relocation Services
│   └── Multi-Country Payroll & Compliance
├── 3. Digital & Software Services
│   ├── Custom Enterprise Software Engineering
│   ├── Cloud, DevOps & Infrastructure
│   ├── Data Analytics & AI/RPA Automation
│   ├── UI/UX & Digital Product Design
│   └── ⚡ Case Studies & Client Success Stories
├── 4. Careers & Talent Community
│   ├── Live Open Positions (Faceted Search)
│   ├── Life at Hirexa & Consultant Benefits
│   └── Talent Pool Registration (Fast-Track CV Drop)
├── 5. About & Global Footprint
│   ├── About Us, Leadership & Mission
│   └── Interactive Global Presence (Americas, EMEA, APAC)
└── 6. Interactive Tools & Conversion Engines
    ├── "Which Service Do You Need?" Wizard
    ├── Cost-of-Hire & GCC ROI Calculator
    └── Request a Proposal (Smart RFP Form)
```

---

## 📅 10-Day Detailed Day-by-Day Redesign Blueprint

### Day 1: Information Architecture, Persona Journeys & Content Audit
*Addresses Issues: #1 (Too many services), #2 (Navigation), #9 (Audience separation)* — **✅ COMPLETED**
- **Objective**: Establish the foundation, eliminate duplication, and map visitor journeys.
- **Key Deliverables**:
  1. **Audience Persona Mapping**: Top Persona Switcher Bar (`[ For Enterprises & Hirers ]` \| `[ Software & Digital Engineering ]` \| `[ For Job Seekers ]`).
  2. **Consolidated Sitemap & Navigation Spec**: Modern Mega-Menu organizing 10+ services into 3 strategic pillars.
  3. **"Which Service Do You Need?" Interactive Guided Selector**: 20-second wizard guiding visitors to the right solution.

---

### Day 2: Design System & Software Services Visual Bento Grid
*Addresses Issue: #6 (Software Services info-heavy)*
- **Objective**: Transform monolithic text walls into scannable Bento-grid visual cards and establish the enterprise design system.
- **Key Deliverables**:
  1. **Enterprise Color Palette & Typography**: Midnight Navy, Cyber Cyan, and `Outfit` + `Inter` typography.
  2. **Bento Grid Cards**: Modular capability cards for Custom Software, Cloud/DevOps, AI/RPA, and UX/UI.

---

### Day 3: Homepage Redesign, Dual-Path Hero & Proof Points Engine
*Addresses Issues: #3 (Weak CTAs), #13 (Proof points detached)*
- **Objective**: Make the homepage a high-converting gateway with clear CTAs and evidence-backed numbers.
- **Key Deliverables**:
  1. **Dual-Action Hero**: Targeted action buttons (`[ Hire Talent ]` vs `[ Explore Software ]`).
  2. **Verified Metrics Counter**: Connect metrics (500+ placements, 8 delivery hubs, 98% retention) to real client evidence.

---

### Day 4: Core Talent Hub & "Hiring Models Compared" Matrix
*Addresses Issue: #12 (Large textual content / low scannability)*
- **Objective**: Replace text-heavy explanations on Staffing and RPO with comparative visual tables.
- **Key Deliverables**:
  1. **Side-by-Side Comparison Matrix**: Compare Contract Staffing vs Direct Hire vs RPO vs GCC on cost, speed, SLA, and IP ownership.
  2. **Interactive GCC BOT Setup Roadmap**: Visual 4-stage diagram from strategy to handover.

---

### Day 5: Portfolio Overhaul & STAR Case Study Suite
*Addresses Issues: #7 (Repeated NetCraft entries), #8 (Weak case study presentation)*
- **Objective**: Eliminate duplicate "NetCraft" placeholders and showcase 4 verifiable enterprise case studies.
- **Key Deliverables**:
  1. **Remove Duplicate Placeholders**: Replace NetCraft repetition with 4 distinct client projects.
  2. **STAR Framework Case Studies**: Problem → Solution → Tech Stack → Verified ROI (Fintech, Healthtech, Logistics RPA, Mobile Retail).

---

### Day 6: Next-Gen Careers Portal & Intelligent Job Board
*Addresses Issue: #4 (Careers page basic search)*
- **Objective**: Build a high-performance, filterable job board for tech candidates.
- **Key Deliverables**:
  1. **Faceted Search Filters**: Search by Keyword, Domain, Work Style (Remote/Hybrid/Onsite), Seniority, and Location.
  2. **Job Quick-View Drawer**: Inspect role descriptions without losing search state.

---

### Day 7: High-Conversion Candidate Application Engine
*Addresses Issue: #5 (Application form lacking qualification data)*
- **Objective**: Upgrade basic forms into a frictionless, high-information candidate capture engine.
- **Key Deliverables**:
  1. **2-Step Smart Modal**: Resume drag-and-drop, skill tags, current notice period, and CTC expectations.
  2. **General Talent Pool CV Drop**: Quick submission for passive talent.

---

### Day 8: Dynamic RFP Lead Qualification Engine & Interactive Global Map
*Addresses Issues: #10 (Generic contact form), #11 (Cluttered global office list)*
- **Objective**: Automatically qualify enterprise hiring leads and present global office locations elegantly.
- **Key Deliverables**:
  1. **Interactive SVG World Map**: Interactive map with regional office cards (US, UK, Germany, Poland, India).
  2. **Smart Multi-Step RFP Form**: 4-step intake (Service needed → Team volume → Timeline → Contact info) with CRM routing.

---

### Day 9: Legacy Content Cleanup, 301 Redirects & Funnel Analytics
*Addresses Issues: #14 (Legacy cleanup), #15 (Lead tracking)*
- **Objective**: Clean up legacy URLs, ensure zero broken links, and configure analytics event tracking.
- **Key Deliverables**:
  1. **Funnel Event Tracking**: GA4 and GTM triggers for RFP completions, CV drops, and persona switches.
  2. **301 Redirects & Schema.org**: Clean URL mapping and structured JSON-LD data for Google SEO.

---

### Day 10: Performance Optimization, Cross-Device QA & Live Launch
*Addresses: All 15 Issues (Production Readiness)*
- **Objective**: Full mobile testing, performance audit, and production launch.
- **Key Deliverables**:
  1. **Lighthouse Audit**: Target 90+ across Performance, Accessibility, and SEO.
  2. **Cross-Device QA**: Verified across Mobile, Tablet, Laptop, and 4K desktop screens.
  3. **Live Vercel Production Release**.
