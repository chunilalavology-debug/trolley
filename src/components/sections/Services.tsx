"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { services } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { revealOnScroll } from "@/lib/animate";
import { registerGsapPlugins } from "@/lib/gsap";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      revealOnScroll(sectionRef.current, ".service-card");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-sage py-14 md:py-20"
    >
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <SectionLabel light className="mb-4">Additional</SectionLabel>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Services we provide
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/90 lg:text-right">
            Our support services are available in this section to help you integrate the work of your store and find everything you need in one place.
          </p>
          <span className="text-sm text-white/80 lg:absolute lg:right-10">1/4</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card card-shadow overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-xs text-muted">{service.description}</p>
                <button
                  type="button"
                  className="mt-4 rounded-full bg-teal px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-teal-dark"
                >
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>

        <SectionLabel className="mt-14 justify-center text-foreground">Success stories</SectionLabel>
      </div>
    </section>
  );
}
