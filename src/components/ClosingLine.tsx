import Reveal from "./Reveal";

export default function ClosingLine() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--color-charcoal-light)" }}
    >
      <div className="content-container text-center">
        <Reveal>
          <p
            className="font-[family-name:var(--font-cormorant)] italic font-normal"
            style={{
              fontSize: "clamp(16px, 2.2vw, 22px)",
              color: "rgba(255,248,242,0.4)",
              lineHeight: 1.6,
            }}
          >
            The best time to prepare your home was last month. The second best
            time is a phone call away.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
