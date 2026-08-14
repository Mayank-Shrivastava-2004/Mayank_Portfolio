// ============================================================
// DATA — Experience, Education, Certifications
// ============================================================

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  timeline: string;
  accentColor?: string;
  bullets: string[];
};

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  timeline: string;
  cgpa: string;
  highlights?: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  icon: string;
  iconColor?: string;
};

// ---- Experience ----

export const experience: ExperienceEntry[] = [
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
  },
];

// ---- Education ----

export const education: EducationEntry[] = [
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
  },
];

// ---- Certifications ----

export const certifications: Certification[] = [
  {
    id: "java",
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    icon: "fab fa-java",
    iconColor: "text-blue-400",
  },
  {
    id: "devops",
    title: "DevOps Certificate",
    issuer: "Oracle Cloud Infrastructure",
    icon: "fas fa-shield-halved",
    iconColor: "text-purple-400",
  },
  {
    id: "mern",
    title: "MERN Stack Certificate",
    issuer: "Sheriyans Coding School",
    icon: "fas fa-layer-group",
    iconColor: "text-blue-400",
  },
  {
    id: "emotion",
    title: "Automated Facial Emotion Recognition Using Deep Learning",
    issuer: "MANIT Bhopal · 2025",
    icon: "fas fa-brain",
    iconColor: "text-purple-400",
  },
  {
    id: "cisco-c",
    title: "Programming Essentials in C",
    issuer: "Cisco",
    icon: "fas fa-network-wired",
    iconColor: "text-amber-400",
  },
];
