import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "They handled the painters, the floors, the landscaping. We didn\u2019t lift a finger and sold for $38,000 more than we expected.",
    name: "Karen & Tom M.",
    location: "Lewes, DE",
    initials: "KT",
  },
  {
    quote:
      "I inherited my mother\u2019s home and had no idea where to start. They managed everything. I didn\u2019t pay a cent until closing.",
    name: "David R.",
    location: "Rehoboth Beach, DE",
    initials: "DR",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="text-[16px]"
          style={{ color: "var(--color-gold)" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 200}>
              <div
                className="p-8 md:p-9"
                style={{
                  backgroundColor: "var(--color-cream)",
                  border: "1px solid rgba(28,25,23,0.04)",
                }}
              >
                <Stars />
                <blockquote
                  className="font-[family-name:var(--font-cormorant)] italic font-normal text-[16px] leading-[1.7] mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-[family-name:var(--font-poppins)] font-semibold text-[10px]"
                    style={{
                      backgroundColor: "var(--color-terracotta)",
                      color: "var(--color-cream)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <span
                      className="block font-[family-name:var(--font-poppins)] font-semibold text-[12px]"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t.name}
                    </span>
                    <span
                      className="block font-[family-name:var(--font-poppins)] font-normal text-[11px]"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      {t.location}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
