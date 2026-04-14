# 📄 Product Requirements Document (PRD)
## Abu Usama — Next-Gen Personal Portfolio & Resource Hub
**Version:** 1.0  
**Date:** April 2026  
**Author:** Abu Usama (Usama Munawar)  
**Stack:** React.js + Tailwind CSS + Framer Motion  

---

## 1. Project Overview

### 1.1 Background
The current portfolio (usamamunawarr.github.io) is a basic HTML/CSS site built on an HTML5 UP template. While functional, it lacks interactivity, modern aesthetics, and the content depth needed to reflect Usama's current MPhil-level expertise. The new version will be a full-featured personal brand website — a hybrid portfolio + learning resource hub — inspired by Codanics.com's content depth and abu-usama.netlify.app's professional presentation.

### 1.2 Vision
Build a world-class, aesthetically stunning personal website that:
- Showcases Usama as an MPhil Statistics researcher and Data Scientist
- Serves as a free learning resource hub for students in Pakistan
- Drives engagement through blogs, courses, tools, and books/notes
- Positions Usama as a credible academic + industry figure

### 1.3 Goals
| Goal | Metric |
|---|---|
| Modern, memorable UI | Unique aesthetic — dark futuristic / data-science themed |
| Complete brand platform | 7+ pages covering all content categories |
| SEO-ready | Meta tags, structured content, fast load |
| Mobile-first responsive | Works on all screen sizes |
| Deployable on GitHub Pages / Netlify | Free hosting compatible |

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Frontend Framework | **React.js (Vite)** | Component-based, fast, industry standard |
| Styling | **Tailwind CSS** | Utility-first, rapid UI dev, responsive |
| Animations | **Framer Motion** | Smooth, professional page transitions & scroll effects |
| Icons | **Lucide React / React Icons** | Clean icon set covering all needs |
| Routing | **React Router DOM v6** | Multi-page SPA navigation |
| Fonts | **Google Fonts** (Syne + DM Sans) | Distinctive display + clean body pairing |
| Deployment | **GitHub Pages / Netlify** | Free, fast, CI/CD friendly |
| Optional CMS | **Markdown + gray-matter** | For blogs and notes without a backend |

---

## 3. Site Architecture (Pages)

```
/                    → Home Page
/about               → About Me
/tools               → Data Science Tools & Software Setups
/projects            → Projects Portfolio
/blogs               → Blog & Articles
/courses             → Courses & Learning
/books-notes         → Books & Study Notes
/contact             → Contact Me
```

---

## 4. Page-by-Page Requirements

---

### 4.1 🏠 Home Page (`/`)

**Purpose:** First impression — hook visitors, establish brand, show highlights.

#### Sections:
1. **Hero Section**
   - Full-viewport animated hero
   - Animated text: "I'm Abu Usama — Statistician | Data Scientist | ML Researcher"
   - Typewriter animation cycling through roles
   - CTA buttons: "View My Work" + "Hire Me / Contact"
   - Floating data-science decorative elements (charts, nodes, code snippets in background)
   - Profile photo with glowing ring / glassmorphism card

2. **Stats Bar**
   - Animated counters: 30+ Projects | 60+ Students | 3+ Years | MPhil Researcher
   - Horizontal scrolling strip or card row

3. **About Snapshot**
   - 2–3 sentence bio
   - Link to full About page

4. **Skills Preview**
   - Animated skill bars or tag cloud
   - Python, R, ML, Deep Learning, SQL, Power BI, SPSS, Streamlit, etc.

5. **Featured Projects**
   - 3 featured project cards with hover effects
   - Stack tags, description, GitHub link

6. **Latest Blog Posts**
   - 3 latest blog cards (thumbnail, title, date, excerpt)

7. **Courses/Resources Teaser**
   - Grid preview of courses / learning resources

8. **Testimonials / Social Proof**
   - Client/student reviews carousel (from abu-usama.netlify.app data)

9. **Contact CTA Strip**
   - "Let's Work Together" with email + WhatsApp buttons

---

