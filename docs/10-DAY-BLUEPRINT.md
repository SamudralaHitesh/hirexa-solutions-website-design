# Hirexa Solutions — 10-Day Website Redesign Blueprint

A structured, day-by-day architectural blueprint to solve all 15 identified issues across Information Architecture, UX/UI design, lead generation funnels, career portal experience, and content consolidation for **Hirexa Solutions**.

---

## 🎯 Executive Summary & Issue Mapping Matrix

| # | Identified Issue | Root Cause | Proposed Solution in Blueprint | Targeted Day |
|---|---|---|---|---|
| **1** | Too many services (10+ listed) | Service catalog overwhelm; lack of categorization | Consolidate into 3 Core Pillars + Interactive Service Selector | Day 1, Day 4 |
| **2** | Service navigation unclear | Fragmentation across siloed pages | "Which Service Do You Need?" Guided Flow + Service Matrix | Day 1, Day 3, Day 4 |
| **3** | Weak CTA / conversion journey | Generic "Contact Us" forms without intent | Persona-specific high-intent CTAs (Hire Talent / Find Job / Consult) | Day 3, Day 8 |
| **4** | Careers page basic search | Plain text search without faceted filters | Modern filterable job board (Tech stack, location, work model) | Day 6 |
| **5** | Job application form too sparse | Basic name/email form misses crucial qualification | Multi-step candidate application (Resume drop, skills, CTC, notice) | Day 7 |
| **6** | Software Services info-heavy | Monolithic text walls for 7+ sub-domains | Modular Bento-grid cards, domain clusters & tabbed capabilities | Day 5 |
| **7** | Repeated "NetCraft" entries | Portfolio placeholder duplication | Replace with distinct enterprise case study cards | Day 5 |
| **8** | Weak case-study structure | Services listed without business results | STAR framework: Problem → Solution → Tech Stack → Verified ROI | Day 5 |
| **9** | Audience paths not separated | Hirers, candidates & software clients mixed | 3-way Top Navigation & Hero Audience Switcher | Day 1, Day 3 |
| **10** | Generic contact form | No lead qualification or routing | Dynamic multi-step RFP form with conditional logic | Day 8 |
| **11** | Cluttered global office list (8+ countries) | Long unstructured list of global addresses | Interactive SVG World Map + Regional Selector (US, EU, India) | Day 8 |
| **12** | Heavy textual explanations | Low visual scannability on Staffing/RPO | Infographics, Comparison Tables (RPO vs Staffing vs GCC), FAQs | Day 4 |
| **13** | Proof points detached from services | Homepage stats not backed by evidence | Contextual stat callouts linked to verified client stories | Day 3, Day 5 |
| **14** | Legacy/duplicate content | Unmaintained pages & unstructured URLs | Content consolidation matrix + 301 redirect map | Day 1, Day 9 |
| **15** | No visible end-to-end lead tracking | No funnel stages or CRM attribution | Multi-funnel event tracking architecture (GA4, GTM, CRM webhook) | Day 1, Day 9 |

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
*Addresses Issues: #1 (Too many services), #2 (Navigation), #9 (Audience separation), #14 (Legacy cleanup), #15 (Funnel design)*

- **Objective**: Establish the foundation, eliminate duplication, and map visitor journeys.
- **Key Deliverables**:
  1. **Audience Persona Mapping**:
     - *Persona A (Enterprise Talent Leader)*: Needs RPO, GCC setup, or high-volume tech staffing.
     - *Persona B (CTO / Head of Engineering)*: Needs dedicated software engineering teams or digital transformation.
     - *Persona C (Mid/Senior Candidate)*: Wants high-paying global opportunities, easy search, transparent application.
  2. **Consolidated Sitemap & Navigation Spec**:
     - Modern Mega-Menu with 3 main pillars and clear sub-links.
     - Header Quick Switcher: `[ For Employers ]` | `[ Software Engineering ]` | `[ For Job Seekers ]`.
  3. **Content Audit & Cleanup Plan**:
     - Map existing URLs, identify duplicate/legacy pages (especially under Software Services and Staffing variations).
     - Establish 301 redirection rules and content deprecation list.
  4. **Lead Funnel Tracking Architecture**:
     - Define 4 distinct conversion funnels:
       - Funnel A: Employer Talent Inquiries (RFP)
       - Funnel B: Software Project Scope Submission
       - Funnel C: Direct Candidate Job Applications
       - Funnel D: General / Partnership Inquiries

