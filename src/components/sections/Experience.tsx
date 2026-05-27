"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { experiences } from "@/lib/data";
import { registerGsapPlugins } from "@/lib/gsap";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current || !itemsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".experience-heading", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray<HTMLElement>(".experience-item").forEach((item) => {
        const content = item.querySelector(".experience-content");
        const number = item.querySelector(".experience-number");

        gsap.from(content, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(number, {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative py-24 md:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mb-16 md:mb-24">
        <p className="experience-heading mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          The Journey
        </p>
        <h2 id="experience-heading" className="overflow-hidden">
          <span className="experience-heading display-heading block text-4xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            What You Will
          </span>
          <span className="experience-heading display-heading block text-4xl text-outline sm:text-5xl md:text-6xl lg:text-7xl">
            Experience
          </span>
        </h2>
      </div>

      <div ref={itemsRef} className="relative flex flex-col gap-6 md:gap-8">
        {experiences.map((item, index) => (
          <article
            key={item.number}
            className="experience-item sticky top-24 md:top-32 relative min-h-[55vh] rounded-3xl border border-border bg-surface p-8 md:min-h-[50vh] md:p-12 lg:p-16"
            style={{ zIndex: index + 1 }}
          >
            <span className="experience-number display-heading absolute right-8 top-8 text-6xl text-foreground/5 md:right-12 md:top-12 md:text-8xl lg:text-9xl">
              {item.number}
            </span>
            <div className="experience-content relative z-10 max-w-2xl pt-16 md:pt-24">
              <span className="text-sm font-medium text-accent">{item.number}</span>
              <h3 className="display-heading mt-4 text-3xl text-foreground md:text-4xl lg:text-5xl">
                {item.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
