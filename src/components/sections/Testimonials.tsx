"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registerGsapPlugins } from "@/lib/gsap";

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section-padding py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <SectionHeading
        eyebrow="Success Stories"
        title="What Clients Say"
        className="mb-16"
      />

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((item, i) => (
          <blockquote
            key={item.author}
            className="testimonial-card flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-all duration-500 hover:border-accent/30 md:p-10"
          >
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-8 border-t border-border pt-6">
              <cite className="not-italic">
                <p className="font-medium text-foreground">{item.author}</p>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </cite>
              <span className="mt-4 block text-xs text-accent/60">
                0{i + 1}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