### 4.2 👨‍💼 About Page (`/about`)

**Purpose:** Deep-dive into Usama's story, credentials, timeline.

#### Sections:
1. **Hero with photo** — Large profile, name, title
2. **Personal Bio** — Narrative story (from BS → MPhil → Research)
3. **Education Timeline** — Visual vertical timeline
   - Matric, Intermediate, BS Statistics (UOG), MPhil Statistics (ongoing)
4. **Certifications Grid**
   - IBM Data Science, Google Data Analyst, TensorFlow Dev, etc.
   - Badge cards with issuer + year
5. **Skills Matrix** — Detailed skill bars grouped by category
   - Programming | ML/AI | Statistics | BI Tools | Other
6. **Hobbies & Interests** — Fun section with icons
   - Cricket, Coding, Book Collection, Nusrat Fateh Ali Khan, Poetry
7. **CV Download Button** — PDF resume download

---

### 4.3 🛠️ Tools Page (`/tools`)

**Purpose:** Free resource hub with software setup guides — equivalent to the old "Data Softwares" page but massively upgraded.

#### Sections:
1. **Page Hero** — "Your Data Science Toolkit — Everything You Need, Free"
2. **Search/Filter Bar** — Filter by category (Python | R | BI | Database | Cloud | Other)
3. **Tools Grid** — Cards for each tool:

| Tool | Category | Content |
|---|---|---|
| Python (Anaconda) | Programming | Download link, setup video, install guide |
| R + RStudio | Programming | Download, setup steps |
| VS Code | IDE | Extensions list, setup tips |
| Jupyter Notebook | IDE | Usage tips |
| Power BI Desktop | BI | Download + tutorial link |
| Tableau Public | BI | Download + link |
| SPSS | Statistics | Link + tips |
| SQL (MySQL/PostgreSQL) | Database | Setup guide |
| Git + GitHub | DevOps | Setup + GitHub Pages guide |
| Streamlit | Deployment | Install + usage |
| Google Colab | Cloud | Usage guide |
| Kaggle | Data | Account setup + tips |

4. **Each Tool Card Contains:**
   - Icon / Logo
   - Tool name + short description
   - "Download" button (external link)
   - "Setup Guide" expandable accordion or link
   - Difficulty badge (Beginner / Intermediate / Advanced)
   - Tags (e.g., Free, Open Source, Windows/Mac/Linux)

---

### 4.4 💻 Projects Page (`/projects`)

**Purpose:** Showcase all data science, ML, and stats projects.

#### Sections:
1. **Filter Tabs** — All | ML/AI | Statistics | Web App | Research | Freelance
2. **Projects Grid** — Cards with:
   - Project thumbnail / screenshot
   - Title, short description
   - Tech stack tags
   - GitHub + Live Demo links
   - Category badge

#### Projects to include (from existing portfolio + memory):
- CAD Mortality Prediction (ML + Stats, MPhil thesis)
- Diabetes Prediction (8 algorithms)
- Iris Dataset Multinomial Model
- K-Drama Recommender System
- Recipe Recommender App
- MetaScreen (Systematic Review App)
- EuroSCORE II Meta-Analysis
- USD Crypto Price Forecasting (LSTM)
- Smart Exam & Quiz Platform
- Shopping Mall People Counter (CV)
- NYPD Poisson Regression
- StatLab Platform (PRD)

---

### 4.5 📝 Blogs Page (`/blogs`)

**Purpose:** Share knowledge, tutorials, research notes, opinion pieces.

#### Sections:
1. **Hero** — "Thoughts on Data, Stats & AI"
2. **Featured Post** — Large card for latest/pinned post
3. **Category Filter** — All | Statistics | ML/AI | Research | Career | Python | R
4. **Posts Grid** — Cards with thumbnail, title, date, reading time, excerpt, tags
5. **Sidebar** (desktop) — Search, popular tags, recent posts

