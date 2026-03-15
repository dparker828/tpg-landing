'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setPhone('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Reveal>
      <section className="section-padding bg-cream" id="contact">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/5] bg-cream-deep rounded-none flex items-center justify-center">
              <p className="text-charcoal text-opacity-40">Photo</p>
            </div>

            {/* Form */}
            <div>
              <div className="section-rule" />
              <h2 className="heading-section mt-4">
                Let's talk about your home.
              </h2>
              <p className="body-text mt-4">
                Leave your name and number. Dustin or Rachel will call you personally within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 p-6 bg-cream-deep rounded-sm">
                  <p className="heading-sub text-charcoal flex items-center gap-2">
                    <span className="text-terracotta text-xl">✓</span>
                    Thank you. We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="form-input w-full"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(302) 555-0000"
                        className="form-input w-full"
                        required
                      />
                    </div>
                    <button type="submit" className="cta-primary w-full">
                      Request a Free Walk-Through
                    </button>
                  </form>

                  <p className="caption-text text-center mt-3 text-muted">
                    No cost. No obligation. Just a conversation.
                  </p>

                  <div className="mt-6 pt-6 border-t border-charcoal border-opacity-10">
                    <p className="text-sm text-charcoal text-opacity-60">
                      ★★★★★ 200+ five-star reviews
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
