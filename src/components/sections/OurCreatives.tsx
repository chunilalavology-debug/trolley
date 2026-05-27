"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { creatives } from "@/lib/data";
import { registerGsapPlugins } from "@/lib/gsap";

export function OurCreatives() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".creatives-heading-word", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const track = trackRef.current!;
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -(totalScroll + 100),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll + window.innerHeight * 0.5}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="creatives"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface"
      aria-labelledby="creatives-heading"
    >
      <div ref={headingRef} className="section-padding pt-24 pb-12 md:pt-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Portfolio
        </p>
        <h2 id="creatives-heading" className="overflow-hidden">
          <span className="creatives-heading-word display-heading block text-4xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Our
          </span>
          <span className="creatives-heading-word display-heading block text-4xl text-outline sm:text-5xl md:text-6xl lg:text-7xl">
            Creatives
          </span>
        </h2>
        <p className="creatives-heading-word mt-6 max-w-lg text-muted">
          Scroll through our craft—brand systems, campaigns, merchandise, and
          experiences built to make an impact.
        </p>
      </div>

      <div className="relative h-[70vh] md:h-[75vh]">
        <div
          ref={trackRef}
          className="absolute left-0 flex h-full items-center gap-6 px-5 sm:gap-8 sm:px-8 md:px-12 lg:px-16 xl:px-24"
        >
          {creatives.map((item) => (
            <article
              key={item.id}
              className="creative-card-item creative-card group relative h-[55vh] w-[75vw] shrink-0 overflow-hidden rounded-2xl sm:h-[60vh] sm:w-[50vw] md:w-[40vw] lg:w-[32vw] xl:w-[28vw]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 75vw, 32vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  {item.category}
                </span>
                <h3 className="display-heading mt-2 text-2xl text-foreground md:text-3xl">
                  {item.title}
                </h3>
                <span className="mt-4 inline-block text-sm text-muted transition-colors group-hover:text-accent">
                  {item.id} — View Project →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