#### Suggested Initial Blog Topics:
- "EuroSCORE II: A Meta-Analysis Journey"
- "How I Built MetaScreen — A Systematic Review App in Streamlit"
- "ML vs. Logistic Regression for CAD Mortality Prediction"
- "Getting Started with Systematic Reviews in 2026"
- "My MPhil Statistics Journey at UOG"
- "Top 10 Free Data Science Tools for Pakistani Students"

---

### 4.6 🎓 Courses & Learning Page (`/courses`)

**Purpose:** Curate free and paid learning resources; eventually host own course material.

#### Sections:
1. **Hero** — "Learn Data Science the Smart Way"
2. **My Courses** (future) — Placeholder cards for upcoming original courses
3. **Curated Free Resources** — Embedded/linked courses from:
   - Codanics (Dr. Aammar Tufail)
   - Kaggle Learn
   - Google Data Analytics (Coursera)
   - IBM Data Science (Coursera)
   - fast.ai
   - StatQuest (YouTube)
4. **Learning Roadmap** — Visual roadmap for:
   - Data Science Beginner → Intermediate → Advanced
   - Statistics → ML → AI path
5. **YouTube Channel CTA** — Link to CodeBaseStats YouTube

---

### 4.7 📚 Books & Notes Page (`/books-notes`)

**Purpose:** Share study notes, cheat sheets, recommended books.

#### Sections:
1. **Hero** — "Knowledge is Free — Take It"
2. **My Study Notes** — Downloadable PDFs (Stats, ML, R, Python notes)
   - Cards with topic, subject, file format, download button
3. **Recommended Books Grid** — Book cards with:
   - Cover image, title, author, why recommended, Amazon/PDF link
   - Categories: Statistics | ML/AI | Python | R | Data Science | Research Methods
4. **Cheat Sheets** — Quick-download reference cards
   - Python cheat sheet, R cheat sheet, Stats formulas, SQL basics

#### Suggested Recommended Books:
- An Introduction to Statistical Learning (James et al.)
- Python for Data Analysis (Wes McKinney)
- Hands-On ML with Scikit-Learn & TensorFlow (Géron)
- The Elements of Statistical Learning (Hastie et al.)
- R for Data Science (Hadley Wickham)
- Naked Statistics (Wheelan) — for beginners

---

### 4.8 📬 Contact Page (`/contact`)

**Purpose:** Allow visitors to reach Usama for freelance, mentorship, collaboration.

#### Sections:
1. **Hero** — "Let's Build Something Together"
2. **Contact Form** — Name, Email, Subject (dropdown: Freelance / Collaboration / Mentorship / General), Message, Send button
3. **Direct Contact Info Cards**
   - Email: usamamunawaar@gmail.com
   - WhatsApp: +92 313 7444901
   - LinkedIn, GitHub, Twitter, YouTube
4. **Location Info** — Pakistan 🇵🇰 (Available remotely worldwide)
5. **Availability Status** — "✅ Available for Freelance Projects"

---

## 5. Global Design System

### 5.1 Color Palette
```
Background (Dark):    #0A0A0F  (near-black with slight blue tint)
Surface:              #12121A  (cards, navbar)
Border:               #1E1E2E
Primary Accent:       #6C63FF  (electric violet — data/AI feel)
Secondary Accent:     #00D9C0  (cyan-teal — stats/charts feel)
Text Primary:         #F0F0FF
Text Secondary:       #9090A8
Success:              #22D3A0
Warning:              #F59E0B
```

### 5.2 Typography
```
Display Font:   'Syne' (Google Fonts) — Bold, futuristic, distinctive
Body Font:      'DM Sans' (Google Fonts) — Clean, readable, modern
Code Font:      'JetBrains Mono' — For code snippets
```

### 5.3 Key UI Patterns
- **Glassmorphism cards** — `backdrop-filter: blur; background: rgba(255,255,255,0.05)`
- **Gradient text** — On headings using violet-to-cyan
- **Animated borders** — Glowing border-bottom on active nav items
- **Particle/grid background** — Subtle dot grid or animated particles on hero
- **Hover lift effects** — Cards lift on hover with shadow glow
- **Scroll-triggered animations** — Elements fade/slide in as user scrolls (Framer Motion)
- **Smooth page transitions** — Framer Motion `AnimatePresence`

