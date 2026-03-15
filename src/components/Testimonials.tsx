import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "They handled the painters, the floors, the landscaping \u2014 every single thing. We didn\u2019t lift a finger, and our home sold for $38,000 more than we expected.",
    name: "Karen & Tom M.",
    location: "Lewes, Delaware",
    initials: "KT",
  },
  {
    quote:
      "I inherited my mother\u2019s home and had no idea where to start. They managed everything from the first phone call to closing day. I didn\u2019t pay a cent until the sale went through.",
    name: "David R.",
    location: "Rehoboth Beach, Delaware",
    initials: "DR",
  },
];

function Stars() {
  return (
    <div className="flex gap-[2px] mb-5">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="text-[14px]"
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
        <Reveal>
          <div className="text-center mb-16">
            <span
              className="eyebrow"
              style={{ color: "var(--color-text-faint)" }}
            >
              From Our Clients
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 200}>
              <div
                className="p-10 md:p-12 h-full"
                style={{
                  backgroundColor: "var(--color-cream)",
                  border: "1px solid rgba(28,25,23,0.03)",
                }}
              >
                <Stars />
                <blockquote
                  className="font-[family-name:var(--font-cormorant)] italic font-normal text-[18px] leading-[1.75] mb-8"
                  style={{ color: "var(--color-text)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-[family-name:var(--font-poppins)] font-semibold text-[10px] tracking-wide"
                    style={{
                      backgroundColor: "var(--color-terracotta)",
                      color: "var(--color-cream)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <span
                      className="block font-[family-name:var(--font-poppins)] font-medium text-[12px]"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t.name}
                    </span>
                    <span
                      className="block font-[family-name:var(--font-poppins)] font-light text-[11px]"
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
