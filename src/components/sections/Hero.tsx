"use client";
import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { IPortfolioMetrics } from "@/types/portfolio";

// Typing effect
const roles = [
  "Frontend Developer Intern",
  "Full Stack Engineer",
  "React & Next.js Developer",
  "Java Specialist",
  "Problem Solver",
];

function useTypingEffect() {
  useEffect(() => {
    let ri = 0, ci = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const el = document.getElementById("typing-text");
      if (!el) return;
      const cur = roles[ri];
      el.textContent = deleting ? cur.slice(0, ci - 1) : cur.slice(0, ci + 1);
      deleting ? ci-- : ci++;
      let delay = deleting ? 50 : 130;
      if (!deleting && ci === cur.length) { delay = 2200; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 400; }
      timer = setTimeout(tick, delay);
    }

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);
}

function useParticles() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      (window as any).particlesJS?.("particles-js", {
        particles: {
          number: { value: 40, density: { enable: true, value_area: 900 } },
          color: { value: "#4f8ef7" },
          shape: { type: "circle" },
          opacity: { value: 0.25, random: true },
          size: { value: 2.5, random: true },
          line_linked: { enable: true, distance: 160, color: "#4f8ef7", opacity: 0.12, width: 1 },
          move: { enable: true, speed: 1.2, direction: "none", random: true, out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "grab" }, resize: true },
          modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);
  }, []);
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

interface HeroProps {
  metrics?: IPortfolioMetrics;
}

export default function Hero({ metrics }: HeroProps) {
  useTypingEffect();
  useParticles();

  const totalProjects = metrics?.totalProjects ? `${metrics.totalProjects}+` : "4+";
  const cgpa = metrics?.latestCgpa || "8.07";
  const internships = metrics?.totalInternships ? `${metrics.totalInternships}` : "3";
  const certs = metrics?.totalCertifications ? `${metrics.totalCertifications}+` : "5+";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 sm:pb-28 lg:pb-32 overflow-hidden">
      <div id="particles-js" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.15em] uppercase text-primary mb-7">
              <span className="relative w-2 h-2">
                <span className="absolute inset-[-3px] rounded-full bg-primary/30 animate-pulse-dot" />
                <span className="relative block w-2 h-2 rounded-full bg-primary" />
              </span>
              Frontend Developer Intern @ iTUX Solutions
            </div>

            {/* Name */}
            <h1
              className="font-display font-bold italic leading-[0.95] tracking-tight mb-4"
              style={{ fontSize: "clamp(3.4rem,7vw,6rem)" }}
            >
              Mayank<br />
              <span className="bg-grad-text bg-clip-text text-transparent">Shrivastava</span>
            </h1>

            {/* Typing */}
            <p className="text-text-muted text-lg mb-6 min-h-[1.8rem]">
              <span id="typing-text" className="text-accent font-semibold" />
            </p>

            {/* Description */}
            <p className="text-text-muted text-[1.03rem] leading-relaxed max-w-lg mb-9">
              A results-driven <strong className="text-text font-semibold">Computer Science Engineer</strong> building
              high-performance applications with{" "}
              <strong className="text-text font-semibold">Next.js 15, React, and Node.js</strong>.
              Currently shipping production features at iTUX Solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 mb-8">
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-arrow-right" /> View Work
              </a>
              <a
                href={siteConfig.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fas fa-file-lines" /> Resume
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <i className="fab fa-github" /> GitHub
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-5 mb-12">
              {[
                { icon: "fab fa-linkedin-in", href: siteConfig.linkedin, label: "LinkedIn" },
                { icon: "fab fa-github", href: siteConfig.github, label: "GitHub" },
                { icon: "fas fa-envelope", href: `mailto:${siteConfig.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-dim hover:text-primary hover:-translate-y-1 transition-all duration-300 text-lg"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>

            {/* Dynamic Calculated Stats */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
              {[
                { num: totalProjects, label: "Projects" },
                { num: cgpa, label: "CGPA" },
                { num: internships, label: "Internships" },
                { num: certs, label: "Certifications" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-9 bg-border" />}
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-2xl text-text leading-none">{s.num}</span>
                    <span className="text-[0.62rem] font-bold tracking-widest uppercase text-dim mt-1">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div
              className="relative w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-border
                         before:absolute before:top-4 before:left-4 before:w-12 before:h-12
                         before:border-t-2 before:border-l-2 before:border-primary before:rounded-tl before:z-10
                         after:absolute after:bottom-4 after:right-4 after:w-12 after:h-12
                         after:border-b-2 after:border-r-2 after:border-purple after:rounded-br after:z-10"
            >
              <Image
                src="/mayank.jpg"
                alt="Mayank Shrivastava"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-bg-card border border-border rounded-full px-4 py-1.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-muted whitespace-nowrap">
                B.Tech CSE · SATI Vidisha
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
