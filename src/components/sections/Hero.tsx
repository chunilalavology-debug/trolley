"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { registerGsapPlugins } from "@/lib/gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.3,
      });

      gsap.from(".hero-sub", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.9,
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.1,
      });

      gsap.to(".hero-bg-text", {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
      aria-label="Hero"
    >
      <div className="hero-bg-text pointer-events-none absolute -right-[10%] top-1/4 select-none opacity-[0.04]">
        <span className="display-heading whitespace-nowrap text-[20vw] text-foreground">
          ETROLLEY
        </span>
      </div>

      <div className="section-padding relative z-10">
        <p className="hero-sub mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Advertising & Merchandising Agency
        </p>

        <h1 className="max-w-5xl">
          <span className="hero-line display-heading block text-5xl text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]">
            Give Life
          </span>
          <span className="hero-line display-heading block text-5xl text-outline sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]">
            To Your Brand
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Strategic creative partner for advertising, merchandising, and
          memorable brand experiences—from concept to flawless delivery.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap gap-4">
          <Button href="#contact">Start a Project</Button>
          <Button href="#creatives" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>

      <div className="section-padding mt-16 flex items-end justify-between border-t border-border pt-8">
        <div className="hero-sub flex gap-12">
          <div>
            <p className="display-heading text-3xl text-accent md:text-4xl">
              15+
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted">
              Years Experience
            </p>
          </div>
          <div className="hidden sm:block">
            <p className="display-heading text-3xl text-foreground md:text-4xl">
              500+
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted">
              Projects Delivered
            </p>
          </div>
        </div>
        <a
          href="#about"
          className="hero-sub group flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          aria-label="Scroll to about section"
        >
          <span className="hidden sm:inline">Scroll</span>
          <span className="block h-12 w-px bg-foreground/20 transition-all group-hover:h-16 group-hover:bg-accent" />
        </a>
      </div>
    </section>
  );
}
