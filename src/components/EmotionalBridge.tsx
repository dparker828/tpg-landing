import Reveal from "./Reveal";

export default function EmotionalBridge() {
  return (
    <section style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="content-container section-padding flex flex-col items-center text-center">
        <Reveal>
          <div className="section-rule mx-auto mb-12" />
        </Reveal>
        <Reveal delay={150}>
          <p
            className="font-[family-name:var(--font-cormorant)] font-normal max-w-[640px]"
            style={{
              fontSize: "clamp(24px, 3.5vw, 38px)",
              lineHeight: 1.5,
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
            }}
          >
            You already know your home needs work before it sells. 
            What you need is someone who will{" "}
            <em style={{ color: "var(--color-terracotta)" }}>
              actually do it for you
            </em>{" "}
            — and not ask for a check upfront.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p
            className="font-[family-name:var(--font-poppins)] font-light text-[14px] leading-relaxed max-w-[420px] mt-8"
            style={{ color: "var(--color-text-faint)" }}
          >
            That&apos;s exactly what we built.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
