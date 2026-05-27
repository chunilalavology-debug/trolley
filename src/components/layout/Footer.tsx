"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { navLinks } from "@/lib/data";
import { registerGsapPlugins } from "@/lib/gsap";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!footerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current!.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(footerRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-parallax relative overflow-hidden rounded-t-[2rem] bg-surface-elevated md:rounded-t-[3rem]"
      aria-label="Site footer"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div
        ref={contentRef}
        className="section-padding relative py-16 md:py-24 lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <Link
              href="/"
              className="display-heading text-5xl text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Etrolley
            </Link>
            <p className="mt-6 max-w-md text-muted leading-relaxed">
              Your strategic partner in advertising, merchandising, and brand
              experiences that make your mark unforgettable.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">
                Navigation
              </p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground/80 transition-colors duration-300 hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">
                Contact
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li>
                  <a
                    href="mailto:hello@etrolley.com"
                    className="transition-colors hover:text-accent"
                  >
                    hello@etrolley.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+573107719636"
                    className="transition-colors hover:text-accent"
                  >
                    +57 310 771 9636
                  </a>
                </li>
                <li className="text-muted">Colombia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Etrolley. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "LinkedIn", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted transition-colors duration-300 hover:text-accent"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
