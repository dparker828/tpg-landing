import Reveal from "./Reveal";

export default function ClosingLine() {
  return (
    <section
      style={{ backgroundColor: "var(--color-charcoal-light)" }}
      className="py-24 md:py-32"
    >
      <div className="content-container text-center">
        <Reveal>
          <p
            className="font-[family-name:var(--font-cormorant)] italic font-normal mx-auto max-w-[600px]"
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              lineHeight: 1.6,
              color: "rgba(255,248,242,0.3)",
            }}
          >
            The best time to prepare your home was last month.
            <br />
            The second best time is a phone call away.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
