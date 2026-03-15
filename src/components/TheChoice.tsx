"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export function TheChoice() {
  return (
    <section className="section-padding bg-cream">
      <div className="content-container w-full">
        {/* Eyebrow */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-terracotta" />
            <span className="eyebrow">THE CHOICE</span>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={100}>
          <h2 className="heading-section text-charcoal">
            Two paths. Same table. You choose.
          </h2>
        </Reveal>

        {/* Body Text */}
        <Reveal delay={200}>
          <p className="body-text text-charcoal max-w-2xl mt-4">
            Every listing appointment now has two options. Both serve you well.
            One could net you tens of thousands more.
          </p>
        </Reveal>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Traditional Listing Card */}
          <Reveal delay={300}>
            <div className="bg-cream-deep border border-charcoal/5 p-10 lg:p-12">
              <h3 className="heading-sub text-charcoal">Traditional Listing</h3>
              <p className="body-text text-charcoal mt-6">
                We list your home at market value. Professional photography,
                strategic pricing, full marketing. The trusted path millions of
                sellers take every year.
              </p>
              <p className="text-sm text-charcoal/60 mt-6">
                You manage any repairs yourself before listing
              </p>
            </div>
          </Reveal>

          {/* Preparation-Enhanced Listing Card */}
          <Reveal delay={400}>
            <div className="bg-cream-deep border border-charcoal/5 border-t-[3px] border-t-terracotta p-10 lg:p-12">
              <h3 className="heading-sub text-charcoal">
                Preparation-Enhanced Listing
              </h3>
              <p className="body-text text-charcoal mt-6">
                We walk through your home, build a preparation plan, hire the
                contractors, manage every detail — and your home goes to market
                looking like a different property. You pay nothing until closing
                day.
              </p>
              <p className="italic text-terracotta font-serif my-6 text-lg">
                "You pay nothing until closing day. Not a deposit. Not a draw.
                Nothing."
              </p>
              <p className="text-sm text-charcoal/60">
                Homes sell for an average of $38,000 more after preparation
              </p>
            </div>
          </Reveal>
        </div>

        {/* CTA Button */}
        <Reveal delay={500}>
          <div className="flex justify-center mt-12">
            <Link href="/contact" className="cta-primary">
              See If Your Home Qualifies →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
