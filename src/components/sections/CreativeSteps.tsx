"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { creativeSteps } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { revealOnScroll } from "@/lib/animate";
import { registerGsapPlugins } from "@/lib/gsap";

const icons: Record<string, ReactNode> = {
  gear: (
    <svg className="h-6 w-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  megaphone: (
    <svg className="h-6 w-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  save: (
    <svg className="h-6 w-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
  ),
  target: (
    <svg className="h-6 w-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

const positions: Record<string, string> = {
  "left-top": "lg:absolute lg:left-0 lg:top-[146px]",
  "left-bottom": "lg:absolute lg:left-[244px] lg:top-[146px]",
  "center-top": "lg:absolute lg:left-[488px] lg:top-0",
  "right-bottom": "lg:absolute lg:left-[732px] lg:top-[146px]",
};

export function CreativeSteps() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      revealOnScroll(sectionRef.current, ".step-card");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-14 md:py-20" id="steps">
      <div className="section-container">
        <SectionLabel className="mb-4 w-fit">Build a store</SectionLabel>
        <h2 className="mb-10 text-left text-5xl font-bold leading-[1.06] text-foreground lg:text-[54px]">
          Our
          <br />
          Creative Steps
        </h2>

        <div className="relative grid gap-4 lg:block lg:min-h-[420px]">
          {creativeSteps.map((step) => (
            <article
              key={step.number}
              className={`step-card card-shadow relative h-[210px] w-full rounded-2xl bg-card p-7 md:w-[228px] ${positions[step.position]}`}
            >
              <div className="mb-4 opacity-80">{icons[step.icon]}</div>
              <span className="absolute right-6 top-4 text-6xl font-bold leading-none text-teal/35">
                {step.number}
              </span>
              <p className="relative z-10 max-w-[180px] pt-8 text-[17px] font-semibold leading-[1.2] text-[#4e5454]">
                {step.text}
              </p>
            </article>
          ))}

          <div className="step-card flex items-center justify-center lg:absolute lg:left-[528px] lg:top-[238px]">
            <Link
              href="#contact"
              className="flex h-36 w-36 items-center justify-center rounded-full border border-teal bg-[#f7f7f5] text-center text-[41px] font-semibold leading-[1.03] text-teal transition-transform hover:scale-105"
            >
              Let&apos;s Start Now!
            </Link>
          </div>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:mt-16 lg:grid-cols-[300px_1fr]">
          <div className="relative h-[92px]">
            <span className="absolute left-[94px] top-0 text-[28px]" aria-hidden>
              💬
            </span>
            <div className="absolute left-[54px] top-[30px] h-10 w-28 -rotate-[18deg] rounded-sm bg-teal" aria-hidden />
            <span className="absolute left-0 top-[36px] inline-flex h-12 items-center rounded-full border border-border bg-white px-6 text-[11px] italic text-[#4f5454] shadow-sm">
              No technical skills required.
            </span>
          </div>
          <p className="max-w-[600px] text-sm leading-relaxed text-[#4e5454] md:text-[16px]">
            Simple or Professional? Choose the plan that best suits your business, based on the level of features you require, then browse the ready-made designs and choose the one that suits you. All designs are available to all users at no additional charge. Or request your own custom design. Fill out the basic information and complete the payment in a quick and secure manner.
          </p>
        </div>

        <SectionLabel className="mt-12 justify-center">Our Services</SectionLabel>
      </div>
    </section>
  );
}