---

### Day 2: Design System, Brand Refresh & UI Component Kit
*Addresses Issues: #6 (Readability), #12 (Text heaviness), Visual Modernization*

- **Objective**: Create a modern, world-class enterprise visual design system that conveys trust, speed, and global scale.
- **Key Deliverables**:
  1. **Typography & Hierarchy**:
     - Primary Headings: **Outfit** or **Plus Jakarta Sans** (clean, geometric, commanding).
     - Body & Data: **Inter** (high legibility for tables, job specs, and forms).
  2. **Color Palette & Glassmorphic Accents**:
     - Deep Trust Navy (`#0A1128`) & Midnight Slate (`#101828`) for enterprise authority.
     - Electric Cobalt (`#2563EB`) & Cyber Cyan (`#06B6D4`) as active accents and conversion focus.
     - Clean Neutral Off-White (`#F8FAFC`) with subtle dark-mode capability.
  3. **Component Kit Specifications**:
     - **Service Bento Cards**: Clean grid cards with icon, metric badge, bullet highlights, and direct CTA.
     - **Comparison Tables**: Side-by-side comparison styling for Staffing vs RPO vs GCC.
     - **Interactive Badges**: Skill chips, remote/hybrid pills, location tags.
     - **Interactive Accordions**: For FAQs and capability drill-downs.

---

### Day 3: Homepage Redesign — First Impression & Guided Routing
*Addresses Issues: #1 (Too many services), #2 (Guided navigation), #3 (CTAs), #9 (Audience separation), #13 (Proof points)*

- **Objective**: Turn the homepage from an overwhelming catalog into an engaging, high-converting gateway.
- **Key Deliverables & Section Wireframes**:
  1. **Hero Section with Dual-Path Routing**:
     - Bold value proposition: *"Powering Global Enterprise Growth Through Specialized Talent & Digital Engineering."*
     - Segmented Hero Actions:
       - Primary CTA: `[ Hire Talent / Build a Team ]` (opens modal/smart wizard)
       - Secondary CTA: `[ Explore Software Services ]`
       - Candidate Link: `[ Looking for your next career move? Explore 150+ Open Roles -> ]`
  2. **Verified Proof Points & Metrics Engine**:
     - Rather than static numbers, each counter connects to tangible proof:
       - `500+` Enterprise Placements *-> (Linked to Fortune 500 Case Study)*
       - `8` Global Delivery Hubs *-> (Linked to Global Map)*
       - `98%` Retention Rate *-> (Linked to Client Testimonial)*
       - `48-Hour` Average Candidate Shortlist SLA
  3. **"Which Service Do You Need?" Interactive Decision Wizard**:
     - Step 1: "What is your primary goal?" (Options: Hire Tech Talent / Build a Dedicated Offshore Center / Outsource a Software Project / Global Payroll).
     - Step 2: "What is your timeline / volume?"
     - Step 3: Instant recommendation card with direct consultation booking.

---

### Day 4: Core Talent & Enterprise Solutions Hub + Comparison Architecture
*Addresses Issues: #1 (Service grouping), #2 (Clarity), #12 (Text-heavy content)*

- **Objective**: Modernize Staffing, RPO, GCC, and Global Mobility pages with scannable visuals and comparative clarity.
- **Key Deliverables**:
  1. **Talent Services Hub Layout**:
     - Top toggle tabs: `[ Contingent & Contract ]` | `[ Permanent / FTE ]` | `[ Executive Search ]` | `[ Talent Intelligence ]`.
     - 3-point feature highlights per service: *Ideal For*, *SLA / Delivery Model*, *Key Deliverables*.
  2. **Enterprise Scaling Suite (RPO & GCC)**:
     - **Interactive GCC Setup Roadmap**: Visual 4-stage diagram (Strategy & Location Selection → Infrastructure & Legal BOT → Core Talent Ingestion → Full Operations Handover).
  3. **The "Hiring Models Compared" Interactive Table**:
     - Side-by-side visual matrix comparing:
       - Cost structure (Markup vs Fixed Fee vs Project-based)
       - Time to deploy
       - Management overhead
       - Long-term IP ownership

