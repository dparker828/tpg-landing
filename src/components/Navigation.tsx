"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms]"
      style={{
        backgroundColor: scrolled ? "rgba(255,248,242,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(28,25,23,0.04)"
          : "1px solid transparent",
      }}
    >
      <div className="content-container flex items-center justify-between h-14">
        <span
          className="font-[family-name:var(--font-poppins)] font-semibold text-sm lowercase tracking-wide"
          style={{ color: "var(--color-charcoal)" }}
        >
          the parker group
        </span>
        <button onClick={scrollToForm} className="cta-nav">
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  );
}
