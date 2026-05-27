"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registerGsapPlugins } from "@/lib/gsap";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="rounded-3xl border border-border bg-surface p-8 md:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Get Started"
              title="Let's Build Something Memorable"
              subtitle="Schedule a free consultation. Tell us about your project and we'll craft a tailored proposal."
              className="contact-reveal"
            />
            <div className="contact-reveal mt-10 space-y-4 text-muted">
              <p>
                <a
                  href="mailto:hello@etrolley.com"
                  className="text-foreground transition-colors hover:text-accent"
                >
                  hello@etrolley.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+573107719636"
                  className="text-foreground transition-colors hover:text-accent"
                >
                  +57 310 771 9636
                </a>
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-reveal space-y-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  First Name
                </span>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Jane"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  Last Name
                </span>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Doe"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                Company
              </span>
              <input
                type="text"
                name="company"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Your Company"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                placeholder="you@company.com"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Tell us about your project..."
              />
            </label>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
