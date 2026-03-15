import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { TheChoice } from '@/components/TheChoice';
import HowItWorks from '@/components/HowItWorks';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Sell With Us | The Parker Group',
  description: 'List your Delaware home with confidence. From pre-list to close, we handle the hard deals well.',
};

export default function SellPage() {
  return (
    <main>
      {/* Page Hero */}
      <Reveal>
        <section className="section-padding bg-cream-deep">
          <div className="content-container">
            <div className="max-w-3xl">
              <p className="eyebrow">LIST YOUR HOME</p>
              <h1 className="heading-hero mt-4">
                The Keys to Close.
              </h1>
              <p className="body-large mt-6 max-w-2xl">
                Selling a home is one of the biggest financial decisions you'll make. From pre-list to close, we have you covered — with a service no one else in Delaware offers.
              </p>
              <div className="mt-8">
                <Link href="/#contact" className="cta-primary">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Intro Section */}
      <Reveal>
        <section className="section-padding bg-cream">
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-section">
                Two paths. One result: a smooth close.
              </h2>
              <p className="body-large mt-6 max-w-2xl mx-auto">
                Whether you want to prep your home for maximum market appeal or list as-is, we guide you through every decision with transparency and expertise. No hidden fees. No surprises.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* The Choice (Traditional vs Prep) */}
      <TheChoice />

      {/* How It Works Process */}
      <HowItWorks />

      {/* Seller FAQ Section */}
      <Reveal>
        <section className="section-padding bg-cream-deep">
          <div className="content-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-section text-center mb-12">
                Seller Questions
              </h2>
              <div className="space-y-4">
                <details className="border-b border-charcoal border-opacity-10 pb-4">
                  <summary className="cursor-pointer font-medium text-charcoal flex justify-between items-center">
                    <span>How do you determine the listing price?</span>
                    <span>+</span>
                  </summary>
                  <p className="body-text mt-4 text-charcoal text-opacity-70">
                    We conduct a comprehensive market analysis using recent comparable sales, current market conditions, and your home's unique features. You'll always know exactly how we arrived at our recommended price.
                  </p>
                </details>

                <details className="border-b border-charcoal border-opacity-10 pb-4">
                  <summary className="cursor-pointer font-medium text-charcoal flex justify-between items-center">
                    <span>What's your success rate with multiple offers?</span>
                    <span>+</span>
                  </summary>
                  <p className="body-text mt-4 text-charcoal text-opacity-70">
                    Our homes sell with multiple offers more than 40% of the time. We know how to position your home, set the right price, and create competitive urgency.
                  </p>
                </details>

                <details className="border-b border-charcoal border-opacity-10 pb-4">
                  <summary className="cursor-pointer font-medium text-charcoal flex justify-between items-center">
                    <span>Do you handle everything or do I need a lawyer?</span>
                    <span>+</span>
                  </summary>
                  <p className="body-text mt-4 text-charcoal text-opacity-70">
                    You'll want a real estate attorney for contract review and closing — we'll recommend trusted partners. But we handle all the heavy lifting: showings, negotiations, inspection coordination, and communication.
                  </p>
                </details>

                <details className="border-b border-charcoal border-opacity-10 pb-4">
                  <summary className="cursor-pointer font-medium text-charcoal flex justify-between items-center">
                    <span>How quickly can you list my home?</span>
                    <span>+</span>
                  </summary>
                  <p className="body-text mt-4 text-charcoal text-opacity-70">
                    If you're ready, we can list within days. If you want to prep first, we'll timeline that together. Speed matters, but only if it's the right move for your situation.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
