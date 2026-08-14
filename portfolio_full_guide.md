# 📘 Mayank Shrivastava — Master Portfolio Guide

This is the comprehensive technical and operational documentation for the **Mayank Shrivastava Next.js 15 Full-Stack Portfolio**.

---

## 📑 Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Directory Structure](#2-directory-structure)
3. [Core Systems & Features](#3-core-systems--features)
4. [How to Customize Content](#4-how-to-customize-content)
5. [Environment Variables Reference](#5-environment-variables-reference)
6. [Local Development & Build Scripts](#6-local-development--build-scripts)
7. [Deployment Guide (Vercel & GitHub Pages)](#7-deployment-guide)
8. [Troubleshooting & FAQ](#8-troubleshooting--faq)

---

## 1. 🏗️ Architecture Overview

The portfolio is architected using **Next.js 15 (App Router)** with **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**:

- **Server-Side Rendering & Turbopack**: Fast page loads and instant compilation.
- **Dynamic Aggregation API (`/api/portfolio`)**: Executes parallel database queries to fetch projects, skills, timeline, and education in a single round-trip.
- **Nodemailer Gmail SMTP Engine (`/api/contact`)**: Dispatches real-time notifications to your inbox and auto-replies with user message quotes to the sender.
- **Resilient Fallback Design**: Works out-of-the-box using TypeScript static datasets in `src/data/` if MongoDB is not connected.
- **Editorial Dark Mode Aesthetic**: Curated color palette (`#080c14` background, `#4f8ef7` primary blue, `#a78bfa` purple accent) with Fraunces display typography.

---

## 2. 📂 Directory Structure

```text
Mayank_Portfolio/
├── public/                      # Static assets
│   ├── Mayank_Resume.pdf        # Local PDF backup
│   ├── mayank.jpg               # Profile photo
│   ├── parkease.png             # ParkEase project thumbnail
│   └── erp.png                  # Insta-School project thumbnail
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts # Nodemailer Gmail SMTP dispatch handler
│   │   │   └── portfolio/route.ts # Parallel DB aggregator & metrics API
│   │   ├── globals.css          # Tailwind CSS v4 @theme design tokens
│   │   ├── layout.tsx           # SEO metadata, Google Fonts, Open Graph
│   │   └── page.tsx             # Root page assembling all UI sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Responsive nav with active-scroll spy
│   │   │   └── Footer.tsx       # Footer links & copyright
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero section, stats, typing effect, CTA buttons
│   │   │   ├── About.tsx        # Bio, degree, institution, and stat cards
│   │   │   ├── Skills.tsx       # 5 categorized skill groups with visual bars & tags
│   │   │   ├── Experience.tsx   # Work experience timeline (iTUX, Infosys, MANIT)
│   │   │   ├── Projects.tsx     # Equal-height grid rendering ProjectCards
│   │   │   ├── Education.tsx    # Academic qualifications (SATI Vidisha & IGPC)
│   │   │   ├── Certifications.tsx # Professional certificates grid
│   │   │   └── Contact.tsx      # Interactive contact form with loading/status UI
│   │   └── ui/
│   │       ├── ProjectCard.tsx  # Modular card with Appetize, Video & GitHub actions
│   │       ├── CustomCursor.tsx # Interactive cursor for desktop devices
│   │       ├── ScrollProgress.tsx # Reading progress bar & back-to-top button
│   │       └── Skeleton.tsx     # Loading skeletons for async states
│   ├── config/
│   │   └── site.ts              # Global site metadata, social URLs & resume link
│   ├── data/                    # Static datasets (fallback & seed data)
│   │   ├── projects.ts          # Projects configuration
│   │   ├── skills.ts            # Skills & proficiency scores
│   │   └── resume.ts            # Experience, education, certifications
│   ├── lib/
│   │   ├── db.ts                # Cached singleton MongoDB connection manager
│   │   ├── data.ts              # Data aggregator & metrics calculation engine
│   │   └── nodemailer.ts        # Sanitized email templates & SMTP transporter
│   ├── models/                  # Mongoose MongoDB schemas
│   │   ├── Project.ts
│   │   ├── Experience.ts
│   │   ├── Skill.ts
│   │   ├── Education.ts
│   │   ├── Certification.ts
│   │   └── Message.ts
│   └── types/
│       └── portfolio.ts         # Strict TypeScript domain interfaces
├── .env.example                 # Environment template
├── .env.local                   # Secret local environment variables (never committed)
├── .gitignore                   # Excludes .env, .next, and node_modules
├── package.json
└── tsconfig.json
```

---

## 3. ⚡ Core Systems & Features

### 3.1. Contact Form & Email Dispatch Engine
- **Endpoint**: `POST /api/contact`
- **Security**: Client input validation, HTML entity sanitization (`escapeHtml`), and space-sanitizing password handler.
- **Dual Dispatch**:
  1. **Admin Notification**: Instant email to `mayankshrivastava85994@gmail.com` with sender details, subject, timestamp, and message.
  2. **User Auto-Reply**: Sends a confirmation to the sender including an exact quoted copy of their message in a styled container.
- **MongoDB Persistence**: Stores all inquiries in the `MessageModel` when a database connection is active.

### 3.2. Dynamic Google Drive Resume Link
- Defined in `src/config/site.ts` with fallback to `process.env.NEXT_PUBLIC_RESUME_LINK`.
- Opens directly in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).
- Update your resume on Google Drive anytime without touching code.

### 3.3. Equal-Height Project Grid
- Flexbox height equalization (`h-full flex flex-col justify-between`, `mt-auto` footer).
- Supports specialized buttons: **Appetize Live Demo**, **Drive Video Demo**, **Vercel**, **Backend Source**, and **GitHub Repo**.

---

## 4. ✏️ How to Customize Content

### 4.1. Updating Your Projects
Open [`src/data/projects.ts`](./src/data/projects.ts) to add or edit project cards:

```typescript
{
  slug: "new-project",
  name: "My New Project",
  tag: "Full Stack",
  timeline: "2026",
  description: "Description of what this project accomplishes...",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  metrics: "Reduced latency by 40%",
  image: "/new-project.png",
  links: {
    live: "https://your-demo-url.com",
    github: "https://github.com/Mayank-Shrivastava-2004/repo",
    video: "https://drive.google.com/...", // optional
  },
  featured: true,
  order: 5,
}
```

### 4.2. Updating Your Skills
Open [`src/data/skills.ts`](./src/data/skills.ts) to update languages, frameworks, or tools:

```typescript
{
  category: "Languages & Frameworks",
  icon: "fas fa-code",
  color: "var(--clr-primary)",
  skills: [
    { name: "TypeScript", level: 90 },
    { name: "Next.js 15", level: 92 },
  ],
  tags: ["ES6+", "Async/Await", "React 19"],
}
```

### 4.3. Updating Work Experience & Education
Open [`src/data/resume.ts`](./src/data/resume.ts) to modify your work timeline, B.Tech/Diploma details, or professional certifications.

### 4.4. Updating Personal Info & Social Links
Open [`src/config/site.ts`](./src/config/site.ts) to modify your LinkedIn, GitHub, email, or resume URL.

---

## 5. 🔑 Environment Variables Reference

Create a `.env.local` file in the root directory:

```bash
# ============================================================
# GMAIL SMTP DISPATCH (Required for Contact Form)
# ============================================================
EMAIL_SERVER_USER=mayankshrivastava85994@gmail.com
EMAIL_SERVER_PASSWORD=your_16_char_google_app_password
ADMIN_EMAIL=mayankshrivastava85994@gmail.com

# ============================================================
# DYNAMIC RESUME LINK
# ============================================================
NEXT_PUBLIC_RESUME_LINK=https://drive.google.com/file/d/13GmaBjzRvnZwctaG0xWMtKwwyMtlhNy9/view?usp=sharing

# ============================================================
# OPTIONAL MONGODB ATLAS DATABASE
# ============================================================
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio
```

> **How to get your 16-character Gmail App Password**:
> 1. Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
> 2. Create an App Password named `Portfolio`.
> 3. Paste the 16 characters into `EMAIL_SERVER_PASSWORD`.

---

## 6. 💻 Local Development & Build Scripts

```bash
# Start local development server on port 3000
npm run dev

# Run full TypeScript check and optimized production build
npm run build

# Start production server locally
npm run start

# Run ESLint linter
npm run lint
```

---

## 7. 🚀 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New..."** → **"Project"**.
3. Import your `Mayank_Portfolio` repository.
4. In the **Environment Variables** section, add:
   - `EMAIL_SERVER_USER`: `mayankshrivastava85994@gmail.com`
   - `EMAIL_SERVER_PASSWORD`: *Your 16-character Gmail App Password*
   - `ADMIN_EMAIL`: `mayankshrivastava85994@gmail.com`
   - `NEXT_PUBLIC_RESUME_LINK`: *Your Google Drive Link*
   - `MONGODB_URI`: *(Optional MongoDB Connection String)*
5. Click **Deploy**. Vercel will build and assign you a free production URL (e.g., `mayank-portfolio.vercel.app`).

---

## 8. 🛠️ Troubleshooting & FAQ

### Q: Contact form returns `535 5.7.8 Username and Password not accepted`
- **Solution**: Ensure you are using a 16-character **Google App Password** generated at [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords), NOT your standard Gmail account password. Restart the development server after modifying `.env.local`.

### Q: Next.js Image component shows warnings in console
- **Solution**: All images using `fill` have been supplied with responsive `sizes` properties (e.g. `sizes="(max-width: 768px) 100vw, 400px"`).

### Q: How to update my resume PDF without changing code?
- **Solution**: Open Google Drive, right-click your resume file, click **"Manage versions"** → **"Upload new version"**. The link remains identical, and your portfolio will automatically display your newest resume.
