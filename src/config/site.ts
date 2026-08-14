// ============================================================
// SITE CONFIGURATION
// ============================================================

export const siteConfig = {
  /** Full name shown in metadata, footer, etc. */
  name: "Mayank Shrivastava",

  /**
   * RESUME LINK
   * Public Google Drive PDF link for live resume updates.
   */
  resumeLink:
    process.env.NEXT_PUBLIC_RESUME_LINK ||
    "https://drive.google.com/file/d/13GmaBjzRvnZwctaG0xWMtKwwyMtlhNy9/view?usp=sharing",

  /**
   * FORMSPREE FORM ID (Optional fallback)
   */
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",

  // Social links
  github: "https://github.com/Mayank-Shrivastava-2004",
  linkedin: "https://www.linkedin.com/in/mayankshrivastava-dev/",
  email: "mayankshrivastava85994@gmail.com",

  // Site metadata
  url: "https://mayank-shrivastava-2004.github.io/Mayank_Portfolio",
  description:
    "Mayank Shrivastava — Frontend Developer Intern at iTUX Solutions. Computer Science Engineer specializing in Next.js 15, React, Node.js, and the MERN Stack.",
} as const;
