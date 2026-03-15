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
      style={{ backgroundColor: "var(--color-cream)" }}
      className="min-h-screen flex items-center relative"
    >
      <div className="content-container w-full pt-20 pb-16 md:py-0">
        {/* Mobile: photo first */}
        <div className="block md:hidden mb-12">
          <Reveal>
            <PhotoFrame
              src="/images/the-parkers.jpg"
              alt="Dustin & Rachel Parker"
              aspect="16:9"
              priority
            />
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-[clamp(48px,7vw,96px)]">
          {/* Left column — text */}
          <div className="md:w-[58%] flex-shrink-0">
            {/* Eyebrow */}
            <Reveal>
              <div className="flex items-center gap-4 mb-10 md:mb-14">
                <span
                  className="block w-8 h-[1px]"
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
              <h1 className="heading-hero mb-10 md:mb-12">
                Your home could sell
                <br />
                for tens of thousands
                <br />
                more.{" "}
                <em
                  className="block mt-1"
                  style={{ color: "var(--color-terracotta)" }}
                >
                  We make it happen.
                </em>
              </h1>
            </Reveal>

            {/* Subline */}
            <Reveal delay={300}>
              <p className="body-text max-w-[480px] mb-10 md:mb-12">
                We manage every repair, every upgrade, every detail of getting
                your home market-ready — and you pay absolutely nothing until
                closing day. This is the only service of its kind in Delaware.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal delay={450}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <button onClick={scrollToForm} className="cta-primary w-full sm:w-auto">
                  Schedule a Free Walk-Through
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
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
                  No cost. No commitment. Ever.
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right column — portrait (desktop only) */}
          <div className="hidden md:block md:w-[38%]">
            <Reveal delay={400}>
              <PhotoFrame
                src="/images/the-parkers.jpg"
                alt="Dustin & Rachel Parker"
                aspect="3:4"
                priority
              />
              <div className="mt-5 flex items-center gap-3">
                <div className="section-rule" />
                <div>
                  <p
                    className="font-[family-name:var(--font-poppins)] text-[11px] font-normal"
                    style={{ color: "var(--color-text)" }}
                  >
                    Dustin & Rachel Parker
                  </p>
                  <p
                    className="font-[family-name:var(--font-poppins)] text-[10px] font-light"
                    style={{ color: "var(--color-text-faint)" }}
                  >
                    Georgetown, Delaware
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <Reveal delay={800}>
          <div className="flex flex-col items-center gap-2 opacity-20">
            <span className="font-[family-name:var(--font-poppins)] text-[9px] font-light tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-current animate-pulse" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
