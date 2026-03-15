"use client";

import Reveal from "@/components/Reveal";

const STATS = [
  {
    metric: "$1B+",
    label: "IN REAL ESTATE SOLD",
  },
  {
    metric: "200+",
    label: "FIVE-STAR REVIEWS",
  },
  {
    metric: "11",
    label: "YEARS IN DELAWARE",
  },
];

export function TrustBar() {
  return (
    <section className="bg-cream-deep border-t border-b border-charcoal/5">
      <div className="content-container w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:justify-between">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="text-center md:text-left">
                <p className="font-serif text-charcoal clamp(text-2xl, 5vw, text-5xl) font-normal">
                  {stat.metric}
                </p>
                <p className="eyebrow text-charcoal/60 mt-2">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
