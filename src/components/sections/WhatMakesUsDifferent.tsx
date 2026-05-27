"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { differentSlides } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { revealOnScroll } from "@/lib/animate";
import { registerGsapPlugins } from "@/lib/gsap";

export function WhatMakesUsDifferent() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const slide = differentSlides[index];

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      revealOnScroll(sectionRef.current, ".diff-reveal");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? differentSlides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === differentSlides.length - 1 ? 0 : i + 1));

  return (
    <section ref={sectionRef} id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <SectionLabel className="diff-reveal mb-6 justify-center">Our Services</SectionLabel>
        <h2 className="diff-reveal mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          What Make Us Different?
        </h2>

        <div className="diff-reveal grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              width={600}
              height={450}
              className="h-full min-h-[280px] w-full object-cover transition-opacity duration-500"
            />
          </div>
          <div className="relative flex flex-col justify-between rounded-2xl bg-teal p-8 md:p-10 lg:min-h-[320px]">
            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">{slide.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                {slide.description}
              </p>
            </div>
            <span className="mt-8 text-7xl font-bold text-white/30 md:text-8xl">{slide.number}</span>
            <span className="absolute right-6 top-6 text-sm text-white/80">
              {index + 1}/{differentSlides.length}
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button type="button" onClick={prev} className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white hover:border-teal" aria-label="Previous slide">←</button>
          <button type="button" onClick={next} className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white hover:border-teal" aria-label="Next slide">→</button>
        </div>
      </div>

      <div className="relative mt-16 bg-sage-light/40 py-4">
        <div className="section-container flex items-center justify-between">
          <Image
            src="/logo.png"
            alt=""
            width={120}
            height={50}
            className="h-14 w-auto opacity-90"
            aria-hidden
          />
          <SectionLabel light>Additional</SectionLabel>
        </div>
      </div>
    </section>
  );
}
