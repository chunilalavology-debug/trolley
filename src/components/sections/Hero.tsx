"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { revealOnMount } from "@/lib/animate";
import { assetPath } from "@/lib/asset";
import { registerGsapPlugins } from "@/lib/gsap";

const socials = [
  { name: "Facebook", href: "#" },
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      revealOnMount(".hero-reveal", { delay: 0.15, duration: 0.9 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-white pb-14 pt-6 lg:pb-20 lg:pt-8"
    >
      <div className="hero-watermark pointer-events-none absolute left-[56%] top-[36%] -translate-x-1/2 -translate-y-1/2 select-none font-bold lowercase opacity-80">
        etrolley
      </div>

      <div className="section-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-7">
          <div className="hero-reveal lg:col-span-3">
            <div className="card-shadow inline-block rounded-lg border border-border bg-white p-4">
              <Image
                src="/qr.png"
                alt="E-Trolley QR code"
                width={250}
                height={250}
                className="h-44 w-44 object-contain sm:h-48 sm:w-48"
                priority
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="max-w-[220px] text-[13px] leading-relaxed text-muted">
                etrolley is a platform that has been officially validated by the Qatari Ministry of Communications.
              </p>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal">
              Certified by THEQA
            </p>
          </div>

          <div className="hero-reveal text-center lg:col-span-5 lg:text-left">
            <h1 className="text-4xl font-bold leading-[1.12] text-foreground sm:text-5xl lg:text-[4.1rem]">
              Your store will be ready in no more than a minute.
            </h1>
            <p className="mt-3 text-xs text-muted">Link</p>
            <Link href="#contact" className="btn-teal-lg mt-2 inline-flex h-14 w-full rounded-xl px-10 text-sm sm:w-auto sm:text-base">
              build your store now
            </Link>
            <div className="mt-5 flex justify-center gap-3 lg:justify-start">
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bfd3ca] bg-white transition-colors hover:border-teal" aria-label="Previous">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bfd3ca] bg-white transition-colors hover:border-teal" aria-label="Next">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="hero-reveal relative lg:col-span-4">
            <div className="relative mx-auto max-w-[460px] lg:mx-0 lg:ml-auto">
              <Image
                src={assetPath("/laptop.png")}
                alt="Laptop showing online store"
                width={620}
                height={470}
                className="relative z-10 rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <aside className="fixed right-[88px] top-[40%] z-30 hidden flex-col items-center gap-2.5 xl:flex" aria-label="Social media">
        <span className="text-xs text-muted" style={{ writingMode: "vertical-rl" }}>Follow</span>
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-xs font-medium text-foreground/70 transition-colors hover:border-teal hover:text-teal"
            aria-label={s.name}
          >
            {s.name[0]}
          </a>
        ))}
      </aside>
    </section>
  );
}
