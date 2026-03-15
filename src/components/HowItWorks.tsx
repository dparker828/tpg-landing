"use client";

import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "The Walk-Through",
      description:
        "We visit your home and build a clear, prioritized plan — not based on what looks nice, but on what buyers in Sussex and Kent County actually pay more for. You approve everything before we start.",
    },
    {
      number: "02",
      title: "We Run the Project",
      description:
        "Our team hires the contractors, manages the timeline, handles the inspections, and solves every problem that comes up. You live your life. We call you when it's done.",
    },
    {
      number: "03",
      title: "You Sell Stronger",
      description:
        "Your home goes to market looking like a different property. Buyers see move-in ready. Offers come in higher. The preparation costs come out of proceeds at closing — not your savings.",
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-sage)" }}>
      <div className="content-container">
        {/* Eyebrow */}
        <Reveal>
          <p className="eyebrow text-cream">THREE STEPS</p>
        </Reveal>

        {/* Heading */}
        <Reveal delay={50}>
          <h2 className="heading-section text-cream mt-4 max-w-3xl">
            We walk through your home. We build the plan. We hire the
            contractors. We manage every detail.
          </h2>
        </Reveal>

        {/* Body Text */}
        <Reveal delay={100}>
          <p className="body-text text-cream max-w-2xl mt-6 opacity-90">
            Paint, flooring, landscaping, kitchen updates, staging — the entire
            punch list you've been putting off. We take it from first call to
            final walk-through.
          </p>
        </Reveal>

        {/* Guarantee Line */}
        <Reveal delay={150}>
          <p className="text-cream italic mt-6 font-serif" style={{ color: "var(--color-terracotta)" }}>
            You pay nothing until closing day. Not a deposit. Not a draw.
            Nothing.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={200}>
          <a
            href="/contact"
            className="cta-ghost inline-block mt-10 border border-cream text-cream"
          >
            See If Your Home Qualifies
          </a>
        </Reveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 150}>
              <div>
                <p
                  className="font-serif"
                  style={{
                    fontSize: "64px",
                    color: "rgba(255, 248, 242, 0.1)",
                    lineHeight: "1",
                  }}
                >
                  {step.number}
                </p>
                <h3 className="font-poppins font-medium text-base text-cream mt-2">
                  {step.title}
                </h3>
                <p
                  className="font-poppins text-sm font-light text-cream mt-3"
                  style={{
                    opacity: 0.7,
                    lineHeight: "1.8",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
