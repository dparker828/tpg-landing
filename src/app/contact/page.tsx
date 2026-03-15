import Reveal from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | The Parker Group',
  description: 'Get in touch with The Parker Group. We\'re here to help with selling, buying, or any real estate questions.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <Reveal>
        <section className="section-padding bg-cream-deep">
          <div className="content-container">
            <div className="max-w-3xl">
              <h1 className="heading-hero">
                Let's talk.
              </h1>
              <p className="body-large mt-6 max-w-2xl">
                Whether you're thinking about selling, buying, or just have questions — we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info Section */}
      <Reveal>
        <section className="section-padding bg-cream">
          <div className="content-container">
            <h2 className="heading-section text-center mb-12">
              Our Offices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Georgetown Office */}
              <div className="text-center">
                <h3 className="heading-sub text-charcoal">
                  Georgetown
                </h3>
                <p className="body-text text-charcoal text-opacity-70 mt-4">
                  14 The Circle<br />
                  Georgetown, DE 19947
                </p>
                <p className="body-text text-terracotta font-medium mt-4">
                  (302) 856-7775
                </p>
              </div>

              {/* Milford Office */}
              <div className="text-center">
                <h3 className="heading-sub text-charcoal">
                  Milford
                </h3>
                <p className="body-text text-charcoal text-opacity-70 mt-4">
                  27 S Church Street<br />
                  Milford, DE 19963
                </p>
                <p className="body-text text-terracotta font-medium mt-4">
                  (302) 422-8200
                </p>
              </div>

              {/* Middletown Office */}
              <div className="text-center">
                <h3 className="heading-sub text-charcoal">
                  Middletown
                </h3>
                <p className="body-text text-charcoal text-opacity-70 mt-4">
                  100 Main Street<br />
                  Middletown, DE 19709
                </p>
                <p className="body-text text-terracotta font-medium mt-4">
                  (302) 378-4444
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="text-center mt-12 pt-8 border-t border-charcoal border-opacity-10">
              <p className="body-text text-charcoal text-opacity-70">
                Email us anytime
              </p>
              <p className="heading-sub text-terracotta mt-2">
                hello@theparkergroup.com
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Response Time Section */}
      <Reveal>
        <section className="section-padding bg-charcoal">
          <div className="content-container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-sub text-cream">
                We're Here to Help
              </h2>
              <p className="body-large text-cream mt-6" style={{ opacity: 0.7 }}>
                When you reach out — whether by phone, email, or form — expect a real conversation within 24 hours. No bots. No delays. Just Dustin or Rachel ready to listen.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
