import {
  IPortfolioData,
  IPortfolioMetrics,
  IProject,
  ISkillCategory,
  IExperience,
  IEducation,
  ICertification,
} from "@/types/portfolio";

// ============================================================
// SEED & FALLBACK DATA
// ============================================================

export const seedProjects: IProject[] = [
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

export const seedSkills: ISkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "fas fa-terminal",
    type: "bars",
    items: [
      { label: "Java", pct: 90 },
      { label: "JavaScript", pct: 88 },
      { label: "TypeScript", pct: 80 },
      { label: "Python", pct: 72 },
      { label: "C", pct: 68 },
    ],
    order: 1,
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "fas fa-desktop",
    iconColor: "text-purple-400",
    type: "tags",
    items: [
      { label: "React.js" },
      { label: "Next.js 15" },
      { label: "React Native" },
      { label: "Redux Toolkit" },
      { label: "Tailwind CSS" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Responsive UI" },
    ],
    order: 2,
  },
  {
    id: "backend",
    title: "Backend",
    icon: "fas fa-server",
    type: "tags",
    items: [
      { label: "Node.js" },
      { label: "Express.js" },
      { label: "Spring Boot" },
      { label: "RESTful APIs" },
      { label: "JWT Auth" },
      { label: "Socket.io" },
    ],
    order: 3,
  },
  {
    id: "databases",
    title: "Databases",
    icon: "fas fa-database",
    iconColor: "text-amber-400",
    type: "tags",
    items: [
      { label: "MySQL" },
      { label: "MongoDB" },
      { label: "Firebase Firestore" },
      { label: "Relational Schema" },
      { label: "Security Rules" },
    ],
    order: 4,
  },
  {
    id: "tools",
    title: "Developer Tools & Platforms",
    icon: "fas fa-screwdriver-wrench",
    iconColor: "text-purple-400",
    type: "tags",
    items: [
      { label: "Git" },
      { label: "GitHub" },
      { label: "GitLab" },
      { label: "VS Code" },
      { label: "IntelliJ IDEA" },
      { label: "Postman" },
      { label: "Expo Go" },
      { label: "Google Colab" },
      { label: "Clerk" },
      { label: "Razorpay" },
      { label: "DSA" },
      { label: "OOP Design" },
      { label: "Agile / Scrum" },
    ],
    order: 5,
  },
];

export const seedExperience: IExperience[] = [
  {
    id: "itux",
    role: "Frontend Developer Intern",
    company: "iTUX Solutions",
    location: "Remote",
    timeline: "Apr. 2026 – Present",
    bullets: [
      "Engineered production features for a Next.js 15 e-commerce platform using React, TypeScript, and Tailwind CSS, contributing to a live codebase serving real users.",
      "Built dynamic pricing configuration modals applying complex promotional rules in real time, member-role management controls, Clerk authentication, and Razorpay payment integrations.",
      "Maintained reusable components, diagnosed and resolved rendering bugs, and delivered iterative releases through GitLab-based Agile sprint cycles.",
      "Protected internal seller workflows by injecting safe item-deletion constraints tied to database structural parameters.",
    ],
    order: 1,
  },
  {
    id: "infosys",
    role: "Full-Stack Intern",
    company: "Infosys Springboard Virtual Internship 6.0",
    location: "Remote",
    timeline: "Dec. 2025 – Feb. 2026",
    bullets: [
      "Collaborated across the stack in the end-to-end Agile architecture of a distributed smart parking platform spanning frontend, backend, and real-time layers.",
      "Designed and implemented RESTful micro-APIs and optimized relational database schemas to support high-throughput spot-management operations.",
      "Integrated real-time communication layers via Socket.io, accurately managing 500+ active parking locations and concurrent user sessions.",
      "Contributed to routine code optimizations, system test planning, and functional feature validation across Agile sprint cycles.",
    ],
    order: 2,
  },
  {
    id: "manit",
    role: "Machine Learning Intern",
    company: "Maulana Azad National Institute of Technology",
    location: "Bhopal, MP",
    timeline: "Jun. 2025 – Jul. 2025",
    bullets: [
      "Engineered a custom CNN facial emotion recognition pipeline using TensorFlow on the FER-2013 dataset for 7-class classification, under the guidance of Dr. Jitendra Adhikari.",
      "Integrated OpenCV real-time tracking with localized data augmentation techniques to control overfitting and improve model robustness.",
    ],
    order: 3,
  },
];

export const seedEducation: IEducation[] = [
  {
    id: "sati",
    degree: "Bachelor of Technology in Computer Science (Honors)",
    institution: "Samrat Ashok Technological Institute",
    location: "Vidisha, Madhya Pradesh",
    timeline: "Aug. 2023 – Jun. 2026",
    cgpa: "8.07",
    highlights: [
      "Specialization in Full-Stack Development, DSA, and OOP",
      "Active participant in hackathons and industry internship programs",
    ],
    order: 1,
  },
  {
    id: "igpc",
    degree: "Diploma in Computer Science (Honors)",
    institution: "Indira Gandhi Government Polytechnic College",
    location: "Chhindwara, Madhya Pradesh",
    timeline: "Sep. 2020 – Jul. 2023",
    cgpa: "8.38",
    highlights: [
      "Foundation in programming, networking, and database management",
    ],
    order: 2,
  },
];

export const seedCertifications: ICertification[] = [
  {
    id: "java",
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    icon: "fab fa-java",
    iconColor: "text-blue-400",
    order: 1,
  },
  {
    id: "devops",
    title: "DevOps Certificate",
    issuer: "Oracle Cloud Infrastructure",
    icon: "fas fa-shield-halved",
    iconColor: "text-purple-400",
    order: 2,
  },
  {
    id: "mern",
    title: "MERN Stack Certificate",
    issuer: "Sheriyans Coding School",
    icon: "fas fa-layer-group",
    iconColor: "text-blue-400",
    order: 3,
  },
  {
    id: "emotion",
    title: "Automated Facial Emotion Recognition Using Deep Learning",
    issuer: "MANIT Bhopal · 2025",
    icon: "fas fa-brain",
    iconColor: "text-purple-400",
    order: 4,
  },
  {
    id: "cisco-c",
    title: "Programming Essentials in C",
    issuer: "Cisco",
    icon: "fas fa-network-wired",
    iconColor: "text-amber-400",
    order: 5,
  },
];

// ============================================================
// PURE DYNAMIC METRICS CALCULATION LOGIC
// ============================================================

export function calculatePortfolioMetrics(data: {
  projects: IProject[];
  experience: IExperience[];
  education: IEducation[];
  certifications: ICertification[];
}): IPortfolioMetrics {
  const latestEducation = data.education[0];
  const allTech = new Set<string>();

  data.projects.forEach((p) => p.tech.forEach((t) => allTech.add(t)));

  return {
    totalProjects: data.projects.length,
    totalInternships: data.experience.length,
    totalCertifications: data.certifications.length,
    latestCgpa: latestEducation ? latestEducation.cgpa : "8.07",
    primaryTechStack: Array.from(allTech),
  };
}

export function getFullPortfolioPayload(overrides?: Partial<IPortfolioData>): IPortfolioData {
  const projects = overrides?.projects || seedProjects;
  const experience = overrides?.experience || seedExperience;
  const education = overrides?.education || seedEducation;
  const certifications = overrides?.certifications || seedCertifications;
  const skills = overrides?.skills || seedSkills;

  const metrics = calculatePortfolioMetrics({
    projects,
    experience,
    education,
    certifications,
  });

  return {
    metrics,
    skills,
    projects,
    experience,
    education,
    certifications,
  };
}
