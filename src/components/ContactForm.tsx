"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: "var(--color-cream-deep)" }}
    >
      <div className="content-container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Photo (desktop only) */}
          <div className="hidden md:block md:w-[40%]">
            <Reveal>
              <PhotoFrame
                src="/images/be_where_1-2x.jpg"
                alt="Working with clients"
                aspect="4:5"
                shadowDirection="left"
              />
            </Reveal>
          </div>

          {/* Form */}
          <div className="w-full md:w-[55%]">
            {!submitted ? (
              <>
                <Reveal>
                  <h2
                    className="font-[family-name:var(--font-cormorant)] font-normal mb-3"
                    style={{
                      fontSize: "clamp(26px, 4vw, 38px)",
                      color: "var(--color-text)",
                    }}
                  >
                    Let&apos;s talk about your home.
                  </h2>
                </Reveal>

                <Reveal delay={150}>
                  <p
                    className="font-[family-name:var(--font-poppins)] font-light text-sm mb-8"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Your name and number. We call within 24 hours.
                  </p>
                </Reveal>

                <form onSubmit={handleSubmit}>
                  <Reveal delay={300}>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input mb-6"
                      required
                    />
                  </Reveal>

                  <Reveal delay={400}>
                    <input
                      type="tel"
                      placeholder="Best phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input mb-8"
                      required
                    />
                  </Reveal>

                  <Reveal delay={500}>
                    <button type="submit" className="cta-primary w-full">
                      Request a Free Walk-Through
                    </button>
                  </Reveal>

                  <Reveal delay={600}>
                    <p
                      className="font-[family-name:var(--font-poppins)] font-light text-[11px] mt-4 text-center"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      No cost. No obligation. Dustin or Rachel will call you
                      personally.
                    </p>
                  </Reveal>

                  <Reveal delay={700}>
                    <div
                      className="mt-6 pt-4 text-center"
                      style={{
                        borderTop: "1px solid rgba(28,25,23,0.06)",
                      }}
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="text-sm"
                            style={{ color: "var(--color-gold)" }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span
                        className="font-[family-name:var(--font-poppins)] font-light text-[11px]"
                        style={{ color: "var(--color-text-faint)" }}
                      >
                        200+ five-star reviews on Google
                      </span>
                    </div>
                  </Reveal>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "var(--color-terracotta)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#FFF8F2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="font-[family-name:var(--font-cormorant)] font-normal text-[22px] mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  We&apos;ll be in touch.
                </h3>
                <p
                  className="font-[family-name:var(--font-poppins)] font-light text-[13px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Expect a call from Dustin or Rachel within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
