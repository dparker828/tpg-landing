"use client";

import Reveal from "@/components/Reveal";

export function EmotionalBridge() {
  return (
    <section className="section-padding bg-charcoal text-cream">
      <div className="content-container w-full max-w-3xl mx-auto text-center">
        {/* Section Rule */}
        <Reveal delay={0}>
          <div className="section-rule mx-auto mb-10 bg-cream/30" />
        </Reveal>

        {/* Main Text */}
        <Reveal delay={100}>
          <p className="heading-sub text-cream">
            You already know your home needs work before it sells. What you need
            is someone who will{" "}
            <span className="italic text-terracotta">actually do it for you</span>
            {" — and not ask for a check upfront."}
          </p>
        </Reveal>

        {/* Supporting Text */}
        <Reveal delay={200}>
          <p className="body-text text-cream/60 mt-6">
            That's exactly what we built.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
