"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export function Hero() {
  return (
    <section className="min-h-screen bg-cream flex items-center">
      <div className="content-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_4%_38%] gap-0 items-center min-h-screen py-16 lg:py-0">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow */}
            <Reveal delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-terracotta" />
                <span className="eyebrow">PRE-SALE HOME PREPARATION</span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={100}>
              <h1 className="heading-hero text-charcoal">
                Your home could sell for tens of thousands more.
              </h1>
            </Reveal>

            {/* Subheadline */}
            <Reveal delay={200}>
              <p className="heading-hero italic text-terracotta mt-2">
                We make it happen.
              </p>
            </Reveal>

            {/* Body Text */}
            <Reveal delay={300}>
              <p className="body-text text-charcoal max-w-[480px] mt-8">
                We manage every repair, every upgrade, every detail of getting
                your home market-ready — and you pay absolutely nothing until
                closing day. This is the only service of its kind in Delaware.
              </p>
            </Reveal>

            {/* CTA Button */}
            <Reveal delay={400}>
              <Link href="/contact" className="cta-primary w-fit mt-10">
                Schedule a Free Walk-Through →
              </Link>
            </Reveal>

            {/* Microcopy */}
            <Reveal delay={500}>
              <p className="text-sm text-charcoal/50 mt-4">
                No cost. No commitment. Ever.
              </p>
            </Reveal>
          </div>

          {/* Gap */}
          <div className="hidden lg:block" />

          {/* Right Column: Image */}
          <div className="flex flex-col items-center order-1 lg:order-3 mb-8 lg:mb-0">
            <Reveal delay={100}>
              <div className="w-full lg:max-w-none">
                <Image
                  src="/the-parkers.jpg"
                  alt="Dustin & Rachel Parker"
                  width={400}
                  height={533}
                  className="w-full lg:w-auto object-cover rounded-none aspect-[3/4]"
                  priority
                />
              </div>
            </Reveal>

            {/* Image Caption */}
            <Reveal delay={200}>
              <div className="section-rule mt-6 mb-4" />
            </Reveal>

            <Reveal delay={300}>
              <div className="text-center">
                <p className="font-medium text-charcoal">Dustin & Rachel Parker</p>
                <p className="text-sm text-charcoal/60">Georgetown, Delaware</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center pb-8">
          <Reveal delay={600}>
            <span className="eyebrow text-charcoal/40">SCROLL</span>
            <div className="w-px h-10 bg-terracotta/30 mx-auto mt-2" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
