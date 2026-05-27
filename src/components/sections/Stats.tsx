"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { stats } from "@/lib/data";
import { registerGsapPlugins } from "@/lib/gsap";

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray<HTMLElement>(".stat-value").forEach((el) => {
        const text = el.textContent ?? "";
        const numeric = parseInt(text.replace(/\D/g, ""), 10);
        if (isNaN(numeric)) return;

        const suffix = text.replace(/[0-9]/g, "");
        const obj = { val: 0 };

        gsap.to(obj, {
          val: numeric,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding py-20 md:py-28"
      aria-label="Company statistics"
    >
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item text-center md:text-left">
            <p className="stat-value display-heading text-4xl text-accent md:text-5xl lg:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
