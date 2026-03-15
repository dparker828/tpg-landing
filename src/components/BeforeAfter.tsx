"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

interface BeforeAfterProps {
  beforeSrc?: string;
  afterSrc?: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(35);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      setDragging(true);
      updatePosition(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [updatePosition]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      updatePosition(e.clientX);
    },
    [dragging, updatePosition]
  );

  const onPointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    if (dragging) {
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "";
    }
    return () => {
      document.body.style.userSelect = "";
    };
  }, [dragging]);

  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="content-container pb-4">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span
              className="block w-8 h-[1px]"
              style={{ backgroundColor: "var(--color-text-faint)" }}
            />
            <span
              className="eyebrow"
              style={{ color: "var(--color-text-faint)" }}
            >
              The Difference
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] max-h-[600px] cursor-ew-resize select-none overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          role="slider"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Before and after comparison slider"
          tabIndex={0}
        >
          {/* After layer (full) */}
          <div className="absolute inset-0">
            {afterSrc ? (
              <Image
                src={afterSrc}
                alt="After preparation"
                fill
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  background:
                    "linear-gradient(160deg, #F5EDE3, #e8dfd4, #FFF8F2)",
                }}
              >
                <span
                  className="eyebrow text-[9px]"
                  style={{ color: "rgba(28,25,23,0.1)" }}
                >
                  AFTER PREPARATION
                </span>
                <span
                  className="font-[family-name:var(--font-cormorant)] italic text-[20px] mt-3"
                  style={{ color: "rgba(28,25,23,0.08)" }}
                >
                  Market ready
                </span>
              </div>
            )}
          </div>

          {/* Before layer (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            {beforeSrc ? (
              <Image
                src={beforeSrc}
                alt="Before preparation"
                fill
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  background:
                    "linear-gradient(160deg, #c8bfb4, #b0a89c, #9e968b)",
                }}
              >
                <span
                  className="eyebrow text-[9px]"
                  style={{ color: "rgba(255,248,242,0.2)" }}
                >
                  BEFORE
                </span>
                <span
                  className="font-[family-name:var(--font-cormorant)] italic text-[20px] mt-3"
                  style={{ color: "rgba(255,248,242,0.14)" }}
                >
                  Full of potential
                </span>
              </div>
            )}
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] -translate-x-1/2 z-10"
            style={{
              left: `${position}%`,
              backgroundColor: "rgba(255,255,255,0.9)",
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-tpg-blue)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9H13M5 9L7 7M5 9L7 11M13 9L11 7M13 9L11 11"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Caption */}
      <div className="content-container py-12 md:py-14">
        <Reveal delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p
              className="font-[family-name:var(--font-poppins)] font-light text-[14px]"
              style={{ color: "var(--color-text-muted)" }}
            >
              This home sold for{" "}
              <span
                className="font-[family-name:var(--font-cormorant)] font-semibold text-[20px]"
                style={{ color: "var(--color-terracotta)" }}
              >
                $38,000
              </span>{" "}
              more after preparation. The homeowner paid nothing upfront.
            </p>
            <button
              onClick={scrollToForm}
              className="shrink-0 font-[family-name:var(--font-poppins)] font-medium text-[12px] tracking-wide uppercase hover:underline underline-offset-4 transition-all"
              style={{ color: "var(--color-terracotta)" }}
            >
              Your home could be next →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
