"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    const move = (e: MouseEvent) => {
      dot.style.left  = `${e.clientX}px`;
      dot.style.top   = `${e.clientY}px`;
      ring.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 400, fill: "forwards" }
      );
    };

    const expand = () => {
      dot.style.transform  = "translate(-50%,-50%) scale(0)";
      ring.style.transform = "translate(-50%,-50%) scale(1.7)";
      ring.style.borderColor = "#4f8ef7";
    };
    const shrink = () => {
      dot.style.transform  = "translate(-50%,-50%) scale(1)";
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.borderColor = "rgba(79,142,247,0.4)";
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,.skill-tag,.project-card")
      .forEach(el => { el.addEventListener("mouseenter", expand); el.addEventListener("mouseleave", shrink); });

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