---

### Day 5: Software & Digital Services Page Overhaul & Case Study Engine
*Addresses Issues: #6 (Software services clutter), #7 (Duplicate NetCraft entries), #8 (Case study format), #13 (Proof points)*

- **Objective**: Restructure Software Services into clear capability clusters and replace repetitive placeholders with convincing case studies.
- **Key Deliverables**:
  1. **Service Decomposition into 4 Clear Capability Pillars**:
     - *Pillar A*: Custom Software & Cloud Native Engineering (Microservices, DevOps, AWS/Azure/GCP).
     - *Pillar B*: Enterprise Data & AI/RPA Automation (ETL, PowerBI, Intelligent Process Automation).
     - *Pillar C*: Digital Product Experience & UX/UI (Design sprints, Design systems, Mobile apps).
     - *Pillar D*: QA Automation & Cybersecurity (End-to-end testing, compliance audits).
  2. **NetCraft Placeholder Resolution & Clean Case Study Gallery**:
     - Remove duplicate generic NetCraft cards.
     - Replace with 4 distinct, structured case studies using the **STAR Framework**:
       - **Fintech Cloud Migration**: Scaled payment processing to 2.4M daily transactions with 99.99% uptime.
       - **Healthcare Data Analytics Platform**: Reduced patient data ingestion time by 65%.
       - **Automated RPA Workflow for Global Logistics**: Saved 1,200 manual operational hours/month.
       - **Cross-Platform Mobile App for Retail**: 4.8-star user rating, 300k+ active users.
  3. **Standard Case Study Layout Template**:
     - `[ The Challenge ]` (Client context & bottleneck)
     - `[ The Hirexa Solution ]` (Architecture, team composition, methodology)
     - `[ Technologies Used ]` (Interactive tech badges: React, Node.js, Python, AWS, Snowflake, etc.)
     - `[ Measurable Business Outcomes ]` (Quantified metrics in high-visibility stat blocks)

---

### Day 6: Next-Gen Careers Portal & Intelligent Job Board
*Addresses Issue: #4 (Careers page search & UX)*

- **Objective**: Elevate the candidate experience to rival leading modern tech recruitment platforms.
- **Key Deliverables**:
  1. **Faceted Instant Job Search Bar**:
     - Search by keyword / job title.
     - Dropdown filters:
       - **Domain/Function**: (Software Engineering, Data & AI, Cloud & DevOps, Product Management, Corporate).
       - **Work Style**: (Remote, Hybrid, On-site).
       - **Location**: (USA, UK, Germany, Poland, India - Bangalore/Hyderabad/Pune, etc.).
       - **Seniority**: (Entry, Mid, Senior, Lead, Executive).
  2. **Job Listing Card Design**:
     - Role Title, Department, Location pill, Work Model badge, Posting freshness.
     - "Quick View" drawer allowing candidates to preview description and salary range without losing search state.
  3. **"Life at Hirexa & Perks" Community Section**:
     - Visual snapshot of global team, continuous learning allowances, visa/mobility support, and diversity metrics.

---

### Day 7: High-Conversion Candidate Application Engine
*Addresses Issue: #5 (Application form lacking qualification)*

- **Objective**: Replace basic 4-field forms with a frictionless, high-information candidate capture funnel.
- **Key Deliverables**:
  1. **Two-Step Smart Application Modal**:
     - **Step 1: Rapid Profile Ingestion**
       - Drag & drop Resume (PDF/DOCX) with simulated parsing feedback.
       - Quick LinkedIn profile URL import.
       - Primary contact info (Name, Email, Phone, Current Location).
     - **Step 2: Candidate Qualification Attributes**
       - Total Years of Experience & Primary Tech Stack / Skills (Tag selection).
       - Current Notice Period (Immediate, 15 days, 30 days, 60+ days).
       - Work Authorization status in selected job country.
       - Compensation expectations (optional/range).
  2. **"General Talent Pool" Fast-Track**:
     - For candidates who don't see an open role: "Can't find your match? Drop your CV for confidential priority matching."
  3. **Applicant Confirmation & Transparency Experience**:
     - Automated confirmation status page outlining the 4-step interview and placement process.

---

### Day 8: Dynamic Lead Qualification Engine & Global Footprint Hub
*Addresses Issues: #3 (CTAs), #10 (Contact form lead qualification), #11 (Global office selector)*

