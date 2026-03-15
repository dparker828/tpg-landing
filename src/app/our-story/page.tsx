import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Our Story | The Parker Group',
  description: 'From teaching to real estate. Nine generations of Sussex County roots. Our journey to putting people first.',
};

export default function OurStoryPage() {
  return (
    <main>
      {/* Page Hero */}
      <Reveal>
        <section className="section-padding bg-charcoal">
          <div className="content-container">
            <div className="max-w-3xl">
              <p className="eyebrow text-cream">OUR STORY</p>
              <h1 className="heading-hero mt-4 text-cream">
                From classroom to community.
              </h1>
              <p className="body-large mt-6 max-w-2xl text-cream" style={{ opacity: 0.7 }}>
                We're not a franchise. We're not a startup playing real estate. We're a family that left teaching because we believed people deserved better guidance through the biggest financial decisions of their lives.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* The Origin Story */}
      <Reveal>
        <section className="section-padding bg-cream">
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-section">
                  Teaching Led Us Here
                </h2>
                <p className="body-large mt-6">
                  In 2015, Dustin and Rachel Parker made a leap. They left their teaching careers at Sussex Academy, trading classrooms for conversations about home — literal and figurative.
                </p>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  As the ninth-generation Sussex County native and lifelong educator, Dustin brought patience, clarity, and a genuine belief that every client deserves to understand every decision. Rachel brought the same teaching instincts: meet people where they are, explain thoroughly, and never oversell.
                </p>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  What started as one office in Georgetown grew to three. What began as a personal mission became a team philosophy.
                </p>
              </div>
              <div className="w-full aspect-[4/5] rounded-none overflow-hidden border border-charcoal border-opacity-10">
                <Image
                  src="/the-parkers.jpg"
                  alt="Dustin and Rachel Parker"
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

      {/* What Drives Us */}
      <Reveal>
        <section className="section-padding bg-cream-deep">
          <div className="content-container">
            <h2 className="heading-section text-center mb-12">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Value 1 */}
              <div className="p-8 bg-cream rounded-none">
                <h3 className="heading-sub text-charcoal">
                  Community First
                </h3>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  We're not just agents. We're neighbors. We're invested in building stronger communities, not just bigger client lists.
                </p>
              </div>

              {/* Value 2 */}
              <div className="p-8 bg-cream rounded-none">
                <h3 className="heading-sub text-charcoal">
                  Education & Empowerment
                </h3>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  Our teaching background shaped everything. We don't sell; we guide. You always understand the why behind every decision.
                </p>
              </div>

              {/* Value 3 */}
              <div className="p-8 bg-cream rounded-none">
                <h3 className="heading-sub text-charcoal">
                  Innovation with Purpose
                </h3>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  We stay current with tools and strategies. But only when they serve our clients better, not our bottom line.
                </p>
              </div>

              {/* Value 4 */}
              <div className="p-8 bg-cream rounded-none">
                <h3 className="heading-sub text-charcoal">
                  Relationships Over Transactions
                </h3>
                <p className="body-text mt-4 text-charcoal text-opacity-70">
                  One transaction closes the door. A relationship means we'll hear from you for years — and we want to.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* By The Numbers */}
      <Reveal>
        <section className="section-padding bg-charcoal">
          <div className="content-container">
            <h2 className="heading-section text-cream text-center mb-12">
              By The Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-5xl font-bold text-terracotta">$1B+</p>
                <p className="body-text text-cream mt-4" style={{ opacity: 0.7 }}>
                  In sales volume
                </p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-terracotta">200+</p>
                <p className="body-text text-cream mt-4" style={{ opacity: 0.7 }}>
                  Five-star reviews
                </p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-terracotta">11</p>
                <p className="body-text text-cream mt-4" style={{ opacity: 0.7 }}>
                  Years of operation
                </p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-terracotta">3</p>
                <p className="body-text text-cream mt-4" style={{ opacity: 0.7 }}>
                  Offices across Delaware
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Give Local */}
      <Reveal>
        <section className="section-padding bg-cream">
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-section">
                #GiveLocal Matters
              </h2>
              <p className="body-large mt-6">
                A percentage of every transaction supports local nonprofits. Schools. Shelters. Community centers. The places that made our families whole.
              </p>
              <p className="body-text mt-6 text-charcoal text-opacity-70">
                Success in real estate is only meaningful if it strengthens the communities we serve.
              </p>
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
                Let's work together.
              </h2>
              <p className="body-large mt-6">
                Whether you're buying, selling, or just curious about what we do — we'd love to talk about your home and your future.
              </p>
              <div className="mt-8">
                <a href="/#contact" className="cta-primary inline-block">
                  Get in Touch
                </a>
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
