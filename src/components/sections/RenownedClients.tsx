"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { clients } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { registerGsapPlugins } from "@/lib/gsap";

export function RenownedClients() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".client-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel className="mb-4">Success stories</SectionLabel>
            <h2 className="text-3xl font-bold md:text-4xl">Our Renowned Clients</h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            Join the list of more than 500 brands that rely on E-trolley
          </p>
          <div className="flex gap-2">
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-teal" aria-label="Previous">←</button>
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-teal" aria-label="Next">→</button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {clients.map((client, i) => (
            <div key={i} className="client-card shrink-0 text-center">
              <p className="mb-2 text-sm font-medium text-teal">{client.name}</p>
              <div
                className="flex h-36 w-36 items-center justify-center rounded-2xl text-lg font-bold text-white md:h-40 md:w-40"
                style={{ backgroundColor: client.bg }}
              >
                {client.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
