import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-display text-lg font-bold italic text-muted">
          Mayank<span className="text-primary">.</span>
        </a>
        <p className="text-[0.7rem] font-semibold tracking-wide text-dim text-center">
          © 2026 Mayank Shrivastava · Designed &amp; Engineered with care.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank" rel="noopener"
            className="text-[0.7rem] font-bold tracking-widest uppercase text-dim hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank" rel="noopener"
            className="text-[0.7rem] font-bold tracking-widest uppercase text-dim hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="text-[0.7rem] font-bold tracking-widest uppercase text-dim hover:text-text transition-colors"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
