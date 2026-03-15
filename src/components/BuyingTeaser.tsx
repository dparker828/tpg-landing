'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';

export function BuyingTeaser() {
  return (
    <Reveal>
      <section className="section-padding bg-cream">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/5] bg-cream-deep rounded-none flex items-center justify-center">
              <p className="text-charcoal text-opacity-40">Coming Soon</p>
            </div>

            {/* Text Content */}
            <div>
              <p className="eyebrow">FOR BUYERS</p>
              <h2 className="heading-section mt-4">
                Finding your next home should feel like an adventure, not an ordeal.
              </h2>
              <p className="body-text mt-6 max-w-lg">
                Whether you're a first-time buyer in Sussex County or relocating to the Delmarva coast, we guide every step — from your first search to your final walk-through. No pressure. No confusion. Just clarity.
              </p>
              <div className="mt-8">
                <Link
                  href="/buy"
                  className="text-terracotta font-medium hover:underline transition-all"
                >
                  Learn About Buying With Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
