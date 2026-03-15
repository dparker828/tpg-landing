"use client";

import { useState, useRef } from "react";
import Reveal from "@/components/Reveal";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="section-padding bg-cream">
      <div className="content-container max-w-[1200px]">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6 bg-terracotta"></div>
            <p className="eyebrow text-terracotta">THE DIFFERENCE</p>
          </div>
        </Reveal>

        <Reveal>
          <div
            ref={containerRef}
            className="relative w-full max-h-[600px] bg-gray-200 overflow-hidden rounded-lg"
            style={{
              aspectRatio: "16 / 9",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {/* Before Side */}
            <div className="absolute inset-0 w-full h-full">
              <div
                className="w-full h-full flex flex-col items-center justify-center text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #C5B8A8 0%, #B8AFA0 100%)",
                }}
              >
                <p className="text-xl md:text-2xl font-medium tracking-wide">
                  BEFORE PREPARATION
                </p>
                <p className="text-sm md:text-base mt-2 opacity-80">
                  As-Is Condition
                </p>
              </div>
            </div>

            {/* After Side */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center text-charcoal"
                style={{
                  background:
                    "linear-gradient(135deg, #D4C5B0 0%, #E8DDD0 100%)",
                }}
              >
                <p className="text-xl md:text-2xl font-medium tracking-wide">
                  AFTER PREPARATION
                </p>
                <p className="text-sm md:text-base mt-2 opacity-80">
                  Market Ready
                </p>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-terracotta"
              style={{
                left: `${sliderPosition}%`,
                transform: "translateX(-50%)",
              }}
              onPointerDown={handlePointerDown}
            >
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-terracotta rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-md"
                onPointerDown={handlePointerDown}
              >
                <span className="text-terracotta text-sm font-bold select-none">
                  ◀▶
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Caption Row */}
        <Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <p className="body-text text-charcoal max-w-md">
              This home sold for <span className="font-medium">$38,000 more</span>{" "}
              after preparation. The homeowner paid nothing upfront.
            </p>
            <div className="flex justify-start md:justify-end">
              <a
                href="#"
                className="text-terracotta font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
              >
                YOUR HOME COULD BE NEXT →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