- **Objective**: Qualify incoming employer leads automatically and present Hirexa's global footprint elegantly.
- **Key Deliverables**:
  1. **Interactive Global Presence Hub**:
     - Visual SVG World Map with interactive markers for North America, EMEA, and APAC.
     - Region Tabs: `[ North America ]` | `[ Europe (UK, Germany, Poland, Bulgaria, Netherlands, Spain) ]` | `[ India & APAC ]`.
     - Each office card displays: Local physical address, Local working hours/time zone indicator, Direct phone, and Dedicated regional contact email.
  2. **Dynamic Multi-Step Lead Qualification Form ("Submit Hiring Requirement / RFP")**:
     - **Step 1: Intent**: What service do you need? (Contract Staffing / RPO / GCC Setup / Software Team / Global Payroll).
     - **Step 2: Scale**: How many positions or team size? (1–5 roles / 5–20 roles / 20+ Enterprise / Project-based).
     - **Step 3: Details**: Skill domain, target start date, and preferred engagement model.
     - **Step 4: Contact & Company**: Name, Work Email, Company Name, Country.
  3. **Lead Routing Logic**:
     - Automatically routes Enterprise GCC queries to GCC practice leads; Software queries to Engineering directors; Staffing queries to regional recruiters.

---

### Day 9: Lead Funnel Analytics, SEO & Legacy Content Consolidation
*Addresses Issues: #14 (Legacy cleanup), #15 (End-to-end lead tracking)*

- **Objective**: Wire up conversion tracking, ensure zero broken links, and maximize organic search performance.
- **Key Deliverables**:
  1. **Event & Funnel Tracking Architecture**:
     - Google Tag Manager (GTM) data layer event triggers:
       - `lead_form_start` & `lead_form_step_complete`
       - `hiring_rfp_submit` (with service & volume metadata)
       - `candidate_job_apply_submit` (with role ID and department)
       - `service_wizard_completed` (with recommended solution)
       - `office_contact_click` (by country)
  2. **CRM Webhook & Attribution Spec**:
     - Standardized JSON payload schema for direct integration into HubSpot / Salesforce / Zoho CRM.
     - UTM tracking preservation (Source, Medium, Campaign, Term, Content).
  3. **SEO & Structured Data (Schema.org)**:
     - `JobPosting` schema markup for each career listing.
     - `Organization` and `LocalBusiness` schema for global office locations.
     - `Service` schema for RPO, Staffing, and Software capabilities.
  4. **301 Redirect Mapping & URL Sanitization**:
     - Comprehensive spreadsheet of old URLs mapped to new streamlined permalinks.

---

### Day 10: Performance Optimization, Cross-Device QA & Launch Plan
*Addresses: Production Readiness, Accessibility, Speed*

- **Objective**: Ensure lightning-fast performance, full mobile responsiveness, and client sign-off.
- **Key Deliverables**:
  1. **Performance & Core Web Vitals**:
     - Target: 90+ score on Google Lighthouse (Performance, Accessibility, Best Practices, SEO).
     - Image optimization (modern WebP/AVIF formats, responsive srcset).
     - Zero cumulative layout shift (CLS).
  2. **Device & Browser Matrix QA**:
     - Responsive verification across Desktop (1440px+), Laptop (1024px), Tablet (768px), and Mobile (375px/414px).
     - Form validation tests (error states, field masks, file upload constraints).
  3. **Deployment & Phased Rollout Plan**:
     - Staging deployment and end-to-end user testing.
     - DNS switchover checklist and post-launch monitoring.

---

## 🚦 Verification & Review Checkpoints

| Checkpoint | Day | Milestone | Verification Method |
|---|---|---|---|
| **CP 1** | Day 2 | Information Architecture & Style Guide | Sitemap and color/typography approval |
| **CP 2** | Day 5 | Homepage & Core Services UX | Interactive wireframe/prototype walkthrough |
| **CP 3** | Day 7 | Careers & Application Engine | Functional test of job search, filters & resume upload |
| **CP 4** | Day 9 | Contact Funnels & Analytics Integration | End-to-end lead qualification test submission & GTM debug |
| **CP 5** | Day 10 | Final QA & Performance | Lighthouse audit report, cross-browser validation |