### 5.4 Navigation
- **Sticky top navbar** — Logo left, links center/right, glassmorphism background
- **Mobile hamburger menu** — Slide-in drawer
- **Active page indicator** — Glowing underline
- **Links:** Home | About | Tools | Projects | Blogs | Courses | Books & Notes | Contact

### 5.5 Footer
- Logo + one-liner bio
- Quick links (all pages)
- Social icons: LinkedIn, GitHub, Twitter/X, YouTube, WhatsApp
- "© 2026 Abu Usama — All Rights Reserved"
- "Built with ❤️ in Pakistan 🇵🇰"

---

## 6. Component Library (Reusable)

| Component | Usage |
|---|---|
| `<Navbar />` | All pages |
| `<Footer />` | All pages |
| `<HeroSection />` | Home, page heroes |
| `<ProjectCard />` | Projects page, home preview |
| `<BlogCard />` | Blogs page, home preview |
| `<ToolCard />` | Tools page |
| `<SkillBar />` | About, Home |
| `<Timeline />` | About page education |
| `<ContactForm />` | Contact page |
| `<SectionTitle />` | All sections |
| `<StatCounter />` | Home stats strip |
| `<PageTransition />` | All pages (Framer Motion wrapper) |

---

## 7. Performance & SEO Requirements

- **Lighthouse Score Target:** 90+ on Performance, Accessibility, SEO
- **React Helmet / Vite plugin for meta tags** — unique title + description per page
- **Lazy loading** for images
- **Code splitting** via React.lazy + Suspense
- **Image optimization** — WebP format, compressed
- **Open Graph tags** — For social media sharing previews
- **sitemap.xml** — Auto-generated or manual

---

## 8. Deployment Plan

| Step | Action |
|---|---|
| 1 | Scaffold project: `npm create vite@latest usama-portfolio -- --template react` |
| 2 | Install: Tailwind, Framer Motion, React Router, React Icons |
| 3 | Build page-by-page (Home → About → Tools → …) |
| 4 | Add content (projects, blogs, tools data as JSON files) |
| 5 | Test responsiveness on mobile/tablet |
| 6 | Deploy to GitHub Pages via `gh-pages` npm package or Netlify drag & drop |

---

## 9. Future Enhancements (v2.0)

- [ ] **Dark/Light mode toggle**
- [ ] **Blog CMS** — Integrate with Hashnode or Dev.to API for auto-blog sync
- [ ] **Live search** across projects + blogs
- [ ] **Newsletter signup** — Email list for blog updates
- [ ] **Analytics dashboard** — Plausible or Google Analytics
- [ ] **Interactive Resume** — Printable + web version
- [ ] **Chatbot** — AI assistant to answer questions about Usama (like UOG chatbot project)
- [ ] **Multi-language** — Urdu + English toggle
- [ ] **LMS Integration** — Actual course hosting with progress tracking

---

## 10. Development Phases

### Phase 1 — Foundation (Week 1–2)
- [ ] Project setup (Vite + React + Tailwind + Framer Motion)
- [ ] Global design system (colors, fonts, CSS variables)
- [ ] Navbar + Footer components
- [ ] Home Page (full)
- [ ] Deployment setup (GitHub Pages / Netlify)

### Phase 2 — Core Pages (Week 3–4)
- [ ] About Page
- [ ] Tools Page
- [ ] Projects Page

### Phase 3 — Content Pages (Week 5–6)
- [ ] Blogs Page
- [ ] Courses Page
- [ ] Books & Notes Page
- [ ] Contact Page

### Phase 4 — Polish & Launch (Week 7)
- [ ] Animations + micro-interactions
- [ ] Mobile responsiveness audit
- [ ] SEO optimization
- [ ] Performance audit
- [ ] Final deployment + custom domain (optional)

---

*PRD authored for Abu Usama's personal portfolio v2.0 — April 2026*
