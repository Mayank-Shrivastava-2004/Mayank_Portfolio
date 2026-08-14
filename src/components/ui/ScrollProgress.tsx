"use client";
import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const btn = document.getElementById("back-to-top");

    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (bar) bar.style.width = `${(scrollTop / height) * 100}%`;
      if (btn) {
        btn.style.opacity   = scrollTop > 500 ? "1" : "0";
        btn.style.transform = scrollTop > 500 ? "translateY(0)" : "translateY(10px)";
        (btn as HTMLButtonElement).disabled = scrollTop <= 500;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="scroll-progress" />
      <button
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 w-11 h-11 rounded-xl bg-bg-card border border-border
                   text-muted flex items-center justify-center z-50
                   opacity-0 translate-y-2.5 pointer-events-none
                   hover:border-primary hover:text-primary transition-all duration-300"
        style={{ transition: "opacity 0.3s, transform 0.3s" }}
      >
        <i className="fas fa-arrow-up text-sm" />
      </button>
    </>
  );
}
