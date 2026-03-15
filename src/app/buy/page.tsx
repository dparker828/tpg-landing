import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Testimonials from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Buy With Us | The Parker Group',
  description: 'Find your home in Delaware with expert guidance. From search to close, we\'re with you every step.',
};

export default function BuyPage() {
  return (
    <main>
      {/* Page Hero */}
      <Reveal>
        <section className="section-padding bg-cream-deep">
          <div className="content-container">
            <div className="max-w-3xl">
              <p className="eyebrow">FIND YOUR HOME</p>
              <h1 className="heading-hero mt-4">
                Find your happy place.
              </h1>
              <p className="body-large mt-6 max-w-2xl">
                Whether you're buying your first home in Sussex County or finding your forever place on the Delmarva coast, we guide every step with clarity, patience, and deep local knowledge.
              </p>
              <div className="mt-8">
                <Link href="/#contact" className="cta-primary">
                  Start Your Search
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* What Makes Us Different */}
      <Reveal>
        <section className="section-padding bg-cream">
          <div className="content-container">
            <h2 className="heading-section text-center mb-12">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-cream-deep rounded-none">
                <h3 className="heading-sub text-charcoal">
                  Local Expertise
                </h3>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  Nine generations of Sussex County roots. We know neighborhoods, schools, the true cost of living, and which streets feel like home.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-cream-deep rounded-none">
                <h3 className="heading-sub text-charcoal">
                  Trusted Guidance
                </h3>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  Our teaching backgrounds shaped how we communicate. We explain every step, answer every question, and never rush your decision.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-cream-deep rounded-none">
                <h3 className="heading-sub text-charcoal">
                  Full Support
                </h3>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  From inspection coordination to negotiation to closing — we handle the details so you can focus on your new home.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonials */}
      <Testimonials />

      {/* Buying Process Section */}
      <Reveal>
        <section className="section-padding bg-charcoal">
          <div className="content-container">
            <h2 className="heading-section text-cream text-center mb-12">
              The Buying Journey
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-terracotta rounded-full flex items-center justify-center">
                    <span className="text-cream font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="heading-sub text-cream">
                      Get Pre-Approved
                    </h3>
                    <p className="body-text text-cream mt-2" style={{ opacity: 0.7 }}>
                      We'll introduce you to trusted lenders and help you understand your budget and options.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-terracotta rounded-full flex items-center justify-center">
                    <span className="text-cream font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="heading-sub text-cream">
                      Search Together
                    </h3>
                    <p className="body-text text-cream mt-2" style={{ opacity: 0.7 }}>
                      We'll show you homes that match your criteria and share insights about neighborhoods, values, and potential.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-terracotta rounded-full flex items-center justify-center">
                    <span className="text-cream font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="heading-sub text-cream">
                      Make Your Offer
                    </h3>
                    <p className="body-text text-cream mt-2" style={{ opacity: 0.7 }}>
                      We'll craft a competitive offer and negotiate on your behalf to get the best deal possible.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-terracotta rounded-full flex items-center justify-center">
                    <span className="text-cream font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="heading-sub text-cream">
                      Close with Confidence
                    </h3>
                    <p className="body-text text-cream mt-2" style={{ opacity: 0.7 }}>
                      We'll coordinate inspections, manage contingencies, and guide you through every document until you have your keys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA Section */}
      <Reveal>
        <section className="section-padding bg-cream-deep">
          <div className="content-container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-section">
                Ready to find your home?
              </h2>
              <p className="body-large mt-6">
                Let's talk about what you're looking for. There's no pressure, no sales tactics — just a conversation about your future.
              </p>
              <div className="mt-8">
                <Link href="/#contact" className="cta-primary">
                  Start the Conversation
                </Link>
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
