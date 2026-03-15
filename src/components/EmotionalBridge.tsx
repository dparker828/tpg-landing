import Reveal from "./Reveal";

export default function EmotionalBridge() {
  return (
    <section style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="content-container section-padding flex flex-col items-center text-center">
        <Reveal>
          <p
            className="heading-sub max-w-[600px]"
            style={{ fontStyle: "normal" }}
          >
            A home sale is rarely just a transaction.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p
            className="font-[family-name:var(--font-poppins)] font-light text-[15px] leading-relaxed max-w-[440px] mt-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            It&apos;s a new chapter, a necessary ending, or a long-overdue
            beginning. We treat it that way — because the details of how your
            home goes to market are the details of how one story closes and the
            next one opens.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
