// ============================================================
// DATA — Projects
// ============================================================

import { IProject } from "@/types/portfolio";

export const projects: IProject[] = [
  {
    id: "naisha-naturals",
    name: "Naisha Naturals",
    tagline: "E-Commerce Web Platform",
    description:
      "Production-grade e-commerce platform with a synchronized, formula-driven Price Modal UI computing complex promotional pricing rules in real time. Features Clerk authentication, Razorpay payment flows, and safe item-deletion constraints tied to database structural parameters.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Naisha Naturals E-Commerce Platform",
    timeline: "Apr. 2026 – Present",
    tag: "Live Production",
    tagColor: "bg-blue-500",
    tech: ["Next.js 15", "TypeScript", "MongoDB", "Clerk", "Razorpay"],
    links: {},
    featured: true,
    order: 1,
  },
  {
    id: "parkease",
    name: "ParkEase",
    tagline: "Full-Stack Smart Parking Platform",
    description:
      "Scalable cross-platform smart parking application with live spot tracking, custom map selection, and route assistance. Spring Boot + MySQL backend, geospatial Node.js services, JWT authentication, and Socket.io real-time flows managing 500+ active locations and concurrent sessions.",
    image: "/parkease.png",
    imageAlt: "ParkEase Smart Parking Platform",
    timeline: "Dec. 2025 – Feb. 2026",
    tag: "MERN + Spring Boot",
    tech: ["React Native", "Spring Boot", "MySQL", "Socket.io", "Node.js", "Express"],
    links: {
      appetize: "https://appetize.io/app/b_y7snxt24aheppzhyb7aboaw7iu",
      video: "https://drive.google.com/file/d/1TjOaUqpvtkMk8wNnC4C4fKAYBPfVnFa-/view?usp=sharing",
      github: "https://github.com/Mayank-Shrivastava-2004/ParkEaseSmartParkingSpotFinder-Appilcation",
    },
    featured: true,
    order: 2,
  },
  {
    id: "insta-school",
    name: "Insta-School",
    tagline: "Cross-Platform Mobile ERP",
    description:
      "Modular cross-platform ERP workspace streamlining notifications and access links for academic boards. Responsive component states for crisp interface scaling across Android and iOS, with persistent Firebase security rules and direct Firestore hooks for zero-lag instant messaging feeds.",
    image: "/erp.png",
    imageAlt: "Insta-School ERP Platform",
    timeline: "Jan. 2025 – Apr. 2026",
    tag: "Mobile ERP",
    tagColor: "bg-purple-500",
    tech: ["React Native", "Firebase", "Firestore"],
    links: {
      appetize: "https://appetize.io/app/b_siolij35fpfc6jbrmslvwmrw34",
      github: "https://github.com/Mayank-Shrivastava-2004/InstaSchool",
    },
    featured: false,
    order: 3,
  },
  {
    id: "student-database",
    name: "Student Database System",
    tagline: "Core Java & File Handling System",
    description:
      "Robust Java SE application for managing student lifecycle. Implements complex CRUD operations, persistent file handling, and CLI/GUI interface following ACID properties and OOP design patterns.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Student Database System",
    timeline: "Academic Project",
    tag: "Java / OOP",
    tech: ["Java SE", "File I/O", "OOP Design"],
    links: {
      github: "https://github.com/Mayank-Shrivastava-2004/StudentDataBaseSystem",
    },
    featured: false,
    order: 4,
  },
];
