"use client";

import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="section-padding pt-28 md:pt-36"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="content-container">
        {/* Mobile: photo first */}
        <div className="block md:hidden mb-10">
          <Reveal>
            <PhotoFrame
              src="/images/the-parkers.jpg"
              alt="Dustin & Rachel Parker"
              aspect="16:9"
              label="Dustin & Rachel Parker"
              sublabel="Georgetown, Delaware"
              priority
            />
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-[clamp(40px,6vw,80px)]">
          {/* Left column — text */}
          <div className="md:w-[60%] flex-shrink-0">
            {/* Eyebrow */}
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="block w-8 h-[1.5px]"
                  style={{ backgroundColor: "var(--color-tpg-blue)" }}
                />
                <span
                  className="eyebrow"
                  style={{ color: "var(--color-tpg-blue)" }}
                >
                  Pre-Sale Home Preparation
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={150}>
              <h1 className="heading-hero mb-8">
                Your home needs work
                <br />
                before it sells.
                <br />
                <em style={{ color: "var(--color-terracotta)" }}>
                  We do the work.
                </em>
                <br />
                You keep the money.
              </h1>
            </Reveal>

            {/* Subline */}
            <Reveal delay={300}>
              <p className="body-text max-w-[440px] mb-8">
                Managed repairs, staging, and preparation. Paid from your
                closing proceeds, not your pocket. The only service of its kind
                in Delaware.
              </p>
            </Reveal>

            {/* CTA + microcopy */}
            <Reveal delay={450}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <button onClick={scrollToForm} className="cta-primary w-full sm:w-auto">
                  Get a Free Walk-Through
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7h11M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span
                  className="font-[family-name:var(--font-poppins)] text-[11px] font-light"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  No cost. No obligation.
                </span>
              </div>
            </Reveal>

            {/* Trust strip */}
            <Reveal delay={600}>
              <div
                className="pt-6 flex gap-8 md:gap-12"
                style={{
                  borderTop: "1px solid rgba(28,25,23,0.06)",
                }}
              >
                {[
                  { number: "$1B+", label: "sold" },
                  { number: "200+", label: "five-star reviews" },
                  { number: "11 years", label: "local" },
                ].map((item) => (
                  <div key={item.label}>
                    <span
                      className="font-[family-name:var(--font-cormorant)] font-semibold text-[22px]"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="block font-[family-name:var(--font-poppins)] font-normal text-[10px]"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column — portrait (desktop only) */}
          <div className="hidden md:block md:w-[35%] mt-16">
            <Reveal delay={300}>
              <PhotoFrame
                src="/images/the-parkers.jpg"
                alt="Dustin & Rachel Parker"
                aspect="3:4"
                label="Dustin & Rachel Parker"
                sublabel="Georgetown, Delaware"
                priority
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
