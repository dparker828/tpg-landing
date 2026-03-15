'use client';

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

export function OriginPreview() {
  return (
    <Reveal>
      <section className="section-padding bg-charcoal">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="eyebrow text-cream">OUR STORY</p>
              <h2 className="heading-section mt-4 text-cream">
                From classroom to community.
              </h2>
              <p className="body-large mt-6 text-cream" style={{ opacity: 0.7 }}>
                When Dustin and Rachel Parker traded their teaching careers for real estate in 2015, they brought something different — a genuine belief that helping people navigate the biggest financial decision of their lives should feel more like guidance than a sales pitch.
              </p>
              <p className="body-text mt-4 text-cream" style={{ opacity: 0.5 }}>
                Nine generations of Sussex County roots. Three offices. One mission: do the hard deals well.
              </p>
              <div className="mt-8">
                <Link
                  href="/our-story"
                  className="text-terracotta font-medium hover:underline transition-all"
                >
                  Read Our Story →
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full aspect-[4/5] rounded-none overflow-hidden border border-cream" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <Image
                src="/the-parkers.jpg"
                alt="The Parker Family"
                width={400}
                height={500}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
