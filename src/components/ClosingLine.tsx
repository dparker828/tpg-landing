'use client';

import Reveal from '@/components/Reveal';

export function ClosingLine() {
  return (
    <Reveal>
      <section className="bg-charcoal py-24 md:py-32">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto">
            <p
              className="heading-sub text-cream italic"
              style={{ opacity: 0.7 }}
            >
              The best time to prepare your home was last month.
            </p>
            <p
              className="heading-sub text-cream italic mt-4"
              style={{ opacity: 0.7 }}
            >
              The second best time is a phone call away.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
