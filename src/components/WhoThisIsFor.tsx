"use client";

import Reveal from "./Reveal";

const situations = [
  "Your home needs work and you don\u2019t have the cash to start.",
  "You inherited a property and don\u2019t know where to begin.",
  "You know that selling as-is means leaving tens of thousands on the table.",
  "You\u2019ve been putting this off because the thought of managing contractors feels impossible.",
];

export default function WhoThisIsFor() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="content-container max-w-[760px] mx-auto">
        <Reveal>
          <div className="section-rule mb-12" />
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="heading-section mb-14"
            style={{
              fontStyle: "italic",
              fontSize: "clamp(28px, 4.5vw, 44px)",
            }}
          >
            This is for the homeowner who&apos;s been putting it off.
          </h2>
        </Reveal>

        <div>
          {situations.map((text, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className="flex items-start gap-6 py-6"
                style={{
                  borderBottom: "1px solid rgba(28,25,23,0.05)",
                }}
              >
                <span
                  className="font-[family-name:var(--font-cormorant)] font-semibold text-[20px] shrink-0 w-7 text-right"
                  style={{ color: "rgba(184,112,75,0.3)" }}
                >
                  {i + 1}
                </span>
                <p
                  className="font-[family-name:var(--font-poppins)] font-normal text-[16px] leading-[1.7]"
                  style={{ color: "rgba(28,25,23,0.55)" }}
                >
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600}>
          <p
            className="font-[family-name:var(--font-cormorant)] italic font-normal text-[18px] mt-12"
            style={{ color: "var(--color-text-faint)" }}
          >
            If any of these sound familiar, you&apos;re exactly who we built
            this for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
