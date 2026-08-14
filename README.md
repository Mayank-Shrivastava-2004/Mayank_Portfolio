<div align="center">

# ⚡ Mayank Shrivastava — Portfolio

**Full Stack Software Engineer & Frontend Developer Intern @ iTUX Solutions**

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

[View Live Site](https://mayank-portfolio-chi-two.vercel.app) · [Report Issue](https://github.com/Mayank-Shrivastava-2004/Mayank_Portfolio/issues) · [Connect on LinkedIn](https://www.linkedin.com/in/mayankshrivastava-dev/)

</div>
---

## 🚀 Live Demo
Check out my live portfolio here: https://mayank-portfolio-chi-two.vercel.app

## 📖 Overview

A modern, high-performance portfolio engineered with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Built with a human-crafted editorial dark mode aesthetic, full-stack API capabilities, dynamic Google Drive resume syncing, and an automated **Nodemailer Gmail SMTP** email dispatch system.

---

## 🚀 Key Highlights & Features

- 🎨 **Human-Centric Editorial Design**: Handcrafted typography hierarchy (*Fraunces* display + *Plus Jakarta Sans* body), dark navy palette, and subtle micro-animations.
- ⚡ **Full-Stack Architecture**:
  - `GET /api/portfolio`: Aggregated single-request endpoint querying MongoDB Mongoose models with dynamic metrics computation.
  - `POST /api/contact`: Production contact API using **Nodemailer + Gmail SMTP** that delivers instant admin notifications and sends automated acknowledgement replies with user message quotes.
- 📄 **Dynamic Google Drive Resume**: Live resume synchronization via public Google Drive link — update your PDF anytime without changing code.
- 📱 **Interactive App Demos**: Live [Appetize.io](https://appetize.io) virtual device previews and Google Drive video demos for mobile and full-stack projects.
- 📈 **Dynamic Stats Engine**: Automatically computes project counts, GPA, internships, and certification metrics.
- 🖱️ **Interactive UI Elements**: Touch-aware custom cursor, smooth active-section scroll spy, and real-time reading progress bar.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Next.js 15 (App Router, Turbopack, Server Components), React 19, TypeScript, Tailwind CSS v4, Framer Motion |
| **Backend & APIs** | Node.js, Next.js Route Handlers, RESTful APIs, Mongoose, Nodemailer |
| **Database** | MongoDB Atlas (Singleton Connection Manager) |
| **Email Service** | Gmail SMTP Transporter with App Password Authentication |
| **Deployment** | Vercel (Production Serverless / Edge) / GitHub Pages |

---

## 📂 Project Showcase

### 1. 🌿 Naisha Naturals — E-Commerce Web Platform
- **Stack**: Next.js 15, TypeScript, MongoDB, Clerk Authentication, Razorpay Gateway, Tailwind CSS
- **Features**: Live production e-commerce platform with dynamic pricing modals, role management controls, and safe item-deletion constraints.

### 2. 🚗 ParkEase — Smart Parking Platform
- **Stack**: React Native, Node.js, Express.js, MongoDB, Spring Boot, MySQL, WebSocket
- **Demos**: [Appetize Virtual Preview](https://appetize.io/app/b_y7snxt24aheppzhyb7aboaw7iu) · [Drive Video Demo](https://drive.google.com/file/d/1TjOaUqpvtkMk8wNnC4C4fKAYBPfVnFa-/view?usp=sharing) · [GitHub Repo](https://github.com/Mayank-Shrivastava-2004/ParkEaseSmartParkingSpotFinder-Appilcation)

### 3. 🏫 Insta-School — Cross-Platform Mobile ERP
- **Stack**: React Native, JavaScript, Firebase, Firestore Realtime Database
- **Demos**: [Appetize Virtual Preview](https://appetize.io/app/b_siolij35fpfc6jbrmslvwmrw34) · [GitHub Repo](https://github.com/Mayank-Shrivastava-2004/InstaSchool)

### 4. 🗄️ Student Database System — Core Java Data Management
- **Stack**: Java, OOP Architecture, File I/O, Data Structures
- **Repository**: [GitHub Repo](https://github.com/Mayank-Shrivastava-2004/StudentDataBaseSystem)

---

## 📁 Project Structure

```text
Mayank_Portfolio/
├── public/                  # Static assets (images, icons)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/     # Nodemailer Gmail SMTP endpoint
│   │   │   └── portfolio/   # Aggregated dynamic data endpoint
│   │   ├── globals.css      # Tailwind v4 @theme design tokens
│   │   ├── layout.tsx       # Root layout, fonts & SEO metadata
│   │   └── page.tsx         # Main server component assembly
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, About, Skills, Experience, Projects, Education, Certs, Contact
│   │   └── ui/              # ProjectCard, CustomCursor, ScrollProgress, Skeleton
│   ├── config/              # Site configuration & social links
│   ├── data/                # Static fallback datasets (projects, skills, resume)
│   ├── lib/                 # DB connection manager, data aggregation, nodemailer helper
│   ├── models/              # Mongoose schemas (Project, Experience, Skill, Message, etc.)
│   └── types/               # TypeScript domain interfaces
├── .env.example             # Environment variable template
├── .env.local               # Local environment secrets (ignored by Git)
├── package.json
└── tsconfig.json
```

---

## ⚙️ Getting Started Locally

### Prerequisites
- Node.js 18.17 or higher
- npm / yarn / pnpm

### 1. Clone the repository
```bash
git clone https://github.com/Mayank-Shrivastava-2004/Mayank_Portfolio.git
cd Mayank_Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Populate your `.env.local` with your Gmail SMTP credentials:
```env
# Gmail SMTP Configuration
EMAIL_SERVER_USER=mayankshrivastava85994@gmail.com
EMAIL_SERVER_PASSWORD=your_16_char_google_app_password
ADMIN_EMAIL=mayankshrivastava85994@gmail.com

# Dynamic Resume Link
NEXT_PUBLIC_RESUME_LINK=https://drive.google.com/file/d/13GmaBjzRvnZwctaG0xWMtKwwyMtlhNy9/view?usp=sharing

# Optional MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production
```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **Email**: [mayankshrivastava85994@gmail.com](mailto:mayankshrivastava85994@gmail.com)
- **LinkedIn**: [linkedin.com/in/mayankshrivastava-dev](https://www.linkedin.com/in/mayankshrivastava-dev/)
- **GitHub**: [github.com/Mayank-Shrivastava-2004](https://github.com/Mayank-Shrivastava-2004)

---

<div align="center">
  <sub>Designed &amp; Engineered with precision by Mayank Shrivastava · © 2026</sub>
</div>
