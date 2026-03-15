"use client";

import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Walk-through",
    body: "We visit your home and build a clear, prioritized plan based on what buyers in this market actually pay more for.",
  },
  {
    number: "02",
    title: "We manage everything",
    body: "Our team hires the contractors, runs the timeline, handles every detail. Your only job is to live your life.",
  },
  {
    number: "03",
    title: "You sell stronger",
    body: "Your home goes to market at its best. Higher offers. Faster close. All costs come from closing proceeds.",
  },
];

export default function HowItWorks() {
  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-sage)" }}
    >
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 150}>
              <div
                className={
                  i > 0
                    ? "pt-8 md:pt-0 border-t md:border-t-0 border-[rgba(255,248,242,0.08)]"
                    : ""
                }
              >
                <span
                  className="block font-[family-name:var(--font-cormorant)] font-semibold text-[44px] mb-4"
                  style={{ color: "rgba(255,248,242,0.12)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[16px] mb-3"
                  style={{ color: "#FFF8F2" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-[family-name:var(--font-poppins)] font-light text-[13px] leading-relaxed"
                  style={{ color: "rgba(255,248,242,0.45)" }}
                >
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="text-center mt-16">
            <button onClick={scrollToForm} className="cta-ghost">
              Talk To Us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
