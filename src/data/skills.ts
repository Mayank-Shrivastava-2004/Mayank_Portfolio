// ============================================================
// DATA — Skills
// ============================================================

export type SkillCategory = {
  id: string;
  title: string;
  icon: string; // Font Awesome class
  iconColor?: string;
  type: "bars" | "tags";
  items: SkillTag[] | SkillBar[];
};

export type SkillTag = { label: string };
export type SkillBar = { label: string; pct: number };

export const skills: SkillCategory[] = [
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
    ] as SkillBar[],
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
    ] as SkillTag[],
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
    ] as SkillTag[],
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
    ] as SkillTag[],
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
    ] as SkillTag[],
  },
];
