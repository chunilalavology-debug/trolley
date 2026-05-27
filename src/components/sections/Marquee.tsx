"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { registerGsapPlugins } from "@/lib/gsap";

const words = [
  "Branding",
  "Advertising",
  "Merchandising",
  "Packaging",
  "Digital",
  "Events",
  "Strategy",
  "Production",
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!trackRef.current) return;

    const track = trackRef.current;
    const width = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -width,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const items = [...words, ...words];

  return (
    <div
      className="overflow-hidden border-y border-border py-6 md:py-8"
      aria-hidden
    >
      <div ref={trackRef} className="marquee-track">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="display-heading shrink-0 text-3xl text-foreground/10 transition-colors duration-300 hover:text-accent/40 md:text-5xl lg:text-6xl"
          >
            {word}
            <span className="mx-6 text-accent md:mx-10">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
