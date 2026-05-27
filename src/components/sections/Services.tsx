"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registerGsapPlugins } from "@/lib/gsap";

export function Services() {
  const [activeId, setActiveId] = useState<(typeof services)[number]["id"]>(
    services[0].id,
  );
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const active = services.find((s) => s.id === activeId) ?? services[0];

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".services-reveal", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
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

  useEffect(() => {
    if (!imageRef.current || !contentRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
    );

    gsap.fromTo(
      contentRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out" },
    );
  }, [activeId]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding py-24 md:py-32 lg:py-40"
      aria-labelledby="services-heading"
    >
      <SectionHeading
        eyebrow="What We Do"
        title="Services We Provide"
        subtitle="Full-spectrum creative solutions—from brand strategy to production and delivery—all under one roof."
        className="services-reveal mb-16 md:mb-24"
        titleClassName="services-reveal"
      />

      <div className="services-reveal grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div
          className="flex flex-col gap-2 lg:col-span-4"
          role="tablist"
          aria-label="Services"
        >
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={activeId === service.id}
              aria-controls={`panel-${service.id}`}
              onClick={() => setActiveId(service.id)}
              onMouseEnter={() => setActiveId(service.id)}
              className={`group relative overflow-hidden rounded-2xl border px-6 py-5 text-left transition-all duration-500 ${
                activeId === service.id
                  ? "border-accent bg-accent/10"
                  : "border-border bg-surface hover:border-foreground/20"
              }`}
            >
              <span
                className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                  activeId === service.id ? "text-accent" : "text-muted"
                }`}
              >
                {service.label}
              </span>
              <span
                className={`mt-1 block display-heading text-xl transition-colors duration-300 ${
                  activeId === service.id
                    ? "text-foreground"
                    : "text-foreground/60 group-hover:text-foreground"
                }`}
              >
                {service.title}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ${
                  activeId === service.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          className="lg:col-span-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div
              ref={imageRef}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl"
            >
              <Image
                key={active.image}
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
            </div>

            <div ref={contentRef} className="flex flex-col justify-center">
              <h3 className="display-heading text-2xl text-foreground md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                {active.description}
              </p>
              <ul className="mt-8 space-y-3">
                {active.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all hover:gap-4"
              >
                Learn more about {active.label.toLowerCase()} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
