"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registerGsapPlugins } from "@/lib/gsap";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".process-line", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding border-y border-border bg-surface py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <SectionHeading
        eyebrow="How We Work"
        title="Our Creative Process"
        subtitle="A proven four-step framework that transforms your vision into impactful brand experiences."
        className="mb-16"
      />

      <div className="relative">
        <div className="process-line absolute left-0 right-0 top-8 hidden h-px origin-left scale-x-0 bg-accent/30 md:block" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="process-step group rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:border-accent/40 hover:-translate-y-1"
            >
              <span className="display-heading text-4xl text-accent/80 transition-colors group-hover:text-accent">
                {step.step}
              </span>
              <h3 className="display-heading mt-4 text-xl text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
