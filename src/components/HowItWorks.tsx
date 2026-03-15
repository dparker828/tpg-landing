"use client";

import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "The Walk-Through",
    body: "We visit your home and build a clear, prioritized plan — not based on what looks nice, but on what buyers in Sussex and Kent County actually pay more for. You approve everything before we start.",
  },
  {
    number: "02",
    title: "We Run the Project",
    body: "Our team hires the contractors, manages the timeline, handles the inspections, and solves every problem that comes up. You live your life. We call you when it's done.",
  },
  {
    number: "03",
    title: "You Sell Stronger",
    body: "Your home goes to market looking like a different property. Buyers see move-in ready. Offers come in higher. The preparation costs come out of proceeds at closing — not your savings.",
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
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span
              className="block w-8 h-[1px]"
              style={{ backgroundColor: "rgba(255,248,242,0.2)" }}
            />
            <span
              className="eyebrow"
              style={{ color: "rgba(255,248,242,0.35)" }}
            >
              Three Steps
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 180}>
              <div
                className={
                  i > 0
                    ? "pt-10 md:pt-0 border-t md:border-t-0 border-[rgba(255,248,242,0.06)]"
                    : ""
                }
              >
                <span
                  className="block font-[family-name:var(--font-cormorant)] font-semibold text-[52px] mb-5"
                  style={{ color: "rgba(255,248,242,0.08)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[15px] mb-4 tracking-wide"
                  style={{ color: "#FFF8F2" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-[family-name:var(--font-poppins)] font-light text-[13px] leading-[1.9]"
                  style={{ color: "rgba(255,248,242,0.4)" }}
                >
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600}>
          <div className="text-center mt-20">
            <button onClick={scrollToForm} className="cta-ghost">
              Start With a Conversation
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
