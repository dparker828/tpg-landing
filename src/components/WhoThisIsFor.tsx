"use client";

import Reveal from "@/components/Reveal";

export default function WhoThisIsFor() {
  const scenarios = [
    "Your home needs work and you don't have the cash to start.",
    "You inherited a property and don't know where to begin.",
    "You know that selling as-is means leaving tens of thousands on the table.",
    "You've been putting this off because the thought of managing contractors feels impossible.",
    "You're going through a transition and need someone who will just handle it.",
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="content-container">
        {/* Section Rule */}
        <Reveal>
          <div className="w-12 h-px bg-terracotta mb-8"></div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={50}>
          <h2 className="heading-section italic text-charcoal font-serif">
            This is for the homeowner who's been putting it off.
          </h2>
        </Reveal>

        {/* Scenarios List */}
        <div className="mt-12 max-w-2xl space-y-0">
          {scenarios.map((scenario, index) => (
            <Reveal key={index} delay={100 + index * 75}>
              <div
                className="flex gap-6 py-6 border-b border-charcoal"
                style={{
                  borderBottomColor: "rgba(28, 25, 23, 0.05)",
                }}
              >
                <p
                  className="font-serif flex-shrink-0 w-8 text-center"
                  style={{
                    fontSize: "20px",
                    color: "rgba(184, 112, 75, 0.4)",
                  }}
                >
                  {index + 1}
                </p>
                <p className="body-text text-charcoal">{scenario}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing Statement */}
        <Reveal delay={550}>
          <p
            className="mt-8 italic font-serif text-charcoal"
            style={{
              fontSize: "20px",
              color: "var(--color-terracotta)",
            }}
          >
            If any of these sound familiar, you're exactly who we built this for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
