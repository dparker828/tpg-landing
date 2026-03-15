"use client";

import Reveal from "@/components/Reveal";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "They handled the painters, the floors, the landscaping — every single thing. We didn't lift a finger, and our home sold for $38,000 more than we expected.",
      author: "Karen & Tom M.",
      location: "Lewes, Delaware",
      initials: "KT",
    },
    {
      quote:
        "I inherited my mother's home and had no idea where to start. They managed everything from the first phone call to closing day. I didn't pay a cent until the sale went through.",
      author: "David R.",
      location: "Rehoboth Beach, Delaware",
      initials: "DR",
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-cream-deep)" }}>
      <div className="content-container">
        {/* Eyebrow */}
        <Reveal>
          <p className="eyebrow text-center text-charcoal">FROM OUR CLIENTS</p>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 150}>
              <div
                className="bg-cream p-10 md:p-12 rounded-lg border"
                style={{
                  borderColor: "rgba(28, 25, 23, 0.05)",
                }}
              >
                {/* Stars */}
                <p className="text-terracotta text-lg mb-6">★★★★★</p>

                {/* Quote */}
                <p
                  className="font-serif italic text-charcoal"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-4 mt-8">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm"
                    style={{
                      backgroundColor: "var(--color-terracotta)",
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-sm">
                      {testimonial.author}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: "rgba(28, 25, 23, 0.6)",
                      }}
                    >
                      {testimonial.location}
                    </p>
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
