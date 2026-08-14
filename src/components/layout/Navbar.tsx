"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Home",       href: "#home"       },
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 130) {
          current = s.getAttribute("id") ?? "home";
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* Main navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border py-4"
            : "py-6"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="font-display text-xl font-bold italic text-text tracking-tight"
          >
            Mayank<span className="text-primary">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-[0.75rem] font-bold tracking-[0.06em] uppercase transition-colors duration-300
                  after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-primary
                  after:transition-[width] after:duration-300
                  ${active === l.href.slice(1)
                    ? "text-text after:w-full"
                    : "text-muted hover:text-text after:w-0 hover:after:w-full"
                  }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[0.75rem] font-bold tracking-[0.06em] uppercase text-primary
                         border border-primary rounded-full px-5 py-2
                         hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${drawerOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${drawerOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${drawerOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-bg/70 backdrop-blur-sm z-40"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-bg-alt border-l border-border z-50
          flex flex-col pt-24 px-10 gap-7
          transition-transform duration-400
          ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {[...navLinks, { label: "Contact", href: "#contact" }].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeDrawer}
            className="font-display text-2xl font-bold italic text-muted hover:text-text transition-colors"
          >
            {l.label}
          </a>
        ))}

        <div className="mt-6 pt-6 border-t border-border flex gap-5">
          <a href={siteConfig.github} target="_blank" rel="noopener" className="text-muted hover:text-primary text-xl transition-colors">
            <i className="fab fa-github" />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener" className="text-muted hover:text-primary text-xl transition-colors">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </>
  );
}
