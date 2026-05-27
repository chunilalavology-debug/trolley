"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-white pb-16 pt-8 lg:pb-24 lg:pt-12"
    >
      <div className="hero-watermark pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 select-none font-bold lowercase">
        etrolley
      </div>

      <div className="section-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="hero-reveal lg:col-span-3">
            <div className="card-shadow inline-block rounded-lg border border-border bg-white p-4">
              <div className="flex h-28 w-28 items-center justify-center bg-white sm:h-32 sm:w-32">
                <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
                  <rect x="10" y="10" width="12" height="12" fill="#1a1a1a" />
                  <rect x="26" y="10" width="12" height="12" fill="#1a1a1a" />
                  <rect x="42" y="10" width="12" height="12" fill="#1a1a1a" />
                  <rect x="58" y="10" width="12" height="12" fill="#1a1a1a" />
                  <rect x="74" y="10" width="12" height="12" fill="#1a1a1a" />
                  <rect x="10" y="26" width="12" height="12" fill="#1a1a1a" />
                  <rect x="74" y="26" width="12" height="12" fill="#1a1a1a" />
                  <rect x="10" y="42" width="12" height="12" fill="#1a1a1a" />
                  <rect x="74" y="42" width="12" height="12" fill="#1a1a1a" />
                  <rect x="10" y="58" width="12" height="12" fill="#1a1a1a" />
                  <rect x="26" y="58" width="12" height="12" fill="#1a1a1a" />
                  <rect x="42" y="58" width="12" height="12" fill="#1a1a1a" />
                  <rect x="58" y="58" width="12" height="12" fill="#1a1a1a" />
                  <rect x="74" y="58" width="12" height="12" fill="#1a1a1a" />
                  <rect x="10" y="74" width="12" height="12" fill="#1a1a1a" />
                  <rect x="26" y="74" width="12" height="12" fill="#1a1a1a" />
                  <rect x="42" y="74" width="12" height="12" fill="#1a1a1a" />
                  <rect x="58" y="74" width="12" height="12" fill="#1a1a1a" />
                  <rect x="74" y="74" width="12" height="12" fill="#1a1a1a" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="max-w-[200px] text-xs leading-relaxed text-muted">
                etrolley is a platform that has been officially validated by the Qatari Ministry of Communications.
              </p>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal">
              Certified by THEQA
            </p>
          </div>

          <div className="hero-reveal text-center lg:col-span-5 lg:text-left">
            <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Your store will be ready in no more than a minute.
            </h1>
            <p className="mt-2 text-xs text-muted">Link</p>
            <Link href="#contact" className="btn-teal-lg mt-3 inline-flex w-full sm:w-auto">
              build your store now
            </Link>
            <div className="mt-6 flex justify-center gap-3 lg:justify-start">
              <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-teal" aria-label="Previous">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-teal" aria-label="Next">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="hero-reveal relative lg:col-span-4">
            <div className="relative mx-auto max-w-md lg:mx-0 lg:ml-auto">
              <Image
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700&q=80"
                alt="Laptop showing online store"
                width={500}
                height={400}
                className="relative z-10 rounded-lg object-cover"
                priority
              />
              <div className="absolute -right-4 top-8 z-20 flex flex-col gap-2">
                <div className="h-16 w-14 rounded-lg bg-teal shadow-md" />
                <div className="h-14 w-12 rounded-lg bg-orange shadow-md" />
                <div className="h-12 w-10 rounded-lg bg-teal/70 shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="fixed right-14 top-1/3 z-30 hidden flex-col items-center gap-3 xl:flex" aria-label="Social media">
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
