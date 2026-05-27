"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { contactInfo } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { revealOnScroll } from "@/lib/animate";
import { registerGsapPlugins } from "@/lib/gsap";

export function SupportHelp() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      revealOnScroll(sectionRef.current, ".support-card");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-container -mt-8 pb-8 md:-mt-12">
      <div className="support-card card-shadow relative overflow-hidden rounded-3xl bg-white p-8 md:p-12">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-orange/10 to-transparent" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel className="mb-4">Support & Help</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Are you in need of assistance or have a question?
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <a
              href={`https://wa.me/97450988700`}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105"
              aria-label="WhatsApp"
            >
              <span className="text-xl font-bold">W</span>
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-md transition-transform hover:scale-105"
              aria-label="Phone"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a
              href={`mailto:${contactInfo.emails[0]}`}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white shadow-md transition-transform hover:scale-105"
              aria-label="Email"
            >
              <span className="text-xl font-bold text-red-500">M</span>
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-4 right-8 text-teal/20" aria-hidden>
          <svg className="h-32 w-32" viewBox="0 0 100 100" fill="currentColor">
            <path d="M20 30h50l10 20v30H30V50l-10-20zm5 15v35h40V50l-8-15H25z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
