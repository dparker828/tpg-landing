import Reveal from "./Reveal";

const stats = [
  { number: "$1B+", label: "in real estate sold" },
  { number: "200+", label: "five-star reviews" },
  { number: "11", label: "years in Delaware" },
];

export default function TrustBar() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        borderTop: "1px solid rgba(28,25,23,0.04)",
        borderBottom: "1px solid rgba(28,25,23,0.04)",
      }}
    >
      <div className="content-container py-12 md:py-14">
        <div className="flex items-center justify-center gap-12 md:gap-20">
          {stats.map((item, i) => (
            <Reveal key={item.label} delay={i * 120}>
              <div className="text-center">
                <span
                  className="block font-[family-name:var(--font-cormorant)] font-semibold tracking-tight"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    color: "var(--color-text)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.number}
                </span>
                <span
                  className="block font-[family-name:var(--font-poppins)] font-light text-[10px] tracking-wider uppercase mt-1"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
