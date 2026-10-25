# CoreCodeX — Enterprise MERN + Next.js Platform

> **Next-Gen Digital & AI Engineering Agency**  
> Architecting high-performance web applications, mobile platforms, enterprise AI integrations, and autonomous conversational agents.

---

## 🌟 Architectural Overview

CoreCodeX is structured as a production-grade **MERN** monorepo:
- **Frontend**: **Next.js 15+ (App Router)** with TypeScript, Three.js 3D Interactive Canvas, CSS 3D parallax tilt, multi-theme switching (Cyber Obsidian, Titanium Light, Midnight Matrix Neon), and the floating capsule pill navbar matching modern enterprise standards.
- **Backend**: **Node.js / Express MVC Architecture** (Models, Views/Responses, Controllers, Config, Middlewares), MongoDB connection with resilient in-memory fallback, and centralized error logging.

```
CoreCodeX/
├── client/                     # Next.js 15 App Router Frontend
│   ├── public/
│   │   └── assets/
│   │       ├── 3d/             # 3D holographic CoreCodeX quantum assets
│   │       ├── portfolio/      # Live UI showcase mockups (PaxTechs, Fluteon, NHotels, Great Popular Band)
│   │       └── reviews/        # Verified client avatar headshots
│   ├── src/
│   │   ├── app/                # Dedicated App Router Pages
│   │   │   ├── page.tsx        # High-Impact Executive Landing Overview
│   │   │   ├── about/          # /about — Company, Vision & Leadership
│   │   │   ├── services/       # /services — Detailed 5 Core Services & Architecture
│   │   │   ├── work/           # /work — Our Work, 4 Case Studies & Live Links
│   │   │   ├── reviews/        # /reviews — Verified Client Reviews & Submission
│   │   │   ├── estimator/      # /estimator — Interactive Cost & Timeline Calculator
│   │   │   ├── contact/        # /contact — Direct Call Hub & Query Form
│   │   │   └── api/contact/    # API Route Handler for Queries
│   │   ├── components/
│   │   │   ├── 3d/             # Three.js WebGL canvas, 3D tilt cards
│   │   │   ├── common/         # PillNavbar, ThemeSwitcher, Button (with loader), Loader, Modal, Footer
│   │   │   └── sections/       # HeroSection, ServicesSection, PortfolioSection, ReviewsSection, EstimatorSection, TrustSection, ContactSection
│   │   ├── config/             # site.config.ts, services.config.ts, portfolio.config.ts, reviews.config.ts, contact.config.ts
│   │   ├── context/            # ThemeContext.tsx (Dark / Light / Neon mode)
│   │   ├── lib/                # api.ts (resilient client API handler)
│   │   └── types/              # index.ts (TypeScript interface definitions)
│   ├── .env.local              # Frontend environment variables
│   └── .env.example
│
├── server/                     # Express MVC Backend Engine
│   ├── src/
│   │   ├── config/             # db.js (MongoDB connection with graceful fallback), env.js
│   │   ├── controllers/        # queryController.js, reviewController.js, projectController.js
│   │   ├── middlewares/        # errorHandler.js, logger.js
│   │   ├── models/             # Query.js, Review.js, Project.js
│   │   ├── routes/             # queryRoutes.js, reviewRoutes.js, projectRoutes.js, contactRoutes.js
│   │   └── server.js           # Express main server entry point
│   ├── .env                    # Backend environment variables
│   └── .env.example
│
├── package.json                # Root workspace script runner
└── README.md
```

---

## 🎨 Design System & Color Modes

We avoid generic light-blue/white styling in favor of three bespoke luxury palettes:
1. **Cyber Obsidian (Dark Mode)**: Deep galactic space `#07080D`, electric cyber violet `#8B5CF6`, neon teal `#06B6D4`, and frosted glass card surfaces.
2. **Titanium Light**: Crisp frosted platinum `#F4F6FB`, deep slate charcoal typography `#0F172A`, and royal indigo accents `#4F46E5`.
3. **Midnight Matrix (Neon Cyberpunk)**: Pitch blackout `#040608`, radioactive neon emerald `#10B981`, and cyber magenta `#F43F5E`.

### Floating Pill Header
- Capsule-shaped navigation floating centered at top with frosted glassmorphism backdrop blur (`backdrop-filter: blur(16px)`).
- Brand icon on left, navigation dropdown in center, integrated 3-mode Theme Switcher, and glowing "Get Started ->" pill CTA.

---

## 🚀 Services Provided

1. **Web & Web App Development**: Ultra-fast Next.js edge applications, SSR/SSG, microfrontends, headless CMS, and sub-second load times.
2. **Mobile App Development**: Native iOS (Swift), Android (Kotlin), and unified cross-platform apps with React Native & Flutter.
3. **Enterprise AI Integration**: Frontier model orchestration (Gemini, GPT-4o, Claude 3.5), proprietary RAG retrieval pipelines, and vector databases.
4. **AI Chatbots & Voice Agents**: 24/7 autonomous conversational customer support and sales agents deployed to Web, WhatsApp Business, Telegram, and voice.
5. **AI / Machine Learning Engineering**: Domain model fine-tuning, computer vision, recommendation algorithms, and predictive analytics.

---

## 💼 Featured Client Works & Metrics

- **[PaxTechs](https://paxtechs.com)** — Financial & IT Systems Platform
  - *Metrics*: 0.12ms API latency, 99.99% uptime, +140% conversion lift.
- **[Fluteon](https://fluteon.com)** — Luxury Formal Fashion & E-Commerce
  - *Metrics*: 0.8s page speed, 94.2% checkout success rate, pan-India distribution.
- **[NHotels](https://nhotels.com)** — Luxury 5-Star Boutique Hospitality & Suite Booking Engine
  - *Metrics*: <400ms search latency, +62% direct reservations, 24/7 availability.
- **[Great Popular Band](https://greatpopularband.com)** — Royal Wedding & Event Entertainment Platform
  - *Metrics*: 350+ inquiries/month, 5.0 ★ verified reviews, 95% booking automation.

---

## 📞 Direct Contact & Founders

Clients can choose **Option 1: Direct Call** or **Option 2: Interactive Query Form**:

- **Sahil Prasad** — Co-Founder & Chief Solutions Architect
  - **Phone**: `6354729042`
  - **Location**: Vadodara, Gujarat, India
- **Shubham Singh** — Operations & Engineering Director
  - **Phone**: `9559506650`
  - **Email**: `shubham.singh7985@gmail.com`
  - **Location**: Haridwar, Uttarakhand, India

---

## 🛠️ Quick Start

### 1. Run Everything Concurrently
From the root directory:
```bash
npm run dev
```

### 2. Or Run Separately

**Backend Server (Port 5000):**
```bash
cd server
npm install
npm run dev
```

**Next.js Frontend (Port 3000):**
```bash
cd client
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
