import Reveal from "./Reveal";

const situations = [
  "Your home needs work and you don\u2019t have the cash to start.",
  "You inherited a property and aren\u2019t sure where to begin.",
  "You know selling as-is means losing tens of thousands.",
  "The thought of managing contractors makes you want to wait another year.",
];

export default function WhoThisIsFor() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="content-container max-w-[720px] mx-auto">
        <Reveal>
          <h2
            className="heading-section mb-12"
            style={{
              fontStyle: "italic",
              fontSize: "clamp(26px, 4vw, 40px)",
            }}
          >
            Built for the homeowner who&apos;s been putting this off.
          </h2>
        </Reveal>

        <div>
          {situations.map((text, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className="flex items-start gap-5 py-5"
                style={{
                  borderBottom: "1px solid rgba(28,25,23,0.06)",
                }}
              >
                <span
                  className="font-[family-name:var(--font-cormorant)] font-semibold text-[18px] shrink-0 w-6"
                  style={{ color: "rgba(184,112,75,0.35)" }}
                >
                  {i + 1}
                </span>
                <p
                  className="font-[family-name:var(--font-poppins)] font-normal text-[15px]"
                  style={{ color: "rgba(28,25,23,0.6)" }}
                >
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
