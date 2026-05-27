"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { designCategories } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { revealOnScroll } from "@/lib/animate";
import { registerGsapPlugins } from "@/lib/gsap";

export function DistinctiveDesigns() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      revealOnScroll(sectionRef.current, ".design-card");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="prices" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 opacity-[0.06]"
        aria-hidden
      >
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-teal h-full w-full">
          <path d="M40 60h120v80H40V60zm20 20v40h80V80H60zm40-30h20v20H100V50z" />
        </svg>
      </div>

      <div className="section-container relative">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <SectionLabel className="mb-4">Select one</SectionLabel>
            <h2 className="text-3xl font-bold md:text-4xl">Distinctive Designs</h2>
          </div>
          <div className="flex gap-2">
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-teal" aria-label="Previous">←</button>
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-teal" aria-label="Next">→</button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {designCategories.map((cat) => (
            <article
              key={cat.title}
              className="design-card card-shadow w-[160px] shrink-0 rounded-2xl bg-white p-5 md:w-[180px]"
            >
              <p className="mb-1 text-xs text-muted">Container</p>
              <h3 className="mb-6 text-sm font-bold">{cat.title}</h3>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-background text-4xl">
                {cat.emoji}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
