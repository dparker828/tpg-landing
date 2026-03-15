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
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Photo (desktop only) */}
          <div className="hidden md:block md:w-[40%]">
            <Reveal>
              <PhotoFrame
                src="/images/be_where_1-2x.jpg"
                alt="New beginnings"
                aspect="4:5"
                shadowDirection="left"
              />
            </Reveal>
          </div>

          {/* Form */}
          <div className="w-full md:w-[52%]">
            {!submitted ? (
              <>
                <Reveal>
                  <div className="section-rule mb-10" />
                </Reveal>

                <Reveal delay={100}>
                  <h2
                    className="font-[family-name:var(--font-cormorant)] font-normal mb-4"
                    style={{
                      fontSize: "clamp(30px, 4.5vw, 44px)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      color: "var(--color-text)",
                    }}
                  >
                    Let&apos;s talk about
                    <br />
                    your home.
                  </h2>
                </Reveal>

                <Reveal delay={200}>
                  <p
                    className="font-[family-name:var(--font-poppins)] font-light text-[15px] mb-10"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Leave your name and number. Dustin or Rachel will call you
                    personally within 24 hours.
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
                      className="form-input mb-10"
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
                      className="font-[family-name:var(--font-poppins)] font-light text-[11px] mt-5 text-center"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      No cost. No obligation. Just a conversation.
                    </p>
                  </Reveal>

                  <Reveal delay={700}>
                    <div
                      className="mt-8 pt-6 flex items-center justify-center gap-3"
                      style={{
                        borderTop: "1px solid rgba(28,25,23,0.05)",
                      }}
                    >
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="text-[12px]"
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
                        200+ five-star reviews
                      </span>
                    </div>
                  </Reveal>
                </form>
              </>
            ) : (
              <div className="text-center py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
                  style={{ backgroundColor: "var(--color-terracotta)" }}
                >
                  <svg
                    width="28"
                    height="28"
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
                  className="font-[family-name:var(--font-cormorant)] font-normal text-[28px] mb-4"
                  style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}
                >
                  We&apos;ll be in touch.
                </h3>
                <p
                  className="font-[family-name:var(--font-poppins)] font-light text-[14px]"
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
