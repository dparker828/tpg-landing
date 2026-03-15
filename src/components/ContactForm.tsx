"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: "var(--color-cream-deep)" }}
    >
      <div className="content-container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Photo left — hidden on mobile */}
          <div className="hidden md:block md:w-[40%]">
            <Reveal>
              <PhotoFrame
                alt="Working with clients"
                aspect="4:5"
                shadowDirection="left"
              />
            </Reveal>
          </div>

          {/* Form right */}
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

                <Reveal delay={100}>
                  <p
                    className="font-[family-name:var(--font-poppins)] font-light text-sm mb-10"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Your name and number. We call within 24 hours.
                  </p>
                </Reveal>

                <form onSubmit={handleSubmit}>
                  <Reveal delay={200}>
                    <input
                      type="text"
                      className="form-input mb-6"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      aria-label="Your name"
                    />
                  </Reveal>

                  <Reveal delay={300}>
                    <input
                      type="tel"
                      className="form-input mb-10"
                      placeholder="Best phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      aria-label="Best phone number"
                    />
                  </Reveal>

                  <Reveal delay={400}>
                    <button
                      type="submit"
                      className="cta-primary w-full justify-center"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Request a Free Walk-Through"}
                    </button>
                  </Reveal>

                  <Reveal delay={500}>
                    <p
                      className="font-[family-name:var(--font-poppins)] text-[11px] font-light mt-4 text-center"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      No cost. No obligation. Dustin or Rachel will call you
                      personally.
                    </p>
                  </Reveal>

                  <Reveal delay={600}>
                    <div
                      className="mt-6 pt-5 flex items-center justify-center gap-2"
                      style={{
                        borderTop: "1px solid rgba(28,25,23,0.06)",
                      }}
                    >
                      <div className="flex gap-0.5">
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
                        className="font-[family-name:var(--font-poppins)] text-[11px] font-light"
                        style={{ color: "var(--color-text-faint)" }}
                      >
                        200+ five-star reviews on Google
                      </span>
                    </div>
                  </Reveal>
                </form>
              </>
            ) : (
              <Reveal>
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
                    className="font-[family-name:var(--font-cormorant)] font-normal text-[22px] mb-2"
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
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
