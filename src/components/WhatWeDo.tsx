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
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Photo */}
          <div className="w-full md:w-[42%]">
            <Reveal>
              <PhotoFrame
                src="/images/be_where_1-2x.jpg"
                alt="Celebrating a successful sale"
                aspect="4:5"
                shadowDirection="left"
              />
            </Reveal>
          </div>

          {/* Text */}
          <div className="w-full md:w-[52%]">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="block w-8 h-[1px]"
                  style={{ backgroundColor: "var(--color-text-faint)" }}
                />
                <span
                  className="eyebrow"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  How It Works
                </span>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2
                className="font-[family-name:var(--font-cormorant)] font-normal leading-snug mb-8"
                style={{
                  fontSize: "clamp(26px, 3.8vw, 40px)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                }}
              >
                We walk through your home. We build the plan. We hire the
                contractors. We manage every detail.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p
                className="font-[family-name:var(--font-poppins)] font-light text-[15px] leading-[1.85] max-w-[440px] mb-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                Paint, flooring, landscaping, kitchen updates, staging — the
                entire punch list you&apos;ve been putting off. We take it from
                first call to final walk-through.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <p
                className="font-[family-name:var(--font-cormorant)] italic font-normal text-[20px] mb-10"
                style={{ color: "var(--color-terracotta)" }}
              >
                You pay nothing until closing day. Not a deposit. Not a draw.
                Nothing.
              </p>
            </Reveal>

            <Reveal delay={500}>
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
