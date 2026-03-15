"use client";

import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";

export default function WhatWeDo() {
  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-cream-deep)" }}
    >
      <div className="content-container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Photo left */}
          <div className="w-full md:w-[40%]">
            <Reveal>
              <PhotoFrame
                alt="Working with clients"
                aspect="4:5"
                shadowDirection="left"
              />
            </Reveal>
          </div>

          {/* Text right */}
          <div className="w-full md:w-[55%]">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="block w-8 h-[1.5px]"
                  style={{ backgroundColor: "var(--color-text-faint)" }}
                />
                <span className="eyebrow" style={{ color: "var(--color-text-faint)" }}>
                  What We Do
                </span>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2
                className="font-[family-name:var(--font-cormorant)] font-normal leading-snug mb-6"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  color: "var(--color-text)",
                }}
              >
                We walk through your home, build a plan, hire the contractors,
                manage every detail — and you pay nothing until the day it
                sells.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p
                className="font-[family-name:var(--font-poppins)] font-light text-sm leading-relaxed max-w-[420px] mb-8"
                style={{ color: "var(--color-text-muted)" }}
              >
                Paint. Flooring. Landscaping. Kitchen updates. Staging. The
                punch list you&apos;ve been thinking about for months — we take
                it entirely. Your home goes to market at its best. The cost
                comes from proceeds at closing.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <button onClick={scrollToForm} className="cta-primary w-full sm:w-auto">
                See If Your Home Qualifies
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
