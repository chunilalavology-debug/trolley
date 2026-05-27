"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registerGsapPlugins } from "@/lib/gsap";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".about-image", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-image-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding py-24 md:py-32 lg:py-40"
      aria-labelledby="about-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Your Strategic Creative Ally"
            subtitle="We are a Colombian agency specialized in advertising, merchandising, and custom brand products. We combine creativity, quality, and commitment to help brands stand out, connect, and leave a lasting impression."
            className="about-reveal"
            titleClassName="about-reveal"
          />

          <div className="about-reveal mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Fulfillment", desc: "On-time, every time" },
              { label: "Service", desc: "Personalized attention" },
              { label: "Quality", desc: "Guaranteed excellence" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/30"
              >
                <p className="display-heading text-lg text-accent">{item.label}</p>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image-wrap about-reveal relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
            alt="Etrolley creative team collaborating"
            fill
            className="about-image object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
